function analizer(command) {
  this.command = command;
  this.response = "";
}

analizer.prototype.analizeCommand = function() {

  if (this.command.includes("eqx(") && this.command.includes(")")) {
    var variables = this.command.split(",");
    variables[variables.length - 1] = variables[variables.length - 1].replace(")", "");
    variables[0] = variables[0].replace("eqx(", "");
    if (variables.length > 3) {
      this.response = "Something is wrong";
    } else {
      var solver1 = new solver(variables[0], variables[1], "");
      if (variables.length == 3) {
        solver1.delta = parseFloat(variables[2]);
      }
      solver1.calculate(solver1.ecuation);
      console.log(solver1.solution);
      if (solver1.solution == "solution: NaN") {
        this.response = "Something is wrong"
      } else {
        this.response = solver1.solution;
      }
    }
  } else {
    this.response = "Command not found";
  }
}
