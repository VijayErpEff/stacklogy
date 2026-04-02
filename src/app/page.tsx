import Link from "next/link";
import Image from "next/image";
import TextScramble from "@/components/TextScramble";
import AnimatedTerminal from "@/components/AnimatedTerminal";
import AnimatedSection from "@/components/AnimatedSection";
import StackingCards from "@/components/StackingCards";
import MagneticButton from "@/components/MagneticButton";
import NoiseOverlay from "@/components/NoiseOverlay";

const terminalCommands = [
  {
    command: "stacklogy assess --env production",
    output: [
      "Scanning 47 services across 3 regions...",
      "Found 23 optimization targets",
      "Projected savings: $847,000/yr",
      "✓ Assessment ready",
    ],
    delay: 500,
  },
];

const verticals = [
  { title: "eCommerce", desc: "Integrated and scalable technology solutions for retail with personalized omni-channel user experiences ensuring higher lifetime value." },
  { title: "Artificial Intelligence", desc: "Deep expertise in AI and data management solutions delivering faster insights to solve line of business challenges." },
  { title: "Financials", desc: "Innovative financial solutions using technology to transform your business and stay ahead of competition." },
  { title: "Robotic Process Automation", desc: "Digital workforce automating business operations to be agile and cost effective. Differentiate your business to deliver value." },
];

const cloudServices = [
  "Cloud Transformation", "Cloud Migration", "Cloud Optimization",
  "Container Enablement", "Cloud Services", "Infrastructure Automation",
];

const solutionAreas = [
  { title: "Infrastructure", desc: "The heart of your organization. Keeps you up and running and ready for business." },
  { title: "Cloud", desc: "Your modern data center. Flexibility, dexterity, and the ability to change as needed." },
  { title: "Professional & Managed Services", desc: "Professional services to meet business goals. Managed services to keep it running." },
  { title: "Cloud Service Management", desc: "Manage, automate, and run predictive analytics across multi-cloud environments." },
  { title: "Security", desc: "Data and IT security to protect your business from threats and ransomware." },
  { title: "Cognitive / AI", desc: "AI, cognitive, and machine learning to bring new insights into how to do business." },
];

const capabilities = [
  { num: "01", title: "Cloud", desc: "Migrate, optimize & scale on AWS, Azure, GCP", href: "/solutions/cloud" },
  { num: "02", title: "DevOps", desc: "CI/CD, Kubernetes, Terraform, infrastructure as code", href: "/solutions/devops" },
  { num: "03", title: "AI & Data", desc: "ML pipelines, predictive analytics, cognitive solutions", href: "/solutions/ai" },
  { num: "04", title: "RPA", desc: "BluePrism digital workforce automation at scale", href: "/solutions/rpa" },
];

