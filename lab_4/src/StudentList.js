import React from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';
import DeleteStudent from './DeleteStudent';


class UserList extends React.Component {
    state = {
        users: [],
        removedIds: new Set()
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {this.setState({users: res.data.filter((x)=>!this.state.removedIds.has(x.id))})});
        console.log('Fetched users from https://jsonplaceholder.typicode.com/users');
    }

    deleteStudent(id){
        this.setState({removedIds: new Set([...this.state.removedIds, id])});
        console.log(this.state.removedIds);
        this.setState({users: this.state.users.filter((x)=>!this.state.removedIds.has(x.id))});
    }

    addUser(userObj){
        this.setState({users: [...this.state.users, userObj]});
        console.log(this.state.users);
    }

    render(){
        return (<>
            <AddStudent handler={(x) => this.addUser(x)}/>
            {this.state.users.map(
                (x)=>{return <li key={x.id}>{x.name}
                            {<DeleteStudent id={x.id} handler={()=> this.deleteStudent(x.id)}/>}</li>})}
        </>)
        return (<div>{this.componentDidMount()}</div>);
    }
}

export default UserList;