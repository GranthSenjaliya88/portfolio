$port = 3000
$root = "C:\Users\grant\Desktop\portfolio"
$url  = "http://localhost:$port/"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)
$listener.Start()

Write-Host ""
Write-Host "  ==========================================" -ForegroundColor Cyan
Write-Host "   Portfolio running at: $url" -ForegroundColor Green
Write-Host "   Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host "  ==========================================" -ForegroundColor Cyan
Write-Host ""

Start-Process $url

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".webp" = "image/webp"
    ".ico"  = "image/x-icon"
    ".woff2"= "font/woff2"
    ".woff" = "font/woff"
    ".ttf"  = "font/ttf"
    ".json" = "application/json"
    ".pdf"  = "application/pdf"
}

try {
    while ($listener.IsListening) {
        $ctx  = $listener.GetContext()
        $req  = $ctx.Request
        $resp = $ctx.Response

        $rawPath = $req.Url.LocalPath
        if ($rawPath -eq "/") { $rawPath = "/index.html" }
        $filePath = Join-Path $root ($rawPath.TrimStart('/').Replace('/', '\'))

        if (Test-Path $filePath -PathType Leaf) {
            $ext     = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime    = if ($mimeTypes[$ext]) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $content = [System.IO.File]::ReadAllBytes($filePath)

            $resp.StatusCode  = 200
            $resp.ContentType = $mime
            $resp.ContentLength64 = [long]$content.Length
            $resp.OutputStream.Write($content, 0, $content.Length)
        } else {
            $resp.StatusCode = 404
            $body = [System.Text.Encoding]::UTF8.GetBytes("404 - Not Found")
            $resp.ContentLength64 = [long]$body.Length
            $resp.OutputStream.Write($body, 0, $body.Length)
        }

        $resp.OutputStream.Close()
    }
} finally {
    $listener.Stop()
}
