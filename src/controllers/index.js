import contactRouter from "./contactController";

const apiPrefix = "/api/v1";

const routes = [contactRouter];

export default app => {
    routes.forEach (route => app.use(apiPrefix, route));
    return app;
}