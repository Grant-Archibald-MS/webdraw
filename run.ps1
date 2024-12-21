$current = Get-Location
Set-Location site
python -m http.server
Set-Location $current