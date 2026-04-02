import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "Contact",
};

const expectations = [
  "We\u2019ll review your inquiry within 24 hours",
  "A solutions architect will schedule a discovery call",
  "You\u2019ll receive a tailored assessment and proposal",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-24 pt-40 md:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-[#6EE714] font-mono text-xs tracking-[0.3em] uppercase">
              Get In Touch
            </p>
            <TextScramble
              text="Contact"
              className="mt-6 block text-6xl md:text-8xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
              Whether you&rsquo;re planning a cloud migration, optimizing
              existing infrastructure, or exploring AI — we&rsquo;d love to
              hear about your challenge.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left -- Form */}
            <AnimatedSection delay={0.1}>
              <h2 className="text-xl font-bold text-white">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-white/20">
                Fill out the form below and we&rsquo;ll get back to you
                promptly.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Right -- Contact details */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-10">
                {/* Contact Info */}
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Contact details
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-sm text-white/40">Email</p>
                      <a
                        href="mailto:info@stacklogy.com"
                        className="text-sm text-[#6EE714] hover:underline"
                      >
                        info@stacklogy.com
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-white/40">Phone</p>
                      <a
                        href="tel:+17329302399"
                        className="text-sm text-white hover:text-[#6EE714] transition-colors"
                      >
                        +1 (732) 930-2399
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-white/40">Fremont Office</p>
                      <p className="text-sm text-white">
                        3340 Walnut Ave Ste 293
                        <br />
                        Fremont, CA 94538
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-white/40">Temple Office</p>
                      <p className="text-sm text-white">
                        2027 S. 61st Street, Suite 107
                        <br />
                        Temple, TX 76504
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-white/40">HR / Careers</p>
                      <a href="mailto:hr@stacklogy.com" className="text-sm text-[#6EE714] hover:underline">
                        hr@stacklogy.com
                      </a>
                      <br />
                      <a href="tel:+16503093546" className="text-sm text-white hover:text-[#6EE714]">
                        +1 (650) 309-3546
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div>
                  <h2 className="text-xl font-bold text-white">
                    What to expect
                  </h2>
                  <ol className="mt-6 space-y-4">
                    {expectations.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#6EE714]/30 font-mono text-xs text-[#6EE714]">
                          {index + 1}
                        </span>
                        <p className="pt-0.5 text-sm leading-relaxed text-white/40">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
