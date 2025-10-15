# 📋 Quick Reference Card

## 🔑 Essential Info

### Payment Tiers
- **Free:** 3 uploads
- **Premium:** $19.99 (unlimited, one-time)

### Test Payment Card
```
Card: 4242 4242 4242 4242
Expiry: 12/25 (any future date)
CVC: 123 (any 3 digits)
ZIP: 12345 (any 5 digits)
```

### Environment Variables
```bash
GEMINI_API_KEY=your_key_here
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_STRIPE_PRICE_ID=price_...
```

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Key Files

| File | Purpose |
|------|---------|
| `App.tsx` | Main app logic with payment integration |
| `services/uploadTracking.ts` | Upload limit tracking |
| `services/stripeService.ts` | Stripe checkout handler |
| `components/PricingModal.tsx` | Pricing tier display |
| `components/UploadLimitBanner.tsx` | Upload status banner |
| `components/Footer.tsx` | Token4rge branding |
| `success.html` | Payment success page |
| `cancel.html` | Payment cancel page |
| `.env.local` | Your secret keys (create from .env.example) |

## 🔗 Important URLs

- **Stripe Dashboard:** https://dashboard.stripe.com
- **Stripe API Keys:** https://dashboard.stripe.com/apikeys
- **Stripe Products:** https://dashboard.stripe.com/products
- **Local App:** http://localhost:5173
- **Success Page:** http://localhost:5173/success.html
- **Cancel Page:** http://localhost:5173/cancel.html

## 🎯 Testing Flow

1. ✅ Start app (`npm run dev`)
2. ✅ Upload 3 PowerPoint files (uses free tier)
3. ✅ Try 4th upload → pricing modal appears
4. ✅ Click "Upgrade to Premium"
5. ✅ Use test card to complete payment
6. ✅ Verify redirect to success page
7. ✅ Confirm premium badge shows
8. ✅ Test unlimited uploads work

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| Stripe keys not working | Copy from .env.example to .env.local, restart app |
| Payment not processing | Check Price ID matches your Stripe product |
| Premium not activating | Clear localStorage (F12 → Application → Clear) |
| App won't start | Delete node_modules, run `npm install` again |

## 📊 localStorage Structure

```javascript
{
  "pptx-converter-data": {
    "uploadCount": 0,
    "isPremium": false,
    "lastUploadDate": "2025-10-15T...",
    "subscriptionDate": "2025-10-15T..." // if premium
  }
}
```

## 🎨 Branding

Footer displays: **"Powered by Token4rge"**
- Link: https://token4rge.com
- Colors: Purple-Pink gradient
- Located in: `components/Footer.tsx`

## 📱 Support Contacts

- Stripe Support: https://support.stripe.com
- Stripe Docs: https://stripe.com/docs
- App Issues: Check browser console (F12)

---

**Need detailed setup?** See [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)

**Quick start?** See [README.md](README.md)
