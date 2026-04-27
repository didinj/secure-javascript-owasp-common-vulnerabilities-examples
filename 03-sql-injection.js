const query = `SELECT * FROM users WHERE email = '${email}'`;

db.query(
  'SELECT * FROM users WHERE email = ?',
  [email]
);
