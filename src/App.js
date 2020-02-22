import React, { useState } from 'react';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Practice piano',
      completed: false
    },
    {
      id: 2,
      title: 'Workout',
      completed: false
    },
    {
      id: 3,
      title: 'Play basketball',
      completed: false
    }
  ])

  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  )
}

export default App;
