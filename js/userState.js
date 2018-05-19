function UserState() {
    this.tools = [];
}

UserState.prototype.addTool = function(tool) {
    this.tools.push(tool.name);
}

UserState.prototype.hasBuilderTool = function(builder) {
    return this.tools.includes(builder.tool.name);
}

var userState = new UserState();