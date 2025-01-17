# tagLink

Tags a [BrowserTracker:TaggableElement](/tracking/browser/api-reference/definitions/TaggableElement.md) to be tracked as [LinkContext](/taxonomy/reference/location-contexts/LinkContext.md).

```typescript
tagLink = (parameters: {
  id: string,
  href: string,
  options?: TagLocationOptions,
  onError?: TrackerErrorHandlerCallback
}) => TagLocationReturnValue
```

:::info
This attribute directive builds on top of [BrowserTracker:tagLink](/tracking/browser/api-reference/locationTaggers/tagLink.md)
:::

## Parameters
|          |          | type                                                                                              | default value
| :-:      | :--      | :--                                                                                               | :--           
| required | **id**   | string                                                                                            |
| required | **href** | string                                                                                            |
| optional | options  | [BrowserTracker:TagLocationOptions](/tracking/browser/api-reference/definitions/TagLocationOptions.md)                   | `{ trackClicks: true }`
| optional | onError  | [BrowserTracker:TrackerErrorHandlerCallback](/tracking/browser/api-reference/definitions/TrackerErrorHandlerCallback.md) | `console.error`

## Returns
[BrowserTracker:TagLocationReturnValue](/tracking/browser/api-reference/definitions/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [BrowserTracker:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)

## Usage examples

```html
<a [tagLink]="{ id: 'lnk-id', href: '/path' }" href="/path">Go!</a>
```

<br />

:::info See also
- [tagPressable](/tracking/angular/api-reference/locationTaggers/tagPressable.md)
- [tagExpandable](/tracking/angular/api-reference/locationTaggers/tagExpandable.md)
- [tagLocation](/tracking/angular/api-reference/locationTaggers/tagLocation.md)
- [BrowserTracker:trackPressEvent](/tracking/browser/api-reference/eventTrackers/trackPressEvent.md)
:::
