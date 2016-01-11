var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

var List = React.createClass({
    mixins:[Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function() {
        return {ingredients:[]};
    },
    componentWillMount: function() {
      Actions.getIngredients();
    },
    onChange: function(event, ingredients){
      this.setState({ingredients: ingredients});
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return

        (<div>
          <input placeholder="Add Item"
            value={this.state.value}
            onChange={this.onInputChange} />
          <ul>{listItems}</ul>
          </div>);
    }
});

module.exports = List;
