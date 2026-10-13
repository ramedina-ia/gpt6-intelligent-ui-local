# 🚀 GPT-6 Intelligent UI Studio — Recreación Open Source Local ($0)

> **Canal Oficial:** [Ramiro Medina | AI: n8n & Vibe Coding (@ramiromedina-ia)](https://www.youtube.com/@ramiromedina-ia)  
> **Stack:** React 19 + TypeScript + Tailwind CSS + Shadcn UI + Ollama Local ($0) / DeepSeek Flash + Webhooks n8n

Recreación mediante ingeniería inversa ética de la arquitectura **"Intelligent UI"** de GPT-6. En lugar de devolver párrafos estáticos de texto, este motor interpreta el streaming de tokens en tiempo real y ensambla **herramientas interactivas (calculadoras, cotizadores con sliders deslizantes, métricas reactivas y botones conectados a Webhooks de n8n)** con **0ms de latencia en el navegador**.

---

## ⚡ 2 Formas de Usarlo en Cualquier PC

### Opción 1: Plug & Play para No Programadores (1 Clic — Sin instalar código)
1. Descarga de este repositorio el archivo **[`Simulador_GPT6_Intelligent_UI_Local.html`](./Simulador_GPT6_Intelligent_UI_Local.html)** (y opcionalmente **[`Iniciar_Ollama_Simulador.bat`](./Iniciar_Ollama_Simulador.bat)** si estás en Windows).
2. Haz **doble clic** sobre `Simulador_GPT6_Intelligent_UI_Local.html` para abrirlo directamente en Chrome, Edge, Brave o Safari.
3. Si deseas conectarlo con **Ollama Local ($0)** en Windows con soporte CORS automático, haz doble clic sobre `Iniciar_Ollama_Simulador.bat`.

### Opción 2: Entorno de Desarrollo (Vibe Coding con `npm run dev`)
Si prefieres clonarlo y levantarlo como servidor local de desarrollo con Vite:

```bash
git clone https://github.com/ramedina-ia/gpt6-intelligent-ui-local.git
cd gpt6-intelligent-ui-local
npm install
npm run dev
```

---

## 🧠 Los 3 Modos de Inteligencia Artificial Incluidos

| Modo | Costo | Descripción |
|:---|:---:|:---|
| **1. Simulación Pro** | **$0** | Funciona al instante sin instalar nada. Incluye 3 demos pregrabadas (Préstamo SaaS, ROI Agente n8n, Auditor YouTube) y generador sintético en tiempo real. |
| **2. Ollama Local ($0)** | **$0** | Se conecta a `http://127.0.0.1:11434`. Detecta automáticamente los modelos instalados en tu PC (`llama3.2:latest`, `qwen2.5-coder:7b`, `deepseek-r1`) priorizando el consumo eficiente de RAM. |
| **3. DeepSeek Cloud** | **~$0.0002** | Conexión directa por streaming con la API oficial de DeepSeek (`deepseek-chat` Flash). Solo pega tu API Key (`sk-...`) obtenida en [platform.deepseek.com](https://platform.deepseek.com). |

---

## 🛠️ Arquitectura Interna (Incluida en `/src`)

1. **[`src/prompts/systemPrompt.ts`](./src/prompts/systemPrompt.ts):** El **System Prompt Maestro** que instruye al LLM para emitir el Árbol de Sintaxis Abstracta (AST) dentro de bloques ```` ```ui ```` usando únicamente el catálogo seguro de componentes.
2. **[`src/utils/resilientParser.ts`](./src/utils/resilientParser.ts):** El **Parser Incremental Resiliente** que repara llaves y corchetes JSON incompletos a medida que caen los tokens en streaming, evitando errores de sintaxis y parpadeos.
3. **[`src/components/UIRegistry.tsx`](./src/components/UIRegistry.tsx):** Catálogo seguro de componentes en React + Tailwind CSS + Shadcn UI (`UICard`, `UIMetric`, `UISlider`, `UIButton`) con disparo directo de Payloads JSON hacia **Webhooks de n8n**.

---

## 📋 Prompt de Prueba (Caso Consultor Financiero del Video)

Copia y pega este prompt en el simulador:

```text
Soy un consultor financiero. Créame un cotizador interactivo para evaluar un crédito corporativo de 25,000 dólares con amortización e intereses ajustables.
```

---

## 🔗 Los 4 Repositorios Open Source de Referencia
* **OpenUI (Weights & Biases):** [github.com/wandb/openui](https://github.com/wandb/openui)
* **Open Canvas (LangChain):** [github.com/langchain-ai/open-canvas](https://github.com/langchain-ai/open-canvas)
* **CopilotKit (Generative UI React):** [github.com/CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)
* **DeepSeek AI Oficial:** [github.com/deepseek-ai/DeepSeek-Coder](https://github.com/deepseek-ai/DeepSeek-Coder)

---

## 📬 Comunidad y Contacto
* 💬 **Canal de Telegram (Guías en PDF, Prompts y Plantillas):** [https://t.me/ramiromedina_ai0](https://t.me/ramiromedina_ai0)
* 📲 **Consultoría e Implementación B2B (WhatsApp):** [+57 333 235 4749](https://wa.me/573332354749)
