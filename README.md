# OpenAI Chat Bot Project

A full-stack chat bot application inspired by ChatGPT.

---

## Features

- **Frontend:** Modern ChatGPT-like UI (HTML, CSS, JS)
- **Backend:** NestJS API with OpenAI integration
- Sidebar with "New Chat" and "Clear History"
- Full-width, responsive chat area
- Send messages and receive AI responses
- Clear chat history with one click

---

## Project Structure

```
open-ai/
│
├── backend/      # NestJS backend (API, OpenAI integration)
│   ├── src/
│   ├── package.json
│   └── ...
│
├── frontend/     # Static frontend (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── ...
│
└── README.md     # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Backend Setup

1. **Install dependencies:**
    ```bash
    cd backend
    npm install
    ```

2. **Start the backend server (with auto-reload):**
    ```bash
    npm run start:dev
    ```
    The server runs at [http://localhost:3000](http://localhost:3000).

3. **OpenAI API Key:**
    - The API key is set in `src/app.service.ts`. Replace it with your own for production use.

### Frontend Setup

1. **Open the frontend:**
    - Open `frontend/index.html` directly in your browser.
    - Or use a local server (recommended for CORS):
      ```bash
      cd frontend
      npx serve .
      ```
      Then visit the provided URL (e.g., http://localhost:5500).

---

## API Endpoints

- **GET /**  
  Returns a hello world message.

- **POST /fetch-response**  
  Accepts `{ message: string }` in the body and returns the OpenAI response.

---

## Customization

- **OpenAI Model:** Change the model in `backend/src/app.service.ts`.
- **Styling:** Edit `frontend/style.css` for UI changes.
- **API Endpoint:** The frontend expects the backend at `http://localhost:3000/fetch-response`.

---

## License

This project is for educational/demo purposes.

---

## Credits

- [NestJS](https://nestjs.com/)
- [OpenAI API](https://platform.openai.com/)
- Inspired by [ChatGPT](https://chat.openai.com/)