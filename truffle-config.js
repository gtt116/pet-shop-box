module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "user:pass@11.22.33.44",  // Change host to your Geth external IP
      port: 30001,    // Change port to you Geth external port
      gasPrice: 0,
      network_id: "*" // Match any network id
    }
  }
};
