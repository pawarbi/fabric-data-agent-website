---
title: "Why My Fabric Data Agent Returned the Wrong Number : Diagnosing a Silent Grounding Contamination Bug in Azure AI Foundry"
url: "https://medium.com/@malharpawar/why-my-fabric-data-agent-returned-the-wrong-number-diagnosing-a-silent-grounding-contamination-865153f7b83f?sharedUserId=malharpawar"
author: "Malhar Pawar"
publishDate: 2026-09-10
submittedDate: 2026-09-10
summary: "This article documents a production debugging session where an AI agent connected to Fabric Data Agent returned an incorrect number due to a File Search knowledge file contaminating the data grounding. It explains how to diagnose this using Azure AI Foundry traces and the architectural fix (moving static reference data into the system prompt and enforcing strict tool-gating) that resolved both correctness and response latency."
tags: ["fabric","microsoftfoundry","fabricdataagent","ai","agenticai"]
contributor: "Malhar Pawar"
---

A practical read for anyone building Foundry agents on top of a Fabric Data Agent. Shows a real failure mode caused by mixing knowledge file retrieval with live data grounding, including how to spot it in Foundry traces and the fix that resolved it.
