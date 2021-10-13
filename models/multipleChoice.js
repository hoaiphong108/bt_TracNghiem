import { Question } from "./question.js"
export class MultipleChoice extends Question {
    constructor(id, type, content, answers) {
        super(id, type, content, answers); // kế thừa mọi thứ của thằng question
    }
    checkExact() {
        //1.kiem tra thi sinh chon input ==> value chon input === id cua dap an 
        let ansId;

        const answerRadios = document.getElementsByClassName("answer-" + this.id);
        for (let item of answerRadios) {
            if (item.checked) {
                ansId = item.value;
                break;
            }
        }
        //kiem tra neu thi sinh khong chon dap an ==> ko lay dc ansId  ==> false
        if (ansId === undefined) return false;
        //2. Dung id ==> tim no trong mang dap an cua cau hoi
        const foundedAnswer = this.answers.find((answer) => { return answer.id === ansId; })

        //3.Check Exact
        return foundedAnswer.exact;

    }
    render(index) {
        let answersHTML = ""
        for (let item of this.answers) {
            answersHTML += `
                <div>
                    <input type="radio" name="answer-${this.id}" value="${item.id}" class="answer-${this.id}" />
                    <label>${item.content}</label>
                </div>
            `;
        }
        return `
            <h5>Câu hỏi:${index}: ${this.content}</h5>
            ${answersHTML}
        `;
    }

}












// const newQuestion = new MultipleChoice("1", "1", "Hôm nay là thứ mấy ?", [{ content: "thứ 2" }, { content: "thứ 5" }, { content: "thứ 7" }]);

// console.log(newQuestion);