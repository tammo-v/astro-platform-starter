---
title: Adaptive Decision Module (ADM)
layout: ../layouts/Layout.astro
---


## Adaptive Decision Module (ADM)

The **Adaptive Decision Module (ADM)** is the symbolic reasoning engine within the MAR architecture. It governs how symbolic expressions are evaluated, deferred, transformed, or preserved — based not on procedural rules, but on the structure of the symbolic form itself.

In classical systems, execution is linear and determined by instruction sequence. Structure is flattened in order to be processed. ADM reverses this relationship: structure is preserved, and execution is derived from it.

ADM operates on ISUs and ISEs, evaluating them not as values but as symbolic objects with internal relationships, context, and transformation potential. It selects among possible execution paths based on symbolic criteria — not precompiled logic.

**Core functions of ADM:**

- Determine whether a symbolic expression should be evaluated, deferred, or rewritten  
- Select structural transformations (e.g., expansion, factoring, canonicalization) based on symbolic context  
- Maintain symbolic closure — all outputs remain symbolic unless explicitly resolved  
- Route expressions based on form: phase, composition type, symbolic axis, or reuse history

ADM does not enforce a single path through a computation. Instead, it defines a *symbolic flow* — a graph of potential transformations and routes, navigated in response to context. This enables MAR to handle computation as a structural process, not a stepwise program.

**Example:**  
Given the expression `X = 2 × (3 + 4)`, ADM may:

- Evaluate directly: `X = 14`  
- Expand symbolically: `X = 2 × 3 + 2 × 4`  
- Defer evaluation entirely, preserving the form for reuse

All of these are valid symbolic paths. ADM selects one based on symbolic goals — such as reuse, clarity, or compositional symmetry.

ADM operates across both software and hardware layers. It can function as a runtime decision system or be embedded in symbolic processors, where symbolic flow is executed directly in hardware through transformation graphs.

Rather than interpreting instructions, ADM interprets form.  
It enables MAR to reason symbolically — adapting execution to structure, not structure to execution.

ADM is not a controller.  
It is a structural selector.  
It is how symbolic systems choose how to compute.


<div class="hidden sm:flex justify-between text-sm text-gray-600 mt-12">
  <a href="/asn" class="no-underline hover:underline">← Adaptive Symbolic Notation (ASN)</a>
  <a href="/software-layer" class="no-underline hover:underline">Symbolic Software Layer →</a>
</div>
