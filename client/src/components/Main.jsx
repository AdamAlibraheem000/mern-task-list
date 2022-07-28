import React from 'react'


function Main() {
  return (
    <main>
        <div>
            <form>
                <div>
                <label htmlFor="">Add New Task</label>
                <input type="text" placeholder='Enter task name' />
                </div>
                <div>
                <label htmlFor="">Add Task Description</label>
                <input type="text" placeholder='Task Description' />
                </div>
            </form>
        </div>
        <div>
            <h1>Current Tasks:</h1>
            <ul>
                <li>Task one</li>
                <li>Task two</li>
                <li>Task three</li>
            </ul>
        </div>

    </main>
  )
}

export default Main