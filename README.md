# Google Cloud Console app
A small Electron wrapper around https://console.cloud.google.com.

To enable interesting extensions/ideas:
- security:
  - [ ] auto logout after X minutes
  - [ ] add confirm dialogs on all PUT/POST/DELETE API-calls for certain cloud projects
- quicker navigation:
  - [ ] have a menubar that is open before the page is loaded
  - [ ] remember often used navigation items
  - [ ] switch between project while retaining navigation history
  - [ ] open the same page for multiple projects

## Notice
This is a WIP. Feel free to create a PR for missing features.
It is recommended to build this application from source, because you can vet the code yourself.
It is not recommended to login with your GCP credentials in an application downloaded from the internet.
