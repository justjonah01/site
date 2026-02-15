import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { CompetitionsSection } from "@/components/competitions-section"
import { CertificationsSection } from "@/components/certifications-section"
import { OrganizationsSection } from "@/components/organizations-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Spotlight } from "@/components/spotlight"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:flex lg:gap-16 lg:px-24 lg:py-0">
        <div className="lg:flex lg:w-1/2 lg:max-w-md">
          <Hero />
        </div>
        <main className="flex flex-col gap-24 py-12 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ProjectsSection />
          <CompetitionsSection />
          <CertificationsSection />
          <OrganizationsSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  )
}
