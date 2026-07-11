import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Tagline from "@/components/Tagline";
import FeatureCards from "@/components/FeatureCards";
import FeatureIntake from "@/components/FeatureIntake";
import FeaturePlan from "@/components/FeaturePlan";
import FeatureBuild from "@/components/FeatureBuild";
import FeatureReview from "@/components/FeatureReview";
import FeatureMonitor from "@/components/FeatureMonitor";
import Changelog from "@/components/Changelog";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Tagline />
        <FeatureCards />
        <FeatureIntake />
        <FeaturePlan />
        <FeatureBuild />
        <FeatureReview />
        <FeatureMonitor />
        <Changelog />
        <Testimonials />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
