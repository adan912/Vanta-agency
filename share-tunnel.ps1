# VANTA Studio — Quick Share Tunnel
$env:PATH = "C:\Users\f\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\f\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback;$env:PATH"
Write-Host "Starting live public tunnel for VANTA Studio..." -ForegroundColor Green
pnpm dlx localtunnel --port 5173
