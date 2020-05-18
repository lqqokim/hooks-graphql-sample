import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

dotenv.config();

const app = express();
const api = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

/**
 * MongoDB Connection
 */
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    // connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

mongoose.connect(process.env.DATABASE_URL, mongooseOptions, (err) => {
    if (err) return console.error(err);
    console.info('mongoose connected!');
});

/**
 * Connect express and grapeql
 */
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'production' ? false : true
}));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));