import React from "react";

const Footer = ({setStatus, todos, setTodos}) => {
    const statusHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value);
    }


    return (
     <>
{
    todos.length === 0 ? <h5>0 items left</h5>  //se nao tenho items do this
    :


    <div className="footer-container">
        {/* <h5>{todos.length} items left</h5> */}
        <h5>{todos.filter(todo => todo.completed === false).length} items left</h5>
        <input onClick={statusHandler} type="button" value="all"></input>
        <input onClick={statusHandler} type="button" value="active"></input>
        <input onClick={statusHandler} type="button" value="completed"></input>
     </div>
}
     </>
    )
}

export default Footer;