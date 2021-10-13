import FillingBlank from "../models/fillingBlank.js"; // import default o can ngoac
import { MultipleChoice } from "../models/multipleChoice.js";


let mappedQuestion;
const fetchQuestion = () => {
    axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET"
        })
        .then(function(res) {
            console.log(res.data);
            mappedQuestion = mapData(res.data);
            renderQuestions(mappedQuestion);

        }).catch(function(err) {
            console.log(err);

        });

};
const renderQuestions = (questionList) => {
    let content = "";
    for (let i in questionList) {
        content += questionList[i].render(+i + 1);
    }
    document.getElementById("questions").innerHTML = content;


};
const mapData = (questionList) => {
    // const mappedData = [];

    // for (let item of questionList) {
    //     const { questionType, id, content, answers } = item; // kĩ thuật bóc tách phàn tử từ mảng
    //     if (item.questionType === 1) {
    //         mappedData.push(new MultipleChoice(id, questionType, content, answers));

    //     } else {
    //         mappedData.push(new FillingBlank(id, questionType, content, answers));
    //     }
    // };


    const mappedData = questionList.map((item) => {
        const { questionType, id, content, answers } = item; // kĩ thuật bóc tách phàn tử từ mảng
        if (item.questionType === 1) {
            return new MultipleChoice(id, questionType, content, answers);
        }
        return new FillingBlank(id, questionType, content, answers);

    });
    console.log(mappedData);

    return mappedData;
};

const handleSubmit = () => {
    let correctAnswers = 0;
    for (let item of mappedQuestion) {
        if (item.checkExact()) {
            correctAnswers++;
        }
    }

    alert(`Số lượng câu đúng : ${correctAnswers}/${mappedQuestion.length}`)
};
document.getElementById('btnSubmit').onclick = handleSubmit; // khi user nhấn vào hàm thì mới chạy , ko nhấn thì không chạy, có ngoặc thì mặc định chạy


fetchQuestion();