const caseStudyCards = [
  {
    id: "ecommerce",
    content: (
      <div className="relative h-full w-full bg-[#0A0A0A] p-8 md:p-14 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
        <span className="absolute top-0 right-0 text-[8rem] md:text-[12rem] font-bold text-white/[0.05] leading-none select-none pointer-events-none">40%</span>
        <div className="relative z-10">
          <span className="font-mono text-[#6EE714] text-xs tracking-[0.3em] uppercase">ecommerce</span>
          <h3 className="text-2xl md:text-4xl font-bold text-white mt-3 tracking-tight">Enterprise Cloud Migration</h3>
          <p className="text-white/40 mt-3 max-w-lg text-sm">Migrated a global electronics brand from legacy on-prem to multi-region AWS — zero downtime.</p>
        </div>
        <div className="relative z-10 mt-6">
          <p className="text-[#6EE714] text-3xl font-mono font-bold">40%</p>
          <p className="text-white/30 text-xs mt-1">cost reduction</p>
        </div>
      </div>
    ),
  },
  {
    id: "finserv",
    content: (
      <div className="relative h-full w-full bg-[#0A0A0A] p-8 md:p-14 flex flex-col justify-between overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <span className="absolute top-0 right-0 text-[8rem] md:text-[12rem] font-bold text-white/[0.05] leading-none select-none pointer-events-none">99.99%</span>
        <div className="relative z-10">
          <span className="font-mono text-[#6EE714] text-xs tracking-[0.3em] uppercase">financial services</span>
          <h3 className="text-2xl md:text-4xl font-bold text-white mt-3 tracking-tight">Platform Modernization</h3>
          <p className="text-white/40 mt-3 max-w-lg text-sm">Rebuilt a trading platform on Azure microservices with automated compliance.</p>
        </div>
        <div className="relative z-10 mt-6">
          <p className="text-[#6EE714] text-3xl font-mono font-bold">99.99%</p>
          <p className="text-white/30 text-xs mt-1">uptime achieved</p>
        </div>
      </div>
    ),
  },
  {
    id: "healthcare",
    content: (
      <div className="relative h-full w-full bg-[#0A0A0A] p-8 md:p-14 flex flex-col justify-between overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[120px]" />
        <span className="absolute top-0 right-0 text-[8rem] md:text-[12rem] font-bold text-white/[0.05] leading-none select-none pointer-events-none">85%</span>
        <div className="relative z-10">
          <span className="font-mono text-[#6EE714] text-xs tracking-[0.3em] uppercase">healthcare</span>
          <h3 className="text-2xl md:text-4xl font-bold text-white mt-3 tracking-tight">HIPAA Data Platform</h3>
          <p className="text-white/40 mt-3 max-w-lg text-sm">Unified patient data across 12 facilities with ML-powered predictive analytics.</p>
        </div>
        <div className="relative z-10 mt-6">
          <p className="text-[#6EE714] text-3xl font-mono font-bold">85%</p>
          <p className="text-white/30 text-xs mt-1">prediction accuracy</p>
        </div>
      </div>
    ),
  },
  {
    id: "manufacturing",
    content: (
      <div className="relative h-full w-full bg-[#0A0A0A] p-8 md:p-14 flex flex-col justify-between overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]" />
        <span className="absolute top-0 right-0 text-[8rem] md:text-[12rem] font-bold text-white/[0.05] leading-none select-none pointer-events-none">$4.2M</span>
        <div className="relative z-10">
          <span className="font-mono text-[#6EE714] text-xs tracking-[0.3em] uppercase">manufacturing</span>
          <h3 className="text-2xl md:text-4xl font-bold text-white mt-3 tracking-tight">RPA Transformation</h3>
          <p className="text-white/40 mt-3 max-w-lg text-sm">Deployed 200+ BluePrism bots across procurement, inventory, and compliance.</p>
        </div>
        <div className="relative z-10 mt-6">
          <p className="text-[#6EE714] text-3xl font-mono font-bold">$4.2M</p>
          <p className="text-white/30 text-xs mt-1">annual savings</p>
        </div>
      </div>
    ),
  },
];

const marqueeText = "CLOUD MIGRATION \u00B7 DEVOPS \u00B7 KUBERNETES \u00B7 AWS PLATINUM \u00B7 INFRASTRUCTURE \u00B7 AUTOMATION \u00B7 AI \u00B7 TERRAFORM \u00B7 ";
const partners = ["AWS", "AZURE", "GOOGLE CLOUD", "DOCKER", "KUBERNETES", "BLUEPRISM"];

