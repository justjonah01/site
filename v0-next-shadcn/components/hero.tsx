"use client"

import { Github, Linkedin, Mail, Shield, Network } from "lucide-react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "COMPETITIONS", href: "#competitions" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "ORGANIZATIONS", href: "#organizations" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/justjonah01", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jonah-facer-b2948b2aa/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jonahfacer@gmail.com", label: "Email" },
]

export function Hero() {
  return (
    <header className="flex flex-col justify-between py-12 lg:py-24 lg:h-screen lg:sticky lg:top-0">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs text-primary tracking-wider">SECURITY</span>
          <span className="text-muted-foreground font-mono text-xs">/</span>
          <Network className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs text-primary tracking-wider">NETWORKING</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <span className="text-balance">Jonah Facer</span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl font-mono">
          {"Cybersecurity & Networking Student"}
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
          {"Securing infrastructure, architecting networks, and building a more resilient digital future \u2014 one packet at a time."}
        </p>
        /*
         <div className="mt-4 flex items-center gap-2"> 
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs text-muted-foreground">{"available for internships"}</span>
        </div>
        */

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground font-mono"
                >
                  <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-primary" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
