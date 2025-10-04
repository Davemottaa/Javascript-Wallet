
// Importando as dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Definindo a rede de teste (testnet)
const network = bitcoin.networks.testnet;

// Caminho de derivação BIP49 para endereços SegWit aninhados (P2SH-P2WPKH)
const path = `m/49'/1'/0'/0`;

// Função para gerar mnemonic
function generateMnemonic() {
    return bip39.generateMnemonic();
}

// Função para obter o nó derivado
function getNodeFromSeed(mnemonic, path, network) {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const account = root.derivePath(path);
    // Derivando o primeiro endereço: 0/0
    return account.derivePath('0/0');
}

// Função para obter endereço compatível com BIP49
function getBIP49Address(node, network) {
    return bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wpkh({ pubkey: node.publicKey, network }),
        network
    }).address;
}

// Função principal com tratamento de erros
function main() {
    try {
        const mnemonic = generateMnemonic();
        const node = getNodeFromSeed(mnemonic, path, network);
        const btcAddress = getBIP49Address(node, network);

        console.log("Carteira gerada (Testnet)");
        console.log("Endereço (BIP49):", btcAddress);
        console.log("Chave privada:", node.toWIF());
        console.log("Seed (mnemonic):", mnemonic);
        // ATENÇÃO: Nunca use esta seed ou chave privada em produção!
    } catch (error) {
        console.error("Erro ao gerar carteira:", error);
    }
}

main();