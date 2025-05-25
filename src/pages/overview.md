---
title: Architecture
layout: ../layouts/Layout.astro
---

## Overview
overview.md
Floating point provides a fast and efficient way to perform computation. It works — and will continue to work — for most computational systems. But in fields such as AI, simulation, and cryptography, where workloads are becoming more extensive, layered, and structurally interdependent, high linear throughput no longer seems to be the answer.

ASN begins with a simple idea: that it is possible to execute directly on mathematical objects — such as numbers, functions and matrices — in their symbolic form. The use of symbolic form in computation is not new — it already exists in preprocessors and symbolic mathematics systems. ASN takes that idea one step further, extending symbolic manipulation into execution itself.

This unlocks capabilities that are difficult to express in traditional systems — including the ability to run large matrix computations in parallel, to perform faster transformations in structured workflows like cryptography, and to evaluate with full resolution at the final output stage in scientific computing. These outcomes are enabled by allowing symbolic structure to remain active throughout execution.

---

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

---

### Applications

ASN is a licensed technology that can be implemented today in software, offering meaningful benefits across real-world domains. For example:

- **AI systems**: reduces compute cost and energy usage by enabling matrix operations to run in parallel — with symbolic blocks that remain active across transformation stages.  
- **Cryptography**: allows protocols to run faster and enables the use of larger encryption keys — held symbolically until resolution, improving both efficiency and security margins.  
- **Scientific computing**: supports faster computation and higher numerical resolution by preserving exact form throughout extended workflows.  
- **Symbolic audio**: introduces a new way to store and transform sound — using symbolic form to capture waveform structure naturally, with high fidelity and built-in compression.

ASN is not optimized for one use case. It is a general execution model — ready to run.

<div class="hidden sm:flex justify-between mt-12 text-sm font-medium">
  <a href="/" class="link-nav-soft">← Overview</a>
  <a href="/notation" class="link-nav-soft">Notation →</a>
</div>
