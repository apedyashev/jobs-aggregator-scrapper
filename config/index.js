module.exports = {
  importInterval: 3600000,
  mongo: {
    server: process.env.DB_HOST || 'mongodb',
    port: process.env.DB_PORT || 27017,
    dbName: process.env.DB_NAME || 'jobs-aggregator',
  },
  scrapTargets: {
    jobscout: {
      url: 'http://www.jobscout24.ch/de/jobs/?regidl=1-2-3-13-4-5-6-7-8-9-10-11&p=1&ps=100',
    },
  },
};
