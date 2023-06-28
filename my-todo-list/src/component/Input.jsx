const Input = ({ title, body, contentChangeHandler, addButtonHandler }) => {
    return (
        <form className='add-form'>
            <div className='input-group'>
                <label className='form-label'>제목</label>
                <input value={title} onChange={contentChangeHandler} className='add-input' name='title' />
                <label className='form-label'>내용</label>
                <input value={body} onChange={contentChangeHandler} className='add-input' name='body' />
                <button type="button" className='add-button' onClick={addButtonHandler}>추가하기</button>
            </div>
        </form>
    )
}

export default Input;