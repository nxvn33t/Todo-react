"use client"
import React, { useState } from 'react';
import Header from '@/Components/Header';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating a new task object
    const newTask = { title, desc };

    // Updating the tasks array with the new task
    setTasks([...tasks, newTask]);

    // Clearing the input fields
    setTitle("");
    setDesc("");
  };

  const deletehand = (i) => {
    let copytask = [...tasks]
    copytask.splice(i, 1)
    setTasks(copytask)
  }

  let renderTasks = <h2>No Task Available</h2>;

  if (tasks.length > 0) {
    renderTasks = tasks.map((task, i) => (
      <li key={i}>
        <div className='Taskss'>
          <h4>{task.title}</h4>
          <h6>{task.desc}</h6>
          <button onClick={() => { deletehand(i) }} className='dlt-btn'>Delete</button>
        </div>

      </li>
    ));
  }

  return (
    <>
      <Header />
      <form className='todoform' onSubmit={handleSubmit}>
        <input
          className='ip'
          placeholder='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className='ip'
          placeholder='Enter Description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type='submit' className='btn-add'>
          Add Task
        </button>
      </form>
      <hr />
      <div className='taskname'>
        <ul>{renderTasks}</ul>
      </div>
    </>
  );
};

export default Page;
