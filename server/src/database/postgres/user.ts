
import { Pool, QueryResult } from "pg";
import { UserDTO } from "../models/userDTO";

export class User {
    #pool: Pool; // connection pool
    constructor(pool: Pool) {
        this.#pool = pool;
    }

}