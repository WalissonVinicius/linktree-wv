# Linktree - Walisson Vinicius

Um linktree moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Deploy na Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. **Faça push do código para o GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

2. **Conecte na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe seu repositório
   - A Vercel detectará automaticamente que é um projeto Vite/React

### Opção 2: Deploy via CLI da Vercel

1. **Instale a CLI da Vercel**
   ```bash
   npm i -g vercel
   ```

2. **Faça login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

## 🛠️ Tecnologias

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Ícones
- **Inter Font** - Tipografia

## 📱 Features

- ✅ Design responsivo
- ✅ Animações suaves
- ✅ Gradientes interativos
- ✅ Efeitos hover
- ✅ Otimizado para mobile
- ✅ Performance otimizada

## 🎨 Personalização

### Links Sociais
Edite o array `socialLinks` no arquivo `src/components/Linktree.tsx`:

```typescript
const socialLinks = [
  {
    icon: SpotifyIcon,
    href: 'https://open.spotify.com/user/seu-user',
    label: 'Spotify',
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:from-green-600 hover:to-green-700',
    shadowColor: 'hover:shadow-green-500/30'
  },
  // Adicione mais links...
];
```

### Informações Pessoais
Edite as informações no componente `Linktree.tsx`:

```typescript
<h1>Seu Nome</h1>
<p>Sua Descrição</p>
<p>Sua Idade • Sua Formação</p>
```

### Foto de Perfil
Substitua o arquivo `public/walisson.jpeg` pela sua foto.

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build
- `npm run lint` - Executa o linter

## 📄 Licença

MIT License 