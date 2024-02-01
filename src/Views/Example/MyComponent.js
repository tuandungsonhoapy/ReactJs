import React from 'react';
import HTMLForm from './HTMLForm';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'Developer', salary: '500 $' },
            { id: 'job2', title: 'Tester', salary: '400 $' },
            { id: 'job3', title: 'Project manager', salary: '1000 $' }
        ]
    }

    render() {
        return (
            <>
                <HTMLForm />
                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        )
    }
}

export default MyComponent;