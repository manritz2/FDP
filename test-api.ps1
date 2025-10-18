# PowerShell Script to Test Backend API

Write-Host "Testing Backend API..." -ForegroundColor Green
Write-Host ""

# Test 1: Check if backend is running
Write-Host "Test 1: Backend Health Check" -ForegroundColor Cyan
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5000/api/items" -Method GET -ErrorAction Stop
    Write-Host "SUCCESS: Backend is running!" -ForegroundColor Green
    Write-Host "  Status Code: $($response.StatusCode)" -ForegroundColor Gray
} catch {
    Write-Host "FAILED: Backend is not responding" -ForegroundColor Red
    Write-Host "  Make sure backend is running" -ForegroundColor Yellow
    exit
}

Write-Host ""

# Test 2: Register a test user
Write-Host "Test 2: User Registration" -ForegroundColor Cyan
$registerBody = @{
    name = "Test User"
    email = "testuser$(Get-Random)@example.com"
    password = "password123"
} | ConvertTo-Json

try {
    $registerResponse = Invoke-WebRequest -Uri "http://localhost:5000/api/auth/register" -Method POST -Body $registerBody -ContentType "application/json" -ErrorAction Stop
    $userData = $registerResponse.Content | ConvertFrom-Json
    Write-Host "SUCCESS: User registered!" -ForegroundColor Green
    Write-Host "  User: $($userData.user.name)" -ForegroundColor Gray
    $token = $userData.token
} catch {
    Write-Host "FAILED: Registration failed" -ForegroundColor Red
}

Write-Host ""

# Test 3: Fetch items
Write-Host "Test 3: Fetch Menu Items" -ForegroundColor Cyan
try {
    $itemsResponse = Invoke-WebRequest -Uri "http://localhost:5000/api/items" -Method GET -ErrorAction Stop
    $items = $itemsResponse.Content | ConvertFrom-Json
    Write-Host "SUCCESS: Items fetched!" -ForegroundColor Green
    Write-Host "  Total items: $($items.Count)" -ForegroundColor Gray
} catch {
    Write-Host "FAILED: Could not fetch items" -ForegroundColor Red
}

Write-Host ""

# Test 4: Frontend accessibility
Write-Host "Test 4: Frontend Accessibility" -ForegroundColor Cyan
try {
    $frontendResponse = Invoke-WebRequest -Uri "http://localhost:3000" -Method GET -ErrorAction Stop
    Write-Host "SUCCESS: Frontend is accessible!" -ForegroundColor Green
    Write-Host "  Status Code: $($frontendResponse.StatusCode)" -ForegroundColor Gray
} catch {
    Write-Host "FAILED: Frontend is not responding" -ForegroundColor Red
}

Write-Host ""
Write-Host "API Testing Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Open http://localhost:3000 in your browser" -ForegroundColor Cyan
Write-Host "2. Test features manually" -ForegroundColor Cyan
Write-Host "3. Check browser console for errors" -ForegroundColor Cyan
