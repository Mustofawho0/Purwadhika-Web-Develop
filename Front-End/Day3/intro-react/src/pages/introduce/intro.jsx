export default function Introduce({ newValue }) {
  //   console.log(props);
  return (
    <>
      <h2>Hello my name : {!newValue ? "Mustofawho" : newValue} </h2>
    </>
  );
}
