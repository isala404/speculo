import app from "./app";
import {PORT} from "./constants/face.constants";
import dotenv from 'dotenv';

dotenv.config();

process.removeAllListeners('warning');

app.listen(PORT, () => console.log(`Speculo Face Service is listening on port ${PORT}`));