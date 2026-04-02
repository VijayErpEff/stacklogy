import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "Solutions",
};

const solutions = [
  {
    number: "01",
    slug: "cloud",
    name: "Cloud Infrastructure",
    description:
      "Migrate, optimize, and scale your workloads across AWS, Azure, and GCP with architectures designed for resilience and cost efficiency.",
  },
  {
    number: "02",
    slug: "devops",
    name: "DevOps & Automation",
    description:
      "Accelerate delivery with CI/CD pipelines, container orchestration, and infrastructure as code that eliminates manual bottlenecks.",
  },
  {
    number: "03",
    slug: "ai",
    name: "AI & Data Solutions",
    description:
      "Transform raw data into predictive insights with machine learning models, cognitive services, and enterprise data platforms.",
  },
  {
    number: "04",
    slug: "rpa",
    name: "Robotic Process Automation",
    description:
      "Deploy intelligent digital workers that automate repetitive processes, reduce errors, and free your team for high-value work.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              What We Do
            </p>
            <TextScramble
              text="Solutions"
              className="mt-6 block text-6xl md:text-8xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
              Four pillars of expertise spanning cloud infrastructure, DevOps
              automation, artificial intelligence, and robotic process
              automation — each designed to drive measurable business outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Rows */}
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.slug} delay={index * 0.1}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group block border-b border-white/5 py-8 transition-colors duration-300 hover:border-[#6EE714]/20"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12">
                  <span className="shrink-0 font-mono text-sm text-white/20 md:w-16">
                    {solution.number}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#6EE714] md:text-3xl">
                      {solution.name}
                    </h2>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/40">
                      {solution.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-white/20 transition-colors duration-300 group-hover:text-[#6EE714]">
                    Explore →
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Not Sure Where To Start?
            </p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Our solutions architects will map the fastest path to measurable
              ROI.
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                Book a Discovery Call
              </MagneticButton>
              <MagneticButton
                href="/work"
                className="inline-flex items-center font-mono text-sm text-white/40 transition-colors hover:text-[#6EE714]"
              >
                View Case Studies →
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
