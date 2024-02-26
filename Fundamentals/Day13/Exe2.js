/*
    Buatlah sebuah promise function untuk melakukan register user ke dalam sebuah "array of object". Lakukan "validasi" untuk field username, email, password dan confirmPassword dengan ketentuan sbb :

    - Username :
        - Check username already register or not
        - Have minimum character is 6
    - Email :
        - Check email already register or not
        - Have @ character
    - Pass & Conf Pass :
        - Check both of them have same value
*/

const users = [
  { username: "aboy", email: "aboy@gmail.com", password: "abc123" },
];

function Register(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const { username, email, password, confirmPassword } = data;

        // 1. Username or Email Use or Not
        users.forEach((item) => {
          if (item.username === username || item.email === email) {
            throw new Error("Username/Email Already in Use!");
          }
        });

        if (username.length < 6)
          throw new Error("Username Have Minimum Length is 6");
        if (!email.includes("@")) throw new Error("Email Not Valid");
        if (password !== confirmPassword)
          throw new Error("Password Doesnt Match");

        users.push({ username, email, password });
        resolve("Register Success!");
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

async function Main() {
  try {
    const response = await Register({
      username: "ryan01",
      email: "ryan@gmail.com",
      password: "abc123",
      confirmPassword: "abc123",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

Main();
