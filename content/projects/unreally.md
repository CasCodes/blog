---
title: "Unreally - Fake News Detection"
date: 2023-07-21T00:00:00Z
draft: false
tags: ["projects", "nlp", "ml"]
description: "Fact-checking claims via stance detection on news context"
summary: "Fact-checking claims via stance detection on news context"
---

We hear a lot about "Fake News" (or disinformation) these days. They are defined as "false information which is inteded to mislead" and can be used in various malicious ways, especially on social media. To manipulate public opinion, distrupt the democratic process or undermine scientific facts.

To spot false claims (e.g. Tweets) on social media, we developed a method using stance detection. Here, we trained a neural network to determine the way external context relates to such a claim by classifing its stance: 

- agree (the context agrees with the claim)
- disagree (the context agrees with the claim)
- discuss (the context neutrally discusses the claim)
- unrelated (the context talks about something different)

Instead of performing fake news detection just based on syntax and semantics, this approach more closely captures the actual reason fake news are called "fake": Because of their deviation from factual context. 

Our multi-layer perception architecture managed to beat the FakeNewsChallenge baseline F1 (macro avg.) score of 0.499 significantly, reaching a score of 0.89. 

This project was a submission for the German student AI competition 2023 (BWKI) and got us awarded the "Young Talent Award" as one of the finalists.

[GitHub](https://github.com/unreally-ai)

[Project Report (German)](/files/Fehlinformationen_durch_Kontext_erkennen.pdf)
