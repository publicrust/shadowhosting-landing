# ShadowHosting Landing Page

This project demonstrates a React application built with Vite and TypeScript, configured with strict ESLint rules that block the use of `any` types.

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 19** - Latest React with modern features
- 🔷 **TypeScript** - Strict type checking with no `any` allowed
- 🛡️ **ESLint** - Comprehensive linting rules to prevent `any` usage
- 🎨 **Modern UI** - Clean, responsive design

## ESLint Configuration

The project includes strict ESLint rules that prevent the use of `any` types:

### Blocked Rules
- `@typescript-eslint/no-explicit-any` - Prevents explicit `any` usage
- `@typescript-eslint/no-unsafe-assignment` - Prevents unsafe assignments
- `@typescript-eslint/no-unsafe-call` - Prevents unsafe function calls
- `@typescript-eslint/no-unsafe-member-access` - Prevents unsafe property access
- `@typescript-eslint/no-unsafe-return` - Prevents unsafe return values
- `@typescript-eslint/no-unsafe-argument` - Prevents unsafe function arguments

### Additional Strict Rules
- Explicit function return types (warn)
- Explicit module boundary types (warn)
- No non-null assertions (warn)
- Prefer nullish coalescing
- Prefer optional chaining

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ExampleComponent.tsx    # Example of proper TypeScript usage
│   └── BadExample.tsx          # Demonstrates ESLint errors (commented)
├── assets/
├── App.tsx                     # Main application component
├── App.css
├── index.css
└── main.tsx                    # Application entry point
```

## TypeScript Configuration

The project uses strict TypeScript settings:

- `strict: true` - Enables all strict type checking options
- `noImplicitAny: true` - Prevents implicit `any` types
- `exactOptionalPropertyTypes: true` - Strict optional property handling
- `noUncheckedIndexedAccess: true` - Safe array/object access

## Example Usage

### ✅ Good (TypeScript-compliant)
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const handleUser = (user: User): void => {
  console.log(user.name);
};
```

### ❌ Bad (Will cause ESLint errors)
```typescript
// This will cause ESLint errors:
const handleUser = (user: any): any => {
  return user.someProperty;
};
```

## Development

The development server runs on `http://localhost:5173` by default.

### Hot Module Replacement (HMR)
The project includes React Fast Refresh for instant updates during development.

### Type Checking
TypeScript compilation is integrated into the build process. Type errors will prevent successful builds.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## GitHub Actions

This project includes comprehensive CI/CD pipelines:

### 🤖 Automated Workflows

1. **CI/CD Pipeline** (`ci.yml`)
   - Runs on push to `main`/`develop` and pull requests
   - Tests with Node.js 18.x and 20.x
   - Runs ESLint, TypeScript checks, and build
   - Performs security audit
   - Creates preview deployments for PRs

2. **Production Deploy** (`deploy.yml`)
   - Deploys to production on push to `main`
   - Creates automated releases
   - Includes all quality checks

3. **Quick Check** (`quick-check.yml`)
   - Fast feedback on pull requests
   - Comments on PR when checks pass

### 🔧 Required Secrets

For deployment to work, add these secrets to your GitHub repository:

- `VERCEL_TOKEN` - Vercel deployment token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

## Contributing

1. Ensure all code follows TypeScript best practices
2. No `any` types are allowed
3. Run `npm run lint` before committing
4. Fix any ESLint warnings or errors
5. All changes are automatically tested via GitHub Actions

## License

MIT
