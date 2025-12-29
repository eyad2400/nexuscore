function loadAppConfig() {
  return {
    env: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT || 3000),
    name: process.env.APP_NAME || 'NexusCore',
    logLevel: process.env.LOG_LEVEL || 'info'
  };
}

module.exports = loadAppConfig;
