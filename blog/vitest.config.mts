import { defineConfig } from 'vitest/config';

// Ionic distribuye imports de directorio (@ionic/core/loader) que el loader
// ESM de Node rechaza; se inlinan para que los procese Vite en su lugar.
export default defineConfig({
  test: {
    server: {
      deps: {
        inline: [/@ionic[\\/]/, /ionicons[\\/]/],
      },
    },
  },
});
