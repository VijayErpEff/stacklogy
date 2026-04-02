import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "Insights",
};

const posts = [
  {
    title: "Kubernetes vs ECS: Choosing the Right Container Orchestration",
    excerpt:
      "Both are battle-tested, but the right choice depends on your team's expertise, workload patterns, and long-term platform strategy.",
    category: "DevOps",
    date: "Feb 2026",
  },
  {
    title: "Cloud Cost Optimization: 5 Patterns That Cut Bills by 40%",
    excerpt:
      "Right-sizing instances is just the beginning. These five architectural patterns consistently deliver significant savings.",
    category: "Cloud",
    date: "Feb 2026",
  },
  {
    title: "BluePrism RPA: When to Automate vs When to Rebuild",
    excerpt:
      "Not every manual process should be automated with RPA. Sometimes the better move is to rebuild the workflow entirely.",
    category: "RPA",
    date: "Jan 2026",
  },
  {
    title: "Building HIPAA-Compliant Data Pipelines on AWS",
    excerpt:
      "Healthcare data pipelines carry unique regulatory requirements. We walk through the architecture decisions.",
    category: "AI & Data",
    date: "Jan 2026",
  },
  {
    title: "The Real Cost of Technical Debt in Cloud Infrastructure",
    excerpt:
      "Technical debt in cloud infrastructure compounds faster than in application code. Here\u2019s how to quantify it.",
    category: "Cloud",
    date: "Dec 2025",
  },
  {
    title: "From Monolith to Microservices: A CTO\u2019s Survival Guide",
    excerpt:
      "The strangler fig pattern sounds elegant in theory. In practice, it\u2019s a multi-year journey full of traps.",
    category: "DevOps",
    date: "Dec 2025",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Thinking
            </p>
            <TextScramble
              text="Insights"
              className="mt-6 block text-6xl md:text-8xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
              Our team shares what we&apos;re learning, building, and solving
              for enterprise clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-[#0A0A0A] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="border-b border-white/5 pb-16">
              <div className="flex items-center gap-4">
                <span className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
                  Cloud
                </span>
                <span className="font-mono text-xs text-white/20">
                  March 2026
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                AWS Migration Checklist: What Enterprise Teams Miss
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/40">
                After 200+ migrations, we&apos;ve identified the 7 most common
                oversights that cause delays, budget overruns, and
                post-migration firefighting. Here&apos;s what to watch for.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-[#6EE714] transition-opacity hover:opacity-70"
              >
                Read article →
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Post List */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Latest
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Recent articles
            </h2>
          </AnimatedSection>

          <div className="mt-16">
            {posts.map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 0.06}>
                <article className="group flex flex-col gap-4 border-b border-white/5 py-6 md:flex-row md:items-center md:justify-between">
                  {/* Left: category + title */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-semibold text-white transition-colors duration-200 group-hover:text-[#6EE714]">
                      {post.title}
                    </h3>
                  </div>

                  {/* Right: date */}
                  <div className="shrink-0">
                    <span className="font-mono text-xs text-white/20">
                      {post.date}
                    </span>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <div className="mx-auto h-px w-12 bg-[#6EE714]" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Stay in the loop
            </h2>
            <p className="mt-4 text-white/40">
              Get monthly insights on cloud architecture, DevOps best practices,
              and enterprise automation — no fluff, just signal.
            </p>
            <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
                className="flex-1 rounded-lg border border-white/10 bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-colors duration-200 focus:border-[#6EE714]"
              />
              <button
                type="button"
                className="rounded-lg bg-[#6EE714] px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-white/20">
              No spam. Unsubscribe anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
