# 📦 Basic Node Web

[Documentación de Node.js](https://nodejs.org/es/docs/)

Proyecto base para una aplicación web utilizando **Node.js**, **Express** como framework de servidor y **EJS** como motor de plantillas. Incluye integración con **Bootstrap** y **FontAwesome**.

## 1. 🚀 Instalación y Configuración

Sigue estos pasos para configurar el entorno de desarrollo local. **Asegúrate de tener Node.js instalado.**

1.  Clona el repositorio.
2.  Instala las dependencias necesarias:

```bash
npm install
```

## 2. 🛠 Uso

Para iniciar el servidor en modo desarrollo (utilizando `nodemon` para reinicio automático):

```bash
npm run dev
```

El servidor se iniciará en el puerto **3000**. Abre tu navegador y visita:

```text
http://localhost:3000
```

## 3. 📂 Estructura del Proyecto

La estructura principal del código fuente se encuentra en la carpeta `src/`:

*   **index.js**: Punto de entrada de la aplicación. Configura Express, las vistas y los archivos estáticos.
*   **routes/**: Definición de las rutas del servidor.
*   **views/**: Plantillas EJS para el frontend (`about`, `contact`, `index`).
*   **public/**: Archivos estáticos personalizados (CSS, imágenes).

## 4. 💻 Tecnologías

*   **Node.js**: Entorno de ejecución.
*   **Express**: Framework web.
*   **EJS**: Motor de plantillas (Embedded JavaScript).
*   **Bootstrap 5**: Framework CSS para diseño responsivo.
*   **FontAwesome**: Librería de iconos.

## 5. 📝 Notas Adicionales

El proyecto utiliza **ES Modules** (`"type": "module"` en `package.json`), por lo que se utilizan `import/export` en lugar de `require`.

Las librerías de Bootstrap y FontAwesome se sirven estáticamente desde `node_modules`, configurado en `src/index.js`.
