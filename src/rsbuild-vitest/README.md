# rsbuild-vitest

> Example of how to configure vitest with rsbuild for unit testing.

```bash
# Install deps
bun i

# Run tests
bun run test
```

## Configuration

1. Install dependencies
   ```bash
   bun i -D vitest jsdom @testing-library/react @testing-library/jest-dom
   ```
2. Create a [`vitest.config.ts`](./vitest.config.ts) file
3. Create a [`vitest.setup.ts`](./vitest.setup.ts) file
4. Add a `test` script to the `package.json`
   ```json
   {
     "scripts": {
       "test": "vitest"
     }
   }
   ```
