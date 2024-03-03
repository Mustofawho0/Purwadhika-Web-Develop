export default function InputValue({ newInputValue }) {
  return (
    <>
      <label htmlFor="user">Username : {newInputValue}</label>
      <input type="text" name="username" id="" />
    </>
  );
}
