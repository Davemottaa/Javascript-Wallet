# Javascript-Wallet

Este projeto gera carteiras HD Bitcoin na rede de teste (testnet) usando JavaScript e as bibliotecas bip32, bip39 e bitcoinjs-lib.

## Funcionalidades
- Geração de mnemonic (seed) seguro
- Derivação de carteira HD (Hierarchical Deterministic)
- Criação de endereço compatível com BIP49 (SegWit aninhado: P2SH-P2WPKH)
- Exibição do endereço, chave privada e seed
- Código modularizado e com tratamento de erros

## Como usar
1. Instale as dependências:
	```bash
	npm install bip32 bip39 bitcoinjs-lib
	```
2. Execute o script:
	```bash
	node BitcoinWalletTestnet.js
	```

## Atenção
- **Nunca use as seeds ou chaves privadas geradas aqui em produção ou para armazenar fundos reais.**
- Este projeto é apenas para fins de estudo e testes na testnet.

## Estrutura do código
- `BitcoinWalletTestnet.js`: Script principal para geração de carteira
- `README.md`: Documentação do projeto

## Referências
- [bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib)
- [bip32](https://github.com/bitcoinjs/bip32)
- [bip39](https://github.com/bitcoinjs/bip39)

---
Projeto criado por Davemottaa