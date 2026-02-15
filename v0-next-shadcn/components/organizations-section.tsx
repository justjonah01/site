import { Badge } from "@/components/ui/badge"
import { Users, Shield, BookOpen } from "lucide-react"

const organizations = [
  {
    icon: Shield,
    name: "Cybersecurity Club",
    role: "Vice President",
    period: "2023 \u2014 Present",
    description:
      "Lead weekly workshops on ethical hacking, organize guest speaker events with industry professionals, and coordinate the club\u2019s CCDC and CTF competition teams.",
    tags: ["Leadership", "Event Planning", "Mentoring"],
  },
  {
    icon: Users,
    name: "National Cyber League Team",
    role: "Team Captain",
    period: "2024 \u2014 Present",
    description:
      "Organize team practice sessions, assign challenge categories based on member strengths, and lead strategy for team-based competition rounds.",
    tags: ["Team Lead", "Strategy", "Competition"],
  },
  {
    icon: BookOpen,
    name: "ACM Student Chapter",
    role: "Member",
    period: "2022 \u2014 Present",
    description:
      "Participate in study groups, hackathons, and career development workshops. Collaborate with fellow CS students on open-source and research projects.",
    tags: ["Networking", "Hackathons", "Research"],
  },
]

export function OrganizationsSection() {
  return (
    <section id="organizations" className="scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">
        Organizations
      </h3>
      <div className="flex flex-col gap-4">
        {organizations.map((org) => (
          <div
            key={org.name}
            className="group relative rounded-md border border-transparent p-5 transition-all hover:border-border hover:bg-secondary/50"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <org.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-mono font-medium text-foreground text-sm">
                    {org.name}
                  </h4>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {org.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-primary">{org.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {org.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {org.tags.map((tag) => (
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
