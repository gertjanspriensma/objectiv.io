# TrackedNav

Generates a `<nav>` Element wrapped in a [NavigationContext](/taxonomy/reference/location-contexts/NavigationContext.md) identified as `nav`, unless differently specified. 

```tsx
TrackedNav: (props: {
  children: ReactNode,
  id?: string,
  forwardId?: boolean
}) => ReactElement
```

## Parameters
|          |              | type      | default value |
|:--------:|:-------------|:----------|:--------------|
| required | **children** | ReactNode |               |
| optional | id           | string    | `nav`         |
| optional | forwardId    | boolean   | `false`       |

## Returns
`ReactElement`

## Automatic Events
None.

## Usage example

```jsx
import { TrackedNav } from '@objectiv/tracker-react';
```

```jsx
<div>
  <header>
    ...
  </header>
  <main>
    ...
  </main>
  <footer>
    ...
  </footer>
  <aside>
    <TrackedNav>
      <a href={'/'}>Homepage</a>
      <a href={'/privacy'}>Privacy</a>
      <a href={'/contact'}>Contact</a>
    </TrackedNav>
  </aside>
</div>
```

<br />

:::tip Did you know ?
`TrackedNav` internally uses [TrackedNavigationContext](/tracking/react/api-reference/trackedContexts/TrackedNavigationContext.md).
:::

<br />

:::info See also
- [TrackedAnchor](/tracking/react/api-reference/trackedElements/TrackedAnchor.md)
- [TrackedButton](/tracking/react/api-reference/trackedElements/TrackedButton.md)
- [TrackedDiv](/tracking/react/api-reference/trackedElements/TrackedDiv.md)
- [TrackedFooter](/tracking/react/api-reference/trackedElements/TrackedFooter.md)
- [TrackedHeader](/tracking/react/api-reference/trackedElements/TrackedHeader.md)
- [TrackedInput](/tracking/react/api-reference/trackedElements/TrackedInput.md)
- [TrackedMain](/tracking/react/api-reference/trackedElements/TrackedMain.md)
- [TrackedSection](/tracking/react/api-reference/trackedElements/TrackedSection.md)
:::
