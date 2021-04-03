import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function CategorisedProblemspage() {
  const { problemCategory } = useParams();
 
  const category = useSelector(
    (state) => state.problems.problems[problemCategory]
  );
  const { title, problems } = category;

  return (
    <div>
      <h1>{title}</h1>
      {problems.map((problem) => (
        <p>{problem.title}</p>
      ))}
    </div>
  );
}

export default CategorisedProblemspage;
