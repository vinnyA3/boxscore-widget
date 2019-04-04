const env = process.env.NODE_ENV;

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT || 3000),
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT) || 27107, // default mongo
    name: process.env.DEV_DB_NAME || 'database',
  },
};

module.exports = {
  dev,
}[env];
