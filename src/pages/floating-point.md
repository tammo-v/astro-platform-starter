---
title: Floating Point Is Broken
layout: ../layouts/Layout.astro
---

# Floating Point Is Broken 
<span class="block text-lg font-normal text-gray-600 mt-2">Here's What We're Replacing It With</span>

**Technical Article**

## The Problem No One Questions

Floating point was not adopted because it was ideal—it was adopted because it matched the constraints of early hardware.

In the first generation of computing systems, memory was scarce, hardware was limited, and precision was expensive. Floating point offered a compact, lossy encoding scheme for approximating real numbers within a fixed number of bits. It was a compromise that proved scalable.

That compromise became the default. Floating point arithmetic remains the foundation of nearly all modern computation—and the assumptions behind it are rarely re-examined.

For example, consider the input: `sqrt(2)`

This is not stored as a structural object. It is immediately evaluated: `1.4142135...`

The original form is lost. Only a flattened numerical approximation remains.

In conventional systems, evaluation is assumed to be immediate. Structure is discarded by default, and symbolic identity is erased at the point of entry. Floating point is fast, portable, and sufficient for many numerical tasks, but fundamentally lossy:

- Rounding errors occur by default  
- Resolution is constrained by bit width  
- Irrational values are truncated into decimal approximations  
- Symbolic expressions—including functions—are evaluated and flattened  

These constraints are not anomalies—they are built into the foundation. Every layer built on top of floating point inherits the same behavior, reinforcing the same logic throughout the system.

This recursive pattern—evaluating early, discarding form, and collapsing identity—is mirrored from numerical encoding all the way up to high-level computation.

## How Symbolic Computing Works—and What It Makes Possible

The number is already structured. It does not need to be approximated or reduced. It can be preserved.

As seen earlier, the expression `sqrt(2)` is typically evaluated immediately, producing a truncated decimal. In symbolic computing, it can be preserved exactly as `2**(1/2)`, where exponentiation is retained structurally. Each component—`2`, `1/2`, and the operator `**`—is stored as an Independent Symbolic Unit (ISU). Together, they form an Independent Symbolic Expression (ISE) that remains unevaluated, accessible, and fully reusable.

Classical systems store the result of a computation. Symbolic systems store the computation itself.

What follows are examples of how preserving symbolic form changes the behavior of computation. When expressions are retained rather than resolved, new capabilities emerge: reversibility, introspection, and compositional control.

- `L2(x)` denotes the logarithm base 2 of `x`. In most systems, this is immediately evaluated into a floating-point approximation. In symbolic computing, the form `L2(x)` remains available as a compositional object. It can be reused, transformed, or passed into other symbolic expressions. The expression is stored symbolically, not reduced.
- In programming, consider a function definition: `f(x) = x × 2`. A call like `f(3)` is typically evaluated immediately, producing `6`. The original expression is lost, along with the ability to reference or transform the function call itself. In symbolic computing, `f(3)` is retained as a symbolic expression and stored structurally. It can be composed with other functions (such as `g(f(3))`), reused in new contexts, or reversed to solve for its inputs. The output remains available, but the form is preserved.
- In data pipelines, a sequence like `df.filter(...).groupby(...).sum()` is typically executed step by step, with each stage overwriting the last. The end value is computed, but the structure of the pipeline is discarded. In symbolic computing, the entire transformation is preserved as a symbolic expression (ISE). Rather than storing the full expression repeatedly, it can be assigned a symbolic identifier (ISU), allowing the pipeline to be compressed, reused, or referenced across contexts. Because the symbolic expression is stored unevaluated, the structure remains accessible across all operations.

In symbolic computing, output remains fully accessible. In all of the examples above, computations yield results just as they do in classical systems. The key difference is that evaluation is not automatic: it occurs only when explicitly requested or when structurally required by the symbolic form.
