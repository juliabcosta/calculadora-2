# DOM 04 — Calculadora

## Contexto

Você recebeu a interface de uma calculadora já finalizada em HTML e CSS.

Seu trabalho é implementar o JavaScript para que o usuário consiga clicar nos números e operadores, acompanhar a digitação no visor, calcular o resultado e limpar a calculadora.

## Arquivo que você deve editar

`script.js`

## Não altere

- `index.html`
- `styles.css`

## Fluxo esperado

A calculadora trabalha com uma operação por vez:

**primeiro número → operação → segundo número → =**

Exemplo:

**12 → + → 3 → = → 15**

## O que precisa funcionar

### Digitação
Os números de `0` a `9` já estão presentes na interface.

O JavaScript deve ler o número escrito no botão clicado e atualizar o visor.

Exemplo:

- clique em `1` → visor `1`
- clique em `2` → visor `12`
- clique em `3` → visor `123`

### Operações
A interface possui:

- `+` soma
- `−` subtração
- `×` multiplicação
- `÷` divisão

O JavaScript deve ler o símbolo do botão clicado e guardar a operação para utilizar quando `=` for pressionado.

### Resultado
Ao clicar em `=`, calcule utilizando:

1. o primeiro número;
2. a operação escolhida;
3. o segundo número.

Depois mostre o resultado no visor.

### Limpar
O botão `C` deve devolver a calculadora ao estado inicial.

### Divisão por zero
Nunca mostre `Infinity` ou `NaN`.

Se o usuário tentar dividir por zero, mostre um erro e permita que o botão `C` restaure a calculadora.

## Simplificações

Para esta atividade:

- utilize apenas números inteiros;
- não é necessário trabalhar com números negativos;
- não é necessário encadear várias operações;
- não é necessário implementar teclado físico;
- cada cálculo termina ao pressionar `=`.

## Elementos importantes do HTML

- `.numero` — botões numéricos;
- `.operador` — botões de operação;
- `#visor` — visor principal;
- `#operacao-anterior` — mostra a operação em andamento;
- `#btn-igual` — calcula;
- `#btn-limpar` — limpa;
- `#status` — feedback da calculadora.

## Testes mínimos

| Ação | Resultado |
|---|---:|
| `1`, `2`, `+`, `3`, `=` | `15` |
| `9`, `−`, `4`, `=` | `5` |
| `6`, `×`, `7`, `=` | `42` |
| `8`, `÷`, `2`, `=` | `4` |
| `8`, `÷`, `0`, `=` | erro |
| `C` | visor volta para `0` |

## Entregável

Entregue a pasta da atividade com o arquivo `script.js` implementado.
