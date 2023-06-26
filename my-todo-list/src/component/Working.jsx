const Working = ({ item, deleteButtonHandler, doneButtonHandler, cancelButtonHandler, isDone }) => {
    return (
        <div key={item.id} className='todo-container'>
            <h2>{item.title}</h2>
            <div>{item.body}</div>
            <div className='button-set'>
                <button className='todo-delete-button button' onClick={() => deleteButtonHandler(item.id)}>삭제하기</button>
                {
                    isDone === true ?
                        <button className='todo-complete-button button' onClick={() => cancelButtonHandler(item.id)}>취소</button>
                        : <button className='todo-complete-button button' onClick={() => doneButtonHandler(item.id)}>완료</button>
                }

            </div>
        </div>
    )
}

export default Working;