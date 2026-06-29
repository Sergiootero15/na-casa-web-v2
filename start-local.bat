@echo off
cd /d "%~dp0"
start "" cmd /k "py -m http.server 5500"
timeout /t 2 /nobreak >nul
start "" http://127.0.0.1:5500