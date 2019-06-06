import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Abeltube";
  res.locals.routes = routes;

  next();
};
