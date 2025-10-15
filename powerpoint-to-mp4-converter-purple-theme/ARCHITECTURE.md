# 🏗️ System Architecture Overview

## 📊 Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         USER BROWSER                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      APP.TSX (Main)                          │
│  • State Management                                          │
│  • Upload Tracking Integration                               │
│  • Payment Flow Orchestration                                │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
                ▼             ▼             ▼
        ┌───────────┐  ┌───────────┐  ┌───────────┐
        │  Header   │  │  Banner   │  │  Footer   │
        └───────────┘  └───────────┘  └───────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │  Main Content   │
                    │  • FileUpload   │
                    │  • SlideReview  │
                    │  • Results      │
                    └─────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ PricingModal    │
                    │ (Conditional)   │
                    └─────────────────┘
```

## 🔄 Payment Flow

```
┌──────────────┐
│ User Visits  │
│     App      │
└──────┬───────┘
       │
       ▼
┌──────────────────────┐
│ Check Upload Status  │
│ (localStorage)       │
└──────┬───────────────┘
       │
       ├─── Free User ───► Show "X uploads remaining"
       │
       └─── Premium ────► Show "Unlimited" badge
       
┌──────────────────────┐
│ User Uploads File    │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐      No      ┌──────────────────┐
│  canUpload() ?       │─────────────►│ Show Pricing     │
└──────┬───────────────┘              │ Modal            │
       │ Yes                           └────────┬─────────┘
       ▼                                        │
┌──────────────────────┐                       │
│ Process Upload       │                       │
└──────┬───────────────┘                       │
       │                                        │
       ▼                                        │
┌──────────────────────┐                       │
│ Increment Counter    │                       │
└──────┬───────────────┘                       │
       │                                        │
       ▼                                        ▼
┌──────────────────────┐              ┌──────────────────┐
│ Update UI Banner     │              │ Click Upgrade    │
└──────────────────────┘              └────────┬─────────┘
                                               │
                                               ▼
                                      ┌──────────────────┐
                                      │ Stripe Checkout  │
                                      └────────┬─────────┘
                                               │
                              ┌────────────────┼────────────────┐
                              │                                 │
                              ▼                                 ▼
                    ┌──────────────────┐            ┌──────────────────┐
                    │  Success Page    │            │  Cancel Page     │
                    │  • Set Premium   │            │  • No Change     │
                    │  • Redirect Home │            │  • Redirect Home │
                    └──────────────────┘            └──────────────────┘
```

## 💾 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                       localStorage                           │
│  Key: "pptx-converter-data"                                  │
│  {                                                            │
│    uploadCount: number,                                       │
│    isPremium: boolean,                                        │
│    lastUploadDate: string,                                    │
│    subscriptionDate?: string                                  │
│  }                                                            │
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     │                     ▼
┌──────────────┐     ┌────────────────┐    ┌──────────────┐
│ Upload       │     │  Payment       │    │  UI          │
│ Tracking     │────►│  Success       │    │  Components  │
│ Service      │     │  Page          │    │              │
└──────────────┘     └────────────────┘    └──────────────┘
        │                     │                     │
        │                     │                     │
        └─────────────────────┴─────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   User Sees:    │
                    │  • Upload Count │
                    │  • Premium Badge│
                    │  • Pricing Info │
                    └─────────────────┘
```

## 🔌 External Services

```
┌─────────────────────────────────────────────────────────────┐
│                       Your Application                        │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │                           │
                ▼                           ▼
        ┌──────────────┐          ┌──────────────┐
        │    Stripe    │          │   Gemini AI  │
        │  - Checkout  │          │  - Video Gen │
        │  - Payments  │          │  - PPTX Parse│
        └──────────────┘          └──────────────┘
```

## 📁 File Structure

```
powerpoint-to-mp4-converter-purple-theme/
│
├── components/                      # React UI Components
│   ├── Header.tsx                  # App header
│   ├── Footer.tsx                  # 🆕 Token4rge branding
│   ├── FileUpload.tsx              # File upload UI
│   ├── PricingModal.tsx            # 🆕 Pricing tiers
│   ├── UploadLimitBanner.tsx       # 🆕 Upload status
│   ├── LoadingIndicator.tsx        # Loading states
│   ├── ResultsDisplay.tsx          # Video results
│   ├── SlideReview.tsx             # Slide preview
│   ├── ErrorDisplay.tsx            # Error messages
│   └── IconComponents.tsx          # SVG icons
│
├── services/                        # Business Logic
│   ├── uploadTracking.ts           # 🆕 Upload limits
│   ├── stripeService.ts            # 🆕 Stripe integration
│   ├── geminiService.ts            # Gemini API
│   └── pptxParser.ts               # PPTX parsing
│
├── App.tsx                          # 🔄 Main app (updated)
├── index.tsx                        # Entry point
├── index.html                       # HTML template
├── types.ts                         # TypeScript types
│
├── success.html                     # 🆕 Payment success
├── cancel.html                      # 🆕 Payment cancel
│
├── .env.local                       # 🔐 Your secrets (create this)
├── .env.example                     # 🆕 Template
│
├── README.md                        # 🔄 Updated docs
├── SETUP_INSTRUCTIONS.md            # 🆕 Setup guide
├── QUICK_REFERENCE.md               # 🆕 Quick ref
├── IMPLEMENTATION_SUMMARY.md        # 🆕 What's new
├── PRE_LAUNCH_CHECKLIST.md          # 🆕 Launch checklist
├── ARCHITECTURE.md                  # 🆕 This file
│
├── package.json                     # 🔄 Dependencies
├── package-lock.json                # Lock file
├── tsconfig.json                    # TypeScript config
└── vite.config.ts                   # Vite config
```

