import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TechBadge from "@/components/TechBadge";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "Cloud Infrastructure",
};

const painPoints = [
  {
    title: "Legacy Infrastructure",
    description:
      "On-premise servers reaching end-of-life, creating security vulnerabilities and limiting your ability to innovate at pace.",
  },
  {
    title: "Cost Overruns",
    description:
      "Unpredictable cloud bills caused by over-provisioned resources, orphaned assets, and a lack of governance across accounts.",
  },
  {
    title: "Downtime Risk",
    description:
      "Single points of failure in aging architectures that put revenue and customer trust on the line every time demand spikes.",
  },
];

const steps = [
  {
    title: "Assessment",
    description:
      "Deep-dive audit of your current estate — workloads, dependencies, costs, and compliance posture.",
  },
  {
    title: "Architecture",
    description:
      "Cloud-native blueprints designed for resilience, security, and cost optimization from day one.",
  },
  {
    title: "Migration",
    description:
      "Phased migration execution with automated testing, rollback plans, and zero-downtime cutover.",
  },
  {
    title: "Optimization",
    description:
      "Continuous right-sizing, reserved instance planning, and performance tuning post-migration.",
  },
];

const techStack = [
  "AWS",
  "Azure",
  "GCP",
  "Terraform",
  "CloudFormation",
  "Ansible",
];

export default function CloudPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <TextScramble
              text="Cloud"
              className="block text-7xl md:text-9xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-4 text-[#6EE714] font-mono text-lg tracking-[0.2em] uppercase">
              Migrate. Optimize. Scale.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
              Enterprise cloud migration and optimization across AWS, Azure, and
              GCP. We design resilient, cost-efficient architectures that turn
              infrastructure into a competitive advantage.
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
              What&apos;s holding your infrastructure back
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
              A proven path from legacy to cloud-native
            </h2>
          </AnimatedSection>

          <div className="relative mt-16">
            {/* Vertical green line */}
            <div className="absolute left-[7px] top-2 bottom-2 border-l border-[#6EE714]/30" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 0.1}>
                  <div className="relative pl-10">
                    {/* Green dot */}
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
              Built on the platforms you trust
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
              {/* Left: story */}
              <div className="flex-1">
                <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
                  Results Snapshot
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                  Fortune 500 retailer migrates to AWS with zero downtime
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/40">
                  We migrated 200+ workloads from on-premise data centers to a
                  multi-region AWS architecture, eliminating legacy maintenance
                  costs and unlocking elastic scale.
                </p>
              </div>

              {/* Right: metrics */}
              <div className="flex shrink-0 flex-col gap-10 lg:w-72">
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">40%</p>
                  <p className="mt-1 text-sm text-white/40">Cost Reduction</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">3x</p>
                  <p className="mt-1 text-sm text-white/40">Deploy Speed</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">0</p>
                  <p className="mt-1 text-sm text-white/40">
                    Minutes of Downtime
                  </p>
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
              Ready to modernize your infrastructure?
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Start with a free cloud assessment. Our architects will map your
              current estate and deliver a prioritized migration roadmap.
            </p>
            <div className="mt-10">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                Get a Cloud Assessment
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
