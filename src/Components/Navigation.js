import React, { Component } from "react";
import Content from "./Content";
import data from "./data";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      peopleList: data,
      currentIndex: 0,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  previous() {
    const { currentIndex, peopleList } = this.state;
    if (currentIndex === 0) {
      this.setState({
        currentIndex: peopleList.length - 1,
      });
    } else
      this.setState({
        currentIndex: currentIndex - 1,
      });
  }

  next() {
    const { currentIndex, peopleList } = this.state;
    if (currentIndex === peopleList.length - 1) {
      this.setState({
        currentIndex: 0,
      });
    } else
      this.setState({
        currentIndex: currentIndex + 1,
      });
  }

  render() {
    const { currentIndex, peopleList } = this.state;
    return (
      <div>
        <Content peopleList={peopleList} currentIndex={currentIndex} />
        <div className="navigation-buttons">
          <span onClick={() => this.next()}> Next </span>
          <span onClick={() => this.previous()}> Previous `</span>
        </div>
      </div>
    );
  }
}

export default Navigation;
