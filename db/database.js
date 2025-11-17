import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const dbConnection = open({
    filename: "./db/database.db",
    driver: sqlite3.Database
});
