---
title: Introducing MAR
layout: ../layouts/Layout.astro
---

## Introducing MAR

**Mathematical Adaptive Reasoning (MAR)**  is the execution system that enables Symbolic Computing to function as a complete computational model.

In MAR, symbolic form is not a layer on top of computation — it is the foundation. Numbers, functions, expressions, and transformations are represented as structured, symbolic objects. These objects are preserved through execution, stored in symbolic memory, and transformed compositionally rather than reduced.

Where classical systems treat structure as something to be flattened for efficiency, MAR treats structure as something to be computed on directly.

**MAR is not a framework.** It is a symbolic substrate — a system where computation, memory, and reasoning all operate on symbolic form.

At its core, MAR introduces three key principles:

- **Representation is symbolic** — not numeric, not intermediate. Objects retain their internal structure across all stages of computation.
- **Evaluation is deferred** — symbolic expressions are preserved until resolution is explicitly chosen or required by context.
- **Flow follows structure** — execution paths are guided by symbolic form, not linear instruction sequences.

This architecture is implemented through a set of compositional components:

- **ISUs** — Independent Symbolic Units, the atomic building blocks of the system  
- **ISEs** — Independent Symbolic Expressions, compositional groupings of ISUs  
- **IRDs** — Inter-Referenced Definitions, reusable symbolic anchors that support recursion, linking, and structure-aware transformation

All symbolic operations within MAR are governed by the **Symbolic Execution and Memory Stack (SEMS)** — the internal coordination framework that connects representation, memory, and execution flow across software and hardware layers.

**MAR is structured across four architectural levels:**

- **Adaptive Symbolic Notation (ASN)** — the symbolic grammar that expresses values, functions, transformations, and structural relationships  
- **Adaptive Decision Module (ADM)** — the reasoning layer that determines how symbolic structures should be evaluated, deferred, or transformed  
- **Symbolic Software Layer** — a compositional runtime built on ISUs and ISEs, where programs operate directly on symbolic form  
- **Symbolic Hardware Layer** — execution units that process symbolic objects natively, preserving identity and structure at the circuit level

Together, these layers form a unified symbolic system — one where structure is preserved, reasoning is explicit, and computation becomes a transformation of form rather than a sequence of instructions.

**MAR is what allows Symbolic Computing to function as a complete system** — not as an abstraction or overlay, but as a new computational foundation.


<div class="flex justify-between text-sm text-gray-600 mt-12">
  <a href="/what-is-symbolic-computing" class="no-underline hover:underline">← What Is Symbolic Computing?</a>
  <a href="/asn" class="no-underline hover:underline">Adaptive Symbolic Notation (ASN) →</a>
</div>
