require('dotenv').config()
const {notFound}=require('./handlers/errorHandlers')
const mongoose=require('./config/db/db')
const express=require('express')
const morgan = require('morgan');
const appRouter=require('./routes/app.router')
const adminRouter=require('./routes/admin.router')
const authRouter=require('./routes/auth.router')
const bodyParser = require('body-parser');
const passport=require('./config/passportConfig/passportConfig')
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const crypto=require('crypto')





const port=process.env.PORT

const app=express();


// Listen to the custom events emitted by the database connection
mongoose.connection.on('mongodbConnected', () => {
    // The MongoDB connection is open, you can start adding records


    const options={
        definition:{
            openapi:'3.0.0',
            info:{
                title:'new hope academy api',
                version:'1.0.0',
                description:"The api"
            },
            servers:[
                {
                    url:"http://localhost/4500"
                }
            ]
        }
    }

    const generateSecretKey = () => {
        return crypto.randomBytes(32).toString('hex');
    };

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({
        secret: generateSecretKey(),
        resave: false,
        saveUninitialized: false
    }));

    app.use(cors());
    app.use(morgan('dev'));
    app.use(passport.initialize(undefined));


    app.use('/nha',authRouter)
    app.use('/nha',appRouter)
    app.use('/nha',adminRouter)

    app.use(notFound)


    // Start the Express server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

mongoose.connection.on('mongodbError', (error) => {
    // There was an error connecting to MongoDB
    console.error('MongoDB connection error:', error);
    // Handle the error as needed
});


