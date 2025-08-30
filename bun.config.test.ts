import { defineConfig } from 'bun';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: ['./src/test-setup.ts'],
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/__tests__/**',
        'src/test-setup.ts',
        'src/index.tsx', // Server file
        'src/**/*.d.ts',
      ],
      thresholds: {
        line: 80,
        function: 80,
        branch: 70,
        statement: 80,
      },
    },
    timeout: 10000,
  },
});
