# Black Genial 2026 | Página de Vendas Oficial

> **Genial Vestibulares** — Campanha Black Genial 2026  
> Landing page de alta conversão, responsiva e desenvolvida com base no **Briefing Black Genial 2026 Revisado**.

---

## 📌 Visão Geral do Projeto

A página foi concebida com estética **Dark Cinematic Premium**, inspirada em referências visuais de alta sofisticação, preservando integralmente a identidade institucional do Genial Vestibulares:
- **Fundo Principal:** `#030910` (preto-azulado profundo e cinematográfico)
- **Fundo Alternativo:** `#07121E` (camada de profundidade para alternância de seções)
- **Superfície dos Cards:** `#0C1B2A` (azul-marinho escuro com bordas sutis e translucidez)
- **Fundo Elevado / Destaques:** `#102337`
- **Azul Institucional:** `#049CFE` (Genial brand blue para iluminação difusa, bordas ativas e ícones)
- **Laranja de Conversão e Destaque:** `#FF751F` (CTAs de alto impacto e badges de atenção)
- **Texto Principal:** `#F5F8FC` (branco cristalino de alto contraste)
- **Texto Secundário:** `#A8B7C8` (cinza-azulado suave para leitura agradável)
- **Tipografia:** Montserrat (pesos 400 a 900)
- **Design Editorial & Iluminação:** Efeitos de luz difusa controlada atrás do Prof. Paulinho e dos planos, integração cinematográfica de fotografias reais e bordas sutis sem poluição visual.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico:** Estrutura acessível com tags semânticas (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`), navegação por teclado e atributos ARIA completos.
- **Tailwind CSS 3.4:** Estilização modular com design system customizado (`tailwind.config.js`).
- **JavaScript Moderno (ES6+):** Lógica interativa modular sem frameworks pesados, garantindo carregamento ultrarrápido:
  - Carrossel de resultados com suporte a toque (swipe/touch em celulares) e setas/teclado.
  - Acordeão acessível para a seção de Dúvidas Frequentes (FAQ).
  - Animações sutis e fluidas via `IntersectionObserver` com suporte a `prefers-reduced-motion`.
  - Barra de conversão fixa inteligente para dispositivos móveis (`sticky-mobile-cta`).
- **Vite 6:** Ferramenta de build de última geração com otimização e minificação prontas para Vercel e GitHub Pages.

---

## 📁 Estrutura de Arquivos

```text
Black Friday PGV/
├── index.html                   # Página de vendas completa (9 seções do briefing)
├── package.json                 # Scripts e dependências do projeto
├── vite.config.js               # Configuração do Vite
├── tailwind.config.js           # Paleta de cores institucional e tipografia
├── postcss.config.js            # Plugins PostCSS (Tailwind e Autoprefixer)
├── vercel.json                  # Configuração de deploy automático na Vercel
│
├── public/                      # Arquivos estáticos servidos diretamente
│   └── assets/
│       ├── logos/               # Logotipo oficial Genial Vestibulares (PNG)
│       ├── professores/         # Fotografia real do Prof. Paulinho (otimizada para web)
│       ├── aprovados/           # Artes e fotos reais dos alunos aprovados
│       └── banners/             # Banners institucionais complementares (SVG)
│
├── src/
│   ├── scripts/
│   │   ├── config.js            # CENTRAL DE CONFIGURAÇÃO: preços, links e textos
│   │   └── main.js              # Interações: carrossel, FAQ, scroll e checkout
│   │
│   └── styles/
│       └── main.css             # Tailwind base + componentes e utilitários
│
└── dist/                        # Build de produção otimizado para deploy
```

---

## ⚙️ Como Atualizar Preços, Links e Textos Comerciais

Todas as variáveis comerciais e de checkout estão centralizadas em:
👉 `src/scripts/config.js`

### 1. Inserir Links de Checkout Definitivos
No arquivo `src/scripts/config.js`, edite a seção `pricing`:
```javascript
plans: {
  normal: {
    checkoutUrl: 'https://checkout.pagamento.com/plano-normal', // Insira a URL aqui
  },
  atePassar: {
    checkoutUrl: 'https://checkout.pagamento.com/plano-ate-passar', // Insira a URL aqui
  }
}
```

### 2. Atualizar Preços ou Condições à Vista
Caso a equipe comercial defina os valores com desconto à vista:
```javascript
priceCash: 'R$ 1.490,00 à vista', // Ou mantenha null enquanto sob consulta
```

### 3. Links do Rodapé e Políticas
Edite o objeto `footer.links` com as URLs oficiais das páginas de Termos e Políticas do Genial.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js (v18 ou superior)
- NPM instalado

### Passo a passo
1. Abra o terminal na pasta do projeto:
   ```bash
   cd "d:\Arquivos\Clientes\Genial\Antigravity\Black Friday PGV"
   ```

2. Caso necessário reinstalar dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse a URL exibida no terminal (normalmente `http://localhost:3000`).

4. Para gerar o build de produção:
   ```bash
   npm run build
   ```
   Os arquivos finais minificados e otimizados serão gerados na pasta `dist/`.

5. Para pré-visualizar o build localmente:
   ```bash
   npm run preview
   ```

---

## 🌐 Publicação e Hospedagem (Vercel & GitHub)

O projeto já contém `vercel.json` e `package.json` prontos:
1. **GitHub:** Suba os arquivos deste diretório para o repositório oficial da campanha.
2. **Vercel:** Conecte o repositório na Vercel:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - O deploy ocorrerá automaticamente em segundos com SSL e CDN global.

---

## 📋 Resumo das 9 Seções Implementadas

| Seção | Nome | Conteúdo e Regras Aplicadas |
|---|---|---|
| **01** | **Hero Section** | Marca `BLACK GENIAL 2026` tipográfica (sem selo), título principal, subtítulo, CTA `QUERO ME MATRICULAR` e fotografia real do Prof. Paulinho. |
| **02** | **O que o aluno recebe** | 5 cards estruturados: Aulas ao vivo/gravadas (+8/sem), Redação assistida, Simulados/questões, Mentorias com médicos, Metas e IA. |
| **03** | **Planos e valores** | Cards comerciais em azul claro de alto contraste: Plano Normal (12x R$ 149,90) e Plano Até Passar (12x R$ 249,90 com destaque). |
| **04** | **Bônus da Black** | 6 bônus organizados com elegibilidade clara e valores de referência para ancoragem comercial. |
| **05** | **Resultados reais** | Carrossel responsivo com fotos reais dos alunos aprovados em Medicina e notas 800+ em Matemática e Redação. |
| **06** | **Diferencial Até Passar** | Matrícula única para estudar até a aprovação sem renovações anuais obrigatórias. |
| **07** | **Garantias e segurança** | Garantia de 7 dias e Garantia de aprovação em 2027 com menção explícita às regras dos termos da oferta. |
| **08** | **Perguntas frequentes** | Acordeão interativo com as 5 perguntas e respostas completas do briefing oficial. |
| **09** | **Última chamada + Rodapé** | Chamada final de conversão com direcionamento à tabela de planos e rodapé institucional com links legais. |
