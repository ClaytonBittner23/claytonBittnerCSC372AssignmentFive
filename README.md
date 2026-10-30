# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


## Below this line is Assignment Five related stuff, I dont wanna mess with the auto put in stuff.


## Description
How to run the project is simple. First, clone the repo to your machine, then run "npm install" to get the needed files. Then, simply run "npm run dev" to host the project locally on your machine. Once you are on the main page, it will auto search for Fullmetal Alchemist. And while this is a great show, if you want to search for one yourself, you simply type in the search bar and hit submit. Once you do so, 10 shows will be displayed as cards containg most info about them. If you want to see more info about a specfic show, click the link at the top of the card to go view a page specfic to that show's id, with more information, such as the top 15 cast members and their characters. When you have had your fill, hit the return link at the top of the page to go back to the gallery. That is all! A link and credit to TVmaze is at the footer of the main Gallery page.

## React Concepts
1) Components: These were used and in their own seperate files, all under src/claytonElements folder
2) Lists/Keys: These were used in ShowDetails.jsx and ShowCards.jsx to link the actor and character via the id
3) Condtional Rendering: Used in ShowCards.jsx to see if the cast list was greater than 0 to display it or not
4) Controlled Form: Used in SearchForm.jsx for when the user hits the submit button
5) State: Used in Gallery.jsx for setting and editing variables
6) Effects/Data Fetching; Used in Gallery.jsx to fetch data from the TvMaze api
7) Lifting State Up: Gallery.jsx passes handleSerch to SearchForm.jsx using prop called onSearch
8) React Router: Used in App.jsx for the two routes that are the gallery and details pages.

## Reflection
I want to get this out of the way and front and center as the assignment requires, I did use AI, chatGPT specfically to help guide me through this assignment and using React. All code was commented, implemented and verified by me, there were some things it would say to do and I would choose to do it my way, to better match what I learned in class, such as doing most of the work in App.jsx and leaving main.jsx alone. No agent or anything had direct access to the files, I put everything in here, but yes AI assistance was used.

The states live in their respective files for the most part. If a file did not need to use that, it was not put into it because it was unnessicary. If you look at SearchForm.jsx, the only state it had was query, and that was because all it was doing was getting the userinput, setting it to query, then sending that to Gallery.jsx for the actual API call.

I think Assignment five was overall harder than four. There are somethings that React does that 100% help streamline things, passing via props and having my utils in a seperate file was great, and not to mention using AI guidence to put me on the right track was of course helpful. But at the end of the day, this was still pretty new to me. Heck API calls themselves are new to me, and four was a blend of something I knew was was familar with the new stuff, but this was basically me doing new concepts in a new format that I was not fluent in. That being said, I do think that this TvMaze task is way more smooth to hammer out using React, I fully reconize that the issues I struggled with is because I am a slow learner. But who can blame me? I got a JavaScript textbook for my 12 year old christmas gift lol. Im biased! But the component structure of React was way more streamlined than editing the DOM with vanilla JavaScript.







