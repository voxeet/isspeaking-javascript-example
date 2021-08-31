# isSpeaking JavaScript Example

Sample implementation for JavaScript (Web) of the isSpeaking method to poll for active user and update UI accordiingly.

## Getting Started

Replace `CUSTOMER_KEY` and `CUSTOMER_SECRET` inside `client.js` with your own key and secret.
To run the app locally, open `index.html` in your browser with a live server.

## What's Inside

### 📁 icons/

- svg files for button icons and dolbyio logo

### 📁 scripts/

- 📄 **client.js**
  - Initializes VoxeetSDK using customer key and secret
  - Opens a Voxeet session
- 📄 **ui.js**
  - handles polling for active speaker
  - handles joining conference, leaving conference, starting video, stopping video
  - UI helper functions
- 📄 **utils.js**
  - handles updating conference name in URL as user types conference name
- 📄 **video.js**
  - tracks which participant is in which video container
  - handles appending and removing video nodes on the DOM as participants join/leave conference and turns video on/off

### 📄 index.css

- styling
- additional formatting done with Bootstrap

### 📄 index.html

- main entry file
