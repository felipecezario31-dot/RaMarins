 # RaMarins 

 # 💅 NailDesigner — Site de Visitas

> Site de apresentação e agendamento para nail designers — elegante, responsivo e pensado para encantar clientes.

---

## ✨ Sobre o Projeto

O **NailDesigner** é um site de visitas desenvolvido para profissionais da área de nail design que desejam ter uma presença digital sofisticada e funcional. O site apresenta o portfólio da profissional, serviços oferecidos, informações de contato e um formulário de agendamento de visitas.

---

## 🖼️ Preview
┌─────────────────────────────────────────┐
│         ✦  NAIL DESIGNER  ✦             │
│   [Hero com foto + CTA "Agendar"]       │
│─────────────────────────────────────────│
│   Sobre | Serviços | Portfólio | Contato│
│─────────────────────────────────────────│
│   Galeria de trabalhos realizados       │
│   Botão de WhatsApp + Redes Sociais     │
└─────────────────────────────────────────┘

---

## 🚀 Funcionalidades

- 🏠 **Página inicial** com apresentação da profissional e chamada para ação
- 🎨 **Portfólio visual** com galeria de trabalhos realizados
- 💆 **Lista de serviços** com descrição e preços
- 📅 **Formulário de agendamento** de visitas/consultas
- 📱 **Botão de WhatsApp** para contato rápido
- 📸 **Integração com Instagram** para exibir posts recentes
- 🌙 **Design responsivo** para mobile, tablet e desktop
- ⭐ **Seção de depoimentos** de clientes

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura do site |
| CSS3 / Tailwind CSS | Estilização e responsividade |
| JavaScript (Vanilla) | Interações e formulário |
| Google Fonts | Tipografia elegante |
| WhatsApp API | Botão de contato direto |

> **Opcional:** versão com React + Next.js disponível para maior performance e SEO.

---

## 📁 Estrutura de Pastas
nail-designer/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── hero.jpg
│       ├── logo.png
│       └── portfolio/
│           ├── trabalho-01.jpg
│           ├── trabalho-02.jpg
│           └── ...
├── README.md
└── .gitignore

---

## ⚙️ Como Rodar Localmente

**Pré-requisitos:** Ter o [Git](https://git-scm.com/) instalado na máquina.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/nail-designer.git

# 2. Entre na pasta do projeto
cd nail-designer

# 3. Abra o arquivo no navegador
# Basta abrir o index.html diretamente, ou usar uma extensão como Live Server no VS Code
```

> Se estiver usando a versão com React:
> ```bash
> npm install
> npm run dev
> ```

---

## 🎨 Paleta de Cores

| Nome | Hex | Uso |
|---|---|---|
| Rosa Nude | `#F5C6B8` | Cor primária |
| Rosê Gold | `#C89B7B` | Destaques e botões |
| Off White | `#FAF7F5` | Fundo principal |
| Carvão | `#2D2D2D` | Textos e títulos |
| Dourado | `#D4A96A` | Acentos decorativos |

---

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first**, garantindo uma ótima experiência em:

- 📱 Smartphones (a partir de 320px)
- 📟 Tablets (768px)
- 💻 Desktops (1024px+)

---

## 📞 Contato e Redes Sociais

Configure as informações de contato no arquivo `js/main.js` ou diretamente no `index.html`:

```javascript
const config = {
  whatsapp: "5541999999999",       // Número com DDD e código do país
  instagram: "@seunaildesigner",
  email: "contato@seunome.com",
  endereco: "Curitiba, PR"
};
```

---

## 🙋‍♀️ Personalização

Para personalizar o site para sua marca:

1. **Substitua as imagens** na pasta `assets/images/`
2. **Atualize os textos** diretamente no `index.html`
3. **Ajuste as cores** nas variáveis CSS em `style.css`
4. **Configure o WhatsApp e redes sociais** no `main.js`

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usar, modificar e distribuir.

---

## 💖 Desenvolvido com carinho

Feito para empoderar nail designers que merecem brilhar online. ✨

> *"Suas unhas são a joia que você nunca tira."*