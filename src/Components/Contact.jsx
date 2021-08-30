import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isNotGood: false,
    };
  }

  savePhone(e) {
    localStorage["phone"] = e.target.value;
  }

  navigate  = () => {
    const regular = /^05[0-9]-[0-9]{3}-[0-9]{4}$/
    const phone = localStorage["phone"]
    if(regular.test(phone))
    this.props.history.push("/finish")
    else{
        this.setState({isNotGood:true})
    }
  }

  render() {
    return (
      <div>
        <h1> Contact</h1>
        <input
          type="text"
          placeholder="Enter your phone"
          className="phone"
          onInput={this.savePhone}
        />
        <button onClick={this.navigate}>navigate</button>
        {this.state.isNotGood && <div>
            <p>Error, try:</p>
            <p>05x-xxx-xxxx</p>
            
            </div>}
      </div>
    );
  }
}
