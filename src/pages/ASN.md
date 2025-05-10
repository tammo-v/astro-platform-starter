## Adaptive Symbolic Notation (ASN)

**Adaptive Symbolic Notation (ASN)** is the foundational layer of the MAR architecture. It defines how symbolic objects — including numbers, functions, matrices, and transformations — are represented and composed.

In traditional systems, expressions are reduced to values before execution. ASN takes the opposite approach: it preserves structure and expresses it in symbolic form. Every element in the system, from individual constants to composite expressions, is represented as a symbolic unit — not as a value to be resolved, but as a form to be understood and transformed.

ASN introduces a concise, suffix-based notation for expressing symbolic structure. This grammar enables compact representation while maintaining compositional clarity.

**Examples of symbolic values:**

- `3r` — real number (positive real phase)  
- `3n` — negative real number (negative real phase)  
- `2*1/2` — square root of 2 in symbolic form  
- `s2x` — symbolic sine transformation applied to the expression `2x`

Each symbolic object in ASN belongs to one of two categories:

- **ISUs (Independent Symbolic Units)** — atomic symbolic objects: constants, transformations, function tags, or matrix entries  
- **ISEs (Independent Symbolic Expressions)** — compositional structures built from ISUs and other ISEs

ASN supports symbolic forms beyond basic math:

- Symbolic time and rhythm (e.g., for audio synthesis)  
- Structural grouping for matrices and multi-axis expressions  
- Phase-based representations in complex, quaternionic, or higher-dimensional fields

Evaluation in ASN is deferred by default. Symbolic expressions are preserved across memory and flow, and are only evaluated when required by context or explicitly invoked by the decision layer (ADM). This allows systems to reason with structure intact — to analyze, rewrite, or reuse symbolic form without loss of fidelity.

ASN is not a syntax for human input. It is the representational layer for symbolic execution itself. It enables MAR to treat expressions not as strings to be parsed, but as compositional objects to be traversed, transformed, and preserved.

It is through ASN that symbolic meaning enters the system — and through which form becomes the basis for computation.

---

<div class="flex justify-between text-sm text-gray-600 mt-12">
  <a href="/introducing-mar" class="no-underline hover:underline">← Introducing MAR</a>
  <a href="/adm" class="no-underline hover:underline">Adaptive Decision Module (ADM) →</a>
</div>
