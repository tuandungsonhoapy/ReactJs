import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    HandleClickShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state
        return (
            <>
                <div>
                    {showJobs === false ?
                        <div><button onClick={() => this.HandleClickShowHide()}>Show</button></div>
                        :
                        <>
                            <ul>
                                {
                                    arrJobs.map((item, index) => {
                                        return <li key={item.id}>{item.id} - {item.title} - {item.salary}</li>
                                    })
                                }
                            </ul>
                            <div><button onClick={() => this.HandleClickShowHide()}>Hide</button></div>
                        </>
                    }
                </div>
            </>
        )
    }
}

// const ChildComponent = (data) => {
//     let { arrJobs } = data;
//     return (
//         <>
//             <div>
//                 <div><button>Show</button></div>
//                 <ul>
//                     {
//                         arrJobs.map((item, index) => {
//                             return <li key={item.id}>{item.id} - {item.title} - {item.salary}</li>
//                         })
//                     }
//                 </ul>
//                 <div><button>Hide</button></div>
//             </div>
//         </>
//     )
// }

export default ChildComponent