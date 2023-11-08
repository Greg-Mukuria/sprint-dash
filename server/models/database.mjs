import Debug from 'debug';
import dotenv from 'dotenv';
import pkg from 'pg';

const { Pool } = pkg;

let DATABASE_URL;
const debug = Debug('http');
dotenv.config();

if (process.env.NODE_ENV === 'TEST') {
  DATABASE_URL = process.env.DATABASE_URL_TEST;
} else {
  DATABASE_URL = process.env.DATABASE_URL;
}

const pool = new Pool({ connectionString: DATABASE_URL });

pool.on('connect', () => { debug('connected to the database'); });

export default pool;
