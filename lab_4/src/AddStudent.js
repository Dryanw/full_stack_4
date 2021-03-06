import React from 'react';
import axios from 'axios';


class AddStudent extends React.Component {
    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', {user: {name: this.state.name}})
            .then(res => {
                        console.log(res.data);
                        this.props.handler({id: res.data.id, name: res.data.user.name});
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Person Name:
                        <input type='text' name='name' onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;
