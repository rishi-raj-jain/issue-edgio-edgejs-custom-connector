module.exports = {
  connector: './edgio',
  backends: {
    origin: {
      domainOrIp: "api.tvmaze.com",
      hostHeader: "api.tvmaze.com",
      disableCheckCert: true,
    },
  },
};
