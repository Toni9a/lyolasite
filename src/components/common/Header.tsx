import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-pink">
            Lyola
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-neutral-charcoal hover:text-primary-pink">Home</Link>
            <Link href="/collections" className="text-neutral-charcoal hover:text-primary-pink">Collections</Link>
            <Link href="/about" className="text-neutral-charcoal hover:text-primary-pink">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
