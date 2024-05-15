const authRouter = require('./auth.router');
const loginRouter = require('./login.router');
const refreshTokenRouter = require('./refresh_token.router');

const { notFound, errMiddleware } = require('../middelware/err.middelware');

function router(app) {
  app.use('/auth', authRouter);
  app.use('/login', loginRouter);
  app.use('/refreshToken', refreshTokenRouter);

  // Not Found Middleware
  app.use(notFound);
  // Error Handling Middleware
  app.use(errMiddleware);
}

module.exports = router;
