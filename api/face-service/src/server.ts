import app from "./app";
import {PORT} from "./constants/face.constants";
import dotenv from 'dotenv';

// configure dotenv to use env variables
dotenv.config();

process.removeAllListeners('warning');

// listen to the port
app.listen(PORT, () => console.log(`Speculo Face Service is listening on port ${PORT}`));