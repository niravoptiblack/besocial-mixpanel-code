# besocial-mixpanel-code

Tracking plan - https://docs.google.com/spreadsheets/d/1gOszLg9VuztScwEZrOfp9AKJboAbm3je4p3YkhuS0fg/edit?gid=932615905#gid=932615905

https://docs.mixpanel.com/docs/tracking-methods/sdks/react-native

https://www.npmjs.com/package/mixpanel-react-native

https://github.com/mixpanel/mixpanel-react-native


**Besocial-mobile-latest/utils/mixpanel.ts**


import { Mixpanel } from "mixpanel-react-native";

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel(
  "29b4c6d678d2775528dcf71c94f8069e",
  trackAutomaticEvents
);

mixpanel.init();
mixpanel.registerSuperProperties({ Source: "App" });    // this needs to be dynamic based on android or ios

export default mixpanel;

**Besocial-mobile-latest/hooks/use-track-events.ts**


import { useCallback } from "react";
import mixpanel from "../utils/mixpanel";
import { MixpanelProperties } from "mixpanel-react-native";

export default function useTrackEvent(eventName: string) {
  return useCallback(
    (properties?: MixpanelProperties) => {
      try {
        mixpanel.track(eventName, properties);
      } catch (e) {
        console.error(e);
      }
    },
    [eventName]
  );
}


//// Sample event - frontend


 const trackEvents = useTrackEvent("Navigation");

  console.log(user, "user")

  return (
    <>
    {user && <NavigationContainer
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          routeNameRef.current = currentRouteName;

          trackEvents({
            event: "Navigation",
            properties: {
              time: new Date().toISOString(),
              screen: currentRouteName,
              previousScreen: previousRouteName,
            },
          });
        }
      }}
