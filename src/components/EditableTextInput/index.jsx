// write your code here
import {useState} from 'react'
import './index.css'

const EditableTextInput = () => {
  const [text, setText] = useState('')
  const [isEditing, setIsEditing] = useState(true)

  const onChangeInput = event => {
    setText(event.target.value)
  }

  const onClickSave = () => {
    setIsEditing(false)
  }

  const onClickEdit = () => {
    setIsEditing(true)
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Editable Text Input</h1>

        {isEditing ? (
          <div>
            <input
              type="text"
              value={text}
              onChange={onChangeInput}
              className="input-element"
            />
            <button type="button" onClick={onClickSave} className="button">
              Save
            </button>
          </div>
        ) : (
          <div>
            <p className="text">{text}</p>
            <button type="button" onClick={onClickEdit} className="button">
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default EditableTextInput
