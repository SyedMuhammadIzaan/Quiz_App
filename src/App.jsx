import { useNavigate } from "react-router-dom";
import "./App.css"
function App() {
  const navigate = useNavigate();

  const startReactQuiz = () => {
    navigate("/react-quiz-test");
  };
  const startGKQuiz = () => {
    navigate("/gk-quiz-test");
  };
  return (
    <>
      <div className="container">
        <div>
          <h2>React Quiz</h2>
          <button onClick={startReactQuiz}>Click Here</button>
        </div>
        <div>
          <h2>General Knowledge Quiz</h2>
          <button onClick={startGKQuiz}>Click Here</button>
        </div>
      </div>
    </>
  );
}

export default App;
