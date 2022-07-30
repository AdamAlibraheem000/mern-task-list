import React,{useState, useEffect} from 'react'
import axios from 'axios'


function Main() {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/tasks')
        .then(res => setTasks(res.data))
        .catch(error => console.log(error));
    },[tasks])

    // Delete task by ID
    const deleteTask = id => {
        axios.delete(`/tasks/delete/${id}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    function submitForm (e){
        e.preventDefault();

        // Get Values from form
        const newTasks = {
            title,
            desc
        }

        // Send to Database
        axios.post("/tasks/add", newTasks)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        // Clear form values
        setTitle('')
        setDesc('')
    }


  return (
    <main>
        <div>
            <form onSubmit={submitForm} >
                <div>
                <label htmlFor="title">Add New Task</label>
                <input type="text" 
                value={title}
                placeholder='Enter task name'
                onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                <label htmlFor="desc">Add Task Description</label>
                <input type="text"
                value={desc}
                placeholder='Task Description'
                onChange={e => setDesc(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
        <div>
            <h1>Current Tasks:</h1>
            {tasks.map((task, key) => (
                <div key={key}>
                    <h1>{task.title}</h1>
                    <p>{task.desc}</p>
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
            ))}
        </div>

    </main>
  )
}

export default Main