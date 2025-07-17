# GitHub Actions Configuration

This directory contains GitHub Actions workflows for automated CI/CD.

## Workflows Overview

### 1. CI/CD Pipeline (`ci.yml`)
**Triggers:** Push to `main`/`develop`, Pull Requests
**Purpose:** Comprehensive testing and quality assurance

**Steps:**
- ✅ Checkout code
- 🔧 Setup Node.js (18.x, 20.x)
- 📦 Install dependencies
- 🛡️ Run ESLint
- 🔷 TypeScript type checking
- 🏗️ Build project
- 📦 Upload build artifacts
- 🧪 Run tests (if available)
- 🔒 Security audit
- 🚀 Preview deployment (PRs only)

### 2. Production Deploy (`deploy.yml`)
**Triggers:** Push to `main`, Release creation
**Purpose:** Production deployment and release management

**Steps:**
- ✅ Checkout code
- 🔧 Setup Node.js 20.x
- 📦 Install dependencies
- 🛡️ Run ESLint
- 🔷 TypeScript type checking
- 🏗️ Build project
- 🚀 Deploy to Vercel (Production)
- 🏷️ Create automated release

### 3. Quick Check (`quick-check.yml`)
**Triggers:** Pull Requests
**Purpose:** Fast feedback for developers

**Steps:**
- ✅ Checkout code
- 🔧 Setup Node.js 20.x
- 📦 Install dependencies
- 🛡️ Run ESLint
- 🔷 TypeScript type checking
- 🏗️ Build project
- 💬 Comment on PR

## Setup Instructions

### 1. Enable GitHub Actions
1. Go to your repository settings
2. Navigate to "Actions" → "General"
3. Enable "Allow all actions and reusable workflows"

### 2. Configure Secrets
Add these secrets in your repository settings:

**For Vercel Deployment:**
- `VERCEL_TOKEN` - Get from Vercel dashboard
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

**How to get Vercel credentials:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel login`
3. Run `vercel link` in your project
4. Check `.vercel/project.json` for IDs

### 3. Branch Protection (Recommended)
1. Go to repository settings → "Branches"
2. Add rule for `main` branch:
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Select required status checks:
     - `build-and-test`
     - `security-audit`

## Workflow Features

### 🔄 Matrix Testing
Tests against multiple Node.js versions (18.x, 20.x)

### 📦 Caching
Uses npm cache for faster builds

### 🛡️ Security
Automatic security audits on dependencies

### 🚀 Deployment
- Preview deployments for PRs
- Production deployments for main branch
- Automated release creation

### 💬 Feedback
Automatic comments on PRs when checks pass

## Troubleshooting

### Common Issues

1. **Build fails on ESLint**
   - Run `npm run lint:fix` locally
   - Check for `any` types usage

2. **TypeScript errors**
   - Run `npx tsc --noEmit` locally
   - Fix type issues before pushing

3. **Deployment fails**
   - Verify Vercel secrets are correct
   - Check Vercel project configuration

### Local Testing
Test workflows locally using [act](https://github.com/nektos/act):

```bash
# Install act
brew install act

# Test specific workflow
act pull_request -W .github/workflows/quick-check.yml
```

## Customization

### Adding New Checks
1. Edit the appropriate workflow file
2. Add new steps after existing ones
3. Test locally before pushing

### Modifying Triggers
Update the `on` section in workflow files:
```yaml
on:
  push:
    branches: [ main, develop, feature/* ]
  pull_request:
    branches: [ main ]
```

### Environment Variables
Add environment-specific variables:
```yaml
env:
  NODE_ENV: production
  API_URL: ${{ secrets.API_URL }}
``` 