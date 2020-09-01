import express, { Application } from 'express';
import dotenv from 'dotenv';
import Router from './routes/index';

// Environment variables
dotenv.config(); // Create an .env file in the root folder

// Create an Express Application
const server: Application = express();

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Routing
server.use('/api/', Router());

export default server;