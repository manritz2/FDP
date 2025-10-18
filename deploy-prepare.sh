#!/bin/bash

echo "🚀 Starting Food Ordering Platform Deployment Process..."
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✓ Git initialized"
else
    echo "✓ Git already initialized"
fi

# Add all files
echo ""
echo "📝 Adding files to Git..."
git add .

# Commit
echo ""
echo "💾 Committing changes..."
git commit -m "Ready for deployment - Full stack food ordering app"

echo ""
echo "✅ Local setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Create a new repository on GitHub"
echo "2. Run: git remote add origin YOUR_GITHUB_REPO_URL"
echo "3. Run: git branch -M main"
echo "4. Run: git push -u origin main"
echo "5. Follow DEPLOYMENT_CHECKLIST.md for deployment"
echo ""
echo "📚 Documentation:"
echo "   - DEPLOYMENT_CHECKLIST.md - Step-by-step checklist"
echo "   - DEPLOYMENT_GUIDE.md - Detailed deployment guide"
echo "   - README.md - Project overview"
echo ""
