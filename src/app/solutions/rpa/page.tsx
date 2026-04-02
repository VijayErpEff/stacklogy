import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TechBadge from "@/components/TechBadge";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "Robotic Process Automation",
};

const painPoints = [
  {
    title: "Manual Data Entry",
    description:
      "Skilled employees spending hours every day on repetitive copy-paste tasks across systems that should be talking to each other.",
  },
  {
    title: "Compliance Bottlenecks",
    description:
      "Regulatory processes that depend on manual checklists, email approvals, and audit trails stitched together in spreadsheets.",
  },
  {
    title: "Human Error in Processes",
    description:
      "Transposition errors, missed steps, and inconsistent execution that create rework, penalties, and customer friction.",
  },
];

const steps = [
  {
    title: "Identify",
    description:
      "Process mining and workshops to surface the highest-ROI automation candidates across your operations.",
  },
  {
    title: "Design",
    description:
      "Bot architecture with exception handling, human-in-the-loop checkpoints, and full audit logging.",
  },
  {
    title: "Deploy",
    description:
      "Production deployment with orchestration, scheduling, credential management, and change controls.",
  },
  {
    title: "Scale",
    description:
      "Expand your digital workforce with a Center of Excellence model — governance, reusable components, and self-service.",
  },
];

const techStack = ["BluePrism", "UiPath", "Python", "Power Automate"];

export default function RPAPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <TextScramble
              text="RPA"
              className="block text-7xl md:text-9xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-4 text-[#6EE714] font-mono text-lg tracking-[0.2em] uppercase">
              Automate the repetitive. Unleash the creative.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
              Build a BluePrism-powered digital workforce that handles
              high-volume, rule-based processes with perfect accuracy — so your
              people can focus on work that matters.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              The Challenge
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              The hidden cost of manual processes
            </h2>
          </AnimatedSection>

          <div className="mt-16 space-y-16">
            {painPoints.map((point, index) => (
              <AnimatedSection key={point.title} delay={index * 0.1}>
                <div>
                  <p className="font-mono text-sm text-[#6EE714]">
                    {index + 1} —
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-white/40">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Timeline */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Our Approach
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              From first bot to enterprise-wide automation
            </h2>
          </AnimatedSection>

          <div className="relative mt-16">
            <div className="absolute left-[7px] top-2 bottom-2 border-l border-[#6EE714]/30" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 0.1}>
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-[#6EE714] bg-[#0A0A0A]" />
                    <p className="font-mono text-xs text-[#6EE714]">
                      Phase {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-white/40">
                      {step.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Tech Stack
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Enterprise automation platforms
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-[#111111] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
              <div className="flex-1">
                <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
                  Results Snapshot
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                  Insurance carrier deploys 200+ bots across claims processing
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/40">
                  We designed and deployed an enterprise-scale BluePrism digital
                  workforce that automates claims intake, policy validation, and
                  compliance reporting across multiple business units.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-10 lg:w-72">
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">80%</p>
                  <p className="mt-1 text-sm text-white/40">
                    Less Manual Processing
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">99.9%</p>
                  <p className="mt-1 text-sm text-white/40">Accuracy Rate</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">200+</p>
                  <p className="mt-1 text-sm text-white/40">Bots Deployed</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to build your digital workforce?
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Start with a process assessment. We will identify the
              highest-value automation opportunities and deliver your first bot
              in weeks.
            </p>
            <div className="mt-10">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                Start Automating
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
