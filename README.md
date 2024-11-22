# React Jobs Demo

This project is a single-page application built with **React**, **Vite**, and **Tailwind CSS**. It includes a mock backend using **JSON Server** to serve data for development purposes. The app is styled with **Tailwind CSS** and follows best practices for a modern frontend development workflow.

## Features

- **React + Vite**: A fast development environment with hot module replacement (HMR).
- **Tailwind CSS**: Utility-first CSS for rapid UI development.
- **JSON Server**: A lightweight REST API to simulate a backend.
- **Dockerized**: Easily run the app and mock backend in isolated containers.

---

## Project Structure

- **Frontend**: Built with React and Vite, served on `http://localhost:3000`.
- **Mock Backend**: JSON Server serves the `jobs.json` file on `http://localhost:4000`.

---

## Prerequisites

### For Local Setup
- **Node.js** (v18 or later) and npm installed.
- Optionally, install **JSON Server** globally for the backend:
  ```bash
  npm install -g json-server

## For runing in DOCKER
2. _Project runs in a docker container, ensure you have Docker installed and run
_Builds or rebuilds the images for all services defined in the docker-compose.yml file and then starts the containers in detached mode.

3. Access the application  
   _You should be able to navigate to http://localhost:3000/ to access the application
```bash
 docker-compose up -d --build
```