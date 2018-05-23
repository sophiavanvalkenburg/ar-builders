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
function Builder(name, dialogue, tool, successDialogue) {
    ARModel.call(this, name, dialogue);
    this.tool = tool;
    this.successDialogue = successDialogue;
}

Builder.prototype = Object.create(ARModel.prototype);

//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Tool.prototype = Object.create(ARModel.prototype);

function initiateModels() {
    var buildersArray = [
      {
        name: 'pyra',
        dialogue: 'Hi there, I\'m Pyra! I\'ve lost my hammer. Let me know if you see it!',
        tool: new Tool('hammer', 'You have found Pyra\'s hammer!'),
        successDialogue: 'Thanks for my hammer!'
      },
      {
        name: 'biggie',
        dialogue: 'Hey, I\'m Biggie! I left my blocks somewhere in the office... can you help me find it?',
        tool: new Tool('blocks', 'You have found Biggie\'s blocks!'),
        successDialogue: 'My blocks have been found!'
      },
      {
        name: 'frenchie',
        dialogue: 'Je suis Frenchie! I\'ve misplaced my favorite builder hat right before the party. Merde!',
        tool: new Tool('hat', 'You have found Frenchie\'s hat!'),
        successDialogue: 'Merci!'
      },
      {
        name: 'lil',
        dialogue: 'I\'m short so they call me Lil! I have to finish my project, but I can\'t find my screwdriver...',
        tool: new Tool('screwdriver', 'You have found Lil\'s screwdriver!'),
        successDialogue: 'Thanks for the screwdriver!'
      },
      {
        name: 'toob',
        dialogue: 'Pleased Toob meet you... haha... see what I did there? By the way, have you seen my wrench?',
        tool: new Tool('wrench', 'You have found Toob\'s wrench!'),
        successDialogue: 'Thanks for finding my wrench!'
      },
      {
        name: 'demo',
        dialogue: 'Meow! Welcome to CBRE Build.',
      }
    ];

    buildersArray.forEach(function(builder){
        builders.push(new Builder(builder.name, builder.dialogue, builder.tool, builder.successDialogue));
        if (builder.tool) tools.push(builder.tool);
    });

    console.log('builders', builders);
    console.log('tools', tools)
}

initiateModels();
