AFRAME.registerComponent('log-on-click', {
  init: function() {
    var el = this.el; // <a-entity>
    el.addEventListener('click', function() {
      console.log('clicked entity ' + el.id + '!');

      builders.forEach(function(builder) {
      	if (el.id === builder.name) {
      		if (searchForBuilderTool(builder)){
      			console.log('Thanks for finding my tool');
      		} else {
      			console.log(builder.dialogue);
      		}
      	}
      });

      tools.forEach(function(tool){
      	if (el.id === tool.id) {
      		console.log(tool.dialogue);
      	}
      });

    });
  }
});

function searchForBuilderTool(builder) {
	userState.tools.some(function(tool) {
		return tool.name === builder.tool.name;
	});
}
