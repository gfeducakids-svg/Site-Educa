import { Instagram, Facebook, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/educakidsgfc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-8 w-8 hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61579355967927" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-8 w-8 hover:opacity-80 transition-opacity" />
          </Link>
          <Link href="mailto:gf.educakids@gmail.com" aria-label="Email">
            <Mail className="h-8 w-8 hover:opacity-80 transition-opacity" />
          </Link>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm">Copyright © {year} - Educa Kids</p>
        </div>
      </div>
    </footer>
  );
}
