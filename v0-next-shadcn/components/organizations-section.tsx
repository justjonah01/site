import { Badge } from "@/components/ui/badge"
import { Users, Shield, BookOpen } from "lucide-react"

const organizations = [
  {
    icon: Users,
    name: "ISSA Kentuckiana Chapter",
    role: "Member",
    period: "2025 \u2014 Present",
    description:
      "I attend club workshops and presentation given by decorated professionals in the region.",
    tags: ["Cybersecurity", "Workshop", "Conference"],
  },
  {
    icon: Users,
    name: "InfraGard",
    role: "Member",
    period: "2026 \u2014 Present",
    description:
      "Attending education, workshops, and networking events that the Federal Bureau of Investigation provides.",
    tags: ["Government", "FBI", "Critical Infrastructure"],
  },
  {
    icon: Users,
    name: "Indiana University Southeast Security Team",
    role: "Team Captain",
    period: "2024 \u2014 Present",
    description:
      "I lead IUS\u2019s Security Team through various cybersecurity competions including the Collegiate Cyber Defense Competition (CCDC) and the National Cyber League (NCL).",
    tags: ["College", "Leadership"],
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
