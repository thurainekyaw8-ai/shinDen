type StartScreenProps = {
  onStart: () => void;
};

function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="start-screen">
      <div className="emoji">🧠</div>

      <p>Ever wonder? What kind of person are you?</p>

      <button className="cutebuttom" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;