import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { getTracker, makeTracker } from "@objectiv/tracker-browser";
import React, { useEffect } from 'react';

function Root({children}) {
  const { siteConfig = {} } = useDocusaurusContext();
  const { trackerApplicationId, trackerEndPoint, trackerConsoleEnabled } = siteConfig.customFields;

  useEffect(
    () => {
      let trackerActive = false;
      if (Cookiebot.consent.statistics) {
        trackerActive = true;
      }
      makeTracker({
        applicationId: trackerApplicationId,
        endpoint: trackerEndPoint,
        active: trackerActive,
        console: trackerConsoleEnabled ? console : undefined
      });

      window.addEventListener('CookiebotOnAccept', function (e) {
        if (Cookiebot.consent.statistics) {
          // Activate tracker, which sets statistics cookies
          getTracker().setActive(true);
          console.log("Objectiv Tracker activated");
        } 
      }, false);
    },
    [] // no dependencies => no side effects on re-render
  )
  
  return (
    <>
      {children}
    </>
  );
}

export default Root;
