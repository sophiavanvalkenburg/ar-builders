AFRAME.registerComponent('log', {
  schema: {type: 'string'},

  init: function() {
    var stringToLog = this.data;
    console.log(stringToLog);
  }
});
