import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 'mens',
    title: "Men's Collection",
    description: 'Agbada, Kaftan, and Senator styles',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&crop=center',
    href: '/collections?gender=men',
  },
  {
    id: 'womens',
    title: "Women's Collection",
    description: 'Elegant Kaftan and Wrapper sets',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c50?w=800&h=1000&fit=crop&crop=center',
    href: '/collections?gender=women',
  },
  {
    id: 'couples',
    title: 'Couples Sets',
    description: 'Coordinated Aso Ebi for two',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&crop=center',
    href: '/collections?category=couples',
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-charcoal leading-tight mb-4">
            Explore Our Collections
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-charcoal-light max-w-2xl mx-auto">
            From traditional ceremonies to modern celebrations, find the perfect style for your occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-pink transition-colors">
                  {collection.title}
                </h3>
                <p className="text-gray-200 mb-4">
                  {collection.description}
                </p>
                <div className="flex items-center gap-2 text-primary-pink font-medium">
                  <span>View Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 bg-primary-pink text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-pink-dark transition-all transform hover:-translate-y-0.5 shadow-lg"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;