import { useState } from 'react';
import './App.css';
import Input from './component/Input';
import List from './component/List';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: '리액트 공부하기', body: '리액트 기초를 공부해봅시다.', isDone: false }
  ]);

  const [content, setContent] = useState({ title: '', body: '' });

  const { title, body } = content; // 비구조화 할당을 통해 값 추출

  const contentChangeHandler = (event) => {
    const { name, value } = event.target; // event.target에서 name과 value 추출
    setContent({ ...content, [name]: value }); // 기존의 content를 복사한뒤 name 키를 가진 값을 value로 설정
  }

  // 추가하기
  const addButtonHandler = () => {
    const newTodoList = {
      id: todoList.length + 1,
      title,
      body,
      isDone: false
    }
    setTodoList([...todoList, newTodoList])
    setContent({ title: '', body: '' })
  }

  // 삭제하기
  const deleteButtonHandler = (id) => {
    const newTodoList = todoList.filter((list) => list.id !== id);
    setTodoList(newTodoList)
  }

  // 완료 or 취소
  const updateButtonHandler = (id, btn) => {
    const tempTodoList = todoList.filter((list) => list.id === id);
    btn === 'done' ? setTodoList([...todoList, tempTodoList[0].isDone = true]) : setTodoList([...todoList, tempTodoList[0].isDone = false])
  }

  return (
    <div className='layout'>
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <Input title={title} body={body} contentChangeHandler={contentChangeHandler} addButtonHandler={addButtonHandler} />
      <List todoList={todoList} deleteButtonHandler={deleteButtonHandler} updateButtonHandler={updateButtonHandler} />
    </div>
  );
}

export default App;
