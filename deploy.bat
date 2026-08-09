@echo off
SETLOCAL EnableDelayedExpansion

:: Netlify Deployment Script for CreativeMatrix.AI
:: This script automates the build and deployment process for Windows.

echo ------------------------------------------------
echo 🚀 CreativeMatrix.AI - Netlify Deployment
echo ------------------------------------------------

:: 1. Check for npm
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ❌ Error: npm is not installed. Please install Node.js and npm first.
    pause
    exit /b 1
)

:: 2. Install dependencies if node_modules doesn't exist
if not exist node_modules (
    echo 📦 node_modules not found. Installing dependencies...
    call npm install
) else (
    echo ✅ Dependencies already installed.
)

:: 3. Build the project
echo 🏗️  Building the project for production...
call npm run build

:: 4. Verify build output
if not exist dist (
    echo ❌ Error: Build failed. 'dist' directory not found.
    pause
    exit /b 1
)

:: 5. Deploy to Netlify
echo 🌐 Deploying to Netlify...

:: Use npx to ensure netlify-cli is available without global installation
:: --prod flag makes it a production deployment
:: --dir=dist explicitly points to the build folder
call npx netlify-cli deploy --prod --dir=dist

echo.
echo ------------------------------------------------
echo ✅ Deployment process finished successfully!
echo 🔗 Your site should be live at the URL provided above.
echo ------------------------------------------------
pause
