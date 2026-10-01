type ResultScreenProps = {
  resultTitle: string;
  resultDescription: string;
  resultAdvice: string;
  resultClass: string;
  chibi: string;
  onRestart: () => void;
};

function ResultScreen({
  resultTitle,
  resultDescription,
  resultAdvice,
  resultClass,
  chibi,
  onRestart,
}: ResultScreenProps) {
  return (
    <div className="result-screen">
      <h2>Your Result</h2>

      <div
        className={`result-image ${resultClass}`}
        style={{ backgroundImage: `url(${chibi})` }}
      ></div>

      <h3>{resultTitle}</h3>

      <p className="result-description">
        {resultDescription}
      </p>

      <div className="advice-box">
        <p>
          💡 <strong>Advice:</strong> {resultAdvice}
        </p>
      </div>

      <button
        className="cutebuttom"
        onClick={onRestart}
      >
        Try Again
      </button>
    </div>
  );
}

export default ResultScreen;