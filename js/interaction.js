AFRAME.registerComponent('accepts-clicks', {
  init: function() {
    this.el.addEventListener('touchend', handleClickEvent);
    this.el.addEventListener('click', handleClickEvent);
  }
});

function handleClickEvent() {
  builders.forEach(function(builder) {
    var builderMarker = document.querySelector("#" + builder.name + "-marker");
    if (builderMarker && builderMarker.object3D.visible) {
      if (searchForBuilderTool(builder)){
        toggleSpeechBubble(builder.successDialogue);
      } else {
        toggleSpeechBubble(builder.dialogue);
      }
    }
  });

  tools.forEach(function(tool){
    var toolMarker = document.querySelector("#" + tool.id + "-marker");
    if (toolMarker && toolMarker.object3D.visible) {
      toggleSpeechBubble(tool.dialogue);
      if (!userState.hasBuilderTool(tool)) userState.addTool(tool);
    }
  });
}

function toggleSpeechBubble(dialogue) {
  var speechBubble = document.querySelector(".speech-bubble");
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
