function UserState() {
    this.tools = [];
}

UserState.prototype.addTool = function(tool) {
    this.tools.push(tool);
}

UserState.prototype.hasBuilderTool = function(builder) {
    return builder.tool && this.tools.includes(builder.tool.name);
}

var userState = new UserState();
