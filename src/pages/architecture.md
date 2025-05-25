---
title: Architecture
layout: ../layouts/Layout.astro
---

## Architecture

Floating point provides a fast and efficient way to perform computation. It works — and will continue to work — for most computational systems. But in fields such as AI, simulation, and cryptography, where workloads are becoming more extensive, layered, and structurally interdependent, high linear throughput no longer seems to be the answer.

ASN begins with a simple idea: that it is possible to execute directly on symbolic form. The use of symbolic form in computation is not new — it already exists in preprocessors and symbolic mathematics systems. ASN takes that idea one step further, extending symbolic manipulation into execution itself.

This enables capabilities that are difficult to express in traditional systems — including symbolic parallelism, structural routing, and controlled evaluation. In ASN, structure doesn’t just describe the computation — it drives it.

### Core Execution Behaviors

ASN defines a symbolic execution model based on the following behaviors:

- **Suffix-Based Tagging**  
  Symbolic suffixes encode sign, phase, axis, or execution role. These guide grouping, transformation, and routing during execution.

- **Symbolic Referencing**  
  Expressions remain memory-resident and structurally intact. They can be reused, recombined, or composed without duplication.

- **Symbolic Grouping**  
  Values and expressions can be grouped into compositional units — such as matrix blocks, rational sequences, or transformation chains — and executed together.

- **Symbolic Dispatch**  
  Execution is routed based on tags and structure, rather than fixed instruction flow.

- **Controlled Evaluation**  
  Evaluation is triggered by structural context. Until then, expressions remain symbolic, preserving compositional identity across stages.

### Execution Across Domains

ASN is domain-agnostic. It allows symbolic operations to proceed through structure, not through code paths. Applications include:

- Symbolic matrix transformation  
- Cryptographic pipelines  
- Scientific modeling  
- Structured audio and signal processing

ASN is implemented in software, and may also extend into symbolic hardware. Its architecture is general-purpose — supporting symbolic workflows at scale.

<div class="hidden sm:flex justify-between mt-12 text-sm font-medium">
  <a href="/" class="link-nav-soft">← Overview</a>
  <a href="/notation" class="link-nav-soft">Notation →</a>
</div>
