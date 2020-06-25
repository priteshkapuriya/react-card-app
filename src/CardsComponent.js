import React from "react";
import "./CardsComponent.css";

export default class CardsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumbers_1_3: [1, 2, 3],
      cardNumbers_4_6: [4, 5, 6],
      cardNumbers_7_9: [7, 8, 9],
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
    var arr_1_3 = this.state.cardNumbers_1_3;
    var arr_4_6 = this.state.cardNumbers_4_6;
    var arr_7_9 = this.state.cardNumbers_7_9;

    arr_1_3 = this.shuffleLogic(arr_1_3);
    arr_4_6 = this.shuffleLogic(arr_4_6);
    arr_7_9 = this.shuffleLogic(arr_7_9);

    this.setState({
      cardNumbers_1_3: arr_1_3,
      cardNumbers_4_6: arr_4_6,
      cardNumbers_7_9: arr_7_9,
    });
  };

  sort = () => {
    let arr_1_3 = this.state.cardNumbers_1_3;
    let arr_4_6 = this.state.cardNumbers_4_6;
    let arr_7_9 = this.state.cardNumbers_7_9;

    arr_1_3.sort();
    arr_4_6.sort();
    arr_7_9.sort();
    this.setState({
      cardNumbers_1_3: arr_1_3,
      cardNumbers_4_6: arr_4_6,
      cardNumbers_7_9: arr_7_9,
    });
  };

  render() {
    const numbers_1_3 = this.state.cardNumbers_1_3;
    const numbers_4_6 = this.state.cardNumbers_4_6;
    const numbers_7_9 = this.state.cardNumbers_7_9;
    return (
      <div className="container">
        <div className="row">
          <div id="first" className="col-sm-9 numberCardsContainer">
            <div className="cardsRow">
              {numbers_1_3.map((number, i) => {
                if (number === 1) {
                  return (
                    <div className="column">
                      <div className="numberCard gothic">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
                if (number === 2) {
                  return (
                    <div className="column">
                      <div className="numberCard jellyBean">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
                if (number === 3) {
                  return (
                    <div className="column">
                      <div className="numberCard mineShaft">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="cardsRow">
              {numbers_4_6.map((number, i) => {
                if (number === 4) {
                  return (
                    <div className="column">
                      <div className="numberCard jellyBean">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
                if (number === 5) {
                  return (
                    <div className="column">
                      <div className="numberCard mineShaft">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
                if (number === 6) {
                  return (
                    <div className="column">
                      <div className="numberCard silver">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="cardsRow">
              {numbers_7_9.map((number, i) => {
                if (number === 7) {
                  return (
                    <div className="column">
                      <div className="numberCard silver">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
                if (number === 8) {
                  return (
                    <div className="column">
                      <div className="numberCard gothic">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
                if (number === 9) {
                  return (
                    <div className="column">
                      <div className="numberCard mineShaft">
                        <h1 className="hnumber">{number}</h1>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div id="second" className="col-sm-3">
            <div className="shuffleButton">
              <button onClick={this.shuffle}>SHUFFLE</button>
            </div>
            <div className="sortButton">
              <button onClick={this.sort}>SORT</button>
            </div>
          </div>
        </div>
        <div className="appBy">Shuffle and Sort By Pritesh Kapuriya</div>
      </div>
    );
  }
}
