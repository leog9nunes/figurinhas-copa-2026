# ⚽ Álbum de Figurinhas da Copa 2026

Um aplicativo web interativo para colecionadores de figurinhas da Copa do Mundo 2026. Organize, rastreie e compartilhe sua coleção de figurinhas!

## 🎯 Funcionalidades

- **📱 Interface Responsiva**: Funciona perfeitamente em desktop, tablet e celular
- **🎨 Modo Escuro**: Tema claro e escuro para conforto visual
- **🔍 Busca Avançada**: Procure jogadores por nome ou seleção
- **🗂️ Filtro por Seleção**: Visualize figurinhas por país
- **📊 Estatísticas em Tempo Real**: Acompanhe seu progresso
- **🔄 Controle de Repetidas**: Registre quantas cópias você tem de cada figurinha
- **💾 Persistência Local**: Seus dados são salvos automaticamente no navegador
- **🔗 Compartilhamento**: Compartilhe sua coleção via WhatsApp, Twitter ou código único
- **♿ Acessível**: Design inclusivo para todos

## 🚀 Como Começar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/leog9nunes/figurinhas-copa-2026.git
cd figurinhas-copa-2026
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse:
```
http://localhost:5173
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
figurinhas-copa-2026/
├── src/
│   ├── components/          # Componentes React
│   │   ├── StickerCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SelectionTabs.jsx
│   │   ├── CounterStats.jsx
│   │   └── ShareModal.jsx
│   ├── hooks/              # Custom hooks
│   │   └── useAlbum.js
│   ├── data/               # Dados estáticos
│   │   └── players.json
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Entrada React
│   └── index.css           # Estilos globais
├── index.html              # HTML principal
├── vite.config.js          # Configuração Vite
├── tailwind.config.js      # Configuração Tailwind
├── postcss.config.js       # Configuração PostCSS
└── package.json            # Dependências
```

## 🎮 Como Usar

1. **Marcar como Obtida**: Clique no card da figurinha para marcá-la como obtida
2. **Registrar Repetidas**: Use os botões +/- para adicionar figurinhas repetidas
3. **Buscar**: Use a barra de busca para encontrar jogadores por nome ou país
4. **Filtrar**: Clique nas abas para filtrar por seleção
5. **Compartilhar**: Clique em "Compartilhar" para enviar sua coleção para amigos
6. **Modo Escuro**: Clique no ícone de lua/sol para ativar modo escuro
7. **Resetar**: Clique no ícone de reset para começar do zero

## 💾 Armazenamento de Dados

Os dados são salvos automaticamente no `localStorage` do seu navegador. Nenhuma informação é enviada para servidores externos.

## 🔗 Compartilhamento

Existem três formas de compartilhar:

1. **WhatsApp**: Envia um resumo da sua coleção para WhatsApp
2. **Twitter**: Compartilha uma mensagem sobre seu progresso
3. **Código Único**: Copie um código que representa sua coleção para compartilhar com amigos

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework JavaScript
- **Vite**: Build tool ultrarrápido
- **Tailwind CSS**: Utilitários de estilo
- **Lucide React**: Ícones bonitos
- **localStorage**: Armazenamento local

## 📱 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Mobile browsers

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Fazer commit das mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Léo Gomes Nunes](https://github.com/leog9nunes)

## 📧 Contato

Para dúvidas ou sugestões, sinta-se livre para abrir uma issue no repositório.

---

**Divirta-se coletando figurinhas! ⚽🎉**
