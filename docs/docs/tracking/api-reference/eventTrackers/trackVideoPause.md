# trackVideoPause

Triggers a [VideoPauseEvent](/taxonomy/events/VideoPauseEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

```typescript
trackVideoPause = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element**    | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/general/BrowserTracker.md)                               |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackVideoPause` is a void function.

## Usage example

```typescript jsx
import { trackVideoPause } from '@objectiv-analytics/tracker-browser';
```

```typescript jsx
<video
  play={(event) => {
    trackVideoStart({ element: event.target })
  }}
  pause={(event) => {
    trackVideoPause({ element: event.target })
  }}
/>
```

```typescript jsx
<YouTube
  onPlay={({ target: youTubePlayerInstance }) => {
    trackVideoStart({ element: youTubePlayerInstance.getIframe() })
  }}
  onPause={({ target: youTubePlayerInstance }) => {
    trackVideoPause({ element: youTubePlayerInstance.getIframe() })
  }}
/>
```

<br />

:::tip Did you know ?
`trackVideoPause` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackVideoStart](/tracking/api-reference/eventTrackers/trackVideoStart.md)
- [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
:::
