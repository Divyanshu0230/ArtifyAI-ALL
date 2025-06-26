# 🎨 ArtifyAI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.20.8-339933?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.21.2-000000?logo=express)](https://expressjs.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/atlas)
[![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)](https://render.com/)

---

## 🌐 Live Demo

[Click here to try ArtifyAI!](https://artify-ai-all.vercel.app)

---

## 📹 Demo Video

[![Watch the demo](client/public/favicon.svg)](https://drive.google.com/file/d/1c37mFzeVF72MhH8bY9vpuADPb6eq7P2d/view?usp=sharing)

> Click the image above or [watch the demo video on Google Drive](https://drive.google.com/file/d/1c37mFzeVF72MhH8bY9vpuADPb6eq7P2d/view?usp=sharing)!

---

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Credit System](#credit-system)
- [Troubleshooting & FAQ](#troubleshooting--faq)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 🏗️ Tech Stack & Deployment

| Technology      | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| **React**      | Frontend UI framework for building a fast, modern user interface         |
| **Vite**       | Frontend build tool for lightning-fast development and production builds |
| **TailwindCSS**| Utility-first CSS framework for rapid, responsive styling               |
| **Framer Motion** | Animation library for smooth, modern UI transitions                  |
| **Node.js**    | JavaScript runtime for the backend server                                |
| **Express**    | Backend web framework for building REST APIs                             |
| **MongoDB Atlas** | Cloud database for storing users, images, and app data               |
| **Render**     | Hosting and auto-deployment for the backend (Node.js/Express API)        |
| **Vercel**     | Hosting and auto-deployment for the frontend (React/Vite app)            |

---

## 🚀 Features

- **Prompt-to-Image:** Type anything, get a unique AI-generated image.
- **Modern UI:** React, TailwindCSS, Framer Motion for a smooth, responsive experience.
- **Secure Auth & Credits:** User authentication and a credit system for fair usage.
- **Personal Gallery:** View and download your creations.
- **Cloud Database:** MongoDB Atlas for reliable storage.
- **Advanced AI Engine:** Real, prompt-matching images generated instantly.
- **Responsive Design:** Works beautifully on desktop and mobile.
- **Demo Video:** See it in action before you try!

---

## 🛠️ How It Works

1. **User Registration/Login:**  
   Secure authentication using JWT.

2. **Prompt Submission:**  
   Users enter a text prompt describing the image they want.

3. **AI Image Generation:**  
   The backend processes the prompt and returns a unique AI-generated image.

4. **Credit System:**  
   Each image generation uses a credit. Users can buy more credits as needed.

5. **Gallery:**  
   Users can view, download, and manage their generated images.

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Divyanshu0230/ArtifyAI-ALL.git
cd ArtifyAI-ALL
```

### 2. Install Dependencies

```bash
cd server
npm install
cd ../client
npm install
```

### 3. Set Up Environment Variables

See [Environment Variables](#environment-variables) below.

### 4. Start the Application

- **Backend:**  
  ```bash
  cd server
  npm start
  ```
- **Frontend:**  
  ```bash
  cd client
  npm run dev
  ```

### 5. Open in Browser

Go to [http://localhost:5173](http://localhost:5173)

---

## 🔑 Environment Variables

Create a `.env` file in both `server` and `client` directories.

**server/.env**
```
MONGODB_URI=your_mongodb_atlas_connection_string
CLIPDROP_API=your_clipdrop_api_key
JWT_SECRET=your_jwt_secret
```

**client/.env**
```
VITE_BACKEND_URL=http://localhost:4000
```

---

## 💳 Credit System

- **Each user starts with a set number of credits.**
- **Each image generation deducts one credit.**
- **Users can purchase more credits via the Buy Credits page.**

---

## 🛠️ Troubleshooting & FAQ

**Q: I get an error when generating images.**  
A: Check your environment variables and authentication tokens.

**Q: MongoDB connection fails.**  
A: Make sure your `MONGODB_URI` is correct and your cluster is running.

**Q: Demo video is not playing.**  
A: Make sure you are logged into Google Drive or try a different browser.

**Q: How do I view my MongoDB data?**  
A: Use [MongoDB Atlas web UI](https://cloud.mongodb.com/), Compass, or the command line.

---

## 🤝 Contributing

Contributions are welcome!  
1. Fork the repo  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request

---

## 👤 Author

- [Divyanshu Pratap Singh](https://github.com/Divyanshu0230)
- [LinkedIn](https://www.linkedin.com/in/divyanshu-pratap-singh-304546251/)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)

---

> ArtifyAI — Where your imagination becomes art.
