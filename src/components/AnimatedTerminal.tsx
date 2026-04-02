"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";

interface TerminalCommand {
  command: string;
  output: string[];
  delay?: number;
}

interface AnimatedTerminalProps {
  commands: TerminalCommand[];
}

interface DisplayLine {
  type: "command" | "output";
  text: string;
  isTyping: boolean;
}

export default function AnimatedTerminal({ commands }: AnimatedTerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [lines, setLines] = useState<DisplayLine[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isDone, setIsDone] = useState(false);
  const hasStarted = useRef(false);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = setTimeout(resolve, ms);
        if (cancelled) clearTimeout(id);
      });

    const run = async () => {
      for (let cmdIdx = 0; cmdIdx < commands.length; cmdIdx++) {
        if (cancelled) return;

        const { command, output, delay = 500 } = commands[cmdIdx];

        // Add initial delay before command
        if (cmdIdx > 0) {
          await sleep(delay);
        } else {
          await sleep(300);
        }

        // Type command character by character
        let typed = "";
        for (let charIdx = 0; charIdx < command.length; charIdx++) {
          if (cancelled) return;
          typed += command[charIdx];
          const currentTyped = typed;

          setLines((prev) => {
            const newLines = prev.filter(
              (l) =>
                !(l.type === "command" && l.isTyping && l.text !== command)
            );
            const existingIdx = newLines.findIndex(
              (l) => l.type === "command" && l.isTyping
            );

            if (existingIdx >= 0) {
              const updated = [...newLines];
              updated[existingIdx] = {
                type: "command",
                text: currentTyped,
                isTyping: true,
              };
              return updated;
            }

            return [
              ...newLines,
              { type: "command", text: currentTyped, isTyping: true },
            ];
          });

          scrollToBottom();
          await sleep(40);
        }

        // Finalize command line
        setLines((prev) =>
          prev.map((l) =>
            l.type === "command" && l.isTyping
              ? { ...l, text: command, isTyping: false }
              : l
          )
        );

        await sleep(200);

        // Output lines appear one by one
        for (let outIdx = 0; outIdx < output.length; outIdx++) {
          if (cancelled) return;
          const outputLine = output[outIdx];

          setLines((prev) => [
            ...prev,
            { type: "output", text: outputLine, isTyping: false },
          ]);

          scrollToBottom();
          await sleep(200);
        }
      }

      if (!cancelled) {
        setIsDone(true);
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [isInView, commands, scrollToBottom]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl shadow-slate-900/20 ring-1 ring-slate-200"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 rounded-t-xl border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-xs text-slate-400 font-mono">terminal</span>
      </div>

      {/* Body */}
      <div
        ref={bodyRef}
        className="bg-slate-950 rounded-b-xl p-6 font-mono text-sm min-h-[200px] max-h-[400px] overflow-y-auto"
      >
        {lines.map((line, i) => (
          <div key={i} className="leading-relaxed">
            {line.type === "command" ? (
              <div className="flex">
                <span className="text-green-400 select-none">$&nbsp;</span>
                <span className="text-slate-200">
                  {line.text}
                  {line.isTyping && (
                    <span
                      className={`inline-block w-[8px] h-[14px] ml-[1px] bg-slate-200 align-middle translate-y-[1px] ${
                        cursorVisible ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </span>
              </div>
            ) : (
              <div className="text-slate-400">{line.text}</div>
            )}
          </div>
        ))}

        {/* Final blinking cursor */}
        {isDone && (
          <div className="flex mt-0 leading-relaxed">
            <span className="text-green-400 select-none">$&nbsp;</span>
            <span
              className={`inline-block w-[8px] h-[14px] bg-slate-200 translate-y-[2px] transition-opacity duration-100 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}

        {/* Empty state before animation starts */}
        {!isInView && (
          <div className="flex leading-relaxed">
            <span className="text-green-400 select-none">$&nbsp;</span>
            <span
              className={`inline-block w-[8px] h-[14px] bg-slate-200 translate-y-[2px] ${
                cursorVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
