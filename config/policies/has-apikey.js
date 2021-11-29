module.exports = async (ctx, next) => {
  if (ctx.header["api-key"] === process.env.FRONTEND_API_KEY) {
    // Go to next policy or will reach the controller's action.
    return await next();
  }
  ctx.unauthorized(`You're not logged in!`);
};
