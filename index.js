import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/controllers';

dotenv.config();

const app = express();

const urlparser = express.urlencoded({
    extended : true,
});

const jsonParser = express.json();

app.use(urlparser);

app.use(jsonParser);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : false,
}));

app.use(cors());

router(app);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Success!! app listening on port ${process.env.PORT || 5000}`);
});

module.exports = server;