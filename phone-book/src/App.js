import React,{Component} from 'react';
import PhoneForm from './Component/PhoneForm';
import PhoneInfoList from './Component/PhoneInfoList';

class App extends Component {
  id=2
  state={
    information:[
      {
        id:0,
        name:'윤성재',
        phone:'010-1234-5678'
      },
      {
        id:1,
        name:'위연정',
        phone:'010-5555-6666'
      }
    ]
  }

  handleCreate = (data) =>{
    const {information} = this.state;
    this.setState({
      information: information.concat({id:this.id++, ...data})
    })
  }

  handleRemove = (id) =>{
    const {information} = this.state;
    this.setState({
      information:information.filter(info=>info.id!==id)
    })
  }

  render(){
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
