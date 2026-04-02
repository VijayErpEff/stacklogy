import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TechBadge from "@/components/TechBadge";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "DevOps & Automation",
};

const painPoints = [
  {
    title: "Slow Release Cycles",
    description:
      "Weeks between commits and production. Manual gates, siloed teams, and fragile handoffs keep your best features stuck in staging.",
  },
  {
    title: "Manual Deployments",
    description:
      "SSH-and-pray deployments that rely on tribal knowledge, undocumented runbooks, and a single engineer who 'knows the process.'",
  },
  {
    title: "Configuration Drift",
    description:
      "Environments that diverge over time — staging never matches production, and debugging becomes archaeology.",
  },
];

const steps = [
  {
    title: "Assess",
    description:
      "Map your current delivery pipeline end-to-end — tools, workflows, bottlenecks, and team topology.",
  },
  {
    title: "Automate",
    description:
      "Build CI/CD pipelines, infrastructure as code, and automated testing to eliminate manual touchpoints.",
  },
  {
    title: "Orchestrate",
    description:
      "Container orchestration with Kubernetes, GitOps workflows, and self-healing infrastructure.",
  },
  {
    title: "Monitor",
    description:
      "Observability stack with metrics, logs, traces, and alerting so you catch problems before users do.",
  },
];

const techStack = [
  "Kubernetes",
  "Docker",
  "Jenkins",
  "Terraform",
  "GitHub Actions",
  "ArgoCD",
  "Prometheus",
  "Grafana",
];

export default function DevOpsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <TextScramble
              text="DevOps"
              className="block text-7xl md:text-9xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-4 text-[#6EE714] font-mono text-lg tracking-[0.2em] uppercase">
              Ship faster. Break nothing.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
              End-to-end CI/CD pipelines, container orchestration, and
              infrastructure as code that transforms your engineering team from
              firefighters into builders.
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
              Why delivery speed plateaus
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
              From ad-hoc to fully automated
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
              The tools behind the velocity
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
                  Global fintech achieves 10x deployment frequency
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/40">
                  We replaced a manual, week-long release cycle with a fully
                  automated GitOps pipeline, enabling multiple production deploys
                  per day with full observability.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-10 lg:w-72">
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">10x</p>
                  <p className="mt-1 text-sm text-white/40">
                    Deploy Frequency
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">70%</p>
                  <p className="mt-1 text-sm text-white/40">
                    Fewer Incidents
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">15min</p>
                  <p className="mt-1 text-sm text-white/40">
                    Deploy Time (was 4hr)
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
              Ready to ship with confidence?
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Let us audit your delivery pipeline and show you where automation
              can cut cycle time and risk simultaneously.
            </p>
            <div className="mt-10">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                Accelerate Your Pipeline
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
