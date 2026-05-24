import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brown-950 text-cream-300 mt-auto">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-24 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="text-display-sm font-bold text-cream-100 mb-3">Brew & Co.</p>
          <p className="text-body-sm text-cream-400 max-w-[22ch] leading-relaxed">
            Single-origin specialty coffee in the heart of Brooklyn.
          </p>
          <p className="text-body-sm text-brown-300 mt-6">
            © {new Date().getFullYear()} Brew & Co. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-label font-semibold tracking-widest uppercase text-cream-400 mb-5">
            Visit Us
          </h4>
          <address className="not-italic text-body-sm text-cream-300 leading-relaxed">
            123 Atlantic Ave
            <br />
            Brooklyn, NY 11201
          </address>
          <div className="mt-4 text-body-sm text-cream-300 space-y-1">
            <p>Mon–Fri: 7:00 am – 7:00 pm</p>
            <p>Sat–Sun: 8:00 am – 6:00 pm</p>
          </div>
        </div>

        <div>
          <h4 className="text-label font-semibold tracking-widest uppercase text-cream-400 mb-5">
            Explore
          </h4>
          <ul className="space-y-3 text-body-sm">
            <li>
              <Link
                href="/menu"
                className="text-cream-300 hover:text-white transition-colors duration-150"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-cream-300 hover:text-white transition-colors duration-150"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
