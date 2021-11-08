# tagChildren

Tags a [Taggable Element](/tracking/core-concepts/tagging.md#taggable-elements) as a root to track one or more of its children by specifying a set of **ChildrenTaggingQuery** objects.

```typescript
tagChildren = (parameters: ChildrenTaggingQueries) => TagLocationReturnValue
```

:::warning
`tagChildren` is a performance-sensitive API. Avoid using it whenever [Location Taggers](/tracking/api-reference/locationTaggers/overview.md) could be used instead.
:::

### Parameters
|          |                | type
| :-:      | :--            | :--                                                                                       
| required | **parameters** | [ChildrenTaggingQueries](/tracking/api-reference/definitions/ChildrenTaggingQueries.md)
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md)

## tagChild - Single query shorthand
Syntactic sugar API built on top of **tagChildren** which processes a single ChildrenTaggingQuery.

```typescript
tagChild = (parameters: ChildrenTaggingQuery) => TagLocationReturnValue
```

### Parameters
|          |                | type
| :-:      | :--            | :--                                                                                       
| required | **parameters** | [ChildrenTaggingQuery](/tracking/api-reference/definitions/ChildrenTaggingQueries.md)
| optional | onError        | [TrackerErrorHandlerCallback](/tracking/api-reference/definitions/TrackerErrorHandlerCallback.md)

## Returns
[TagChildrenReturnValue](/tracking/api-reference/definitions/TagChildrenReturnValue.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagChildren } from '@objectiv-analytics/tracker-browser';
```

```typescript jsx
<div
  {...tagChildren([
    {
      queryAll: 'button[aria-label="Previous"]',
      trackAs: tagButton({ id: 'prev', text: 'Previous' })
    },
    {
      queryAll: 'button[aria-label="Next"]',
      trackAs: tagButton({ id: 'next', text: 'Next' })
    }
  ])}
>
  ...
</div>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<div
  [tagChildren]="[
    {
      queryAll: 'button[aria-label=&quot;Previous&quot;]',
      trackAs: tagButton({ id: 'prev', text: 'Previous' })
    },
    {
      queryAll: 'button[aria-label=&quot;Next&quot;]',
      trackAs: tagButton({ id: 'next', text: 'Next' })
    }
  ]"
>
  ...
</div>
```

  </TabItem>
</Tabs>


<br />

:::info See also
- [Location Taggers](/tracking/api-reference/locationTaggers/overview.md)
- [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md)
- [Tagged Elements Observer](/tracking/core-concepts/trackers.md#tagged-elements-observer)
:::
