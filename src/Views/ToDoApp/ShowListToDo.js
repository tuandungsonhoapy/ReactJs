import React from "react";
import "./ShowListToDo.scss";

class ShowListToDo extends React.Component {

    state = {
        EditToDo: {}
    }

    handleClickDelete = (todo) => {
        this.props.DeleteToDo(todo)
    }

    handleClickEdit = (todo) => {
        this.setState({
            EditToDo: todo
        })
    }

    handleClickSave = (todo) => {
        this.props.handleSaveEditToDo(this.state.EditToDo)
        this.setState({
            EditToDo: {}
        })
    }

    handleInputEditToDo = (event) => {
        this.setState({
            EditToDo: {
                Id: this.state.EditToDo.Id,
                ToDo: event.target.value
            }
        })
    }

    render() {
        let stt = 0;
        let listToDo = this.props.listToDo;
        let { EditToDo } = this.state
        console.log('>>>check list to do: ', listToDo, 'check length: ', listToDo.length)
        console.log('Check new todo >>>: ', EditToDo)
        let checkEmpty = Object.keys(EditToDo).length === 0;
        return (
            <div className="box_todo_list">
                {listToDo && listToDo.length > 0 &&
                    listToDo.map((item, index) => {
                        stt++
                        return (
                            <div className="item_todo_list" key={item.Id}>
                                {checkEmpty === true ?
                                    <>
                                        <span>{stt} - {item.ToDo}</span>
                                        <button className="btn_edit" onClick={() => this.handleClickEdit(item)}>Edit</button>
                                        <button className="btn_delete" onClick={() => this.handleClickDelete(item)}>Delete</button>
                                    </>
                                    :
                                    <>
                                        {EditToDo.Id === item.Id ?
                                            <>
                                                <span>{stt} - <input value={EditToDo.ToDo} onChange={(event) => this.handleInputEditToDo(event)} /></span>
                                                <button className="btn_save" onClick={() => this.handleClickSave()}>Save</button>
                                                <button className="btn_delete" onClick={() => this.handleClickDelete(item)}>Delete</button>
                                            </>
                                            :
                                            <>
                                                <span>{stt} - {item.ToDo}</span>
                                                <button className="btn_edit" onClick={() => this.handleClickEdit(item)}>Edit</button>
                                                <button className="btn_delete" onClick={() => this.handleClickDelete(item)}>Delete</button>
                                            </>
                                        }
                                    </>
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ShowListToDo;