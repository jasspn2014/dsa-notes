import styled from "styled-components";
import CategoryCard from "../category-card/CategoryCard";
import { useSelector } from "react-redux";

function Directory() {
  const directory = useSelector((state) => state.directory.sections);

  return (
    <Container>
      {directory.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          problems={category.problems}
        />
      ))}
    </Container>
  );
}

export default Directory;

const Container = styled.div`
  background-color: crimson;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  @media only screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
