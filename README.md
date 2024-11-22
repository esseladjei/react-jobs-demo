# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## This is a single page application

### The entry point is the src/main.jsx

The project is using tailwindcss
-- Setting up tailwind with vite see [tailwindwithvite](https://tailwindcss.com/docs/guides/vite)
--Install Tailwind CSS

** Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files. **

-  npm install -D tailwindcss postcss autoprefixer
-  npx tailwindcss init -p

-  Configure your template paths _
   Add the paths to all of your template files in your tailwind.config.js file.
   content: [
   "./index.html",
   "./src/\*\*/_.{js,ts,jsx,tsx}",
   ],

Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;

## Getting started

1. **Dependencies**

   Install dependencies and build the libs you need to run the project:

   ```bash
   npm install
   ```

2. \_Project runs in a docker container, ensure you have Docker installed and run
_Builds or rebuilds the images for all services defined in the docker-compose.yml file and then starts the containers in detached mode.
```bash
 docker-compose up -d --build
```
This builds
3. Access the application  
   \_You should be able to navigate to http://localhost:3000/ to access the application