Legend: 🆕 = New file | 🔄 = Modified file | 🔐 = Not in repo

## 🎯 Key Design Decisions

### 1. Client-Side Upload Tracking
**Why:** Simplicity and no backend required
- ✅ Fast implementation
- ✅ No server costs
- ✅ Works offline
- ⚠️ Can be reset (acceptable for MVP)
- ⚠️ Not linked to user accounts

**Future:** Consider backend with user auth

### 2. localStorage vs Cookies
**Why:** localStorage chosen
- ✅ More storage space (10MB vs 4KB)
- ✅ Simpler API
- ✅ No server-side parsing needed
- ⚠️ Not sent with requests (not needed here)

### 3. Direct Stripe Checkout
**Why:** Simple payment flow
- ✅ No complex backend needed
- ✅ Stripe handles everything
- ✅ PCI compliant automatically
- ⚠️ Limited customization
- ⚠️ No server-side validation (yet)

**Future:** Add webhook validation

### 4. One-Time Payment vs Subscription
**Why:** One-time chosen
- ✅ Better value perception ($19.99 forever)
- ✅ Simpler to manage
- ✅ No recurring billing issues
- ✅ Higher conversion rate

### 5. 3 Free Uploads
**Why:** Sweet spot for conversion
- ✅ Enough to try the service
- ✅ Not too generous (maintains value)
- ✅ Creates urgency to upgrade
- ✅ Low enough to convert quickly

## 🔒 Security Model

### What's Secure
✅ Stripe Checkout (PCI compliant)
✅ HTTPS (when deployed)
✅ No secret keys in frontend
✅ Test mode for development

### What Needs Backend (Future)
⚠️ Payment verification (webhooks)
⚠️ User authentication
⚠️ Server-side upload validation
⚠️ Rate limiting
⚠️ Fraud prevention

## 📈 Scalability

### Current Capacity
- **Storage:** Browser localStorage (10MB)
- **Tracking:** Per-browser (not per-user)
- **Payments:** Stripe (scales automatically)

### When to Add Backend
- 1000+ conversions/month
- Need user accounts
- Want analytics dashboard
- Need to prevent abuse
- Multi-device sync needed

## 🎨 UI/UX Flow

```
Landing Page
    ↓
Upload Limit Banner (always visible)
    ↓
Upload File → Check Limit
    ├─ Can Upload → Process
    └─ Cannot Upload → Show Pricing Modal
         ↓
    Click Upgrade
         ↓
    Stripe Checkout
         ↓
    ├─ Success → success.html → Premium Activated
    └─ Cancel → cancel.html → Back to App
```

## 🔄 State Management

```javascript
// App-level State
{
  appState: IDLE | REVIEWING | PROCESSING | SUCCESS | ERROR,
  videoResults: VideoResult[],
  parsedSlides: SlideData[],
  
  // Payment State (new)
  showPricingModal: boolean,
  remainingUploads: number,
  isPremium: boolean
}

// localStorage State
{
  'pptx-converter-data': {
    uploadCount: number,
    isPremium: boolean,
    lastUploadDate: string,
    subscriptionDate?: string
  }
}
```

## 🎬 User Journeys

### Journey 1: Free User → Premium
1. Visits app
2. Sees "3 uploads remaining"
3. Uploads file #1 (2 remaining)
4. Uploads file #2 (1 remaining)
5. Uploads file #3 (0 remaining)
6. Tries file #4 → Modal appears
7. Clicks "Upgrade to Premium"
8. Completes payment on Stripe
9. Returns to app with Premium status
10. Enjoys unlimited uploads

### Journey 2: Direct Premium Purchase
1. Visits app
2. Sees "3 uploads remaining"
3. Clicks "Get Unlimited" in banner
4. Reviews pricing modal
5. Clicks "Upgrade to Premium"
6. Completes payment
7. Returns with Premium status

### Journey 3: Premium User Returns
1. Visits app
2. Sees "Premium Account - Unlimited"
3. Uploads without restrictions
4. No modals or limits

---

## 📊 Metrics to Track (Future)

- Free tier conversion rate
- Average uploads before upgrade
- Payment success rate
- Payment abandon rate
- Time to first upload
- Time to upgrade decision
- Modal view rate
- Modal close rate (without upgrade)

---

**This architecture is designed for:**
- ✅ Rapid deployment
- ✅ Easy maintenance
- ✅ Clear upgrade path
- ✅ Scalable foundation

**Ready to build on! 🚀**
