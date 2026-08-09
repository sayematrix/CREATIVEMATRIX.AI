#!/bin/bash

# Netlify Deployment Script for CreativeMatrix.AI
# This script automates the build and deployment process.

# Exit immediately if a command exits with a non-zero status.
set -e

echo "------------------------------------------------"
echo "🚀 CreativeMatrix.AI - Netlify Deployment"
echo "------------------------------------------------"

# 1. Check for Node.js and npm
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# 2. Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 node_modules not found. Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed."
fi

# 3. Build the project
echo "🏗️  Building the project for production..."
npm run build

# 4. Verify build output
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. 'dist' directory not found."
    exit 1
fi

# 5. Deploy to Netlify
echo "🌐 Deploying to Netlify..."

# Use npx to ensure netlify-cli is available without global installation
# --prod flag makes it a production deployment
# --dir=dist explicitly points to the build folder
npx netlify-cli deploy --prod --dir=dist

echo ""
echo "------------------------------------------------"
echo "✅ Deployment process finished successfully!"
echo "🔗 Your site should be live at the URL provided above."
echo "------------------------------------------------"
