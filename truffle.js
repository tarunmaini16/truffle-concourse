module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
        development: {
            host: "10.133.22.201",
            port: 8545,
            gas: 0x47b760,
            gasPrice: 0,
            from: "0xb168e15ee077ca7f086acf9435a19a5707416301",
            network_id: "2017" // Match any network id
        },
        node2: {
          host: "10.133.22.201",
          port: 8546,
          gas: 0x47b760,
          gasPrice: 0,
          from: "0xb168e15ee077ca7f086acf9435a19a5707416301",
          network_id: "2017" // Match any network id
      },
      node3: {
        host: "10.133.22.201",
        port: 8547,
        gas: 0x47b760,
        gasPrice: 0,
        from: "0xb168e15ee077ca7f086acf9435a19a5707416301",
        network_id: "2017" // Match any network id
      },
      node4: {
        host: "10.133.22.201",
        port: 8548,
        gas: 0x47b760,
        gasPrice: 0,
        from: "0xb168e15ee077ca7f086acf9435a19a5707416301",
        network_id: "2017" // Match any network id
    }

    }
};
