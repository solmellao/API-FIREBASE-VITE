import { db, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, getDoc } from './firebaseConfig.js';

// Crear

const todoForm = document.getElementById('todo_form');
const tasksContainer = document.getElementById('tasks_container');

const create = async (name, url, description) => {
    try {
        const docRef = await addDoc(collection(db, 'tasks'), {
            name,
            url,
            description
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

todoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const url = todoForm['todo_url'].value;
    const description = todoForm['todo_description'].value;

    await create(name, url, description);

    todoForm.reset();
    readTasks(); // Recargar las tareas
});

// Leer
const readTasks = async () => {
    const q = query(collection(db, 'tasks'));
    const querySnapshot = await getDocs(q);
    tasksContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const task = doc.data();
        tasksContainer.innerHTML += `
            <div class="task" data-id="${doc.id}">
                <h3>${task.name}</h3>
                <p>${task.url}</p>
                <p>${task.description}</p>
                <button class="btn btn-primary update">Update</button>
                <button class="btn btn-danger delete">Delete</button>
            </div>
        `;
    });

    // Agregar eventos a botones de actualizar y eliminar
    document.querySelectorAll('.update').forEach(button => {
        button.addEventListener('click', handleUpdate);
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
};

// Actualizar
const handleUpdate = async (e) => {
    const taskElement = e.target.closest('.task');
    const taskId = taskElement.dataset.id;
    const taskDoc = doc(db, 'tasks', taskId);
    const task = await getDoc(taskDoc);

    const newName = prompt('Nuevo nombre:', task.data().name);
    const newUrl = prompt('Nuevo URL:', task.data().url);
    const newDescription = prompt('Nueva descripción:', task.data().description);

    await updateDoc(taskDoc, {
        name: newName,
        url: newUrl,
        description: newDescription
    });

    readTasks(); // Recargar las tareas
};

// Eliminar
const handleDelete = async (e) => {
    const taskElement = e.target.closest('.task');
    const taskId = taskElement.dataset.id;
    await deleteDoc(doc(db, 'tasks', taskId));

    readTasks(); // Recargar las tareas
};

// Cargar tareas cuando se carga la página
window.addEventListener('DOMContentLoaded', readTasks);

todoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const url = todoForm['todo_url'].value;
    const description = todoForm['todo_description'].value;

    await create(name, url, description);

    todoForm.reset();
    readTasks(); // Recargar las tareas
});
