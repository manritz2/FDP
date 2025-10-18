# PowerShell script for Windows users

Write-Host "🚀 Starting Food Ordering Platform Deployment Process..." -ForegroundColor Green
Write-Host ""

# Check if git is initialized
if (-Not (Test-Path .git)) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✓ Git initialized" -ForegroundColor Green
} else {
    Write-Host "✓ Git already initialized" -ForegroundColor Green
}

# Add all files
Write-Host ""
Write-Host "📝 Adding files to Git..." -ForegroundColor Yellow
git add .

# Commit
Write-Host ""
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "Ready for deployment - Full stack food ordering app"

Write-Host ""
Write-Host "✅ Local setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub"
Write-Host "2. Run: git remote add origin YOUR_GITHUB_REPO_URL"
Write-Host "3. Run: git branch -M main"
Write-Host "4. Run: git push -u origin main"
Write-Host "5. Follow DEPLOYMENT_CHECKLIST.md for deployment"
Write-Host ""
Write-Host "📚 Documentation:" -ForegroundColor Cyan
Write-Host "   - DEPLOYMENT_CHECKLIST.md - Step-by-step checklist"
Write-Host "   - DEPLOYMENT_GUIDE.md - Detailed deployment guide"
Write-Host "   - README.md - Project overview"
Write-Host ""
