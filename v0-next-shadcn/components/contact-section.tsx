export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">
        Contact
      </h3>
      <div className="leading-relaxed text-muted-foreground">
        <p>
          {"I\u2019m always open to connecting with fellow security and networking enthusiasts, mentors, and recruiters. The best way to reach me is via "}
          <a
            href="mailto:hello@example.com"
            className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
          >
            email
          </a>
          {". Whether it\u2019s about a competition, an internship, a network build, or just to talk shop about the latest CVE \u2014 my inbox is open."}
        </p>
        <p className="mt-4">
          {"You can also find me on "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
          >
            GitHub
          </a>
          {" and "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          {"."}
        </p>
      </div>
    </section>
  )
}
