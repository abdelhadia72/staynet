# 🏠 Staynet

Welcome to Staynet - Your Home Away From Home! 🌍✨

Staynet is a modern, full-stack accommodation booking platform inspired by Airbnb. Built with the MERN stack (MongoDB, Express, React, Node.js), this project serves as both a practical learning experience and a robust, scalable application.

## 🚀 Features

- 👤 User authentication with email verification
- 🏡 Property listing and booking system
- 🔍 Advanced search and filter capabilities
- 💬 Real-time messaging between hosts and guests
- ⭐ Review and rating system
- 💳 Secure payment processing
- 📱 Responsive design for seamless mobile and desktop experience
- 🤞 and more ...

## 🛠️ Tech Stack

- **Frontend**: React.js with TypeScript
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Real-time Communication**: Socket.io
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions

## 🤝 Getting Started

### Prerequisites

- Node.js (v14 or later)
- Docker and Docker Compose
- Git

### 🐳 Installation with Docker

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/staynet.git
   cd staynet
   ```

2. 🔐 Set up your environment: Copy `.env.example` to `.env` and configure your personal keys and settings:

   Customize the variables in `.env` with your specific details for MongoDB, JWT, email service, and other configurations.


3. Build and run the Docker containers:
   ```
   docker-compose up --build
   ```

4. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### 🔧 Manual Installation (for Development)

1. Clone the repository as shown above.

2. Install dependencies for both frontend and backend:
   ```
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Set up environment variables as described in step 2 of Docker installation.

4. Start the development servers:
   ```
   # In the backend directory
   npm run dev

   # In the frontend directory
   npm run dev
   ```

## 🧪 Testing

Run the test suites for both frontend and backend:

```
cd frontend && npm test
cd ../backend && npm test
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## ☎️ Contact

Abdelhadi Bousaadah
🐦 : [@AbdelhadiBousa2](https://x.com/AbdelhadiBousa2)
📩 : abdelhadi.bousaadah@gmail.com

Project Link: [Github](https://github.com/abdelhadia72/staynet)
Happy coding and happy hosting! 🎉🏠
