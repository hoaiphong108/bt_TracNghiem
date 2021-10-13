import { Question } from "./question.js"
class FillingBlank extends Question {
    constructor(id, type, content, answers) {
        super(id, type, content, answers);

    }
    checkExact() {
        const answerInput = document.getElementById("answer-" + this.id).value;
        if (answerInput.toLowerCase() === this.answers[0].content.toLowerCase()) {
            return true;
        }
        return false;

    };
    render() {

        return `
            <h5>Câu hỏi: ${this.content} </h5>
            <input id ="answer-${this.id}"/>
        `;
    }


}
export default FillingBlank;
// export var a = 5;