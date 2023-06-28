const Todo = ({ item, deleteButtonHandler, updateButtonHandler, isDone }) => {
    return (
        <div key={item.id} className='todo-container'>
            <h2>{item.title}</h2>
            <div>{item.body}</div>
            <div className='button-set'>
                <button className='todo-delete-button button' onClick={() => deleteButtonHandler(item.id)}>삭제하기</button>
                {
                    isDone === true ?
                        <button className='todo-complete-button button' onClick={() => updateButtonHandler(item.id, 'cancel')}>취소</button>
                        : <button className='todo-complete-button button' onClick={() => updateButtonHandler(item.id, 'done')}>완료</button>
                }

            </div>
        </div>
    )
}

export default Todo;