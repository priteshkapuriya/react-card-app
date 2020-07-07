import React from "react";
import "./CardsComponent.css";

export default class CardsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      colorMapping: {
        1: "gothic",
        2: "jellyBean",
        3: "blueWood",
        4: "jellyBean",
        5: "blueWood",
        6: "silver",
        7: "silver",
        8: "gothic",
        9: "blueWood",
      },
    };
  }

  shuffleLogic = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  shuffle = () => {
    var arr = this.state.cardNumber;
    arr = this.shuffleLogic(arr);
    this.setState({
      cardNumber: arr,
    });
  };

  sort = () => {
    let arr = this.state.cardNumber;
    arr.sort();
    this.setState({
      cardNumber: arr,
    });
  };

  render() {
    const numbers = this.state.cardNumber;
    const colorMapping = this.state.colorMapping;
    let colorArr = [];
    numbers.forEach((number) => {
      Object.keys(colorMapping).forEach((key) => {
        if (+key === number) {
          colorArr.push(colorMapping[key]);
        }
      });
    });
    return (
      <div className="container">
        <div className="rowContainer">
          <div id="first" className="numberCardsContainer">
            <div className="cardsRow">
              <div className="column">
                <div className={"numberCard " + colorArr[0]}>
                  <h1 className="hnumber">{numbers[0]}</h1>
                </div>
              </div>
              <div className="column">
                <div className={"numberCard " + colorArr[1]}>
                  <h1 className="hnumber">{numbers[1]}</h1>
                </div>
              </div>
              <div className="column">
                <div className={"numberCard " + colorArr[2]}>
                  <h1 className="hnumber">{numbers[2]}</h1>
                </div>
              </div>
            </div>
            <div className="cardsRow">
              <div className="column">
                <div className={"numberCard " + colorArr[3]}>
                  <h1 className="hnumber">{numbers[3]}</h1>
                </div>
              </div>
              <div className="column">
                <div className={"numberCard " + colorArr[4]}>
                  <h1 className="hnumber">{numbers[4]}</h1>
                </div>
              </div>
              <div className="column">
                <div className={"numberCard " + colorArr[5]}>
                  <h1 className="hnumber">{numbers[5]}</h1>
                </div>
              </div>
            </div>
            <div className="cardsRow">
              <div className="column">
                <div className={"numberCard " + colorArr[6]}>
                  <h1 className="hnumber">{numbers[6]}</h1>
                </div>
              </div>
              <div className="column">
                <div className={"numberCard " + colorArr[7]}>
                  <h1 className="hnumber">{numbers[7]}</h1>
                </div>
              </div>
              <div className="column">
                <div className={"numberCard " + colorArr[8]}>
                  <h1 className="hnumber">{numbers[8]}</h1>
                </div>
              </div>
            </div>
          </div>
          <div id="second" className="buttonContainer">
            <div className="shuffleButton">
              <button className="genButton" onClick={this.shuffle}>
                SHUFFLE
              </button>
            </div>
            <div className="sortButton">
              <button className="genButton" onClick={this.sort}>
                SORT
              </button>
            </div>
          </div>
        </div>
        <div className="appBy">Shuffle and sort by Pritesh Kapuriya</div>
      </div>
    );
  }
}
