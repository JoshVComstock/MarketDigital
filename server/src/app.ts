import dotenv from "dotenv";
dotenv.config();
import { createServer } from "./server";
import { PORT } from "./infraestructure/configuration/enviroments";
const server = createServer();

server.listen(PORT, () => {
  console.log(`BACKEND Run in :  http://localhost:${PORT}`);
});
