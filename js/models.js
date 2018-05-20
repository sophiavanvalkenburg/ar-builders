var builders = [],
    tools = [];

function ARModel(name, dialogue) {
    //we can make name link to the el id to find it on click?
    this.name = name;
    this.dialogue = dialogue;
    

}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

//Builder model
function Builder(name, dialogue, tool) {
    ARModel.call(this, name, dialogue);
    this.tool = tool;
    this.hasTool = false;
}

Builder.prototype = Object.create(ARModel.prototype);

//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Tool.prototype = Object.create(ARModel.prototype);

function initiateModels() {
    var buildersArray = [{
        name: 'pyra',
        dialogue: 'Hi there!',
        tool: new Tool('hammer', 'You have found Pyra\'s hammer!')
    }];

    buildersArray.forEach(function(builder){
        builders.push(new Builder(builder.name, builder.dialogue, builder.tool))
        tools.push(builder.tool);
    });
}

initiateModels();