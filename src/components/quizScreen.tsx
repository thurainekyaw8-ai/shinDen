type Answer = {
  text: string;
  score: number;
};

type Question = {
  question: string;
  answers: Answer[];
};

type QuizScreenProps = {
  current: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (score: number) => void;
};

function QuizScreen({
  current,
  currentQuestion,
  totalQuestions,
  onAnswer,
}: QuizScreenProps) {
  return (
    <>
      <div className="quiz-header">
        <span>
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
      </div>

      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>

      <div className="question">
        <h2>{current.question}</h2>
      </div>

      <div className="answers">
        {current.answers.map((answer, index) => (
          <button
            className="answer-button"
            key={index}
            onClick={() => onAnswer(answer.score)}
          >
            <span className="answer-number">
              {index + 1}
            </span>

            <span className="answer-text">
              {answer.text}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}

export default QuizScreen;