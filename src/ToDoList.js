import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
    const [editIndex, setEditIndex] = useState(null);
    const [editedText, setEditedText] = useState('');

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedText(todos[index].text);
    };

    const handleSaveEdit = (index) => {
        editTodo(index, editedText);
        setEditIndex(null);
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} className={todo.completed ? 'completed' : ''}>
                    {editIndex === index ? (
                        <>
                            <input
                                type="text"
                                value={editedText}
                                onChange={(e) => setEditedText(e.target.value)}
                            />
                            <button onClick={() => handleSaveEdit(index)}>
                                <FaCheck />
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(index)}
                            />
                            <span>{todo.text}</span>
                            <button onClick={() => deleteTodo(index)}>
                                <FaTrash />
                            </button>
                            <button onClick={() => handleEdit(index)}>
                                <FaEdit />
                            </button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
