import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "NetWatch",
    description:
      "A real-time network monitoring dashboard that visualizes traffic flow, detects anomalies, and alerts on suspicious activity using packet analysis and SNMP polling.",
    tags: ["Python", "Scapy", "SNMP", "React", "WebSockets"],
    link: "#",
  },
  {
    title: "SubnetArchitect",
    description:
      "A visual VLAN and subnet planning tool for designing enterprise network topologies. Generates router configs, calculates CIDR ranges, and exports diagrams.",
    tags: ["TypeScript", "Next.js", "Networking", "CIDR"],
    link: "#",
  },
  {
    title: "VulnScanner",
    description:
      "An automated vulnerability scanner for web applications. Checks for common OWASP Top 10 issues including XSS, SQL injection, and misconfigurations.",
    tags: ["Python", "Nmap", "OWASP", "Flask"],
    link: "#",
  },
  {
    title: "IncidentBot",
    description:
      "A Discord bot for incident response coordination. Tracks active incidents, assigns roles, logs timelines, and generates post-mortem reports.",
    tags: ["Node.js", "Discord.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "PacketForge",
    description:
      "A packet crafting and analysis toolkit for educational use. Lets users construct custom TCP/UDP packets, replay captures, and visualize protocol headers layer by layer.",
    tags: ["Python", "Scapy", "Wireshark", "TCP/IP"],
    link: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">
        Projects
      </h3>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="group relative rounded-md border border-transparent p-5 transition-all hover:border-border hover:bg-secondary/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-mono font-medium text-foreground group-hover:text-primary transition-colors">
                  <span className="text-primary/60 mr-1">{">"}</span>
                  {project.title}
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-transparent text-xs font-mono font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
