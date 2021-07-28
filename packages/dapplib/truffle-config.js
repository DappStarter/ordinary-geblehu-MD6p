require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain uncover give glimpse foam turkey'; 
let testAccounts = [
"0xe827c2fc6843751ed8e7012b3c68c31332e71a97cd5defc0917ad6f3b60ef97b",
"0x306763178446172d2c57ed405d2aba2b734a6076d162b7aa076023e0565d8c3a",
"0x0e434cfa5178c806bd2a591a8a6d1987b4cceead69d37ecdf9116ca0bb7db08f",
"0x55dcaa2a8efc6b47523ed65daccf2359e112ddcf3aea2000389205face547be8",
"0xca49714755dc469832201a14c846bd40395883ed7758cefd93adb03e32bdfaf5",
"0xe211aa9d26304334aeffa6cbe175a3d8e192f770a45adef5aea9a0b712daf93f",
"0xcfb356b0c166bb177713a52565f04866402b7a4b45d199fb922202cc0ced6f52",
"0x51a7368526f2d3e35a47a74eac800e0d19fb12ed17b08a663d72b70f9667992b",
"0xb70136c4a1072135949426619f0fae8ae0d09df8205f5805094db0c1a1f073f6",
"0xa978c7134c477cd86bc2f1bb2114c3edf779aecc655a254febaa21508c0abe6f"
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

