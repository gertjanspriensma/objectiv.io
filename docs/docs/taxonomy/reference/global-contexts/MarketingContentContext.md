# MarketingContentContext

An [AbstractMarketingContext](/taxonomy/reference/global-contexts/overview.md) used to differentiate similar content, or links within the same ad.

import Mermaid from '@theme/Mermaid';

<Mermaid chart={`
	graph LR
	    AbstractContext["AbstractContext<br><span class='properties'>id: string<br />_type: string</span>"] --> AbstractGlobalContext;
        AbstractGlobalContext --> AbstractMarketingContext;
        AbstractMarketingContext --> MarketingContentContext["MarketingContentContext<br><span class='properties'>requires: MarketingBaseContext<br />content: string</span>"];
    class MarketingContentContext diagramActive;
`} 
  caption="Diagram: MarketingContentContext inheritance" 
  baseColor="blue" 
  links={[
        { name: 'AbstractGlobalContext', to: '/taxonomy/global-contexts' },
        { name: 'AbstractMarketingContext', to: '/taxonomy/global-contexts' }
]}
/>

### Requires
- [MarketingBaseContext](/taxonomy/reference/global-contexts/MarketingBaseContext).

### Properties
|           | type        | description
| :--       | :--         | :--
| **id**    | string      | Unique string to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | String literal used during serialization. Should always match the Context interface name.
| **content**    | string      | To differentiate similar content, or links within the same ad.

:::info setting of the properties
The backend will automatically set all the properties bases on the UTM parameters in the PathContext.
:::