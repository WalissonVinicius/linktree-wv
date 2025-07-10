# 🚀 Guia de Deploy na Vercel

## 📋 Pré-requisitos

1. **Conta na Vercel**: [vercel.com](https://vercel.com)
2. **Conta no GitHub**: [github.com](https://github.com)
3. **Git instalado** no seu computador

## 🔧 Passo a Passo

### 1. Preparar o Repositório

```bash
# Inicializar Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Linktree React"

# Renomear branch para main
git branch -M main
```

### 2. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em "New repository"
3. Dê um nome ao repositório (ex: `linktree-walisson`)
4. **NÃO** inicialize com README (já temos um)
5. Clique em "Create repository"

### 3. Conectar com GitHub

```bash
# Adicionar remote (substitua pela URL do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Fazer push
git push -u origin main
```

### 4. Deploy na Vercel

#### Opção A: Via Interface Web (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione seu repositório
5. A Vercel detectará automaticamente:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em "Deploy"

#### Opção B: Via CLI

```bash
# Instalar CLI da Vercel
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

## ✅ Configurações Automáticas

O projeto já está configurado com:

- ✅ `vercel.json` - Configuração da Vercel
- ✅ `vite.config.ts` - Otimizado para produção
- ✅ `package.json` - Scripts de build
- ✅ `.gitignore` - Arquivos ignorados
- ✅ `README.md` - Documentação

## 🌐 URLs

Após o deploy, você terá:
- **URL de Produção**: `https://seu-projeto.vercel.app`
- **URL de Preview**: `https://seu-projeto-git-main.vercel.app`

## 🔄 Deploy Automático

A Vercel fará deploy automático sempre que você fizer push para a branch `main`:

```bash
# Após fazer alterações
git add .
git commit -m "Atualização do linktree"
git push
```

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build local
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## 📱 Personalização

### Alterar Informações Pessoais
Edite `src/components/Linktree.tsx`:
- Nome
- Descrição
- Links sociais
- Foto de perfil

### Alterar Cores/Tema
Edite `src/index.css` e `tailwind.config.js`

## 🆘 Suporte

Se encontrar problemas:
1. Verifique os logs na Vercel
2. Teste localmente com `npm run build`
3. Verifique se todos os arquivos estão no GitHub 