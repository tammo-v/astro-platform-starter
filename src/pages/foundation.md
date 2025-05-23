---
title: Foundation
layout: ../layouts/Layout.astro
---

## What Is Symbolic Computing?

The limits of conventional hardware are no longer theoretical — they’re active constraints. Power ceilings, thermal bottlenecks, and fixed execution models now shape how systems are built and what they can do. Across domains — from AI and scientific computing to cryptographic systems and large-scale modeling — these constraints are becoming structural blockers rather than tuning challenges.

Some look to quantum computing as the next step. But quantum architectures are built for narrow classes of problems — typically involving probabilistic models, combinatorial optimization, or high-dimensional search spaces. They do little to address the structural demands of systems that rely on stable memory, compositional logic, or selective reuse. Other technologies, such as optical computing or neuromorphic hardware, offer promising directions in specialized areas, but remain far from practical deployment and are unlikely to address the near-term demands of large-scale, structured workloads.

What’s needed is something different — not another generation of denser silicon, but a new kind of logic. This kind of logic is provided by ASN — Adaptive Symbolic Notation. Below are three examples that show how it works in practice.


---

In symbolic computing, rational expressions are represented as compositional structures. A value like `3 / 4` is stored symbolically, with the numerator and denominator preserved as separate components. When a sequence such as:

`3 / 4 + 2 / 5 + 7 / 9 + 1 / 6`

is processed, the system performs structural grouping. Each numerator is scaled to a shared denominator, the scaled numerators are summed, and the result is simplified:

`(3 * 270 + 2 * 216 + 7 * 120 + 1 * 180) / 1080 = 2262 / 1080 = 377 / 180`

Throughout the process, the full expression remains symbolic. Grouping allows exactness and reuse, and evaluation into numeric form is typically performed at the end — once the expression has been fully prepared. This behavior becomes especially useful in large symbolic sequences — such as those found in AI inference, matrix operations, or symbolic solvers. 

---

When multiplying matrices, symbolic computing uses structural tags to guide execution. A matrix is written as a collection of symbolic entries, such as:

`1B11`, `2B12`  
`3B21`, `4B22`

Each value is tagged with its block position. These tags allow the system to identify which operations can run independently. In a 2×2 matrix product, partial results like:

`A11 * B11`  
`A12 * B21`  
`A21 * B12`  
`A22 * B22`

can be computed in parallel — each as a symbolic expression associated with a specific output block. This is spatial parallelism: execution is driven by symbolic position, not external scheduling.

Symbolic computing also supports temporal parallelism. If a matrix is part of a longer sequence, such as:

`A * B * C * D * E * F`

the system can segment the chain into symbolic subthreads:

`(A * B)`, `(C * D)`, `(E * F)`

Each segment is computed in parallel, and the results are combined in a second stage. Because all intermediate results remain symbolic, each segment can be reused, transformed, or recomposed before final evaluation. This allows long transformation chains to be executed in parallel across time — guided entirely by symbolic form.

---

Symbolic Computing is based on a system called ASN — Adaptive Symbolic Notation. It is a computational execution system that operates directly on mathematical objects, such as numbers, functions, expressions, and matrices, represented in symbolic form. These objects are transformed based on their compositional structure and suffix tags — allowing features such as parallel execution, structural grouping, and evaluation triggered by structure, which typically occurs at the boundary of a workflow or at the end of a pipeline.
