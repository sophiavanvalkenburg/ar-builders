function ARModel(name, dialogue) {
    this.name = name;
    this.dialogue = dialogue;
    this.tool = null;
    this.hasTool = false;
}

ARModel.prototype.speak = function() {
    return this.dialogue;
}

//Builder model
function Builder(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Builder.prototype = Object.create(ARModel.prototype);

Builder.prototype.addTool = function(tool) {
    this.tool = tool;
}


//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Tool.prototype = Object.create(ARModel.prototype);