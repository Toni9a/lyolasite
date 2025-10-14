import Link from 'next/link';
import { Heart, Award, Users } from 'lucide-react';

const AboutSnippet = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Crafted with Passion',
      description: 'Every stitch tells a story of dedication and cultural pride',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Quality',
      description: 'Only the finest fabrics and expert tailoring techniques',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Personal Service',
      description: 'From consultation to delivery, we\'re with you every step',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-neutral-cream-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-pink-light text-primary-pink text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-pink animate-pulse" />
            About Lyola
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-charcoal leading-tight mb-6">
            Bringing Nigerian Heritage to Your Wardrobe
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed text-neutral-charcoal-light max-w-3xl mx-auto mb-8">
            Founded by Anjie, Lyola celebrates the vibrant tradition of Nigerian Aso Ebi while embracing contemporary style. 
            We create bespoke garments that honor your culture and make you feel extraordinary at every celebration.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center border-2 border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            Discover Our Story
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-pink-light flex items-center justify-center text-primary-pink group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-charcoal">
                {feature.title}
              </h3>
              <p className="text-neutral-charcoal-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;