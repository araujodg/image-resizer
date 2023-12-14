# IMAGE RESIZER

## Descrição

Este é um script simples para redimensionar uma imagem com NodeJS. Ele criará um diretório para as saídas (resized-images), clonará a imagem, redimensionará com a largura especificada, para que possa manter as proporções, e a colocará no diretório.

## Como usar

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o script com `node resize <caminhoDaImagem> <largura1>, <largura2>, ...`
4. As imagens redimensionadas estarão no diretório `resized-images`

## Exemplo

`node resize ./images/imagem.jpg 200, 500, 1000`

## Dependências

- [sharp](https://www.npmjs.com/package/sharp)

### Versão em Inglês

- [English Version](https://github.com/dougaraujo/image-resizer/)

Divirta-se! :smile: