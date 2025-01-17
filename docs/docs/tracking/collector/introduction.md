---
sidebar_position: 1
title: Introduction
slug: /tracking/collector
---

# Collector

Objectiv's Collector provides an API and storage connectors for receiving, validating, and storing 
[Events](/taxonomy/reference/events/overview.md).

## First-party data
The Collector is self-hosted, on your own domain, so no data is ever sent to any third-party.

This first-party data approach has several advantages:

- You have full control over your data.
- Tracking is compliant with privacy legislation such as GDPR, CCPA and PECR.
- Adblockers can be avoided: first-party data tracking is ususally not covered by adblockers.

## Storage
Currently, the Collector can store Events in:
- A PostgreSQL database.
- The file system.

We aim to support more storage solutions in the near future.

## Validation
Objectiv's [Collector](/tracking/collector/getting-started.md) validates any incoming Event against the 
[Taxonomy and its properties](/taxonomy/reference/events/overview.md). If it fails, the Collector will respond with an 
error, and store the Event in the `NOK` folder on disk.

This means no Event sent to the Collector is ever discarded. This enables you to for instance 'repair' any 
failing Events and store them after the fact.

## Enrichment
The Collector can enhance your [Event](/taxonomy/reference/events/overview.md) data when it arrives, called 
**enrichment**. An enrichment either updates or populates fields of the 
[Event](/taxonomy/reference/events/overview.md), or adds Contexts.

Out of the box, the Collector provide a **sessions** enrichment, by setting a session cookie on the client
once it starts receiving [Events](/taxonomy/reference/events/overview.md) from it, and then adding a 
corresponding [SessionContext](/taxonomy/reference/global-contexts/SessionContext.md) to all 
[Events](/taxonomy/reference/events/overview.md) it receives.
