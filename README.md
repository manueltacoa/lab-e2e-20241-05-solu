# 📋 Proyecto E2E - Entrega 5: Frontend web con React

## Descripción 💡

Este laboratorio se centra en desarrollar la página web para el Backend del clon de Uber. Constará de una página de Login/Register para cada rol de usuario, así como un dashboard para visualizar el historial de viajes de cada usuario.

En esta entrega deberás:

- Desarrollar la página web con el paradigma basado en componentes con ayuda del framework de frontend [**React**](https://react.dev)
- Implementar el consumo de la API del E2E con ayuda de la librería [**Axios**](https://axios-http.com/es/)
- Clonar el diseño de la web del E2E con ayuda del framework de CSS [**Tailwind**](https://tailwindcss.com/)

## Requerimientos ✅

Tener instalado:
+ Runtime de Javascript [**Node.js**](https://nodejs.org/en) (v20 o superior)
+ Gestor de paquetes de Node [**npm**](https://www.npmjs.com/package/npm) (v9 o superior)

Investigar sobre:
+ La herramienta de desarrollo [**Vite**](https://vitejs.dev)
+ Framework de CSS [**Tailwind**](https://tailwindcss.com/)

## Evaluación 📋

## Getting Started 🚀

En la carpeta principal verán dos carpetas: `backend` y `frontend`. 

- En la carpeta de `backend` se encuentra la API de Spring Boot realizada en los laboratorios e2e anteriores. 
- En la carpeta de `frontend` se encuentra el proyecto de Reac-Vite que consumirá el backend.

### Organización de carpetas 📂

``` markdown
frontend/
├── node_modules/         # Dependencias del proyecto
├── public/               # Archivos estáticos de la aplicación
├── src/                  # Archivos de código fuente de la aplicación 
│ ├── assets/             # Archivos multimedia 
│ ├── components/         # Componentes de la aplicación
│ ├── pages/              # Páginas principales
│ ├── styles/             # Estilos globales y de componentes
│ │ └── index.css
│ ├── api/                # Archivos de configuración de Axios
│ ├── App.jsx             # Archivo principal 
│ └── main.jsx            # Archivo de inicialización          
├── .gitignore
├── index.html            # Archivo HTML principal
├── package.json          # Archivo de configuración de dependencias
├── tailwind.config.js    # Archivo de configuración de Tailwind
└── vite.config.js        # Archivo de configuración de Vite
```

### Ejecutar el proyecto de Spring Boot
Antes de ejecutar el proyecto de React-Vite, es necesario ejecutar el proyecto de Spring Boot para que la API esté disponible. Pueden abrirlo desde IntelliJ IDEA en la carpeta `backend` y ejecutarlo desde ahí. Asegurarse que su proyecto esté corriendo en el puerto `8080`.


### Ejecutar el proyecto de React-Vite 🪽

Escribir los siguientes comandos en la terminal para cargar las dependencias del proyecto y ejecutar el servidor de React-Vite

```bash
cd frontend
npm install
npm run dev
```
  
Les aparecerá un mensaje similar a este:

```bash  
  VITE v5.2.11  ready in 272 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Pueden acceder a la página web desde el navegador en la dirección [http://localhost:5173/](http://localhost:5173/)