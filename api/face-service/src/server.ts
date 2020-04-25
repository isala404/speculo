import app from "./app";
import {PORT} from "./constants/face.constants";
const logger = require("morgan");

process.removeAllListeners('warning');

app.use(logger("dev"));
app.listen(PORT, () => console.log(`Speculo Face Service is listening on port ${PORT}`));