import { db, collection, addDoc } from './firebaseConfig.js';

const todoForm = document.getElementById('todo_form');

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
});
