import React from 'react';

class College extends React.Component {
    render() {
        return <p> College <b>{this.props.name}</b>  with <b>{this.props.location}</b> </p>;
    }
}

export default College;