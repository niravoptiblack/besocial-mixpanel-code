const EventList = () => {
  return (
    <div>
      <h1>App Lifecycle Events</h1>
      <ul>
        <li>app_launched</li>
          const trackEvents = useTrackEvent("App Launched");
        
            trackEvents({
              event: "app_launched",
              properties: {
                time: new Date().toISOString(),
              },
            });
        
        <li>app_install</li>

         const trackEvents = useTrackEvent("App Launched");
        
            trackEvents({
              event: "app_install",
              properties: {
                time: new Date().toISOString(),
              },
            });
        
        <li>app_uninstall</li>

           const trackEvents = useTrackEvent("App Launched");
        
            trackEvents({
              event: "app_uninstall",
              properties: {
                time: new Date().toISOString(),
              },
            });
        
      </ul>

      <h1>App Screen Events</h1>
      <ul>
        <li>navigation</li>
      </ul>

      <h1>Auth Events</h1>
      <ul>
        <li>signedin</li>
        <li>signup</li>
        <li>onboarding_complete</li>
        <li>loggedin</li>
        <li>loggedout</li>
      </ul>

      <h1>Video Events</h1>
      <ul>
        <li>video_played</li>
        <li>video_uploaded</li>
      </ul>

      <h1>Tech Events</h1>
      <ul>
        <li>server_error</li>
      </ul>

      <h1>Account & Profile Events</h1>
      <ul>
        <li>profile_updated</li>
        <li>account_updated</li>
      </ul>

      <h1>Discovery Events</h1>
      <ul>
        <li>search</li>
      </ul>

      <h1>Creator Events</h1>
      <ul>
        <li>followed</li>
      </ul>

      <h1>Content Events</h1>
      <ul>
        <li>commented_on_content</li>
        <li>liked_content</li>
        <li>shared_content</li>
      </ul>

      <h1>Engagement Events</h1>
      <ul>
        <li>browse_feed</li>
      </ul>

      <h1>Marketing Events</h1>
      <ul>
        <li>ad_data</li>
      </ul>
    </div>
  );
};

export default EventList;
