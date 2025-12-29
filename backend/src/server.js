const express = require('express');
const routes = require('./routes');
const { errorHandler } = require('./core/ErrorHandler');
const Logger = require('./core/Logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Core middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handler (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
  Logger.info(`NexusCore backend running on port ${PORT}`);
});
