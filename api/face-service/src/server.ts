import app from "./app";
import {PORT} from "./constants/face.constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));