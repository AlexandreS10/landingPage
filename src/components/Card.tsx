import styled from "styled-components";

interface ICardContentProps {
  image: "desktop" | "componentes" | "aproveitamento";
  titulo: string;
  texto: string;
}
export const CardsContainer = styled.div`
  display: flex;
`;

const CardStyled = styled.div`
  width: calc(100vw / 3);
  height: 45vh;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  i {
    font-size: 3rem;
    color: #004e89;
  }
  p {
    color: #575757;
  }
`;

export default function Card(props: ICardContentProps) {
  function getIconClass() {
    if (props.image === "desktop") return "bi bi-display";
    if (props.image === "componentes") return "bi bi-layers";
    if (props.image === "aproveitamento") return "bi bi-check-circle";
  }

  return (
    <CardStyled>
      <i className={getIconClass()}></i>
      <h3>{props.titulo}</h3>
      <p>{props.texto}</p>
    </CardStyled>
  );
}
