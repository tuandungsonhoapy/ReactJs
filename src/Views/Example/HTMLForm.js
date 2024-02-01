import React from 'react';

class HTMLForm extends React.Component {
    state = {
        TitleJob: '',
        Salary: ''
    }

    handleTitleJob = (event) => {
        this.setState({
            TitleJob: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            Salary: event.target.value
        })
    }

    render() {
        return (
            <>
                <form>
                    <label>Title job:</label><br></br>
                    <input type='text' value={this.state.firstName} onChange={(event) => this.handleTitleJob(event)}></input><br></br>
                    <label>Salary:</label><br></br>
                    <input type='text' value={this.state.lastName} onChange={(event) => this.handleSalary(event)}></input><br></br>
                </form>
            </>
        )
    }
}

export default HTMLForm;