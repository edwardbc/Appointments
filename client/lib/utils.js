Utils = {
  forms : {}
};


_.extend(Utils.forms, {
  // Converts resulting array from serializeArray() into
  // a hash
  objectify: function(form){
    return form.serializeArray().reduce(function(prev, curr){
      prev[curr.name] = $.trim(curr.value);
      return prev;
    }, {});
  },
  // Highlight forms input fields according to a specified
  // array of invalid keys. Clear highlights if not provided
  highlight: function(form, invalidKeys){
    if (invalidKeys){
      form.find('input, select').each(function(){
          var name   = $(this).attr('name'),
              parent = $(this).parent(), 
              isInvalid = _.contains(invalidKeys, name);
          
          parent.toggleClass('has-error', isInvalid)
                .toggleClass('has-success', !isInvalid);
        });
    } else {
      form.find('.form-group').removeClass('has-error has-success');
    }
  },
  reset : function(form){
    form.find(':input').val('');
  }
});