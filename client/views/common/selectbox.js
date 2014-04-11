Template.selectbox.helpers({
  isSelected: function(value){
    return (this._id == value) ?
        'selected' : '';
  }
});