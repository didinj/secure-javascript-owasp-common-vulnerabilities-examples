const bcrypt = require('bcrypt');

const password = "mypassword123";
const hash = await bcrypt.hash(password, 12);
