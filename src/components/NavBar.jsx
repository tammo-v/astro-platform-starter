import { useState } from 'react';

export default function NavBar() {
  const [active, setActive] = useState(null);

  return (
    <nav className="w-full isolate z-[9999] relative bg-white text-sm tracking-wide text-gray-800 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-lg font-medium tracking-tight text-[var(--aubergine)] no-underline hover:opacity-80">
          Symbolic Computing
        </a>

        {/* Top Navigation */}
        <ul className="flex items-center gap-x-6">
          <li>
            <button
              onClick={() => setActive(active === 'foundation' ? null : 'foundation')}
              className="font-semibold text-gray-700 hover:text-[var(--aubergine)]"
            >
              Foundation
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive(active === 'architecture' ? null : 'architecture')}
              className="font-semibold text-gray-700 hover:text-[var(--aubergine)]"
            >
              MAR Architecture
            </button>
          </li>
          <li><a href="#" className="font-semibold text-gray-700 no-underline hover:underline hover:text-[var(--aubergine)]">Articles</a></li>
          <li><a href="#" className="font-semibold text-gray-700 no-underline hover:underline hover:text-[var(--aubergine)]">Patents</a></li>
          <li><a href="#" className="font-semibold text-gray-700 no-underline hover:underline hover:text-[var(--aubergine)]">Licensing</a></li>
          <li><a href="#" className="font-semibold text-gray-700 no-underline hover:underline hover:text-[var(--aubergine)]">Contact</a></li>
        </ul>
      </div>

      {/* Horizontal Subnav */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-2">
          {active === 'foundation' && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li><a href="/manifesto" className="text-gray-700 hover:text-[var(--aubergine)] font-medium">The Manifesto</a></li>
              <li><a href="/what-is-symbolic-computing" className="text-gray-700 hover:text-[var(--aubergine)] font-medium">What Is Symbolic Computing?</a></li>
              <li><span className="text-gray-400 font-medium">Introducing MAR</span></li>
            </ul>
          )}
          {active === 'architecture' && (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li><span className="text-gray-400 font-medium">ASN</span></li>
              <li><span className="text-gray-400 font-medium">ADM</span></li>
              <li><span className="text-gray-400 font-medium">Software Layer</span></li>
              <li><span className="text-gray-400 font-medium">Hardware Layer</span></li>
              <li><span className="text-gray-400 font-medium">SEMS</span></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
