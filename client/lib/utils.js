Utils = {
  forms : {}
};


_.extend(Utils.forms, {
  objectify: function(form){
    return form.serializeArray().reduce(function(prev, curr){
      prev[curr.name] = $.trim(curr.value);
      return prev;
    }, {});
  },
  highlight: function(form, invalidKeys){
    form.find('input, select').each(function(){
        var name   = $(this).attr('name'),
            parent = $(this).parent(), 
            isInvalid = _.contains(invalidKeys, name);
        
        parent.toggleClass('has-error', isInvalid)
              .toggleClass('has-success', !isInvalid);
      });
  }
});