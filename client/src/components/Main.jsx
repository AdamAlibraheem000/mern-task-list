import React,{useState, useEffect} from 'react'
import axios from 'axios'
import dayjs from 'dayjs'


function Main() {
    console.log(dayjs())

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [currentDate, setCurrentDate] = useState('');

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
            desc,
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
            <form id="form-grid" onSubmit={submitForm} >
                <section className='label-flex'>
                <div >
                <label className='form-style' htmlFor="title">Add New Task</label>
                
                </div>
                <div >
                <label className='form-style' htmlFor="desc">Task Description</label>
                
                </div>
                </section>

                <section>
                <div id='input-id'>
                <input className="input-style" type="text" 
                value={title}
                placeholder='Enter task name'
                onChange={e => setTitle(e.target.value)} />
                <input className="input-style" type="text"
                value={desc}
                placeholder='Task Description'
                onChange={e => setDesc(e.target.value)} />
                </div>
                <div>
                    <button id='form-btn' type='submit'>Submit</button>
                </div>
                </section>
            </form>
        </div>
        <div>
            <h1 id='current-title'>Current Tasks:</h1>
            {tasks.map((task, key) => (
                <div key={key}>
                    <h1 className='task-title'>{task.title}</h1>
                    <p className='task-desc'>{task.desc}</p>
                    <p className='date-styling'>{dayjs(task.date).format("YYYY-MM-DD")}</p>
                    <button className="btn-delete"onClick={() => deleteTask(task._id)}>Delete</button>
                </div>
            ))}
        </div>

    </main>
  )
}

export default Main