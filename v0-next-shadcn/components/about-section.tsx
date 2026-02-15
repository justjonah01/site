export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">
        About
      </h3>
      <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
        <p>
          {"I\u2019m a cybersecurity and networking student with a passion for understanding how systems communicate \u2014 and how to keep those communications secure. My journey started with curiosity about how networks are built, then evolved into a drive to protect them from threats."}
        </p>
        <p>
          {"Today, I split my time between "}
          <span className="font-medium text-foreground">cyber defense competitions</span>
          {", pursuing "}
          <span className="font-medium text-foreground">industry certifications</span>
          {", and building security and networking tools. My focus areas span "}
          <span className="font-medium text-foreground">network architecture</span>
          {", "}
          <span className="font-medium text-foreground">infrastructure defense</span>
          {", "}
          <span className="font-medium text-foreground">incident response</span>
          {", and "}
          <span className="font-medium text-foreground">routing & switching</span>
          {"."}
        </p>
        <p>
          {"When I\u2019m not hardening firewalls, configuring VLANs, or studying for certs, you can find me in CTF challenges, mentoring other students, or diving into the latest threat intelligence reports."}
        </p>
      </div>
    </section>
  )
}
