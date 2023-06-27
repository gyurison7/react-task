import Working from './Working';

const List = ({ todoList, deleteButtonHandler, updateButtonHandler }) => {
    return (
        <div className='list-container'>
            <h2>Working🔥</h2>
            <div className='list-wrapper'>
                {
                    todoList.filter((value) => value.isDone === false)
                        .map((item) => (<Working key={item.id} item={item} deleteButtonHandler={deleteButtonHandler}
                            updateButtonHandler={updateButtonHandler} isDone={item.isDone} />))
                }
            </div>
            <h2>Done🎉</h2>
            <div className='list-wrapper'>
                {
                    todoList.filter((value) => value.isDone === true)
                        .map((item) => (<Working key={item.id} item={item} deleteButtonHandler={deleteButtonHandler}
                            updateButtonHandler={updateButtonHandler} isDone={item.isDone} />))
                }
            </div>
        </div>
    )
}

export default List;