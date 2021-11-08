---
sidebar_position: 6
title: Trackers
slug: trackers
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Objectiv currently supports three trackers:
* [Browser Tracker](#browser-tracker) for installation into websites and JS web apps via npm.
* [React Tracker](#react-tracker) for installation into React web apps.
* [Angular Tracker](#angular-tracker) for installation into Angular web apps.

## Browser Tracker
The [Browser Tracker](/tracking/api-reference/general/BrowserTracker.md) is available via npm. It supports 
core tracking methods out of the box.

Example usage:
```js
import { trackClick } from '@objectiv-analytics/tracker-browser';
```
```js
<div
  onClick={(event) => {
    trackClick({ element: event.target })
  }}
/>
```

By default, the Browser Tracker automatically tracks 
[ApplicationLoaded](/tracking/api-reference/eventTrackers/trackApplicationLoaded.md) and 
[URLChange](/tracking/api-reference/eventTrackers/trackURLChange.md) events.

## React Tracker
The React Tracker is available via npm to be directly installed into your React application. It supports all 
core tracking methods out of the box, and provides added shorthands for React components.

Example usage:
```js
import { tagButton } from '@objectiv-analytics/tracker-browser';
```
```js
<Button {...tagButton({ id: 'button-2', text: "Do It!" })}>Do It!</Button>
```

See the [How-to Guide for React](/tracking/how-to-guides/react/getting-started.md) to get started.

By default, the React Tracker automatically tracks 
[ApplicationLoaded](/tracking/api-reference/eventTrackers/trackApplicationLoaded.md) and 
[URLChange](/tracking/api-reference/eventTrackers/trackURLChange.md) events.

## Angular Tracker
The React Tracker is available via npm to be directly installed into your React application. It supports all 
core tracking methods out of the box, and provides added shorthands for Angular components.

Example usage:
```js
// a button tag 
<button [tagButton]="{ id: 'button-1', text: 'Click Me!' }">Click Me!</button>
```

See the [How-to Guide for Angular](/tracking/how-to-guides/angular/getting-started.md) to get started.

By default, the Angular Tracker automatically tracks 
[ApplicationLoaded](/tracking/api-reference/eventTrackers/trackApplicationLoaded.md) and 
[URLChange](/tracking/api-reference/eventTrackers/trackURLChange.md) events.

## Extensibility: Plugins
The Core Tracker is extensible through plugins. Each plugin can control when it's enabled, e.g. only if a Web
environment is available.

Three plugins are supported out of the box, and automatically enabled when the environment supports them:
* `application-context`: adds a Global [ApplicationContext](/taxonomy/global-contexts/ApplicationContext.md) 
  to each Event;
* `web-document-context`: adds a [Location](/tracking/core-concepts/locations.md) 
  [WebDocumentContext](/taxonomy/location-contexts/WebDocumentContext.md) to each Event;
