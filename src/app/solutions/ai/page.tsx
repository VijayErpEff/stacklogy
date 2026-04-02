import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TechBadge from "@/components/TechBadge";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "AI & Data Solutions",
};

const painPoints = [
  {
    title: "Siloed Data",
    description:
      "Critical business data trapped across dozens of systems, spreadsheets, and shadow databases with no unified view.",
  },
  {
    title: "Manual Analysis",
    description:
      "Analysts spending 80% of their time wrangling data and 20% generating insights — the exact inverse of what drives value.",
  },
  {
    title: "No Predictive Capability",
    description:
      "Decisions driven by rearview-mirror reporting instead of forward-looking models that anticipate demand, risk, and opportunity.",
  },
];

const steps = [
  {
    title: "Discover",
    description:
      "Inventory your data landscape — sources, quality, gaps, and the high-impact use cases waiting to be unlocked.",
  },
  {
    title: "Model",
    description:
      "Build and validate ML models tailored to your domain, with explainability and bias testing baked in.",
  },
  {
    title: "Deploy",
    description:
      "Production-grade model serving with API endpoints, monitoring, and automated retraining pipelines.",
  },
  {
    title: "Iterate",
    description:
      "Continuous improvement loops — measure model drift, incorporate new data, and expand to adjacent use cases.",
  },
];

const techStack = [
  "Python",
  "TensorFlow",
  "AWS SageMaker",
  "Azure ML",
  "Databricks",
  "Spark",
];

export default function AIPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <TextScramble
              text="AI & Data"
              className="block text-7xl md:text-9xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-4 text-[#6EE714] font-mono text-lg tracking-[0.2em] uppercase">
              Turn data into decisions.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
              Machine learning, cognitive solutions, and enterprise data
              platforms that transform raw information into predictive insights
              and automated intelligence.
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
              Data is everywhere. Insight is rare.
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
              From raw data to production intelligence
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
              Enterprise-grade AI infrastructure
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
                  Healthcare provider predicts patient readmission with 85%
                  accuracy
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-white/40">
                  We built a predictive analytics platform that unified
                  fragmented patient data, enabling proactive care interventions
                  and significant cost savings through automation.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-10 lg:w-72">
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">85%</p>
                  <p className="mt-1 text-sm text-white/40">
                    Prediction Accuracy
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">3x</p>
                  <p className="mt-1 text-sm text-white/40">
                    Faster Insights
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6EE714]">$1.2M</p>
                  <p className="mt-1 text-sm text-white/40">
                    Annual Savings
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
              Ready to unlock the value in your data?
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Let our data scientists identify the highest-impact AI use cases
              for your business and build a roadmap to production.
            </p>
            <div className="mt-10">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                Explore AI Solutions
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
