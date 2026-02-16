import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "Dec 2025 \u2014 Present",
    title: "System Services Co-Op",
    org: "Enterprise IT Team",
    description:
      "Assisted with the deployment of application across company devices through SCCM/Intune. Also collaborated with other teams such as NetOps and Facilities.",
    tags: ["Microsoft Azure", "Proofpoint", "Intune", "SCCM", "Rapid 7"],
  },
  {
    period: "Dec 2024 \u2014 Dec 2025",
    title: "Help Desk Co-Op",
    org: "Samtec",
    description:
      "Worked on imaging company devices and aided users experiencing various tech problems.",
    tags: ["Customer Service", "Active Directory", "Computer Repair", "Networking Basics", "Security Monitoring"],
  },
  {
    period: "Jun 2024 \u2014 Dec 2024",
    title: "Information Technology Student Assistant",
    org: "Indiana University Southeast",
    description:
      "Helped students and faculty alike with technology needs.",
    tags: ["Customer Service", "Imaging Computers","Communication"],
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
