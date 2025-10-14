import HeroSection from '@/components/home/HeroSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import HowItWorks from '@/components/home/HowItWorks';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <FeaturedCollections />
      <HowItWorks />
    </>
  );
}