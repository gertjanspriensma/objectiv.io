# trackSectionVisible

Triggers a [SectionVisibleEvent](/taxonomy/events/SectionVisibleEvent.md) for the given [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md).

```typescript
trackSectionVisible = (parameters: {
  element: TrackedElement;
  locationStack?: LocationStack;
  globalContexts?: GlobalContexts;
  tracker?: BrowserTracker;
  onError?: TrackerErrorHandlerCallback;
}) => void
```

:::info
`trackSectionVisible` is triggered automatically by [tagElement](/tracking/api-reference/locationTaggers/tagElement.md), [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md), [tagMediaPlayer](/tracking/api-reference/locationTaggers/tagMediaPlayer.md), [tagNavigation](/tracking/api-reference/locationTaggers/tagNavigation.md) and [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md).
:::

## Parameters
|          |             | type                                                                                                                                                     | default value
| :-:      | :--         | :--                                                                                                                                                      | :--           
| required | **element**    | [TrackedElement](/tracking/api-reference/definitions/TrackedElement.md)                           |
| optional | locationStack  | [LocationStack](/tracking/api-reference/core/LocationStack.md)                                    |
| optional | globalContexts | [GlobalContexts](/tracking/api-reference/core/GlobalContexts.md)                                  |
| optional | tracker        | [BrowserTracker](/tracking/api-reference/BrowserTracker.md)                                       |
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
`trackSectionVisible` is a void function.

## Usage example

```typescript jsx
import { trackSectionVisible } from '@objectiv/tracker-browser';
```

```typescript jsx
<Modal
  onShow={(event) => {
    trackSectionVisible({ element: event.target })
  }}
  onHide={(event) => {
    trackSectionHidden({ element: event.target })
  }}
>
  ...
</Modal>
```

```typescript jsx
const elementRef = createRef();
...
useEffect(() => {
  trackSectionVisible({ element: elementRef.current });
  return () => {
    trackSectionHidden({ element: elementRef.current });
  }
}, [])
...
return (
  <div ref={elementRef}>
    ...
  </div>
)
```

<br />

:::tip Did you know ?
`trackSectionVisible` is just syntactic sugar on top of [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).
:::

<br />

:::info See also
- [trackSectionHidden](/tracking/api-reference/eventTrackers/trackSectionHidden.md)
- [trackVisibility](/tracking/api-reference/eventTrackers/trackVisibility.md)
- [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md)
  :::
