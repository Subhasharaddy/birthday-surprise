# Birthday Surprise Website 🎂✨

A beautifully designed, customizable, and interactive birthday website created to make someone feel truly special. This project is built with HTML, CSS, and Vanilla JavaScript and is fully prepared to be hosted for free on GitHub Pages.

## 🌟 Features

- **Stunning UI/UX:** Premium design with glassmorphism, animated gradients, and floating background shapes.
- **Interactive Elements:** Features a surprise reveal button, a clickable envelope that opens to reveal a letter, and an interactive birthday cake.
- **Countdown Timer:** Automatically counts down to the big day and displays a celebration message when the time arrives.
- **Beautiful Gallery:** A masonry-style memory gallery with hover effects and a lightbox viewer.
- **Confetti Celebration:** Interactive confetti that rains down on button clicks.
- **Fully Customizable:** Every text, color, image, and date can be easily changed in one simple `config.js` file.
- **Responsive:** Looks perfect on mobile phones, tablets, and desktop screens.
- **No Backend Required:** Completely static and works directly from GitHub Pages.

## 🚀 How to Customize

You do not need to touch the complex HTML or CSS to personalize this website. Everything is controlled from the `config.js` file.

1. Open `config.js` in any text editor.
2. Edit the fields inside the `CONFIG` object:
   - **`recipientName` & `senderName`**: Change the names.
   - **`colors`**: Modify the hex codes to match their favorite colors.
   - **`countdown.targetDate`**: Set the birthday date in `YYYY-MM-DDTHH:MM:SS` format (e.g., `2026-10-15T00:00:00`).
   - **`message.content`**: Write your own personalized birthday letter.
   - **`memories.photos`**: Update the `path` and `caption` for your images.
   - **`reasons.items`**: Add specific reasons why they are special.

## 📸 Adding Your Own Photos & Music

1. Gather your images (square or landscape work best).
2. Place them inside the `assets/` folder.
3. Update the file paths in `config.js` under the `memories.photos` section to match your new file names (e.g., `assets/my-photo.jpg`).
4. **(Optional)** Add an MP3 file named `music.mp3` inside the `assets/` folder to enable background music.

## 💻 How to Preview Locally

Simply open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge). Because it uses relative paths and no backend, it will work right out of the box!

## 🌍 How to Host on GitHub Pages (Free)

Follow these simple steps to put the website online so you can share the link:

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/) and log in (or create an account).
2. Click the **"+"** icon in the top right and select **"New repository"**.
3. Name your repository (e.g., `happy-birthday-alex`).
4. Make sure it is set to **Public**.
5. Do **NOT** initialize it with a README, .gitignore, or license.
6. Click **"Create repository"**.

### Step 2: Upload Your Files
1. On your computer, make sure you are inside your project folder (`birthday-surprise`).
2. Open your terminal or command prompt in this folder.
3. Run the following Git commands sequentially:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Birthday Website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
   git push -u origin main
   ```
   *(Replace the URL with the one GitHub provided on the empty repository page)*

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on the **"Settings"** tab (the gear icon).
3. On the left sidebar, scroll down and click on **"Pages"**.
4. Under the **"Build and deployment"** section, find **"Source"** and ensure it says "Deploy from a branch".
5. Under **"Branch"**, select `main` from the dropdown and leave the folder as `/ (root)`.
6. Click **"Save"**.

### Step 4: Share the Link!
Wait a couple of minutes, refresh the Pages settings page, and you will see a message saying: 
**"Your site is live at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`"**. 
Copy this link and send it to your special someone!

## ✅ Pre-Launch Checklist

- [ ] I have updated all the text in `config.js`.
- [ ] I have added my own photos to the `assets` folder.
- [ ] I have double-checked the countdown date.
- [ ] I opened `index.html` on my computer and everything looks good.
- [ ] I successfully pushed the files to GitHub.
- [ ] GitHub Pages is enabled and the live link works.
