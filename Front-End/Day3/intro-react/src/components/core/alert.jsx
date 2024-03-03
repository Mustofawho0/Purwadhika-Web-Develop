import styled from "styled-components";
export default function ThisIsAlert(props) {
  const ButtonStyle = styled.button`
    background-color: transparent;
    font-size: 20px;
    color: yellow;
  `;

  return (
    <>
      <ButtonStyle>
        <button onClick={() => props.clickMe()}>Klik me!</button>
      </ButtonStyle>
    </>
  );
}
