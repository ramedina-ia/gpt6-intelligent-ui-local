@echo off
chcp 65001 >nul
echo ========================================================
echo   INICIANDO OLLAMA CON SOPORTE CORS PARA INTELLIGENT UI
echo ========================================================
setx OLLAMA_ORIGINS "*" >nul
set OLLAMA_ORIGINS=*
set OLLAMA_HOST=127.0.0.1:11434

echo Cerrando instancias previas de Ollama sin CORS...
taskkill /F /IM "ollama app.exe" >nul 2>&1
taskkill /F /IM "ollama.exe" >nul 2>&1
timeout /t 2 /nobreak >nul

echo Levantando servidor Ollama en http://127.0.0.1:11434 ...
start "Ollama Server (CORS Activo)" /min cmd /k "set OLLAMA_ORIGINS=*&& set OLLAMA_HOST=127.0.0.1:11434&& ollama serve"
timeout /t 3 /nobreak >nul

echo Abriendo Simulador Intelligent UI...
start "" "%~dp0Simulador_GPT6_Intelligent_UI_Local.html"
echo Listo! Ya puedes usar el modo Ollama Local ($0) en tu navegador.
timeout /t 3 >nul
