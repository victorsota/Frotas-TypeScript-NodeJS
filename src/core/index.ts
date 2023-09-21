import Express from "express";
import { AppDataSource } from "./data-source";
import { routes } from "./routes";
const cors = require("cors");

AppDataSource.initialize().then(() => {
  const app = Express();

  app.use(
    cors({
      origin: "http://localhost:3001",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true, // Habilitar o uso de cookies/sessões (se necessário)
    })
  );

  app.use(Express.json());

  app.use(routes);

  return app.listen(process.env.PORT || 3000);
});
