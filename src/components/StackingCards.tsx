"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface CardItem {
  id: string;
  content: React.ReactNode;
}

interface StackingCardsProps {
  cards: CardItem[];
}

function useCardTransforms(
  scrollProgress: MotionValue<number>,
  index: number,
  totalCards: number
) {
  const segmentSize = 1 / totalCards;
  const cardStart = index * segmentSize;
  const cardEnd = (index + 1) * segmentSize;
  const isFirst = index === 0;
  const isLast = index === totalCards - 1;

  // Card slides up: map scroll progress to a 0-1 value for this card's segment
  const cardProgress = useTransform(
    scrollProgress,
    [cardStart, cardEnd],
    [0, 1]
  );

  // Y offset: first card starts at 0, others start off-screen
  const y = useTransform(cardProgress, (p) => {
    if (isFirst) return 0;
    const vh = typeof window !== "undefined" ? window.innerHeight : 900;
    return (1 - Math.min(p, 1)) * vh;
  });

  // Scale and stack shift happen AFTER this card is placed, as next card comes
  const nextEnd = Math.min(cardEnd + segmentSize, 1);
  const stackProgress = useTransform(
    scrollProgress,
    [cardEnd, nextEnd],
    [0, 1]
  );

  const scale = useTransform(stackProgress, (p) => {
    if (isLast) return 1;
    return 1 - Math.min(p, 1) * 0.08;
  });

  const stackY = useTransform(stackProgress, (p) => {
    if (isLast) return 0;
    return -Math.min(p, 1) * 30;
  });

  const overlayOpacity = useTransform(stackProgress, (p) => {
    if (isLast) return 0;
    return Math.min(p, 1) * 0.4;
  });

  return { y, scale, stackY, overlayOpacity };
}

function StackCard({
  index,
  totalCards,
  scrollProgress,
  children,
}: {
  index: number;
  totalCards: number;
  scrollProgress: MotionValue<number>;
  children: React.ReactNode;
}) {
  const { y, scale, stackY, overlayOpacity } = useCardTransforms(
    scrollProgress,
    index,
    totalCards
  );

  // Combine y transforms
  const combinedY = useTransform([y, stackY] as MotionValue[], ([yVal, sVal]) => {
    return (yVal as number) + (sVal as number);
  });

  return (
    <motion.div
      className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-20"
      style={{
        y: combinedY,
        scale,
        zIndex: index,
      }}
    >
      <div className="relative h-full w-full rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06]">
        {children}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
      </div>
    </motion.div>
  );
}

export default function StackingCards({ cards }: StackingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${cards.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {cards.map((card, index) => (
          <StackCard
            key={card.id}
            index={index}
            totalCards={cards.length}
            scrollProgress={scrollYProgress}
          >
            {card.content}
          </StackCard>
        ))}
      </div>
    </div>
  );
}
