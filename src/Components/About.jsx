import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isNotGood: false,
    };
  }


  saveName(e) {
    localStorage["name"] = e.target.value;
  }

  navigate = () => {
    const regular = /^[A-Z]{1}[a-z]*\s[A-Z]{1}[a-z]*/
    const name = localStorage["name"]
    console.log(name)
    if(regular.test(name))
    this.props.history.push("/contact")
    else{
        this.setState({isNotGood:true})
    }
  }

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          onInput={this.saveName}
        />
        <button onClick={this.navigate}>navigate</button>
        {this.state.isNotGood && <div>
            
            <p>Error, try:</p>
            <p>A large initial letter and a space between the first name and the last name</p>
            <p>Like: Avi Levi</p>
            </div>}
      </div>
    );
  }
}


