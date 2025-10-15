# 🚀 PowerPoint to MP4 Converter - Setup Guide

## Super Simple Setup (Even a 10-year-old can do this!)

Follow these steps exactly, and you'll have your app running with Stripe payments in no time! 

---

## 📋 What You Need Before Starting

- [ ] A computer (Windows, Mac, or Linux)
- [ ] Internet connection
- [ ] A Stripe account (we'll create one together!)
- [ ] About 15 minutes of your time

---

## Step 1: Get Your Stripe Keys 🔑

### 1.1 Create a Stripe Account (if you don't have one)

1. Go to **https://stripe.com**
2. Click the **"Sign Up"** button (usually in the top right corner)
3. Fill in your email, name, and create a password
4. Check your email and click the confirmation link
5. **Done!** You now have a Stripe account 🎉

### 1.2 Find Your Publishable Key

1. Log in to **https://dashboard.stripe.com**
2. Look for **"Developers"** in the left menu and click it
3. Click on **"API keys"**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`)
5. Click the **"Reveal test key"** button for the Secret key
6. **IMPORTANT:** Copy both keys and save them somewhere safe (like Notepad)

### 1.3 Create Your Product and Price

1. In Stripe Dashboard, click **"Products"** in the left menu
2. Click **"Add product"** button
3. Fill in:
   - **Name:** Premium PowerPoint Converter
   - **Description:** Lifetime unlimited access to PowerPoint to MP4 conversions
   - **Pricing:** One-time payment
   - **Price:** $19.99
   - **Currency:** USD
4. Click **"Save product"**
5. You'll see a **Price ID** (starts with `price_...`)
6. **Copy this Price ID** and save it with your keys!

---

## Step 2: Set Up Your Environment Variables 📝

### 2.1 Open Your Project Folder

1. Open your file explorer (Finder on Mac, File Explorer on Windows)
2. Navigate to where you downloaded the app
3. You should see files like `App.tsx`, `index.html`, etc.

### 2.2 Create the Environment File

1. Find the file named **`.env.example`**
2. **Copy** this file (Right-click → Copy)
3. **Paste** it in the same folder (Right-click → Paste)
4. **Rename** the copy from `.env.example` to **`.env.local`**
   - On Windows: Make sure you can see file extensions (View → File name extensions)
   - On Mac: Just rename it to `.env.local`

### 2.3 Add Your Stripe Keys

1. Open **`.env.local`** in a text editor (Notepad, TextEdit, VS Code, etc.)
2. You'll see these lines:

```
GEMINI_API_KEY=PLACEHOLDER_API_KEY

VITE_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE
VITE_STRIPE_PRICE_ID=price_YOUR_PRICE_ID_HERE
```

3. Replace with your actual keys:

```
GEMINI_API_KEY=YOUR_ACTUAL_GEMINI_KEY

VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51ABC123XYZ...
VITE_STRIPE_PRICE_ID=price_1ABC123XYZ...
```

4. **Save the file** (Ctrl+S or Cmd+S)

---

## Step 3: Install and Run the App 🏃‍♂️

### 3.1 Open Terminal/Command Prompt

**On Windows:**
1. Press `Windows Key + R`
2. Type `cmd` and press Enter

**On Mac:**
1. Press `Command + Space`
2. Type `terminal` and press Enter

**On Linux:**
1. Press `Ctrl + Alt + T`

### 3.2 Navigate to Your Project

1. In the terminal, type:
```bash
cd /path/to/your/project
```

For example:
```bash
cd /home/ubuntu/Uploads
```

2. Press Enter

### 3.3 Install Dependencies

1. Type this command:
```bash
npm install
```

2. Press Enter and wait (this might take 1-2 minutes)
3. You'll see lots of text scrolling - that's normal!

### 3.4 Start the App

1. Type this command:
```bash
npm run dev
```

2. Press Enter
3. You'll see something like:
```
VITE v6.2.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

4. **Open your browser** (Chrome, Firefox, Safari, etc.)
5. Go to: **http://localhost:5173/**
6. **🎉 Your app is running!**

---

## Step 4: Test the Payment Flow 🧪

### 4.1 Test the Free Tier

1. Try uploading a PowerPoint file
2. You should see a banner showing "3 uploads remaining"
3. Upload 3 times to use up your free uploads

### 4.2 Test the Premium Upgrade

1. After 3 uploads, try uploading again
2. You should see the Pricing Modal pop up
3. Click **"Upgrade to Premium"**
4. You'll be redirected to Stripe Checkout

### 4.3 Use Test Card

**IMPORTANT:** Since you're in test mode, use Stripe's test card:

- **Card Number:** 4242 4242 4242 4242
- **Expiration:** Any future date (like 12/25)
- **CVC:** Any 3 digits (like 123)
- **ZIP:** Any 5 digits (like 12345)

### 4.4 Complete Payment

1. Fill in the test card details
2. Click **"Pay"**
3. You'll be redirected to the success page
4. Your account is now Premium with unlimited uploads!

---

## Step 5: Going Live (When Ready) 🌟

### 5.1 Switch to Live Keys

1. In Stripe Dashboard, toggle from **"Test mode"** to **"Live mode"** (top right)
2. Get your **live keys** (they start with `pk_live_...` and `sk_live_...`)
3. Update your `.env.local` file with the live keys
4. Restart your app

### 5.2 Important Before Going Live

- [ ] Complete Stripe account verification
- [ ] Set up your business details in Stripe
- [ ] Add tax settings if needed
- [ ] Test everything thoroughly with test mode first
- [ ] Read Stripe's policies: https://stripe.com/legal

---

## 🎯 Quick Troubleshooting

### Problem: "Failed to redirect to checkout"

**Solution:** 
- Check that your Stripe keys are correct in `.env.local`
- Make sure there are no spaces or quotes around the keys
- Restart the app after changing `.env.local`

### Problem: "Payment not working"

**Solution:**
- Make sure you're using test card 4242 4242 4242 4242
- Check that your Price ID is correct
- Verify you're in Test Mode in Stripe Dashboard

### Problem: "Premium status not activating"

**Solution:**
- Check that `success.html` and `cancel.html` are in your project root
- Clear your browser's localStorage (F12 → Application → Local Storage → Clear)
- Try the payment again

### Problem: "App won't start"

**Solution:**
- Make sure you ran `npm install` first
- Check that Node.js is installed: `node --version`
- Try deleting `node_modules` folder and running `npm install` again

---

## 📞 Need More Help?

- **Stripe Documentation:** https://stripe.com/docs
- **Stripe Support:** https://support.stripe.com
- **App Issues:** Check the browser console (Press F12) for error messages

---

## ✅ Success Checklist

After setup, you should have:

- [ ] Stripe account created
- [ ] Product created in Stripe ($19.99 Premium tier)
- [ ] Publishable Key and Price ID copied
- [ ] `.env.local` file created with correct keys
- [ ] Dependencies installed (`npm install`)
- [ ] App running on localhost:5173
- [ ] Upload tracking working (shows 3 free uploads)
- [ ] Pricing modal showing when limit reached
- [ ] Stripe checkout redirecting correctly
- [ ] Success page activating Premium status
- [ ] Footer showing "Powered by Token4rge"

---

## 🎨 Features You Now Have

✅ **Free Tier:** 3 uploads for new users  
✅ **Premium Tier:** $19.99 for unlimited uploads  
✅ **Upload Tracking:** Automatic counting using localStorage  
✅ **Stripe Checkout:** Secure payment processing  
✅ **Success/Cancel Pages:** Beautiful payment flow  
✅ **Status Banner:** Shows remaining uploads  
✅ **Pricing Modal:** Beautiful upgrade prompt  
✅ **Footer Branding:** "Powered by Token4rge"  

---

## 🚀 You're All Set!

Congratulations! You've successfully set up Stripe payments for your PowerPoint to MP4 Converter app.

**Remember:**
- Always test with test cards before going live
- Keep your secret keys safe and never share them
- Use Test Mode for development, Live Mode for production

**Happy converting!** 🎉

---

Made with ❤️ by Token4rge
