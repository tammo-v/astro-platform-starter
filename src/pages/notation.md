---
title: Notation 
layout: ../layouts/Layout.astro
---

## Symbolic Notation

Symbolic Computing is an execution engine built to handle extensive computational workloads. At the heart of the system is ASN, a notation that preserves the symbolic form of mathematical objects for execution.

This notation supports numbers, fractions, exponents, functions, and matrix structures — each represented in a compositional form that can be preserved, reused, and executed, with evaluation typically occurring at the boundary and resolved to the level required.

---

### Suffix-Based Notation

ASN introduces a suffix-based notation system using symbolic tags that guide execution. These tags indicate sign, phase, or dimensional role, and are attached directly to numeric values, allowing the system to group, route, and resolve expressions structurally.

- `r`: positive real — default phase; can be omitted when sign is implicit
- `n`: negative real — allows compositional sign logic (e.g. `n * n → r`)
- `i`: positive imaginary — symbolic axis for complex numbers
- `m`: negative imaginary — mirror axis for sign-parity logic

These suffixes enable structural grouping. If you have a large number of negative values, you don’t need to resolve each minus sign individually. You simply count the n tags: if the count is even, the result is positive; if odd, it’s negative.

Complex numbers no longer need to be represented as pairs. With suffix tags like i and m, imaginary components are encoded directly. This allows symbolic operations to resolve structurally — for example, i * i = n and i * m = r.


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
