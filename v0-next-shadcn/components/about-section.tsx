export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">
        About
      </h3>
      <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
        <p>
          {"I\u2019m a Computer Science student with a passion for understanding how systems communicate \u2014 and keeping those communications secure."}
        </p>
        <p>
          {"I typically spent my time taking on "}
          <span className="font-medium text-foreground">cybersecurity competitions</span>
          {", pursuing "}
          <span className="font-medium text-foreground">industry certifications</span>
          {", and honing security and networking skills. My focus areas span "}
          <span className="font-medium text-foreground">network architecture</span>
          {", "}
          <span className="font-medium text-foreground">incident response</span>
          {", and "}
          <span className="font-medium text-foreground">routing & switching</span>
          {"."}
        </p>
        <p>
          {"When I\u2019m not doing the above, you can find me at the gym, tinkering in my homelab, or playing D&D with my friends!"}
        </p>
      </div>
    </section>
  )
}
