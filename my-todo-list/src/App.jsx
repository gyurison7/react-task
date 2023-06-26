import './App.css';
import { useState } from 'react';
import Working from './component/Working';

function App() {

  const [todoList, setTodoList] = useState([
    { id: 1, title: '리액트 공부하기', body: '리액트 기초를 공부해봅시다.', isDone: false }
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
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
    setTitle('')
    setBody('')
  }

  // 삭제하기
  const deleteButtonHandler = (id) => {
    const newTodoList = todoList.filter((list) => list.id !== id);
    setTodoList(newTodoList)
  }

  // 완료
  const doneButtonHandler = (id) => {
    const tempTodoList = todoList.filter((list) => list.id === id);
    setTodoList([...todoList, tempTodoList[0].isDone = true])
  }

  // 취소
  const cancelButtonHandler = (id) => {
    const tempTodoList = todoList.filter((list) => list.id === id);
    setTodoList([...todoList, tempTodoList[0].isDone = false])
  }

  return (
    <div className='layout'>
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      <div className='add-form'>
        <div className='input-group'>
          <label className='form-label'>제목</label>
          <input value={title} onChange={titleChangeHandler} className='add-input' />
          <label className='form-label'>내용</label>
          <input value={body} onChange={bodyChangeHandler} className='add-input' />
          <button className='add-button' onClick={addButtonHandler}>추가하기</button>
        </div>
      </div>
      <div className='list-container'>
        <h2>Working🔥</h2>
        <div className='list-wrapper'>
          {
            todoList.filter((value) => value.isDone === false)
              .map((item) => (<Working key={item.id} item={item} deleteButtonHandler={deleteButtonHandler} doneButtonHandler={doneButtonHandler}
                cancelButtonHandler={cancelButtonHandler} isDone={item.isDone} />))
          }
        </div>
        <h2>Done🎉</h2>
        <div className='list-wrapper'>
          {
            todoList.filter((value) => value.isDone === true)
              .map((item) => (<Working key={item.id} item={item} deleteButtonHandler={deleteButtonHandler} doneButtonHandler={doneButtonHandler}
                cancelButtonHandler={cancelButtonHandler} isDone={item.isDone} />))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
