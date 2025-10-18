# PowerShell Script to Start Both Backend and Frontend

Write-Host "🚀 Starting Food Ordering Platform..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install Node.js first!" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
Write-Host ""

# Install backend dependencies
Write-Host "Installing backend dependencies..." -ForegroundColor Cyan
Set-Location backend
if (Test-Path "node_modules") {
    Write-Host "✓ Backend dependencies already installed" -ForegroundColor Green
} else {
    npm install
}

# Install frontend dependencies
Set-Location ..
Write-Host "Installing frontend dependencies..." -ForegroundColor Cyan
Set-Location frontend
if (Test-Path "node_modules") {
    Write-Host "✓ Frontend dependencies already installed" -ForegroundColor Green
} else {
    npm install
}

Set-Location ..

Write-Host ""
Write-Host "✅ Dependencies installed!" -ForegroundColor Green
Write-Host ""
Write-Host "🔧 Starting servers..." -ForegroundColor Yellow
Write-Host ""

# Start backend in new window
Write-Host "Starting backend server on http://localhost:5000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; Write-Host '🔷 BACKEND SERVER' -ForegroundColor Blue; npm start"

# Wait a bit for backend to start
Start-Sleep -Seconds 3

# Start frontend in new window
Write-Host "Starting frontend server on http://localhost:3000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\frontend'; Write-Host '🔶 FRONTEND SERVER' -ForegroundColor Magenta; npm start"

Write-Host ""
Write-Host "✅ Both servers are starting!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Server Info:" -ForegroundColor Yellow
Write-Host "   Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Your app will open automatically in the browser" -ForegroundColor Green
Write-Host ""
Write-Host "To stop servers: Close the terminal windows or press Ctrl+C in each" -ForegroundColor Yellow
Write-Host ""
Write-Host "Happy coding! 🎉" -ForegroundColor Green
