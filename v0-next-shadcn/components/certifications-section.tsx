import { CheckCircle2, Clock, Lock } from "lucide-react"

const certifications = [
  {
    name: "CompTIA Security+",
    status: "earned" as const,
    date: "Earned \u2014 2025",
    description: "Foundation-level cybersecurity certification covering threat management, cryptography, identity management, and security infrastructure.",
  },
  {
    name: "CompTIA Network+",
    status: "earned" as const,
    date: "Earned \u2014 2024",
    description: "Validates networking fundamentals including troubleshooting, configuring, and managing wired and wireless networks.",
  },
  {
    name: "Cisco CCNA",
    status: "in-progress" as const,
    date: "In Progress",
    description: "Industry-standard networking certification covering routing, switching, VLANs, subnetting, network automation, and enterprise infrastructure.",
  },
  {
    name: "CompTIA CySA+",
    status: "in-progress" as const,
    date: "In Progress",
    description: "Intermediate-level certification focused on security analytics, intrusion detection, and incident response.",
  },
  {
    name: "OSCP \u2014 Offensive Security Certified Professional",
    status: "planned" as const,
    date: "Planned \u2014 2026",
    description: "Hands-on penetration testing certification requiring exploitation of vulnerable machines in a controlled environment.",
  },
  {
    name: "Cisco CCNP Enterprise",
    status: "planned" as const,
    date: "Planned \u2014 2027",
    description: "Advanced networking certification covering complex enterprise routing, switching, SD-WAN, and network design at scale.",
  },
]

const statusConfig = {
  earned: {
    icon: CheckCircle2,
    color: "text-primary",
    bg: "bg-primary/10",
    label: "Earned",
  },
  "in-progress": {
    icon: Clock,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    label: "In Progress",
  },
  planned: {
    icon: Lock,
    color: "text-muted-foreground",
    bg: "bg-muted",
    label: "Planned",
  },
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">
        Certifications
      </h3>
      <div className="flex flex-col gap-4">
        {certifications.map((cert) => {
          const config = statusConfig[cert.status]
          return (
            <div
              key={cert.name}
              className="group relative rounded-md border border-transparent p-5 transition-all hover:border-border hover:bg-secondary/50"
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${config.bg} ${config.color}`}>
                  <config.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-mono font-medium text-foreground text-sm">
                      {cert.name}
                    </h4>
                    <span className={`shrink-0 font-mono text-xs ${config.color}`}>
                      {cert.date}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
