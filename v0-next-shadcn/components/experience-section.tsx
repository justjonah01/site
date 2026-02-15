import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2025 \u2014 Present",
    title: "Security & Network Operations Intern",
    org: "Enterprise IT Team",
    description:
      "Monitor SIEM alerts and assist with incident triage. Help maintain firewall rulesets, configure switch port security, and manage VLAN segmentation. Contribute to vulnerability assessments and network documentation.",
    tags: ["SIEM", "Firewall", "VLANs", "Incident Response", "Cisco IOS"],
  },
  {
    period: "2024 \u2014 2025",
    title: "Network Lab Assistant",
    org: "University IT Department",
    description:
      "Supported campus network infrastructure including troubleshooting connectivity issues, configuring access points, provisioning accounts in Active Directory, and maintaining lab environments with proper security baselines.",
    tags: ["Networking", "Active Directory", "Wi-Fi", "Troubleshooting", "Linux"],
  },
  {
    period: "2023 \u2014 2024",
    title: "Teaching Assistant \u2014 Intro to Cybersecurity",
    org: "CS Department",
    description:
      "Helped students understand core security and networking concepts including cryptography, access control, TCP/IP fundamentals, and network protocols. Ran hands-on lab exercises with Wireshark and packet analysis.",
    tags: ["Mentoring", "Cryptography", "TCP/IP", "Wireshark"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">
        Experience
      </h3>
      <div className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="group relative rounded-md border border-transparent p-5 transition-all hover:border-border hover:bg-secondary/50"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <span className="mt-1 shrink-0 font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:w-32">
                {exp.period}
              </span>
              <div>
                <h4 className="font-mono font-medium text-foreground text-sm">
                  {exp.title}
                  <span className="text-muted-foreground"> &middot; </span>
                  <span className="text-primary">{exp.org}</span>
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-transparent text-xs font-mono font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
