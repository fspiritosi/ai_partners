import Header from './_components/header';
import HeroSection from './_components/hero-section';
import ProblemsSection from './_components/problems-section';
import ServicesSection from './_components/services-section';
import ProcessSection from './_components/process-section';
import RoiSection from './_components/roi-section';
import LeadMagnetCta from './_components/lead-magnet-cta';
import FaqSection from './_components/faq-section';
import ContactSection from './_components/contact-section';
import FooterSection from './_components/footer-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <ProcessSection />
      <RoiSection />
      <LeadMagnetCta />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
