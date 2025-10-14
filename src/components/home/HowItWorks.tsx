import { Palette, Ruler, Sparkles, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Palette className="w-8 h-8" />,
    title: 'Choose Your Style',
    description: 'Browse our collections or start with a custom design. Select from our curated fabrics or bring your own.',
  },
  {
    number: '02',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Try AI Fitting',
    description: 'Upload your photo and see how your design looks on you before we even start sewing.',
  },
  {
    number: '03',
    icon: <Ruler className="w-8 h-8" />,
    title: 'Perfect Measurements',
    description: 'Provide measurements online, book an in-person fitting, or request our detailed measurement guide.',
  },
  {
    number: '04',
    icon: <Package className="w-8 h-8" />,
    title: 'Receive & Celebrate',
    description: 'Your bespoke garment is crafted with care and delivered right to your door, ready for your special event.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-charcoal text-sm font-medium mb-6 shadow-lg">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-charcoal leading-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-charcoal-light max-w-2xl mx-auto">
            From inspiration to delivery, we make the process simple and enjoyable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px">
            <div className="container mx-auto h-full relative">
              <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary-pink via-accent-gold to-primary-pink opacity-30" />
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary-pink to-accent-gold flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary-pink-light flex items-center justify-center text-primary-pink mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-neutral-charcoal">
                  {step.title}
                </h3>
                <p className="text-neutral-charcoal-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Mobile Connection Arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-4">
                  <svg className="w-6 h-6 text-primary-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;