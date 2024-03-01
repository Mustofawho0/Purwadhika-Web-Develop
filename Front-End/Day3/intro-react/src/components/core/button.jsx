import styled from "styled-components";
function Button(props) {
  console.log(props) 
  const ButtonStyle = styled.button`
    background-color: red;
    font-size: 20px;
    color: yellow;
  `;

  return (
    <>
      <ButtonStyle>
        {props.text}
      </ButtonStyle>
    </>
  );
}

export default Button;
