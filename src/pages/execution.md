---
title: Execution
layout: ../layouts/Layout.astro
---

# Symbolic Execution

Symbolic Computing performs execution directly on symbolic expressions — grouping, routing, and resolving them based on structure. Unlike classical systems, symbolic expressions are preserved in memory and can remain active even after evaluation.

### Structural Grouping

Symbolic execution works on grouped expressions rather than atomic instructions. Values can be bundled by form — such as matrix blocks, rational terms, or transformation chains — and executed as compositional units.

### Controlled Evaluation

Evaluation is not automatic. Expressions are resolved only when required by context — such as reaching an output boundary, completing a transformation stage, or fulfilling a dependency. Until then, values remain symbolic and accessible.

### Symbolic Memory and Reuse

All symbolic values — whether raw or evaluated — remain in memory. They can be referenced, recombined, or routed to new execution paths. This enables structural reuse across workflows without duplication.

### Parallel Execution

Symbolic expressions can be executed in parallel when structurally independent. This includes:
- **Spatial parallelism**: across blocks or index groups
- **Temporal parallelism**: across transformation chains or pipelined segments

Execution follows structure, not instruction order.

### Persistent Symbolic Threads

Symbolic threads may span multiple stages of execution. A value computed early in a pipeline can remain symbolic and unevaluated until the final output stage — or reused without flattening.

<div class="hidden sm:flex justify-between mt-12 text-sm font-medium">
  <a href="/notation" class="link-nav-soft">← Notation</a>
  <a href="/implementation" class="link-nav-soft">Implementation →</a>
</div>
