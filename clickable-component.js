AFRAME.registerComponent('log-on-click', {
  init: function() {
    var el = this.el; // <a-entity>
    el.addEventListener('click', function() {
      console.log('clicked entity ' + el.id + '!');

      builders.forEach(function(builder) {
      	if (el.id === builder.name) {
      		if (searchForBuilderTool(builder)){
      			toggleSpeechBubble('Thanks for finding my tool');
      		} else {
      			toggleSpeechBubble(builder.dialogue);
      		}
      	}
      });

      tools.forEach(function(tool){
      	if (el.id === tool.id) {
      		toggleSpeechBubble(tool.dialogue);
      	}
      });

    });
  }
});

function toggleSpeechBubble(dialogue) {
	if (speechBubble.style.display === 'none' || !speechBubble.style.display) {
		speechBubble.innerHTML = dialogue;
		speechBubble.style.display = 'block';
	} else {
		speechBubble.style.display = 'none';
	}
};

function searchForBuilderTool(builder) {
	userState.tools.some(function(tool) {
		return tool.name === builder.tool.name;
	});
};
