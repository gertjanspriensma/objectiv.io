# makeInputContext

Factors a uniquely identifiable [InputContext](/taxonomy/reference/location-contexts/InputContext.md).

```typescript
makeInputContext = (props: { 
  id: string
}) => LocationContext<InputContext>
```  

## Parameters
|          |        | type    | default value |
|:--------:|:-------|:--------|:--------------|
| required | **id** | string  |               |

## Returns
`LocationContext<InputContext>`

## Usage

```ts
import { makeInputContext } from "@objectiv/tracker-react";
```

```ts
const inputContextInstance = makeInputContext({ id: 'email' });
```

<br/>

:::tip Did you know ?
`makeInputContext` internally uses [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md).
:::

<br />

:::info See also
- [makeContentContext](/tracking/react/api-reference/common/factories/makeContentContext.md)
- [makeLinkContext](/tracking/react/api-reference/common/factories/makeLinkContext.md)
- [makeMediaPlayerContext](/tracking/react/api-reference/common/factories/makeMediaPlayerContext.md)
- [makeNavigationContext](/tracking/react/api-reference/common/factories/makeNavigationContext.md)
- [makeOverlayContext](/tracking/react/api-reference/common/factories/makeOverlayContext.md)
- [makePressableContext](/tracking/react/api-reference/common/factories/makePressableContext.md)
- [makeRootLocationContext](/tracking/react/api-reference/common/factories/makeRootLocationContext.md)
- [makeLocationContext](/tracking/react/api-reference/common/factories/makeLocationContext.md)
:::
