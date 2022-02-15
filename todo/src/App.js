import {React,useState} from 'react'
import { TaskRow } from './components/TaskRow'

function App() {

  const [username, setUsername] = useState('Fazt')
  const [taskItem, setTaskItem] = useState([{name:"Task One", done: false}, {name:"Task Two", done: false},{name:"Task Three", done: true},{name:"Task Four", done: false}])

  const toggleTask = (task) => setTaskItem(taskItem.map(t=>(t.name === task.name ? {...t,done: !t.done}: t)))

  const taskTableRows = () => taskItem.map(task => (
        <TaskRow task={task} key = {task.name} toggleTask = {toggleTask}/>
    ))

  return (
    <div>
      <h1>Hello World</h1>
      <table>
        <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
        </tr>
        </thead>
      <tbody>
        {taskTableRows()}
      </tbody>
      </table>
    </div>
  );
}

export default App;
