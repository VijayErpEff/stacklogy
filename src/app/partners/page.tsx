import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TechBadge from "@/components/TechBadge";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "Partners",
};

const partners = [
  {
    name: "AWS",
    tier: "Platinum Partner",
    competencies: [
      "Migration Competency",
      "DevOps Competency",
      "Well-Architected Partner",
    ],
    description:
      "200+ AWS migrations completed. Our certified architects design for scale, security, and cost optimization. As a Platinum Partner, we have direct access to AWS technical resources and early adoption programs.",
  },
  {
    name: "Microsoft Azure",
    tier: "Cloud Platform Partner",
    competencies: ["Azure DevOps", "Azure AI"],
    description:
      "Full-stack Azure expertise from IaaS to PaaS to cognitive services. We help enterprises leverage the full breadth of the Microsoft cloud ecosystem, including hybrid architectures with Azure Arc.",
  },
  {
    name: "Google Cloud",
    tier: "Partner",
    competencies: ["GKE", "BigQuery", "Cloud Run"],
    description:
      "Multi-cloud strategies with GCP for data-intensive and Kubernetes-native workloads. Our team holds multiple Google Cloud certifications and specializes in BigQuery analytics at scale.",
  },
  {
    name: "Docker",
    tier: "Verified Publisher",
    competencies: ["Container Expertise"],
    description:
      "We containerize legacy applications and build cloud-native architectures from day one. Our Docker practice has modernized hundreds of monolithic applications into portable, scalable microservices.",
  },
  {
    name: "Kubernetes",
    tier: "Certified Provider",
    competencies: ["CKAD", "CKA Certified Team"],
    description:
      "Production-grade Kubernetes clusters across all major cloud providers. From initial cluster design to day-two operations, our CKA and CKAD certified engineers handle the full lifecycle.",
  },
  {
    name: "BluePrism",
    tier: "Technology Alliance Partner",
    competencies: ["RPA", "Intelligent Automation"],
    description:
      "Enterprise-scale digital workforce automation with proven deployment methodology. We\u2019ve deployed BluePrism bots that automate thousands of hours of manual processes for Fortune 500 clients.",
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Ecosystem
            </p>
            <TextScramble
              text="Partners"
              className="mt-6 block text-6xl md:text-8xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
              Our partnerships with the world&rsquo;s leading technology
              platforms amplify our engineering capabilities — giving your
              enterprise access to preferred pricing, early features, and
              certified expertise across every major cloud.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner List */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {partners.map((partner, index) => (
            <AnimatedSection key={partner.name} delay={index * 0.08}>
              <div
                className={`py-10 ${
                  index < partners.length - 1
                    ? "border-b border-white/5"
                    : ""
                }`}
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  {/* Left: name + tier */}
                  <div className="shrink-0 md:w-64">
                    <h3 className="text-2xl font-bold text-white">
                      {partner.name}
                    </h3>
                    <p className="mt-1 text-[#6EE714] font-mono text-sm">
                      {partner.tier}
                    </p>
                  </div>

                  {/* Right: description + competencies */}
                  <div className="flex-1">
                    <p className="text-white/40">{partner.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {partner.competencies.map((competency) => (
                        <TechBadge key={competency} name={competency} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Let&rsquo;s discuss which cloud platform is right for your
              business
            </h2>
            <p className="mt-4 text-lg text-white/40">
              Whether you&rsquo;re all-in on AWS, evaluating multi-cloud, or
              just getting started — our architects will help you choose the
              right foundation.
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
