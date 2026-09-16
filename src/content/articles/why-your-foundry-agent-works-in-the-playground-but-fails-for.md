---
title: "Why Your Foundry Agent Works in the Playground But Fails for Every Other User The Identity Passthrough Problem Nobody Warns You About"
url: "https://medium.com/@malharpawar/why-your-foundry-agent-works-in-the-playground-but-fails-for-every-other-user-the-identity-b6c0da5fad51"
author: "Malhar Pawar"
publishDate: 2026-09-14
submittedDate: 2026-09-16
summary: "This article documents why an Azure AI Foundry agent connected to a Microsoft Fabric Data Agent works perfectly for the builder but fails for every other user with tool_user_error or timeout errors. It explains the On-Behalf-Of (OBO) identity passthrough mechanism, maps out the four separate permission layers required across two different portals, and shows how a single Microsoft Entra security group fixes the problem permanently."
tags: ["fabricdataagent","microsoftfoundry","ai","agenticai","powerbi","microsoftfabric"]
contributor: "Malhar Pawar"
---

Useful for anyone deploying a Foundry agent connected to a Fabric Data Agent beyond their own account. The article covers a real production failure with the exact error messages, traces the root cause to OBO identity passthrough, and provides a complete step-by-step fix using an Entra security group something no single Microsoft document currently explains end to end.
