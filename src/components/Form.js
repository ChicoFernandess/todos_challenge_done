import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText}) => {
    const inputTextHandler = (e) => {
       console.log(e.target.value);
       setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 200}
        ]);
        setInputText("");
    };
    return(
     <form>
         <input value={inputText} onChange={inputTextHandler} placeholder="what needs to be done?" type="text" className="todo-input"/>
         <button onClick={submitTodoHandler} className="todo-button" type="submit">
             <i className="fas fa-angle-down"></i>
         </button>
     </form>
    );
};

export default Form;