export default function Home() {
  return (
    <>
      <NoiseOverlay />

      {/* ═══════════════════════════════════════════
          HERO — Centered logo, tagline, purpose
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 flex flex-col items-center text-center px-6 pt-32 pb-16 bg-[#0A0A0A] overflow-hidden">
        {/* Ghost marquee behind — visible */}
        <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-[12vw] font-bold text-white/[0.06]">{marqueeText}{marqueeText}{marqueeText}</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <Image src="/logo.png" alt="Stacklogy" width={280} height={64} priority className="w-[240px] md:w-[280px]" />

          <div className="mt-6">
            <TextScramble
              text="Cloud Transformation Simplified"
              className="block font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#6EE714]"
              duration={3000}
            />
          </div>

          <h1 className="mt-5 text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            We drive innovation through Enterprise DevOps and Cloud Computing
          </h1>

          <p className="mt-3 text-white/40 text-sm md:text-base max-w-xl leading-relaxed">
            Our mission is to integrate technology seamlessly to accelerate our clients&apos; digital transformation initiatives.
          </p>

          {/* Purpose pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Customer inspired solutions", "Continuous improvement", "Excellence in service", "Empower with technology"].map((p) => (
              <span key={p} className="px-3 py-1 rounded-full border border-white/10 text-white/40 text-[10px] font-mono">
                {p}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-10 md:gap-16">
            {[
              { val: "200+", label: "Migrations" },
              { val: "50+", label: "Clients" },
              { val: "2016", label: "Founded" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[#6EE714] font-mono text-xl md:text-2xl font-bold">{s.val}</p>
                <p className="text-white/20 text-[9px] font-mono mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex items-center gap-4">
            <MagneticButton
              href="/contact"
              strength={0.3}
              className="bg-[#6EE714] text-black px-6 py-2.5 rounded-full text-xs font-bold hover:shadow-[0_0_30px_#6EE71440] transition-all duration-500"
            >
              Get in touch
            </MagneticButton>
            <Link href="/work" className="text-white/40 text-xs hover:text-[#6EE714] transition-colors">
              View our work &rarr;
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6EE714]/30 to-transparent" />
      </section>

      {/* ═══════════════════════════════════════════
          VERTICALS
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 py-16 px-6 md:px-12 lg:px-24 bg-[#0A0A0A]">
        <AnimatedSection>
          <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase mb-3">Verticals</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">Industries we serve</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {verticals.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.05}>
              <div className="bg-[#0A0A0A] p-8 hover:bg-white/[0.02] transition-colors group">
                <h3 className="text-xl font-bold text-white group-hover:text-[#6EE714] transition-colors">{v.title}</h3>
                <p className="text-white/30 text-sm mt-2 leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CLOUD SOLUTIONS + TERMINAL
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[#111111] px-8 md:px-16 py-16">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase mb-3">Cloud</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
              End to end cloud solutions to build and scale.
            </h2>
            <p className="text-white/30 text-sm mb-8">We turn ideas into products with the right revenue model &amp; technology to grow.</p>

            <div className="flex flex-wrap gap-2">
              {cloudServices.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full bg-[#6EE714]/10 border border-[#6EE714]/20 text-[#6EE714] text-xs font-mono">
                  {s}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="bg-[#0A0A0A] flex items-center justify-center px-8 md:px-14 py-16">
          <AnimatedSection delay={0.2}>
            <AnimatedTerminal commands={terminalCommands} />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SOLUTION AREAS
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 py-16 px-6 md:px-12 lg:px-24 bg-[#0A0A0A]">
        <AnimatedSection>
          <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase mb-3">Solution Areas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">
            End to end, customer driven solutions
          </h2>
        </AnimatedSection>

        {solutionAreas.map((area, i) => (
          <AnimatedSection key={area.title} delay={i * 0.05}>
            <div className="flex justify-between items-start py-5 border-b border-white/5 hover:bg-white/[0.01] transition-colors px-2">
              <h3 className="text-lg md:text-xl font-semibold text-white">{area.title}</h3>
              <p className="text-white/30 text-sm max-w-sm text-right hidden md:block">{area.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          CAPABILITIES (typographic rows)
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 py-16 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <AnimatedSection>
          <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase mb-3">What we do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">Solutions</h2>
        </AnimatedSection>

        {capabilities.map((cap, i) => (
          <AnimatedSection key={cap.num} delay={i * 0.08}>
            <Link href={cap.href} className="block group">
              <div className="flex justify-between items-center py-6 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-500 px-2">
                <div className="flex items-center">
                  <span className="text-[#6EE714] font-mono text-sm">{cap.num}</span>
                  <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white ml-6 group-hover:text-[#6EE714] transition-colors duration-500 tracking-tight">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-white/30 text-sm max-w-xs text-right hidden md:block">{cap.desc}</p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          PROOF — Stacking case studies
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 bg-[#0A0A0A]">
        <div className="px-6 md:px-16 pb-10 pt-16">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase mb-3">Case studies</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <div className="h-px bg-[#6EE714]/30 w-24 mt-5" />
          </AnimatedSection>
        </div>
        <StackingCards cards={caseStudyCards} />
      </section>

      {/* ═══════════════════════════════════════════
          PARTNERS
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 py-16 px-6 bg-[#0A0A0A] flex flex-col items-center">
        <AnimatedSection>
          <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase mb-8 text-center">Partners</p>
        </AnimatedSection>
        {partners.map((name) => (
          <p key={name} className="text-3xl md:text-5xl lg:text-7xl font-bold text-white/[0.08] hover:text-white/20 transition-all duration-700 cursor-default leading-none py-3 text-center relative group">
            {name}
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-[#6EE714] group-hover:w-full transition-all duration-700" />
          </p>
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          CTA — THE CLOSE
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 py-24 flex flex-col items-center justify-center px-6 bg-[#0A0A0A]">
        <TextScramble
          text="Let's build."
          className="text-5xl md:text-7xl lg:text-[8rem] font-bold text-white tracking-tighter text-center leading-none"
          duration={3000}
        />
        <div className="mt-10">
          <MagneticButton
            href="/contact"
            strength={0.4}
            className="bg-[#6EE714] text-black px-10 py-4 rounded-full text-base font-bold hover:shadow-[0_0_30px_#6EE71440] transition-all duration-500"
          >
            Start a conversation
          </MagneticButton>
        </div>
        <p className="text-white/20 text-xs font-mono tracking-wider mt-6">info@stacklogy.com &middot; +1 (732) 930-2399</p>
      </section>
    </>
  );
}
