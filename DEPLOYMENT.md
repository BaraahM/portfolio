# Deployment Guide

## Netlify Deployment

### Files Added for Netlify:
- `netlify.toml` - Configuration file specifying Node.js version and build settings
- `.nvmrc` - Node.js version specification
- Updated `package.json` homepage to "." for proper routing
- Added `build:netlify` script that disables CI warnings as errors

### Steps to Deploy:

1. **Commit all changes to your repository:**
   ```bash
   git add .
   git commit -m "Fix build issues and add Netlify configuration"
   git push origin main
   ```

2. **In Netlify Dashboard:**
   - Go to your site settings
   - Under "Build & deploy" → "Environment variables"
   - Make sure no custom NODE_VERSION is set (let it use the one from netlify.toml)
   - Under "Build & deploy" → "Build settings"
   - Build command: `npm run build` (should be auto-detected)
   - Publish directory: `build` (should be auto-detected)

3. **Trigger a new deployment:**
   - Go to "Deploys" tab
   - Click "Trigger deploy" → "Deploy site"

### Alternative Deployment Options:

If Netlify continues to have issues, consider these alternatives:

1. **Vercel** (Recommended alternative):
   - Connect your GitHub repository
   - Framework preset: Create React App
   - Build command: `npm run build`
   - Output directory: `build`

2. **GitHub Pages**:
   - Install `gh-pages` package: `npm install --save-dev gh-pages`
   - Add to package.json scripts: `"deploy": "gh-pages -d build"`
   - Run: `npm run deploy`

3. **Firebase Hosting**:
   - Install Firebase CLI: `npm install -g firebase-tools`
   - Run: `firebase init hosting`
   - Run: `firebase deploy`

### Troubleshooting:

- If you get Node.js version errors, the `netlify.toml` file should fix this
- If you get routing issues, the homepage change to "." should fix this
- If build fails, check that all dependencies are in package.json
