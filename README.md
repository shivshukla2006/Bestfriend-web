A Special Surprise for Friendship Day 💖
This is a unique, single-page React website created as a personalized surprise for a best friend on Friendship Day. It's designed to be a heartfelt and interactive celebration of your friendship, filled with personal touches, inside jokes, and shared memories.

The website starts with a clickable gift box, which "unwraps" to reveal the full, animated site.

✨ Features
🎁 Gift Box Entrance: An animated gift box that must be clicked to reveal the main website, adding a layer of surprise.

⏳ Countdown Timer: A live countdown to Friendship Day (the first Sunday of August).

📜 Friendship Timeline: A scrolling timeline showcasing key moments of your friendship.

💌 Reasons You're the Best: A personalized list of all the things you appreciate about your friend.

😂 Inside Joke Vault: An interactive section where your friend can click to "reveal" the punchlines to your shared inside jokes.

🚀 Future Adventures: A fun wishlist of all the things you plan to do together in the future.

💝 Friendship Coupon Book: A collection of digital "coupons" your friend can redeem for fun activities.

🧠 Friendship Quiz: An interactive, multiple-choice quiz about your friendship that ends with a confetti celebration.

🤫 Secret Message: A special, hidden message that only appears on or after the official date of Friendship Day.

📱 Fully Mobile-Responsive: Looks great on desktops, tablets, and phones.

🚀 How to Use
To get this project running on your computer, you need to have Node.js and npm installed.

1. Clone the Repository
First, get the project files. If you have git installed, you can clone it. Otherwise, just download the code as a ZIP file and unzip it.

2. Navigate to the Project Folder
Open your terminal or command prompt and move into the project directory:

cd bestie-surprise

3. Install Dependencies
Install all the necessary packages (like React and the confetti library) by running:

npm install

4. Run the Development Server
Start the website locally by running:

npm start

This will automatically open the website in your web browser at http://localhost:3000. The site will auto-refresh whenever you make changes to the code.

🎨 Customization
This is the most important part! To make this website truly special for your friend, you need to personalize it.

All customizations happen in one file: src/App.js.

Open this file and edit the data constants at the very top:

FRIEND_NAME & YOUR_NAME: Change these to your friend's name and your name.

JOKE_DATA: Update the prompt and punchline for each of your inside jokes.

COUPON_DATA: Edit the title and description for each friendship coupon.

SECRET_MESSAGE: Write the personal message you want to appear on Friendship Day.

TIMELINE_DATA: Change the date and text to reflect your actual friendship timeline.

REASONS_DATA: List all the unique reasons you appreciate your friend.

FUTURE_ADVENTURES_DATA: Fill this with your shared dreams and plans.

QUIZ_QUESTIONS: Customize the questions and answers for the quiz. Important: For each question, make sure one answer has isCorrect: true.

🌐 Deployment
Once you have finished customizing the website, you can share it with your friend by deploying it online for free.

1. Build the Project
First, stop the development server (press Ctrl + C in the terminal). Then, run the build command:

npm run build

This will create a new build folder in your project directory. This folder contains the optimized, final version of your website.

2. Deploy with Netlify Drop
The easiest way to get your site online is with Netlify:

Go to app.netlify.com/drop in your browser.

Drag and drop the entire build folder from your project onto the Netlify website.

That's it! Netlify will upload your files and give you a unique, shareable link (like random-name-12345.netlify.app).

You can now send this link to your best friend for the ultimate Friendship Day surprise!