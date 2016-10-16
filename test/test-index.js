var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../js/components').Card;
var List = require('../js/components').List;
var Board = require('../js/components').Board;


describe('Card component', function() {
    it('Renders the card',  function() {
        var cardText = "Example text";

        //create an instance of the renderer.
        //then render Image component (line 17),
        //providing ex. URL and desc. (from lines 10 and 11).
        var renderer = TestUtils.createRenderer();
        renderer.render(<Card text={cardText} />);
        //Next, call getRenderOutput method of renderer, returning
        //rendered React component, used to check type and props (lines 26-28)
        var result = renderer.getRenderOutput();
        //So here, we check that the correct class name is set
        result.props.className.should.equal('card');

        //...that there is an image with the correct src and alt attributes.
        //result.props.children[0] references the <img> tag.
        var div = result.props.children;
        div.type.should.equal('div');
        div.props.children.should.equal(cardText);
    });
});
describe('List component', function() {
    it('Renders the list of cards',  function() {
        var renderer = TestUtils.createRenderer();
        var cards=[];
        cards.push({"text": "card 1"})
        cards.push({"text": "card 2"})
        renderer.render(<List cards={cards}/>);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('list');

        //result.props.children[0] references what's inside the className <div>.
        for(var i = 0; i < cards.length; i++){
          var card = cards[i];
          card.text.should.equal('card ' + [i+1]);
        }
    });
});
describe('Board component', function() {
    it('Renders the board of lists',  function() {
        var renderer = TestUtils.createRenderer();
        var lists=[];
        lists.push({"title": "list title 1"})
        lists.push({"title": "list title 2"})
        renderer.render(<Board lists={lists}/>);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('board');

        //result.props.children[0] references what's inside the <div>.
        for(var i = 0; i < lists.length; i++){
          var list = lists[i];
          list.title.should.equal("list title " + [i+1]);
        }
    });
});
