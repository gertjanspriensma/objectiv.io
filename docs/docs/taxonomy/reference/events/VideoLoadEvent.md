# VideoLoadEvent

A [VideoEvent](/taxonomy/reference/events/VideoEvent) that's emitted after a video completes loading.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
    AbstractEvent["AbstractEvent<br><span class='requires_context'>requires:<br />ApplicationContext<span class='properties'>location_stack: array<br />global_contexts: array<br />_type: string<br />id: string<br />time: integer</span></span>"];
    AbstractEvent --> NonInteractiveEvent;
    NonInteractiveEvent --> VideoEvent["VideoEvent<br /><span class='requires_context'>requires:<br />MediaPlayerContext</span>"];
    VideoEvent --> VideoLoadEvent;
    class VideoLoadEvent diagramActive;
`} 
  caption="Diagram: VideoLoadEvent" 
  baseColor="blue" 
  links={[
    { name: 'AbstractEvent', to: '/taxonomy/reference/events/AbstractEvent' },
    { name: 'NonInteractiveEvent', to: '/taxonomy/reference/events/NonInteractiveEvent' },
    { name: 'VideoEvent', to: '/taxonomy/reference/events/VideoEvent' },
    { name: 'VideoLoadEvent', to: '/taxonomy/reference/events/VideoLoadEvent' }
  ]}
/>

### Requires
- None.