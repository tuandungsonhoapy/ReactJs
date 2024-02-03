import React from 'react';

class HTMLForm extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert('Vui lòng nhập thông tin job!')
            return;
        }
        this.props.AddNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label>Title job:</label><br></br>
                    <input type='text' value={this.state.title} onChange={(event) => this.handleTitleJob(event)}></input><br></br>
                    <label>salary:</label><br></br>
                    <input type='text' value={this.state.salary} onChange={(event) => this.handleSalary(event)}></input><br></br>
                    <input type='submit' value={'Submit'} onClick={(e) => this.handleSubmit(e)} />
                </form>
            </>
        )
    }
}

export default HTMLForm;