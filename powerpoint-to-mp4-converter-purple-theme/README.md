<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://i.ytimg.com/vi/X_nPiU1sMLI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYVBut2nGcCZ5aghGYU1GHYw9Xjg" />
</div>

# PowerPoint to MP4 Converter 🎬

A powerful web application to convert PowerPoint presentations to MP4 video clips using Gemini's AI video generation capabilities with integrated Stripe payment processing.

View your app in AI Studio: https://ai.studio/apps/drive/1-LDfisVKa9_R6zsRYIZ-kKt7qPKzVBwG

## ✨ Features

### Core Functionality
- 📤 Upload PPTX files and convert to MP4 videos
- 🎥 Generate MP4 videos from slides using Gemini AI
- 🎨 Multiple video styles and quality options
- 🖼️ Review and select images before generation
- ⚡ Fast processing with real-time progress updates

### Payment & Subscription System
- 🆓 **Free Tier:** 3 free uploads for new users
- 💎 **Premium Tier:** $19.99 one-time payment for unlimited uploads
- 📊 Automatic upload tracking with localStorage
- 💳 Secure Stripe Checkout integration
- ✅ Success and cancel payment pages
- 📈 Real-time upload limit display

### UI/UX
- 📊 Upload limit banner showing remaining uploads
- 👑 Premium status indicator
- 🎯 Responsive pricing modal with tier comparison
- 🎨 Purple-themed design with smooth animations
- 🏷️ Branded footer "Powered by Token4rge"
- 📱 Mobile-responsive design

## 🚀 Quick Start

**Prerequisites:**  Node.js v14+ and npm

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your `GEMINI_API_KEY`
   - Add your Stripe keys (see [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md))

3. **Run the app:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

## 📋 Detailed Setup

For complete step-by-step instructions including Stripe setup, see [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)

## 💳 Payment Tiers

| Feature | Free | Premium |
|---------|------|---------|
| Uploads | 3 conversions | ∞ Unlimited |
| Video Styles | ✅ All styles | ✅ All styles |
| Quality Options | ✅ All qualities | ✅ All qualities |
| Processing | Standard | ⚡ Priority |
| Support | Basic | 💎 Premium |
| Price | $0 | $19.99 (one-time) |

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **AI:** Google Gemini API
- **Payments:** Stripe
- **Storage:** localStorage for upload tracking

## 📁 Project Structure

```
├── components/          # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── FileUpload.tsx
│   ├── PricingModal.tsx
│   ├── UploadLimitBanner.tsx
│   └── ...
├── services/           # Business logic
│   ├── uploadTracking.ts
│   ├── stripeService.ts
│   ├── geminiService.ts
│   └── pptxParser.ts
├── App.tsx            # Main app component
├── success.html       # Payment success page
├── cancel.html        # Payment cancel page
└── .env.example       # Environment variables template
```

## 🔐 Environment Variables

Required in `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_STRIPE_PRICE_ID=price_...
```

## 🧪 Testing

### Test the Upload Tracking
1. Upload 3 PowerPoint files
2. Banner should show decreasing count
3. After 3 uploads, pricing modal should appear

### Test Stripe Payment (Test Mode)
Use Stripe test card:
- Card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

## 🚢 Deployment

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting service

3. Update environment variables with production Stripe keys

4. Switch Stripe account from Test Mode to Live Mode

## 📞 Support

- Stripe Documentation: https://stripe.com/docs
- Gemini API: https://ai.google.dev/docs
- Issues: Create an issue in the repository

## 📄 License

All rights reserved.

---

**Powered by Token4rge** 💜
