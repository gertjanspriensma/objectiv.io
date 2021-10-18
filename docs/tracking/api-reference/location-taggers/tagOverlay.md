# tagOverlay

Tags [Taggable Element](/tracking/core-concepts/elements.md#taggable-elements) to be tracked as [OverlayContext](/taxonomy/location-contexts/OverlayContext.md).

```typescript
tagOverlay = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                | default value
| :-:      | :--     | :--                                                                                 | :--           
| required | **id**  | string                                                                              |
| optional | options | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)         | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagOverlay } from '@objectiv/tracker-browser';
```

```typescript jsx
<div {...tagOverlay({ id: 'modal-id' })}>
  …
</div>
```

```typescript jsx
<Modal {...tagOverlay({ id: 'modal-id' })}>
  …
</Modal>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<div [tagOverlay]="{ id: 'modal-id' }">
  …
</div>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagOverlay` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />


:::info See also
- [tagElement](/tracking/api-reference/location-taggers/tagNavigation.md)
- [tagNavigation](/tracking/api-reference/location-taggers/tagNavigation.md)
- [tagMediaPlayer](/tracking/api-reference/location-taggers/tagMediaPlayer.md)
- [tagExpandableElement](/tracking/api-reference/location-taggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
:::