# Random Useless Facts

This is our first react project! We will be implement everything we have learned so far and other topic to see them in action.

## API

We will be using the [HTTP API for useless facts](https://uselessfacts.jsph.pl/). If you have never used an API, this will seem weird how the docs are writen. 

The routes that you are given are preceeded by `https://uselessfacts.jsph.pl/` so for example:

### ENDPOINT/RESPONSE
**THIS:** https://uselessfacts.jsph.pl/api/v2/facts/random?language=en

**RETURNS THIS:**

```json
{
    "id": "29fa57b8e8711069691de8625b28519b",
    "text": "1 in every 4 Americans has appeared someway or another on television.",
    "source": "djtech.net",
    "source_url": "http://www.djtech.net/humor/useless_facts.htm",
    "language": "en",
    "permalink": "https://uselessfacts.jsph.pl/api/v2/facts/29fa57b8e8711069691de8625b28519b"
}
```

## Acceptance Criteria:
Here's an acceptance criteria list for your React project:

1. **User Authentication:**
   - Users can log in using Firebase Authentication with Google.

2. **Fact Display:**
   - The app fetches random facts from the Useless Facts API and displays them to the user one at a time.

3. **User Interaction:**
   - Each fact displayed has two buttons: “Yes” (indicating the user knew the fact) and “No” (indicating the user did not know the fact).
   - When a button is clicked, the response is recorded with the fact text, user ID, and response (true for “Yes,” false for “No”) in Firebase Realtime Database.

4. **Data Saving:**
   - Each user’s interaction with a fact is saved in the Firebase Realtime Database with the following structure:
     - User ID
     - Fact text
     - Response (true/false)

5. **Viewing Responses:**
   - Users can view a list of facts they responded “Yes” to (facts they knew).
   - Users can view a list of facts they responded “No” to (facts they did not know).

6. **Database Structure:**
   - The data in Firebase Realtime Database is structured to associate each fact response with the corresponding user, ensuring easy retrieval of known and unknown facts.


---
[See Live Demo of this Template](https://drt-next-js-template-app-router.netlify.app/)

## Topics
- [Get Started](#get-started)
- [Starting the Project](#starting-the-project)
- [Deploying on Netlify](#deploying-on-netlify)
___
## Getting Started
### Use Template
#### 1. To get started, click the GREEN "Use this Template" button at the top of the repo
<img width="915" alt="Screen Shot 2022-07-06 at 12 54 01 PM" src="https://user-images.githubusercontent.com/29741570/177612998-4aac9237-5a1e-4f13-8ae0-468587521564.png">

#### 2. Make sure YOUR github account is selected in the dropdown and name your project
<img width="763" alt="Screen Shot 2022-07-06 at 12 54 48 PM" src="https://user-images.githubusercontent.com/29741570/177613126-dd38f678-7553-4f27-8a4a-75680f14d71e.png">

#### 3. Clone your new repo to your local machine
#### 4. Go to the **NEXT** section

## Starting the Project
1. Create a Firebase project and set up authentication. Use [these videos](https://vimeo.com/showcase/codetracker-firebase) as a refresher if needed.
1. Create a `.env` file at the root of the project
1. Copy/Paste the contents of the `.env.sample` file to your newly created `.env` file.
1. Copy over all of your Firebase values into the `.env` file.
1. Open the `package.json` file and change the `name` property to the name of your application, and `author` to  your name.
1. From your command line, be in the root directory and run `npm install` OR `npm i` for short.
1. Next, run `npm run prepare`. This command sets up husky to track eslint errors on commit that will make your deploy fail on Netlify.
1. Run `npx eslint . --ext .js,.jsx`
1. To start your application, run `npm run dev`. THIS IS THE COMMAND YOU WILL USE TO RUN YOUR DEVELOPMENT SERVER FROM NOW ON.
1. Open [http://localhost:3000](http://localhost:3000) with your browser.

### If you see this, you are set to go!
<img width="450" alt="Screen Shot 2022-07-06 at 1 07 27 PM" src="https://github.com/user-attachments/assets/deae25f0-01d5-44b4-be60-7297b0f6f0ef">

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTES:** 
- If you see the following error, you either did not follow all the setup steps correctly and failed to add your Firebase creds, or did not stop and restart your server after updating the env file. Go back and do that NOW.

<img width="1043" alt="Screen Shot 2022-07-06 at 11 18 45 AM" src="https://user-images.githubusercontent.com/29741570/177612501-c2628f18-4bbd-4de9-aae6-27ffba1172d6.png">

### Deploying on Netlify
Netlify will automatically detect your project and prepopulate the settings, but should something go wrong and it does not, here are the commands:

- Build Command: `npm run build`
- Publish directory: `.next`

#### Additional Steps to Take on Netlify
- Add Environmental Variables
    - Any Enviromental variables you are using in your `.env` file should be added to Netlify. 
        - Go to Site settings > Build & deploy > Environment > Environment variables and the keys and values there if you did not add them when you were deploying your site

- Update Firebase URL Settings
    - In Firebase under Authentication select sign in methods, scroll to Authorized domains. Add your Netlify URL.
        
## Learn More about Next.js
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
