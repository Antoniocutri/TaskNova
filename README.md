# 🚀 TaskNova

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

TaskNova is a full-stack web application built with **Laravel** and **React**, designed to manage tasks efficiently with a scalable and modern architecture.

## 📸 Preview

![Dashboard](./screenshots/dashboard.png)  
*Main dashboard with task distribution overview*

![Task List](./screenshots/taskPage.png)  
*Task list with filters by status, priority, and title search*

---

## 📋 Table of Contents
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [CI/CD](#-cicd)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)

---

## 🧰 Tech Stack

* **Backend:** Laravel (PHP)
* **Frontend:** React (Vite)
* **Authentication:** Laravel Fortify
* **Database:** MySQL
* **Containerization:** Docker & Docker Compose
* **CI/CD:** GitHub Actions
* **Version Control:** Git & GitHub

---

## 📦 Features

* **Task management system:** Create, edit, delete, and organize tasks efficiently.
* **RESTful API:** Robust backend powered by Laravel.
* **Modern UI:** Reactive and fast frontend built with React.
* **Secure Authentication:** Login & registration flow handled seamlessly using Laravel Fortify.
* **Containerized:** Ready to run anywhere with a fully Dockerized environment.

---

## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have [Docker](https://www.docker.com/products/docker-desktop) and [Git](https://git-scm.com/) installed on your system.

### 1. Clone the repository & Environment Setup

```bash
git clone [https://github.com/Antoniocutri/TaskNova](https://github.com/Antoniocutri/TaskNova)
cd TaskNova

# Copy the example environment file
cp .env.example .env
```
*(Configure your database credentials, App URL, and other variables in the `.env` file).*

### 2. Run with Docker Compose (Recommended)

Build and spin up the application:

```bash
docker-compose up --build -d
```

### 3. Finalize Laravel Setup

*(Run this if your Docker setup doesn't automatically generate the key and migrate the database)*:

```bash
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan migrate
```

The application will now be available at: 👉 **http://localhost:8080**

---

### 🐳 Run with pre-built Docker Image

If you just want to run the application without cloning the source code, you can pull the pre-built image from Docker Hub:

```bash
docker pull antonio0307/tasknova:latest
docker run -p 8080:80 antonio0307/tasknova:latest
```

---

## 🔄 CI/CD

This project uses **GitHub Actions** to automate the build and deployment process. The pipeline is configured to:
* Automatically build the Docker image on every push.
* Push the latest image directly to Docker Hub.

---

## 📌 Future Improvements

- [ ] Role-based access control
- [ ] Task collaboration (shared tasks)
- [ ] Notifications system
- [ ] UI/UX improvements

---

## 👨‍💻 Author

Developed by **Antonino Cutrì**
* [GitHub](https://github.com/Antoniocutri)
* [LinkedIn](linkedin.com/in/antoninocutri-8b0103179) 

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).