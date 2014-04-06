Utils = {
  forms : {}
};


_.extend(Utils.forms, {
  objectify: function(form){
    return form.serializeArray().reduce(function(prev, curr){
      prev[curr.name] = $.trim(curr.value);
      return prev;
    }, {});
  }
});