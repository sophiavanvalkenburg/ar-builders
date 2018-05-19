AFRAME.registerComponent('log-on-click', {
  init: function() {
    var el = this.el; // <a-entity>
    el.addEventListener('click', function() {
      console.log('clicked entity ' + el.id + '!');
    });
  }
});
