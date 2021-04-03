import { useParams } from "react-router-dom";

function CategorisedProblemspage() {
  const { problemCategory } = useParams();

  return (
    <div>
      <h1>{problemCategory}</h1>
    </div>
  );
}

export default CategorisedProblemspage;
