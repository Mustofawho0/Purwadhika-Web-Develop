import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'library_book_2',
});

db.connect((err: any) => {
  if (err) return console.log('Error' + err.message);

  console.log('Database Connected');
});

export default db;
