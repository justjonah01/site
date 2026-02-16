import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Flag } from "lucide-react"

const competitions = [
  {
    icon: Trophy,
    name: "CCDC \u2014 Collegiate Cyber Defense Competition",
    role: "Team Captain / Blue Team",
    period: "2024 \u2014 Present",
    description:
      "Competed in many CCDC events defending enterprise networks against live red team attackers. Responsible for hardening Windows servers, monitoring a Palo Alto firewall, and responding to injected incidents under pressure",
    highlights: ["Wildcard Qualifier", "Windows Administration", "Palo Alto Firewalls"],
  },
  {
    icon: Flag,
    name: "NCL \u2014 National Cyber League",
    role: "Individual & Team Competito",
    period: "2023 \u2014 Present",
    description:
      "Compete in individual and team-based CTF challenges covering cryptography, log analysis, network forensics, web application exploitation, and OSINT.",
    highlights: ["Top 6% Individual", "Cryptography", "Log Analysis", "Forensics"],
  },
  {
    icon: Flag,
    name: "META CTF",
    role: "Team Player",
    period: "2023 \u2014 Present",
    description:
      "Regularly participate in Capture the Flag events including PicoCTF, HackTheBox CTFs, and university-hosted events. Focus areas include reverse engineering, binary exploitation, and web challenges.",
    highlights: ["PicoCTF", "HackTheBox", "Web Exploitation"],
  },
]

export function CompetitionsSection() {
  return (
    <section id="competitions" className="scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">
        Competitions
      </h3>
      <div className="flex flex-col gap-4">
        {competitions.map((comp) => (
          <div
            key={comp.name}
            className="group relative rounded-md border border-transparent p-5 transition-all hover:border-border hover:bg-secondary/50"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <comp.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="font-mono font-medium text-foreground text-sm">
                    {comp.name}
                  </h4>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {comp.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-primary">{comp.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {comp.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {comp.highlights.map((h) => (
                    <Badge
                      key={h}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-transparent text-xs font-mono font-medium"
                    >
                      {h}
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
