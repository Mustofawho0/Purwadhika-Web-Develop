import express, { Express, Request, Response, NextFunction } from 'express';
// import db from "./connection";
// import util from "util";
// const query: any = util.promisify(db.query).bind(db);
import routers from "./routers";

const app: Express = express();
app.use(routers);
const port = 404;

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).send({
    error: true,
    message: err.message || 'Error',
    data: {},
  });
});

app.listen(port, () => {
  console.log(`🐣🐤🐥[server] : Running Server at http://localhost:${port}`);
});
