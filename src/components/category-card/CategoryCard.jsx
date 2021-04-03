import styled from "styled-components";
import { useHistory } from "react-router-dom";

function CategoryCard({ title }) {
  const history = useHistory();
  return (
    <Container onClick={() => history.push(`/problems/${title}`)}>
      <h3>{title.toUpperCase()}</h3>
    </Container>
  );
}

export default CategoryCard;

const Container = styled.div`
  height: 200px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
