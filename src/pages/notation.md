---
title: Notation 
layout: ../layouts/Layout.astro
---

Symbolic Computing operates on mathematical objects directly — not as flattened values, but as compositional forms that remain active throughout execution. This includes numbers, functions, expressions, and matrix entries, each represented in a symbolic structure designed for reuse, transformation, and delayed evaluation.

This page introduces the notation system that makes symbolic execution possible. You’ll see how numeric values, fractional forms, exponentiation, and transformations are encoded. The format is lightweight and exact — designed to preserve identity and compositional behavior at every stage.

### Numeric Values

Simple numbers are written directly, often with symbolic tags that guide execution. For example:

```
3n   → negative real 3
4r   → positive real 4
5i   → imaginary 5
6m   → negative imaginary 6
```

### Fractions and Rational Forms

Rational expressions like `3/4` are kept as symbolic quotients. Instead of reducing early, the system allows grouped multiplication and late-stage evaluation:

```
3/4 * 2/5 * 7/9
→ (3 * 2 * 7) / (4 * 5 * 9) = 42 / 180 = 7 / 30
```

### Exponentiation

Exponentiation is encoded structurally. For example, the square root of 2 is written as:

```
2**(1/2)
```

This form stays symbolic until evaluation is required.

### Functions and Composed Expressions

Functions are written symbolically as compositional calls:

```
sin(x) → s(x)
cos(2πt) → c(2πt)
ln(x) → l(x)
```

Nested expressions like `f(g(x))` are preserved exactly, with all intermediate layers accessible for reuse or transformation.

### Tagged Components

Suffix tags are attached to values to indicate sign, phase, or dimensional role. These tags guide routing and execution behavior without requiring additional syntax.

### Inline and Matrix Notation

Matrix entries use compact inline notation. For example, a 2×2 matrix might be written as:

```
A = 1A11, 2A12; 3A21, 4A22
```

Each entry is symbolic and position-tagged, allowing block-level execution and reuse across transformation stages.




<div class="hidden sm:flex justify-between mt-12 text-sm font-medium">
  <a href="/" class="link-nav-soft">← Overview</a>
  <a href="/execution" class="link-nav-soft">Execution →</a>
</div>
