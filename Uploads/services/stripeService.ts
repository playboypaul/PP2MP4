import { loadStripe } from '@stripe/stripe-js';

// Get Stripe publishable key from environment
const getStripePublishableKey = (): string => {
  // In a real app, this would come from environment variables
  // For now, return a placeholder that will be replaced during setup
  return import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_PLACEHOLDER';
};

let stripePromise: Promise<any> | null = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(getStripePublishableKey());
  }
  return stripePromise;
};

export const redirectToCheckout = async (): Promise<void> => {
  try {
    const stripe = await getStripe();
    
    if (!stripe) {
      throw new Error('Failed to load Stripe');
    }

    // Get the base URL for callbacks
    const baseUrl = window.location.origin;
    
    // Redirect to Stripe Checkout
    // In a real implementation, you would call your backend to create a checkout session
    // For this example, we'll use Stripe's test mode with a price ID
    // You'll need to replace this with your actual price ID from Stripe Dashboard
    
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: import.meta.env.VITE_STRIPE_PRICE_ID || 'price_PLACEHOLDER',
          quantity: 1,
        },
      ],
      mode: 'payment', // One-time payment
      successUrl: `${baseUrl}/success.html`,
      cancelUrl: `${baseUrl}/cancel.html`,
    });

    if (error) {
      console.error('Stripe checkout error:', error);
      alert('Failed to redirect to checkout. Please try again.');
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    alert('An error occurred. Please try again.');
  }
};

// Alternative: Backend-based checkout (recommended for production)
export const redirectToCheckoutWithBackend = async (): Promise<void> => {
  try {
    // Call your backend to create a checkout session
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { sessionId } = await response.json();
    
    const stripe = await getStripe();
    
    if (!stripe) {
      throw new Error('Failed to load Stripe');
    }

    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error('Stripe checkout error:', error);
      alert('Failed to redirect to checkout. Please try again.');
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    alert('An error occurred. Please try again.');
  }
};
