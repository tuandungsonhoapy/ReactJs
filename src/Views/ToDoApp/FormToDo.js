import React from "react";
import './ShowListToDo.scss'
import { toast } from "react-toastify";

class FormToDo extends React.Component {

    state = {
        ToDo: ''
    }

    handleInputToDo = (todo) => {
        this.setState({
            ToDo: todo.target.value
        })
    }

    handleAddToDo = (e) => {
        e.preventDefault()
        if (!this.state.ToDo) {
            toast.error('Missing todo!')
            return;
        }
        this.props.AddToDo({
            Id: Math.floor(Math.random() * 1001),
            ToDo: this.state.ToDo
        })
        this.setState({
            ToDo: ''
        })
    }

    static handleShowToDoEdit = (todo) => {
        this.setState({
            ToDo: todo.ToDo
        })
    }

    render() {
        return (
            <>
                <form>
                    <label>Add To Do</label><br />
                    <input type="text" value={this.state.ToDo} onChange={(todo) => this.handleInputToDo(todo)} /> <br />
                    <input type="submit" value={'Add'} onClick={(e) => this.handleAddToDo(e)} />
                </form>
            </>
        )
    }
}

export default FormToDo;

