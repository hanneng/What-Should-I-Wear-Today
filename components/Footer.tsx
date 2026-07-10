'use client';

const footerLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: 'mailto:hello@stylomylo.co' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="text-xl font-semibold text-white mb-2">
              Stylomylo
            </div>
            <p className="text-sm text-gray-500 max-w-md leading-relaxed">
              AI Personal Style Assistant. Never wonder what to wear again.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Stylomylo. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with care. Built for confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}
