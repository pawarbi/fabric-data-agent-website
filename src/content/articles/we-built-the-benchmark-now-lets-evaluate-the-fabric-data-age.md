---
title: "We Built the Benchmark. Now Let’s Evaluate the Fabric Data Agent for Real"
url: "https://lucazavarella.medium.com/we-built-the-benchmark-now-lets-evaluate-the-fabric-data-agent-for-real-a8ffef236693"
author: "Luca Zavarella"
publishDate: 2026-03-17
submittedDate: 2026-03-19
summary: "This article shows how to move from a benchmark design to a real evaluation workflow for a Microsoft Fabric Data Agent.  Starting from a 72-question benchmark built in a previous article for an Italian multilingual scenario, it explains how to complete the ground-truth dataset, run `evaluate_data_agent` on Fabric, inspect summary and row-level results, and use notebooks to operationalize the full process.  A key insight is that part of the observed weakness may come not only from the Data Agent, but also from the evaluation layer itself. By inspecting the SDK source code and testing a stricter custom critic prompt, the article shows how evaluation reliability can improve significantly without changing the agent or the benchmark.  Overall, the piece is a practical guide to benchmarking and evaluating Fabric Data Agents more rigorously, especially in multilingual business scenarios."
tags: ["data-agent","fabric","evaluation","multilingual"]
contributor: "Luca Zavarella"
---

