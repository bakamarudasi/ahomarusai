document.addEventListener('DOMContentLoaded', (event) => {
    //問題が入っているファイルを取り出している
    import { questions } from './questions.js';

    // ランダムな問題の要素を設定している。
    const randomIndex = Math.floor(Math.random() * questions.length);
    // ランダムな問題を設定している。
    const randomQuestion = questions[randomIndex];

    // 問題のテキスト要素を取得
    const questionText = document.getElementById('question-text');
    // 問題のテキストを設定
    questionText.innerText = randomQuestion.question;

    // ボタンの要素を取得
    const answerButtons = document.querySelectorAll('#answers button');

    // 各ボタンに選択肢を設定
    answerButtons.forEach((button, index) => {
        button.innerText = randomQuestion.answers[index];
    });

    // 正解の選択肢（ランダムに選ばれた問題の正解）
    const correctAnswer = randomQuestion.correctAnswer;

    // 各ボタンにクリックイベントリスナーを追加
    answerButtons.forEach(button => {
        button.addEventListener('click', checkAnswer);
    });

    function checkAnswer(event) {
        // ユーザーの選択を取得
        const userAnswer = event.target.innerText;

        // 結果のテキスト要素を取得
        const resultText = document.getElementById('result-text');

        // ユーザーの選択が正解かどうかをチェック
        if (userAnswer === correctAnswer) {
            resultText.innerText = '正解！';
        } else {
            resultText.innerText = '不正解…';
        }
    }
});
