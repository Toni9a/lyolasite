'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1920&h=1080&fit=crop&crop=center',
    title: 'Where Tradition Meets Elegance',
    subtitle: 'Bespoke Nigerian Aso Ebi tailoring for your special moments',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1583392025882-6de4abacfcfb?w=1920&h=1080&fit=crop&crop=center',
    title: 'Crafted With Love',
    subtitle: 'Each piece tells your unique story in vibrant African style',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566479179817-40d0c164b6c7?w=1920&h=1080&fit=crop&crop=center',
    title: 'Make Your Event Unforgettable',
    subtitle: 'Coordinated Aso Ebi that captures the spirit of celebration',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          {/* African Pattern Accent */}
          <div className="w-20 h-1 bg-gradient-to-r from-primary-pink to-accent-gold mb-6 rounded-full" />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {slide.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/material-selector"
              className="inline-flex items-center gap-2 bg-primary-pink text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-pink-dark transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Design Your Look
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white text-white hover:bg-white hover:text-neutral-charcoal px-8 py-4 rounded-lg text-lg font-medium transition-all"
            >
              View Collections
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-12 bg-primary-pink' : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;