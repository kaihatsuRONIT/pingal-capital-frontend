// scripts/hashPassword.js
const bcrypt = require("bcryptjs");

const password = "your-password-here"; // same password you're typing in login
const hash = bcrypt.hashSync(password, 10);
console.log("Hash:", hash);

// Verify it works
const isValid = bcrypt.compareSync(password, hash);
console.log("Valid:", isValid); // should print true