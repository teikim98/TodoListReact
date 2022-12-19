import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplates from './components/TodoTemplates';

function App() {
  const [todos,setTodos] = useState([
    {
      id:1,
      text : '리액트의 기초 알아보기',
      checked : true
    },
    {
      id:2,
      text : '컴포넌트 스타일링해보기',
      checked : true
    },
    {
      id:3,
      text : '일정 관리 앱 만들기',
      checked : false
    }
  ])

  const nextId = useRef(4);

  const onInsert = useCallback(text =>{
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current +=1;
    },[todos],
  )

  const onRemove = useCallback(
    id =>{
      setTodos(todos.filter(todo=>todo.id !== id))
    }
  )

  return (
    <TodoTemplates>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos = {todos} onRemove = {onRemove} />
    </TodoTemplates>
  );
}

export default App;