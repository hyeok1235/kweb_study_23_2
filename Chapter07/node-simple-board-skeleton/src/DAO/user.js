const { runQuery } = require("../lib/database");

const getByUsername = async (username) => {
  const sql =
    "SELECT id, password, display_name AS displayName, is_active AS isActive, is_staff AS isStaff " +
    "FROM users WHERE username = ?";
  const result = await runQuery(sql, [username]);
  return result[0];
};

const create = async (username, password, displayName) => {
  const sql =
    "INSERT INTO users (username, password, display_name) VALUES (?, ?, ?)";
  await runQuery(sql, [username, password, displayName]);
};

module.exports = {
  getByUsername,
  create,
};
