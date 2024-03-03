import styled from "styled-components";
function Button({ text, page }) {
  // console.log(props)
  const ButtonStyle = styled.button`
    background-color: ${page === "home" ? "red" : "blue"};
    font-size: 20px;
    color: yellow;
  `;

  return (
    <>
      {/* <button onClick={props.testAlert}>Klik me</button> */}
      <ButtonStyle>{text}</ButtonStyle>
    </>
  );
}

export default Button;
