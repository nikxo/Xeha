@echo off
nginx.exe -s quit
timeout 3
taskkill /im nginx.exe 