import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TechBadge from "@/components/TechBadge";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "Work",
};

interface CaseStudy {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  quote: string;
}

const caseStudies: CaseStudy[] = [
  {
    tag: "eCommerce",
    title: "Enterprise eCommerce Cloud Migration",
    description:
      "A global consumer electronics brand needed to migrate their legacy on-prem eCommerce platform to AWS to handle seasonal traffic spikes and expand into new markets. We architected a multi-region AWS deployment with auto-scaling, reducing infrastructure costs while improving performance.",
    tech: ["AWS", "Kubernetes", "Terraform", "CloudFront", "RDS"],
    metrics: [
      { value: "40%", label: "cost reduction" },
      { value: "3x", label: "faster page loads" },
      { value: "99.99%", label: "uptime achieved" },
    ],
    quote:
      "Stacklogy didn\u2019t just migrate our infrastructure \u2014 they transformed how we think about scale.",
  },
  {
    tag: "Financial Services",
    title: "Financial Services Platform Modernization",
    description:
      "A mid-market trading firm was losing competitive edge with legacy monolithic architecture. We decomposed their platform into microservices on Azure, implemented real-time data streaming, and automated compliance reporting.",
    tech: ["Azure", "Docker", "Kafka", ".NET", "Terraform"],
    metrics: [
      { value: "60%", label: "faster trade execution" },
      { value: "$2M", label: "annual savings" },
      { value: "100%", label: "compliance automation" },
    ],
    quote:
      "Our trading platform went from a liability to a competitive advantage.",
  },
  {
    tag: "Healthcare",
    title: "Healthcare Data Platform & AI",
    description:
      "A regional health network needed to unify patient data across 12 facilities and build predictive models for readmission risk. We built a HIPAA-compliant data lake on AWS with ML-powered analytics.",
    tech: ["AWS SageMaker", "Python", "Redshift", "Glue", "Terraform"],
    metrics: [
      { value: "85%", label: "prediction accuracy" },
      { value: "12", label: "facilities unified" },
      { value: "30%", label: "readmission reduction" },
    ],
    quote:
      "For the first time, we can predict and prevent instead of just react.",
  },
  {
    tag: "Manufacturing",
    title: "Manufacturing RPA Transformation",
    description:
      "A Fortune 500 manufacturer was drowning in manual data entry across procurement, inventory, and compliance. We deployed 200+ BluePrism bots to automate end-to-end processes.",
    tech: ["BluePrism", "Python", "Azure", "Power BI"],
    metrics: [
      { value: "200+", label: "bots deployed" },
      { value: "80%", label: "manual work eliminated" },
      { value: "$4.2M", label: "annual savings" },
    ],
    quote:
      "We freed our people to do strategic work instead of data entry.",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Case Studies
            </p>
            <TextScramble
              text="Selected Work"
              className="mt-6 block text-6xl md:text-8xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
              Every engagement is measured by business outcomes. Here&apos;s how
              we&apos;ve delivered for enterprise clients across industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study) => (
        <section key={study.title} className="bg-[#0A0A0A]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="border-b border-white/5 py-24">
              <AnimatedSection>
                <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
                  {study.tag}
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  {study.title}
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/40">
                  {study.description}
                </p>

                {/* Metrics — inline row with green numbers */}
                <div className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-6">
                  {study.metrics.map((m) => (
                    <span key={m.label} className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-[#6EE714] md:text-4xl">
                        {m.value}
                      </span>
                      <span className="text-sm text-white/40">{m.label}</span>
                    </span>
                  ))}
                </div>

                {/* Pull quote */}
                <blockquote className="mt-10 border-l-2 border-[#6EE714] pl-6 text-xl italic leading-relaxed text-white/60">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>

                {/* Tech badges */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <TechBadge key={t} name={t} />
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Have a challenge like these?
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Let&apos;s talk about what your cloud infrastructure could look
              like.
            </p>
            <div className="mt-10">
              <MagneticButton
                href="/contact"
                className="inline-flex items-center rounded-full bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                Start a Conversation
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
