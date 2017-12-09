App: Jamming
By: Robert Tolentino (https://github.com/rttolentino)

Intro:
This program is a playlist builder built and designed to work with Spotify. With that in mind, you should have a Spotify account before you try to use this app. (Alternatively, you can just "borrow" someone else's account for a bit. But, that's on you.) This was bootstrapped using "Create React App" (https://github.com/facebookincubator/create-react-app). See "React_README.md" for more information about the functionality provided by "Create React App" specifically.

The original idea for this app is from CodeAcademy's "Build Front-End Web Apps" intensive course. See this page for more details: https://www.codecademy.com/pro/intensive/build-frontend-web-apps-from-scratch

Setup:
- Pull code to local machine
- Create ".config.json" in "/src"
  - .config.json should have the following format:

{
  "clientID"    : "Your-Spotify-app-Client-ID",
  "redirectURI" : "Your-desired-redirect-URI"
}

  - A defult value for the redirect URI could be "http://localhost:3000/"
- From the command line/terminal, run "npm install" anywhere in the Jamming folder
  - "npm install" may take a moment--wait for the terminal to give you back control

Use:
- From the command line/terminal, run "npm run start" anywhere in the Jamming folder
  - After a moment, it should launch the app in your browser
- The first time it's loaded, the app will automatically redirect you to a login page for Spotify
- After logging into Spotify, enter a song, artist, or album name in the search bar and click "Search"
- Click the "+" icon next to any song you want to add to your playlist--repeat search and add new songs as necessary
- If you want to remove a song that you added to the playlist, click on the "-" icon
- You can change the name of your playlist to whatever you like--or leave it as the default, it's up to you
- Once you have your playlist setup, click on "Save to Spotify" button--your playlist will clear out, you can now make another playlist or just close the app

Issues:
- Please report any problems you find by creating an issue on GitHub:
  https://github.com/rttolentino/Jamming/issues


Thanks for checking out my work!
  ~ Rob
