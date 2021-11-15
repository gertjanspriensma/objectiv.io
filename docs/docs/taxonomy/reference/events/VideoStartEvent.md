# VideoStartEvent

A [VideoEvent](/taxonomy/reference/events/VideoEvent) that's emitted after a video starts playback.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
    AbstractEvent --> NonInteractiveEvent;
    NonInteractiveEvent --> VideoEvent["VideoEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
    VideoEvent --> VideoStartEvent;
    class VideoStartEvent diagramActive;
`} 
  caption="Diagram: VideoStartEvent" 
  baseColor="blue" 
  links={[
    { name: 'AbstractEvent', to: '/taxonomy/reference/events/AbstractEvent' },
    { name: 'NonInteractiveEvent', to: '/taxonomy/reference/events/NonInteractiveEvent' },
    { name: 'VideoEvent', to: '/taxonomy/reference/events/VideoEvent' },
    { name: 'VideoStartEvent', to: '/taxonomy/reference/events/VideoStartEvent' }
  ]}
/>

### Requires
- None.