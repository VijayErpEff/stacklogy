import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    title: "Engineering Rigor",
    description:
      "We don\u2019t ship shortcuts. Every architecture decision is documented, peer-reviewed, and stress-tested before it reaches production. Your infrastructure deserves the same discipline as the software it runs.",
  },
  {
    title: "Client Outcomes",
    description:
      "Measured by your metrics, not our hours. We align on business KPIs from day one \u2014 cost reduction, deployment velocity, uptime \u2014 and hold ourselves accountable to the numbers that matter to you.",
  },
  {
    title: "Continuous Innovation",
    description:
      "We invest 20% of our time in R&D and open source. That means our team is always learning, always building, and always bringing the latest proven patterns back to client engagements.",
  },
];

const leaders = [
  {
    name: "Ravi Shankar",
    title: "Chief Executive Officer",
    bio: "Former AWS Solutions Architect with 18 years in enterprise infrastructure. Founded Stacklogy to bridge the gap between cloud promise and enterprise reality.",
  },
  {
    name: "Priya Mehta",
    title: "Chief Technology Officer",
    bio: "Ex-Google SRE who led platform engineering for high-traffic systems. Drives Stacklogy\u2019s technical vision across cloud-native, AI, and automation practices.",
  },
  {
    name: "David Chen",
    title: "VP of Engineering",
    bio: "15 years building distributed systems at scale. Oversees delivery excellence and ensures every engagement meets Stacklogy\u2019s engineering standards.",
  },
  {
    name: "Anita Kapoor",
    title: "VP of Client Success",
    bio: "Former management consultant turned technologist. Ensures client outcomes are tracked, communicated, and continuously improved post-delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Our Story
            </p>
            <TextScramble
              text="About"
              className="mt-6 block text-6xl md:text-8xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
              We exist to solve the hardest infrastructure problems in the
              enterprise — with deep engineering talent, proven methodologies,
              and an obsession with outcomes over outputs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Editorial Story */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-8 text-lg leading-relaxed text-white/40">
              <p>
                Founded in{" "}
                <strong className="text-[#6EE714] font-bold">2016</strong> in{" "}
                <strong className="text-[#6EE714] font-bold">
                  Fremont, California
                </strong>
                , Stacklogy was born from a group of engineers who saw a
                persistent problem: enterprises were eager to adopt cloud
                technology, but the partners available to help them were either
                too generic or too transactional.
              </p>
              <p>
                We built Stacklogy to be the engineering partner that
                enterprises deserve — not a body shop that sends resumes and
                bills hours, but a team that owns outcomes. From the
                architecture whiteboard to the production runbook, we stay
                accountable for results.
              </p>
              <p>
                Today, as a{" "}
                <strong className="text-[#6EE714] font-bold">
                  minority-owned
                </strong>{" "}
                enterprise with a team of{" "}
                <strong className="text-[#6EE714] font-bold">
                  50&ndash;200
                </strong>{" "}
                engineers and over{" "}
                <strong className="text-[#6EE714] font-bold">
                  200 cloud migrations
                </strong>{" "}
                under our belt, we partner with AWS, Azure, and Google Cloud to
                deliver enterprise-scale solutions. We continue to operate with
                the same founding principle: engineering rigor applied to
                enterprise-scale problems, delivered by people who genuinely
                care about the craft.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Leadership
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              The team behind the platform
            </h2>
          </AnimatedSection>

          <div className="mt-16">
            {leaders.map((leader, index) => (
              <AnimatedSection key={leader.name} delay={index * 0.1}>
                <div
                  className={`py-8 ${
                    index < leaders.length - 1
                      ? "border-b border-white/5"
                      : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-[#6EE714] text-sm font-mono">
                    {leader.title}
                  </p>
                  <p className="mt-3 max-w-2xl leading-relaxed text-white/40">
                    {leader.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Our Values
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              What drives every engagement
            </h2>
          </AnimatedSection>

          <div className="mt-16 space-y-16">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div>
                  <div className="h-px w-12 bg-[#6EE714]" />
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-white/40">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Minority-Owned */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimatedSection>
            <div className="mx-auto rounded-lg border border-[#6EE714]/20 px-8 py-16">
              <div className="mx-auto h-px w-12 bg-[#6EE714]" />
              <p className="mt-6 text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
                Certified Minority-Owned Enterprise
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Diversity isn&rsquo;t just a value — it&rsquo;s how we see
                problems differently and build better solutions.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/40">
                Stacklogy is proud to be a certified minority-owned business
                enterprise. Our diverse backgrounds give us a broader lens on
                architecture decisions, team dynamics, and client relationships.
              </p>
              <p className="mt-4 text-sm text-white/20">
                As a certified MBE, Stacklogy qualifies for supplier diversity
                and minority procurement programs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Want to join the team?
            </h2>
            <p className="mt-4 text-lg text-white/40">
              We&apos;re always looking for exceptional engineers, architects,
              and problem-solvers who want to do meaningful work at enterprise
              scale.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <MagneticButton
                href="/careers"
                className="inline-flex items-center rounded-full bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                View Open Roles
              </MagneticButton>
              <MagneticButton
                href="/contact"
                className="inline-flex items-center font-mono text-sm text-white/40 transition-colors hover:text-[#6EE714]"
              >
                Get in Touch →
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
