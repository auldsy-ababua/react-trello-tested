var React = require('react');
var ReactDOM = require('react-dom');


var Card = function(props) {
    return (
        <div className="card">
            <div className="cardText">{props.text}</div>
        </div>
    );
};

var List = function(props) {
    var cardsComponents = [];
    var submitter = function(event){
      event.preventDefault();
      props.onAddSubmit();
    };
    props.cards.forEach(function (item){
      cardsComponents.push(<Card text={item}/>);
    })
    return (
      <div className="list">
          <div className="list-title">{props.title}</div>
          <div className="list-cards">{cardsComponents}</div>
          <form className="userInput" onSubmit={submitter}>
            <input type="text" onChange={props.onAddInputChanged} />
            <button type="submit">add</button>
          </form>
      </div>
    )
};

var Board = React.createClass ({
    render: function () {
      var listCards = ["Card 1", "Card 2","Card 3"]
      var listComponents = [];
      var inputChange = function () {
        console.log("your input func works");
      };
      var addSubmit = function () {
        console.log("your sub func works");
      };
      this.props.lists.forEach(function (item){
        listComponents.push(<List title={item}
                                  cards={listCards}
                                  onAddInputChanged={inputChange}
                                  onAddSubmit={addSubmit}

          />);
        });
      return (
            <div className="board">
                <div className="board-title">{this.props.title}</div>
                <div className="board-lists">{listComponents}</div>
            </div>
      )
    }
  });

  module.exports.Card = Card;
  module.exports.List = List;
  module.exports.Board = Board;
