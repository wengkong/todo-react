import React, { useState } from "react";
import Todo from './Todo';

function Todos({todos}) {
  return todos.map((todo) => (
    <h3>{todo.title}</h3>
  ));
}

export default Todos;