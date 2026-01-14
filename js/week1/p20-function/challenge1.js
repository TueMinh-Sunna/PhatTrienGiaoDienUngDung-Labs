const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    console.log(this.question);
    this.options.forEach(option => console.log(option));
    console.log("(Write option number)");

    rl.question("Input: ", input => {
      const answer = Number(input);

      if ([0,1,2,3].includes(answer)) {
        this.answers[answer]++;
      }

      this.displayResults();
      this.displayResults("string");

      this.registerNewAnswer();
    });
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Answers: ${this.answers.join(", ")}`);
    }
  },
};

poll.registerNewAnswer();
