import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    // Load environment variables from .env files
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            // Pass the API key to the frontend, ensuring it's handled securely
            'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
        },
        resolve: {
            alias: {
                // Keep your existing aliases
                '@': path.resolve(__dirname, '.'),
            }
        },
        optimizeDeps: {
            // No longer excluding dependencies since we are not using the CDN
        }
    };
});
