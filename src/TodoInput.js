import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      addTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Tambah To-Do"
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default TodoInput;
