const express = require('express');
const routes = require('./routes');
const Logger = require('./core/Logger');
const { errorHandler } = require('./core/ErrorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', routes);

// error handler must be last
app.use(errorHandler);

app.listen(PORT, () => {
  Logger.info(`NexusCore backend running on port ${PORT}`);
});
