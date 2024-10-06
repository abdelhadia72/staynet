import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Shari</h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Redefining the way you rent, buy, and sell properties. Welcome to
            the future of real estate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSection title="Quick Links">
            <FooterLink href="/rent">Rent a Property</FooterLink>
            <FooterLink href="/buy">Buy a Property</FooterLink>
            <FooterLink href="/sell">Sell Your Property</FooterLink>
            <FooterLink href="/market-analysis">Market Analysis</FooterLink>
          </FooterSection>
          <FooterSection title="Property Types">
            <FooterLink href="/apartments">Apartments</FooterLink>
            <FooterLink href="/houses">Houses</FooterLink>
            <FooterLink href="/commercial">Commercial Properties</FooterLink>
            <FooterLink href="/land">Land</FooterLink>
          </FooterSection>
          <FooterSection title="Resources">
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/guides">Buying & Selling Guides</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </FooterSection>
          <FooterSection title="Contact">
            <p className="mb-2">123 Shari Street</p>
            <p className="mb-2">Real Estate City, RE 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-4">Email: info@shariapp.com</p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </FooterSection>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-white transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {icon}
    </Link>
  );
}
