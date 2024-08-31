import { useNavigate } from "react-router-dom";
import "../../App.css";
function StartQuiz() {
  const navigate = useNavigate();

  const start = () => {
    navigate("/react-quiz-test");
  };
  return (
    <>
      <div className="mainContainer">
        <h2>Quiz</h2>
        <button onClick={start}>Start Quiz</button>
      </div>
    </>
  );
}

export default StartQuiz;
