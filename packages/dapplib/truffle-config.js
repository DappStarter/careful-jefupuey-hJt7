require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth praise proud install lonely flock vessel'; 
let testAccounts = [
"0xb5a2b60fb8ec3c15b0b84eae1ca5ca77383319c6758caec3bbde1a9087e75117",
"0x9192762e0b7a8354defc1416b6bbfb1f0baf176e816f3d6ef8b62b494181e3c2",
"0xc3d7b3d919e14a66c7032807967d336a92e8014692495a066d77e25dbe00833f",
"0x27c50f044047db4bc2a810c7ce0cc02d377ad3a3588c450328a6bb8ec7416e27",
"0xcd0cd59dd4e72f72a723d8db97f8acce02a2a9e3a220c652c664353b56c57916",
"0x3ca1efbcb0414306b9606b8bc78bc15dfbc01dd7609791b8aa33dd69821f2ca5",
"0xe96b77ab33de701142e50a2c71f9ad95684fde13c1320ee0035ae8ebb4b99e80",
"0xed8374e9c77e7c2b5f08d816aadd9fe869817ec7ec1c9e6beccbbcccc25db7b8",
"0xd0e7aede42035a4af9cd8fa67242933d5f54e6d2ebb5ce7869a0857752e2efe4",
"0xc7dff5e4939f31fe48b89b43362f24875abc0d5bf92794c3d727ffb395d0332b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

