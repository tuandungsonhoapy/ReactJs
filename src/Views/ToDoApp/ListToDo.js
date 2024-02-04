import React from "react";
import FormToDo from "./FormToDo";
import ShowListToDo from "./ShowListToDo";
import './ShowListToDo.scss';
import { toast } from "react-toastify";


class ListToDo extends React.Component {

    state = {
        listToDo: []
    }

    AddToDo = (todo) => {
        this.setState({
            listToDo: [...this.state.listToDo, todo]
        })
        toast.success("Add todo successfully!")
    }

    DeleteToDo = (ToDo) => {
        let newlist = this.state.listToDo.filter(item => item.Id !== ToDo.Id)
        this.setState({
            listToDo: newlist
        })
        toast.success("Delete successfully!")
    }

    handleSaveEditToDo = (todo) => {
        console.log(todo)
        let newList = this.state.listToDo.map((item, index) => {
            if (item.Id === todo.Id) return todo
            else return item
        })
        this.setState({
            listToDo: newList
        })

        toast.success("Update To Do successfully!")
    }

    render() {
        return (
            <>
                <div className="todo_list_container">
                    <p>
                        To Do App with reactjs!
                    </p>
                    <FormToDo AddToDo={this.AddToDo} />
                    <ShowListToDo
                        listToDo={this.state.listToDo}
                        DeleteToDo={this.DeleteToDo}
                        handleSaveEditToDo={this.handleSaveEditToDo} />
                </div>
            </>
        )
    }
}

export default ListToDo;
