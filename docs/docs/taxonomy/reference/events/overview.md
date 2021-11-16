---
sidebar_position: 3
slug: /taxonomy/events
title: Overview
sidebar_label: Overview
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Mermaid from '@theme/Mermaid';

Events must provide an `id` and optionally can, but most likely will, carry a list of 
[LocationContexts](/taxonomy/reference/location-contexts/overview.md) and 
[GlobalContexts](/taxonomy/reference/global-contexts/overview.md). Additionally, every event must have an 
[ApplicationContext](/taxonomy/reference/global-contexts/ApplicationContext.md) to be able to distinguish from 
what application the event originated.

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
    AbstractEvent --> InteractiveEvent;
    InteractiveEvent["InteractiveEvent<br /><span class='properties'>requires:<br />SectionContext</span>"] --> ClickEvent;
    InteractiveEvent --> InputChangeEvent["InputChangeEvent<br /><span class='properties'>requires:<br />InputContext</span>"];
    AbstractEvent --> NonInteractiveEvent;
    NonInteractiveEvent --> CompletedEvent;
    NonInteractiveEvent --> AbortedEvent["AbortedEvent<br /><span class='properties'>requires:<br />ErrorContext</span>"];
    NonInteractiveEvent --> DocumentLoadedEvent["DocumentLoadedEvent<br /><span class='properties'>requires:<br />WebDocumentContext</span>"];
    NonInteractiveEvent --> URLChangeEvent["URLChangeEvent<br /><span class='properties'>requires:<br />WebDocumentContext</span>"];
    NonInteractiveEvent --> ApplicationLoadedEvent["ApplicationLoadedEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    NonInteractiveEvent --> SectionVisibleEvent["SectionVisibleEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    NonInteractiveEvent --> SectionHiddenEvent["SectionHiddenEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    NonInteractiveEvent --> VideoEvent["VideoEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
    VideoEvent --> VideoLoadEvent;
    VideoEvent --> VideoPauseEvent;
    VideoEvent --> VideoStopEvent;
    VideoEvent --> VideoStartEvent;
`} 
  caption="Diagram: Events" 
  baseColor="blue" 
  links={[
    { name: 'AbstractEvent', to: '/taxonomy/reference/events/AbstractEvent' },
    { name: 'NonInteractiveEvent', to: '/taxonomy/reference/events/NonInteractiveEvent' },
    { name: 'CompletedEvent', to: '/taxonomy/reference/events/CompletedEvent' },
    { name: 'AbortedEvent', to: '/taxonomy/reference/events/AbortedEvent' },
    { name: 'DocumentLoadedEvent', to: '/taxonomy/reference/events/DocumentLoadedEvent' },
    { name: 'URLChangeEvent', to: '/taxonomy/reference/events/URLChangeEvent' },
    { name: 'ApplicationLoadedEvent', to: '/taxonomy/reference/events/ApplicationLoadedEvent' },
    { name: 'SectionVisibleEvent', to: '/taxonomy/reference/events/SectionVisibleEvent' },
    { name: 'SectionHiddenEvent', to: '/taxonomy/reference/events/SectionHiddenEvent' },
    { name: 'VideoEvent', to: '/taxonomy/reference/events/VideoEvent' },
    { name: 'VideoLoadEvent', to: '/taxonomy/reference/events/VideoLoadEvent' },
    { name: 'VideoPauseEvent', to: '/taxonomy/reference/events/VideoPauseEvent' },
    { name: 'VideoStopEvent', to: '/taxonomy/reference/events/VideoStopEvent' },
    { name: 'VideoStartEvent', to: '/taxonomy/reference/events/VideoStartEvent' },
    { name: 'InteractiveEvent', to: '/taxonomy/reference/events/InteractiveEvent' },
    { name: 'ClickEvent', to: '/taxonomy/reference/events/ClickEvent' },
    { name: 'InputChangeEvent', to: '/taxonomy/reference/events/InputChangeEvent' }
  ]}
/>
