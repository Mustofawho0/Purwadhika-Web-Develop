fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

async function Main() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  console.log(data);
}
Main();
