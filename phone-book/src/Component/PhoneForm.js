import React, {Component} from 'react';

class PhoneForm extends Component{
    state={
        name:'',
        phone:''
    }

    handleChage = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name:'',
            phone:''
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder='이름'
                value={this.state.name}
                onChange={this.handleChage}
                name="name"
                />
                <div>{this.state.name}</div>

                <input placeholder='번호'
                value={this.state.phone}
                onChange={this.handleChage}
                name="phone"
                />
                <div>{this.state.phone}</div>

                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;