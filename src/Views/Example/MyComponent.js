import React from 'react';
import HTMLForm from './HTMLForm';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 1, title: 'Developer', salary: '500 ' },
            { id: 2, title: 'Tester', salary: '400 ' },
            { id: 3, title: 'Project manager', salary: '1000 ' }
        ]
    }

    AddNewJob = (job) => {
        console.log('Check new job: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    DeleteJob = (job) => {
        let newArrJobs = this.state.arrJobs.filter(item => item.id !== job.id)
        console.log('>>>>Check new arr: ', newArrJobs)
        this.setState({
            arrJobs: newArrJobs
        })
    }

    componentDidUpdate(preProps, preState) {
        console.log('preState: ', preState)
        console.log('currentState: ', this.state)
    }

    componentDidMount() {
        console.log('>>> run component did mount')
    }

    render() {
        return (
            <>
                <HTMLForm AddNewJob={this.AddNewJob} />
                <ChildComponent arrJobs={this.state.arrJobs} DeleteJob={this.DeleteJob} />
            </>
        )
    }
}

export default MyComponent;