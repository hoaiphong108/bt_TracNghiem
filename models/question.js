export class Question {
    constructor(id, type, content, answers) {
        this.id = id;
        this.questionType = type;
        this.content = content;
        this.answers = answers;
    }
    checkExact() {};
    render() {};

}
// const newQuestion = new Question("1", "1", "Hôm nay là thứ mấy ?", [{ content: "thứ 2" }, { content: "thứ 5" }, { content: "thứ 7" }]);

// console.log(newQuestion);