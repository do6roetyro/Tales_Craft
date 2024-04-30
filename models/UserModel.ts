import db from "../database";
import { ResultSetHeader, FieldPacket, RowDataPacket } from "mysql2/promise";

// Данные пользователя, возвращаемые из базы данных
interface IUserDb extends RowDataPacket {
  username: string;
  email: string;
  password: string;
}

// Данные пользователя для ввода
interface IUserInput {
  username: string;
  email: string;
  password: string;
}

// Поиск пользователя по email
async function findUserByEmail(email: string): Promise<IUserDb | null> {
  const [rows]: [IUserDb[], FieldPacket[]] = await db.query<IUserDb[]>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  if (rows.length) {
    return rows[0];
  }
  return null;
}

// Создание нового пользователя
async function createUser(user: IUserInput): Promise<void> {
  const { username, email, password } = user;
  await db.query<ResultSetHeader>(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password]
  );
}

export { findUserByEmail, createUser };
