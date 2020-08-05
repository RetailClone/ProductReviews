const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '5754'
})

connection.connect((err) => {
  if(err) {
    console.log('Error connecting to the database')
  } else {
    console.log('Connected to the database')
  }
})