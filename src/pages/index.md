---
title: Foundation
layout: ../layouts/Layout.astro
---

## What Is Symbolic Computing?

Symbolic Computing is a computational execution system built on Adaptive Symbolic Notation (ASN). It operates directly on mathematical objects — including numbers, functions, expressions, and matrices — keeping them in symbolic form throughout execution. index.md

The limits of conventional hardware are no longer theoretical — they’re active constraints. Power ceilings, thermal bottlenecks, and fixed execution models now shape how systems are built and what they can do. Across domains — from AI and scientific computing to cryptographic systems and large-scale modeling — these constraints are becoming structural blockers rather than tuning challenges.

Some look to quantum computing as the next step. But quantum architectures are built for narrow classes of problems — typically involving probabilistic models, combinatorial optimization, or high-dimensional search spaces. They do little to address the structural demands of systems that rely on stable memory, compositional logic, or selective reuse. Other technologies, such as optical computing or neuromorphic hardware, offer promising directions in specialized areas, but remain far from practical deployment and are unlikely to address the near-term demands of large-scale, structured workloads.

What’s needed is something different — not another generation of denser silicon, but a new kind of logic.

Symbolic Computing is that logic.  
—

The next three examples show how symbolic computing improves performance and scalability — from rational operations, to encryption pipelines, to matrix workloads.

---

**Rational multiplication.** In symbolic computing, rational expressions are represented as compositional structures rather than floating-point values. A value like `3/4` is stored symbolically. This representation unlocks capabilities not available in conventional execution setups — particularly when working with extended sequences of symbolic terms.

When multiple rational terms are multiplied, the system can form structural groupings — treating all numerators and all denominators as separate symbolic streams:

3/4 * 2/5 * 7/9

is processed as:

(3 * 2 * 7) / (4 * 5 * 9) = 42/180 = 7/30

The system composes the expression as a whole. This reduces intermediate evaluations. The result is fast execution, efficient expression handling, and the opportunity to evaluate at a high resolution at the final stage.

---

**Encryption pipelines.** In symbolic computing, large expressions can be preserved symbolically across multiple stages of a workflow. This includes exponentiations used in cryptographic systems, such as **`m**e`**, where the base and exponent are both represented in symbolic form.

Rather than resolving results early — including modular reductions **`mod n`**, which are computationally heavy — the system allows the full expression to remain active throughout the pipeline. Evaluation only needs to happen at the final stage, when output is required.

This enables faster execution across cryptographic workflows and supports the use of larger encryption keys — a capability that may become crucial as quantum computing develops.

---

**Matrix workloads.** In symbolic computing, each entry in a matrix is treated as a symbolic component — tagged with position and preserved as part of a compositional structure. For example:

<pre>
A = 1A11, 2A12; 3A21, 4A22
B = 5B11, 6B12; 7B21, 8B22
C = 1C11, 0C12; 0C21, 1C22
</pre>

Each scalar value is symbolically grouped by index. When the matrices are multiplied in sequence, expressions — like A11 * B11 * C11 — are executed as independent threads, each one mapped to a specific output block.

These threads can be processed in parallel, enabling fast execution across the full matrix product. At the end of the chain, symbolic threads are brought together, and final evaluation occurs as needed. This approach generalizes naturally to larger systems, where parallel execution can operate not just on individual scalars, but on entire matrix blocks.

Because matrix multiplication is associative, long chains can be segmented temporally.

A * B * C * D

This product can be evaluated in symbolic groups — such as `(A * B)` and `(C * D)` — also processed in parallel and brought together at the final stage.

---

Symbolic Computing is a full execution system designed for symbolic form.  
For a technical overview, continue to the next section.

<div class="hidden sm:flex justify-end mt-12 text-sm font-medium">
  <a href="/introducing-asn" class="link-nav-soft">Introducing ASN →</a>
</div>
