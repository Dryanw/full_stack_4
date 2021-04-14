import React from 'react';
import axios from 'axios';


class DeleteStudent extends React.Component {
    state = {
        id: this.props.id
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(`Deleting user with id: ${this.state.id}`);
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(res => {
                console.log(res.data);
                this.props.handler(this.state.id);
            });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Delete</button>
                </form>
            </>
        )
    }
}

export default DeleteStudent;
