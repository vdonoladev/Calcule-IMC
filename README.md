# ⚖️ Calcule seu IMC

Uma aplicação web simples e intuitiva desenvolvida em JavaScript puro (Vanilla JS), HTML5 e CSS3 para calcular o Índice de Massa Corporal (IMC) e classificar o resultado de acordo com as faixas de peso da OMS.

## 📸 Demonstração

### Página Inicial
![Página Inicial](https://user-images.githubusercontent.com/56196766/93546506-44be5d80-f939-11ea-98f9-8960b358ffbb.png)

### Exibição do Resultado
![Resultado do IMC](https://user-images.githubusercontent.com/56196766/93546530-543da680-f939-11ea-93ed-0d472dd64ca4.png)

## 🚀 Funcionalidades

- **Cálculo do IMC:** Aplica a fórmula matemática padrão: $\text{IMC} = \frac{\text{peso}}{\text{altura}^2}$.
- **Validação de Entrada:** Intercepta envios vazios ou com valores não numéricos para evitar cálculos com dados incorretos.
- **Feedback Visual:** Retorna o status estilizado dinamicamente (verde para sucesso, vermelho para campos inválidos).
- **Classificação Completa:** Enquadra o resultado em uma das 6 faixas:
  - Abaixo do peso ($< 18,5$)
  - Peso normal ($18,5$ a $24,9$)
  - Sobrepeso ($25,0$ a $29,9$)
  - Obesidade grau 1 ($30,0$ a $34,9$)
  - Obesidade grau 2 ($35,0$ a $39,9$)
  - Obesidade grau 3 ($\ge 40,0$)

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do formulário e dos blocos da página.
- **CSS3:** Estilização e classes de estado dinâmico (`paragrafo-resultado` e `bad`).
- **JavaScript (ES6+):** Manipulação de eventos (`submit`), cálculo e injeção dinâmica de elementos no DOM.

## 📂 Estrutura do Projeto

```text
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── index.html
└── README.md
```

## 💻 Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/vdonolade/Calcule-IMC.git
```

2. Acesse a pasta do projeto:
```bash
cd Calcule-IMC
```

3. Abra o arquivo `index.html` diretamente no navegador de sua preferência ou utilize uma extensão como o **Live Server** no VS Code.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais detalhes.
