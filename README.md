# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



Explicación
Leer (Read):

La función readTasks utiliza getDocs y query para obtener todos los documentos de la colección tasks y los muestra en el contenedor tasks_container.
Actualizar (Update):

La función handleUpdate maneja la actualización de una tarea. Obtiene los datos actuales, solicita al usuario los nuevos datos y actualiza el documento usando updateDoc.
Eliminar (Delete):

La función handleDelete maneja la eliminación de una tarea. Obtiene el ID de la tarea y elimina el documento usando deleteDoc.
Eventos de Página:

window.addEventListener('DOMContentLoaded', readTasks) carga las tareas al cargar la página.
todoForm.addEventListener('submit', ...) maneja el envío del formulario y recarga las tareas después de agregar una nueva.

