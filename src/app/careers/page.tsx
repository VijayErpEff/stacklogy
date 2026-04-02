import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import TextScramble from "@/components/TextScramble";

export const metadata: Metadata = {
  title: "Careers",
};

const jobs = [
  {
    title: "SYSTEMS ENGINEERS",
    code: "SYSE-24",
    openings: "Multiple Openings",
    description:
      "Design systems architecture and verify stability, interoperability, portability, security, scalability. Design system engineering, system integration, distributed system infrastructure. Confer with clients to analyze and understand business requirements. Collaborate with developers to select appropriate design solutions to complex applications problems, system issues, ensure compatibility of system components. Document design specifications, provide technical guidance on system design concepts or design changes. Evaluate, automate, improve existing systems and processes. Identify system data, hardware, or software components required to meet user requirements. Test systems, verify proper functioning of software patches and fixes, troubleshoot system problems, resolve technical issues, provide technical support, prepare reports, train end users.",
    requirements:
      "Master\u2019s degree in Computer Science, Information Systems/Technology, Engineering/IT Management, Science, any Engineering or related fields. Travel and/or relocation to unanticipated locations in U.S. required.",
    location: "Temple, TX and unanticipated locations in U.S.",
    apply:
      "Mail resume - Attn: HR (Job Code SYSE-24), Stacklogy, Inc. 2027 S. 61st Street, Suite 107, Temple, TX 76504",
  },
  {
    title: "DEVOPS ENGINEERS",
    code: "DVOP-24",
    openings: "Multiple Openings",
    description:
      "Design, configure, deploy software applications and cloud infrastructure solutions. Automate and improve development and release processes. Analyze business requirements, confer with stakeholders, perform code reviews, write and deploy application code, participate in full SDLC, design user interface, write scripts, develop and deploy micro-services, configure and implement CI/CD pipelines, establish connectivity between on-premises to Cloud platform, perform client-side validation, automate repetitive tasks. Modify, upgrade and improve existing applications. Write test cases, monitor production errors, troubleshoot problems, debug, resolve technical issues, generate reports, provide production support.",
    requirements:
      "Bachelor\u2019s degree in Computer Science, Information Systems/Technology, Engineering/IT Management, Science, any Engineering or related fields. Travel and/or relocation to unanticipated locations in U.S. required.",
    location: "Temple, TX and unanticipated locations in U.S.",
    apply:
      "Mail resume - Attn: HR (Job Code DVOP-24), Stacklogy, Inc. 2027 S. 61st Street, Suite 107, Temple, TX 76504",
  },
  {
    title: "SYSTEMS ANALYSTS",
    code: "SA-24",
    openings: "Multiple Openings",
    description:
      "Design, test, maintain, monitor computer systems. Gather and analyze system requirements, confer with stakeholders, design and document business requirements, expand or modify system to improve work flow, install and connect systems. Configure and implement solutions to complex business problems. Build and implement CI/CD pipelines. Migrate data from on-premises to cloud platform. Modify, upgrade and improve existing systems. Test, optimize system performance, debug, troubleshoot, resolve technical issues, generate reports, provide production support.",
    requirements:
      "Master\u2019s degree in Science, Engineering, Data Science, or any field. Travel and/or relocation to unanticipated locations in U.S. required.",
    location: "Temple, TX and unanticipated locations in U.S.",
    apply:
      "Mail resume - Attn: HR (Job Code SA-24), Stacklogy, Inc., 2027 S. 61st Street, Suite 107, Temple, TX 76504",
  },
  {
    title: "DATA ENGINEER",
    code: null,
    openings: null,
    description: null,
    qualification:
      "Master\u2019s Degree in Statistical Analytics, Data Science, or Bachelor\u2019s in CS with 3-5 years experience.",
    preferred:
      "Web dev (AngularJS, D3), statistical programming (R/Python), ML techniques, data visualization (Tableau, QlikView), data warehousing (Informatica).",
    hugeAdvantage:
      "Building and scaling ML frameworks, Hadoop (Hive, Spark, UDFs).",
    experience:
      "5+ years data engineering/BI/analytics, 5+ years complex SQL, 2+ years Python.",
    requirements: null,
    location: null,
    apply: null,
  },
  {
    title: "CLOUD ENGINEER",
    code: null,
    openings: null,
    description: null,
    qualification: "BA/BS in Computer Science or related.",
    preferred:
      "DevOps tools (Chef, Ansible, Docker, Kubernetes), extensive AWS/Azure experience.",
    hugeAdvantage:
      "Cloud computing platforms (AWS, Azure, GCP), scripting (Python, Bash, Ruby, Perl).",
    experience: "5-7 years overall, 3+ years Azure and AWS.",
    requirements: null,
    location: null,
    apply: null,
  },
  {
    title: "LEAD DEVOPS CONSULTANT",
    code: null,
    openings: null,
    description: null,
    qualification: "Bachelor\u2019s in CS preferred, MS desired.",
    preferred:
      "Chef/Puppet/Salt/Ansible, CloudFormation/JSON, scripting (Powershell, Python, Bash), IP networking/VPN/DNS, monitoring (Nagios, Splunk, ELK), revision control (Git, SVN), CI servers (Jenkins, Bamboo), automated testing (Selenium, JMeter), SOA/REST.",
    hugeAdvantage: "Machine learning models, Intelligent DevOps.",
    experience:
      "10+ years IT, 5+ years DevOps consulting, 5+ years infrastructure/dev, 2+ years architecting.",
    requirements: null,
    location: null,
    apply: null,
  },
  {
    title: "DATABASE ENGINEER",
    code: null,
    openings: null,
    description: null,
    qualification: "BA/BS in CS or related.",
    preferred:
      "BASH/Python/AWS CLI, performance tuning, training DBAs.",
    hugeAdvantage: "Amazon Aurora, Tomcat/WebLogic.",
    definitePlus: "Oracle 11g/12c administration, DoD C2 systems.",
    experience:
      "8+ years IT, 3+ years database, 2+ years analytics.",
    requirements: null,
    location: null,
    apply: null,
  },
  {
    title: "SOFTWARE ENGINEERS",
    code: "SE-22",
    openings: "Multiple Openings",
    description:
      "Design, develop, deploy software applications on Cloud platform. Full SDLC, cloud infrastructure, CloudFormation templates, CI/CD pipeline, automate deployments.",
    requirements:
      "Master\u2019s degree in Science, Technology, Data Analytics, Management Science, Statistics, Engineering Management, Embedded Systems or any field. Travel/relocation required.",
    location: "Temple, TX and unanticipated locations in U.S.",
    apply:
      "Mail resume - Attn: HR (Job Code SE-22), Stacklogy Inc. 2027 S. 61st Street, Suite 107, Temple, TX 76504",
  },
  {
    title: "SOFTWARE DEVELOPERS",
    code: "SD-23",
    openings: "Multiple Openings",
    description:
      "Design, develop, deploy software applications and cloud solutions. Full SDLC, CloudFormation, CI/CD pipeline, automate deployments.",
    requirements:
      "Master\u2019s degree in Computer Science, Information Systems/Technology, Science, Engineering/Technology Management, any Engineering or related fields. Travel/relocation required.",
    location: "Temple, TX and unanticipated locations in U.S.",
    apply:
      "Mail resume - Attn: HR, Stacklogy Inc. 2027 S. 61st Street, Suite 107, Temple, TX 76504",
  },
  {
    title: "PROGRAMMER ANALYSTS",
    code: "PA-23",
    openings: "Multiple Openings",
    description:
      "Write, analyze, update, rewrite, maintain, deploy computer programs. Code reviews, analyze business requirements, expand existing programs. Compile documentation.",
    requirements:
      "Master\u2019s degree in Computer Science, Information Systems/Technology, Science, Technology Management, any Engineering or related fields. Travel/relocation required.",
    location: "Temple, TX and unanticipated locations in U.S.",
    apply:
      "Mail resume - Attn: HR Manager (Job Code PA-23), Stacklogy, Inc. 2027 S. 61st Street, Suite 107, Temple, TX 76504",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-12 pt-40 md:pt-48">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <AnimatedSection>
            <TextScramble
              text="Careers"
              className="block text-5xl md:text-6xl font-bold text-white tracking-tight"
              duration={2500}
            />
            <p className="mt-4 text-lg text-white/40">
              Work to learn. Join our Stacklogy Team.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/40">
              We are proud to be an equal opportunity workforce. Join us to do
              what you love, create the future you want and explore your passion!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-[#0A0A0A] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          {jobs.map((job, index) => (
            <AnimatedSection key={job.title + (job.code || index)} delay={index * 0.05}>
              <div
                className={`py-8 ${
                  index < jobs.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                {/* Title row */}
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {job.title}
                  </h3>
                  {job.code && (
                    <span className="text-[#6EE714] font-mono text-xs">
                      {job.code}
                    </span>
                  )}
                  {job.openings && (
                    <span className="text-white/30 text-xs">
                      &mdash; {job.openings}
                    </span>
                  )}
                </div>

                {/* Description (for structured job postings) */}
                {job.description && (
                  <p className="mt-3 text-white/40 text-sm leading-relaxed">
                    {job.description}
                  </p>
                )}

                {/* Qualification-style listings (Data Engineer, Cloud Engineer, etc.) */}
                {"qualification" in job && job.qualification && (
                  <div className="mt-3 space-y-2">
                    <p className="text-white/50 text-sm">
                      <span className="text-white/70 font-medium">
                        Qualification:
                      </span>{" "}
                      {job.qualification}
                    </p>
                    {"preferred" in job && job.preferred && (
                      <p className="text-white/50 text-sm">
                        <span className="text-white/70 font-medium">
                          Preferred:
                        </span>{" "}
                        {job.preferred}
                      </p>
                    )}
                    {"hugeAdvantage" in job && job.hugeAdvantage && (
                      <p className="text-white/50 text-sm">
                        <span className="text-white/70 font-medium">
                          Huge Advantage:
                        </span>{" "}
                        {job.hugeAdvantage}
                      </p>
                    )}
                    {"definitePlus" in job && job.definitePlus && (
                      <p className="text-white/50 text-sm">
                        <span className="text-white/70 font-medium">
                          Definite Plus:
                        </span>{" "}
                        {job.definitePlus}
                      </p>
                    )}
                    {"experience" in job && job.experience && (
                      <p className="text-white/50 text-sm">
                        <span className="text-white/70 font-medium">
                          Experience:
                        </span>{" "}
                        {job.experience}
                      </p>
                    )}
                  </div>
                )}

                {/* Requirements */}
                {job.requirements && (
                  <p className="mt-3 text-white/50 text-sm">
                    <span className="text-white/70 font-medium">
                      Requirements:
                    </span>{" "}
                    {job.requirements}
                  </p>
                )}

                {/* Work Location */}
                {job.location && (
                  <p className="mt-2 text-white/30 text-sm">
                    <span className="text-white/50 font-medium">
                      Work Location:
                    </span>{" "}
                    {job.location}
                  </p>
                )}

                {/* Apply */}
                {job.apply && (
                  <p className="mt-2 text-white/30 text-sm">
                    <span className="text-white/50 font-medium">Apply:</span>{" "}
                    {job.apply} or email{" "}
                    <a
                      href="mailto:hr@stacklogy.com"
                      className="text-[#6EE714] hover:underline"
                    >
                      hr@stacklogy.com
                    </a>
                  </p>
                )}

                {/* For jobs without specific apply instructions, show general email */}
                {!job.apply && (
                  <p className="mt-2 text-white/30 text-sm">
                    <span className="text-white/50 font-medium">Apply:</span>{" "}
                    Send resume to{" "}
                    <a
                      href="mailto:hr@stacklogy.com"
                      className="text-[#6EE714] hover:underline"
                    >
                      hr@stacklogy.com
                    </a>
                  </p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#0A0A0A] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="border-t border-white/5 pt-10">
              <p className="text-white/40 text-sm leading-relaxed">
                If you qualify for any of these positions, please send your
                resume at{" "}
                <a
                  href="mailto:hr@stacklogy.com"
                  className="text-[#6EE714] hover:underline"
                >
                  hr@stacklogy.com
                </a>
              </p>
              <p className="mt-4 text-white/40 text-sm leading-relaxed">
                Are you a fresher, looking for an opportunity? You are just at
                the right place! Join Stacklogy and get yourself a true identity
                for a lifetime.
              </p>
              <div className="mt-6 space-y-1">
                <p className="text-white/30 text-sm">
                  <a
                    href="tel:+16503093546"
                    className="hover:text-white/50 transition-colors"
                  >
                    +1 (650) 309-3546
                  </a>
                </p>
                <p className="text-white/30 text-sm">
                  <a
                    href="mailto:hr@stacklogy.com"
                    className="text-[#6EE714] hover:underline"
                  >
                    hr@stacklogy.com
                  </a>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
