# Deployment Guide

## 1. Configure Git (Required)
Before you can commit your code, you need to tell Git who you are. Run these commands in your terminal:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 2. Commit Your Code
I have already initialized the git repository and created a `.gitignore` file. Now you need to commit your files:

```bash
git add .
git commit -m "Initial commit"
```

## 3. Push to GitHub
1. Go to [GitHub.com](https://github.com) and sign in.
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (e.g., `NDC-Coperative`).
4. Click **Create repository**.
5. Copy the commands under "…or push an existing repository from the command line". They will look like this:

```bash
git remote add origin https://github.com/YOUR_USERNAME/NDC-Coperative.git
git branch -M main
git push -u origin main
```

Run these commands in your terminal.

## 4. Deploy to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up/login with GitHub.
2. Click **Add New...** > **Project**.
3. Select your `NDC-Coperative` repository from the list (you might need to click "Adjust GitHub App Permissions" if you don't see it).
4. Click **Import**.
5. Vercel will automatically detect that this is a Vite project.
6. Click **Deploy**.

Your site will be live in a minute!
