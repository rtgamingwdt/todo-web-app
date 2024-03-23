import Koa from "koa";
import Router from "koa-router";
import { PORT } from "./constants";
import fs from "fs";

const app = new Koa();
const router = new Router();

const routes = fs.readdirSync("src/routes");

for(const route of routes) {
    app.use(require(`./routes/${route}`).default.routes());
}

app.use(router.routes());

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});