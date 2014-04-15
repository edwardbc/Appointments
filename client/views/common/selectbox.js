Template.selectbox.helpers({
  isSelected: function(value){
    var current = this._id || this;
    return (current == value) ?
        'selected' : '';
  }
});