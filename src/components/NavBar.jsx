---
import { useState } from 'preact/hooks';
---

<nav class="w-full bg-white border-b border-gray-100 text-sm text-gray-800 tracking-wide">
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-lg font-medium tracking-tight text-[var(--aubergine)] no-underline hover:opacity-80">
      Symbolic Computing
    </a>

    <!-- Top Navigation -->
    <ul class="flex items-center gap-x-6">
      <li>
        <button onClick={() => setActive('foundation')} class="font-semibold text-gray-700 hover:text-[var(--aubergine)]">
          Foundation
        </button>
      </li>
      <li>
        <button onClick={() => setActive('architecture')} class="font-semibold text-gray-700 hover:text-[var(--aubergine)]">
          MAR Architecture
        </button>
      </li>
      <li><a href="#" class="font-semibold text-gray-700 no-underline hover:underline hover:text-[var(--aubergine)]">Articles</a></li>
      <li><a href="#" class="font-semibold text-gray-700 no-underline hover:underline hover:text-[var(--aubergine)]">Patents</a></li>
      <li><a href="#" class="font-semibold text-gray-700 no-underline hover:underline hover:text-[var(--aubergine)]">Licensing</a></li>
      <li><a href="#" class="font-semibold text-gray-700 no-underline hover:underline hover:text-[var(--aubergine)]">Contact</a></li>
    </ul>
  </div>

  <!-- Horizontal Subnav -->
  <div class="border-t border-gray-100 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 py-2">
      {active === 'foundation' && (
        <ul class="flex flex-wrap gap-x-6 gap-y-2">
          <li><a href="/manifesto" class="text-gray-700 hover:text-[var(--aubergine)] font-medium">The Manifesto</a></li>
          <li><a href="/what-is-symbolic-computing" class="text-gray-700 hover:text-[var(--aubergine)] font-medium">What Is Symbolic Computing?</a></li>
          <li><span class="text-gray-400 font-medium">Introducing MAR</span></li>
        </ul>
      )}
      {active === 'architecture' && (
        <ul class="flex flex-wrap gap-x-6 gap-y-2">
          <li><span class="text-gray-400 font-medium">ASN</span></li>
          <li><span class="text-gray-400 font-medium">ADM</span></li>
          <li><span class="text-gray-400 font-medium">Software Layer</span></li>
          <li><span class="text-gray-400 font-medium">Hardware Layer</span></li>
          <li><span class="text-gray-400 font-medium">SEMS</span></li>
        </ul>
      )}
    </div>
  </div>
</nav>

<script>
  const [active, setActive] = useState(null);
</script>
