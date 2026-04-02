# Todo App

A simple, beautiful Todo application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- ✅ Add, edit, delete todos
- ✔️ Mark todos as complete/incomplete
- 🔍 Filter by All / Active / Completed
- 🗑️ Clear all completed todos
- 💅 Clean, responsive UI with Tailwind CSS
- 🐳 Docker ready for deployment

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Docker

```bash
docker build -t todo-app .
docker run -p 3000:3000 todo-app
```

## Deploying to Coolify

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Coolify, create a new **Application** and connect your repository.
3. Set the **Build Pack** to `Dockerfile`.
4. Set the **Port** to `3000`.
5. Deploy!

Coolify will automatically detect the `Dockerfile` at the root and build/run the container.
