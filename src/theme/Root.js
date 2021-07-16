import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  ReactTracker,
  TrackerContextProvider,
  useTrackApplicationLoaded
} from "@objectiv/tracker-react";
import React from 'react';

function Root({children}) {
  const { siteConfig = {} } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint } = siteConfig.customFields;
  const tracker = new ReactTracker({ applicationId: trackerApplicationId, endpoint: trackerEndPoint });

  useTrackApplicationLoaded(tracker);

  return (
    <TrackerContextProvider tracker={tracker}>
      {children}
    </TrackerContextProvider>
  );
}

export default Root;