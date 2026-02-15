import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Personal Homelab",
    description:
      "A self hosted network comprised that I use to sharpen my skills. I used Proxmox to host my services and virtual machines with various networking equipment to support it.",
    tags: ["Proxmox", "Firewalls", "Routing", "Switches", "Proxies"],
    link: "#",
  },
  {
    title: "CCDC Lab Capstone",
    description:
      "My capstone project at IUS, much like my personal lab, it is built on Proxmox. The purpose was to replicate an enviroment from CCDC to help future students prepare for it.",
    tags: ["Proxmox", "Virtualization", "Networking", "Blue Team", "Graduation Project"],
    link: "#",
  },
  {
    title: "Phishing Simulation Demonstration",
    description:
      "A project to demonstrate the dangers of phishing that won an Outstanding Oral Presentation Award. This project exploited a vulnerability in Wordpress that allowed for a RCE shell.",
    tags: ["CVE-2024-27956", "Python", "PHP", "Red Team", "Remote Code Execution"],
    link: "#",
  },
  {
    title: "Meshtastic Node",
    description:
      "A handheld device that demonstrates the capabilities of mesh networking systems over LoRa",
    tags: ["Heltec V3", "Soldering", "Mesh Networking"],
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
