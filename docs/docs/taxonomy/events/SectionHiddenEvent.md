# SectionHiddenEvent

A [NonInteractiveEvent](/taxonomy/events/NonInteractiveEvent.md) that's emitted after a section ([SectionContext](/taxonomy/location-contexts/SectionContext.md)) has become invisible.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"] --> NonInteractiveEvent;
    NonInteractiveEvent --> SectionHiddenEvent["SectionHiddenEvent<br /><span class='properties'>requires:<br />SectionContext</span>"];
    click AbstractEvent "/docs/taxonomy/events/AbstractEvent" "See more details" _self;
    click NonInteractiveEvent "/docs/taxonomy/events/NonInteractiveEvent" "See more details" _self;
`} caption="Figure: Diagram of SectionHiddenEvent inheritance" baseColor="blue" />

### Requires
- [SectionContext](/taxonomy/location-contexts/SectionContext.md).