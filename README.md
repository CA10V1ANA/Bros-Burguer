<div align="center">
  <img src="public/assets/brand.jpg" alt="BRO’S BURGUER" width="120" />
  <h1>BRO’S BURGUER</h1>
  <p>Cardápio digital e PDV responsivo em uma única aplicação.</p>
  <p><strong>Angular 22 · TypeScript 6 · SCSS</strong></p>
</div>

## Sobre o projeto

Aplicação demonstrativa para uma hamburgueria delivery, com identidade visual inspirada no rock: superfícies escuras, vermelho, amarelo, títulos marcantes e fotografias dos produtos.

O cliente monta o pedido pelo cardápio. O proprietário acompanha os pedidos e opera o PDV em um painel separado, adaptado ao computador e ao celular.

> **Demonstração:** produtos, preços, clientes e pedidos são ilustrativos. O acesso administrativo não utiliza autenticação real. Não informe dados pessoais reais.

## Funcionalidades

### Cardápio do cliente

- Busca de produtos e filtros por categoria.
- Personalização com adicionais, remoção de ingredientes e quantidade.
- Carrinho com cálculo automático de valores.
- Checkout com dados do cliente, entrega ou retirada e forma de pagamento.
- Confirmação numerada e acompanhamento do status.

### Painel administrativo e PDV

- Dashboard com pedidos do dia, pendentes, em preparo, em entrega e total vendido.
- Terminal com catálogo central e resumo do pedido à direita no desktop.
- Navegação inferior e acesso à sacola no celular.
- Lançamento de pedidos com seleção de cliente e taxa de entrega.
- Gestão dos status: recebido, em preparo, pronto, saiu para entrega, entregue e cancelado.
- Cadastro e edição de produtos, categorias, preços e disponibilidade.
- Clientes e histórico de pedidos.

## Tecnologias e organização

- **Angular 22:** componentes standalone, Angular Router e carregamento das telas sob demanda.
- **TypeScript 6:** modelos tipados e verificação estrita do código e dos templates.
- **SCSS:** identidade visual compartilhada e estilos dos componentes.
- **Angular Signals:** estado reativo de produtos, pedidos e carrinho.
- **Reactive Forms:** validação do checkout e edição dos produtos.
- **localStorage:** persistência da demonstração no navegador.
- **Node.js Test Runner:** testes dos cálculos financeiros.

```text
public/assets/         Imagens da marca e dos produtos
src/app/core/          Modelos, dados, cálculos e serviços compartilhados
src/app/shared/        Catálogo, carrinho, checkout, modais e componentes reutilizáveis
src/app/features/      Cardápio, layout administrativo e telas de gestão
src/app/app.routes.ts  Rotas da aplicação e guard demonstrativo
src/styles/            Tokens e estilos SCSS compartilhados
scripts/               Preparação das entradas estáticas para publicação
vercel.json            Configuração de build e rotas na Vercel
```

## Executar localmente

Pré-requisitos: **Node.js 24.x**, npm e Git.

```bash
git clone https://github.com/CA10V1ANA/Bros-Burguer.git
cd Bros-Burguer
npm ci
npm start
```

Abra `http://localhost:4200`.

| Comando | Finalidade |
| --- | --- |
| `npm start` | Iniciar o servidor de desenvolvimento |
| `npm run dev` | Iniciar o servidor de desenvolvimento |
| `npm run typecheck` | Verificar os tipos TypeScript |
| `npm test` | Executar os testes dos cálculos de valores |
| `npm run build` | Compilar para produção em `dist/` |

A compilação Angular também valida os templates com `strictTemplates`.

## Rotas

| Endereço | Tela |
| --- | --- |
| `/` | Cardápio do cliente |
| `/admin` | Entrada do painel administrativo |
| `/admin/login` | Entrada demonstrativa da equipe |
| `/admin/novo-pedido` | Terminal PDV |
| `/admin/dashboard` | Resumo da operação |
| `/admin/pedidos` | Gestão de pedidos |
| `/admin/produtos` | Produtos e categorias |
| `/admin/clientes` | Clientes e histórico |

O cardápio não exibe botão para a área administrativa. Para testar o painel, abra `/admin` e selecione **Entrar na demonstração do PDV**.

## Publicação na Vercel

O projeto está preparado para importação do GitHub. Nenhum deploy é executado por este repositório.

1. Na Vercel, selecione **Add New → Project**.
2. Importe `CA10V1ANA/Bros-Burguer`.
3. Mantenha a raiz do repositório como **Root Directory**.
4. Confira as configurações:

| Configuração | Valor |
| --- | --- |
| Framework Preset | Angular |
| Node.js | 24.x |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Environment Variables | Nenhuma necessária para esta demonstração |

5. Clique em **Deploy**.

O arquivo `vercel.json` define os comandos e o redirecionamento das rotas do Angular. Após publicar, compartilhe o endereço principal para apresentar o cardápio e acrescente `/admin` para abrir o PDV.

O código-fonte fica em `src/`. JavaScript e CSS são gerados pelo compilador durante o build; `dist/` e `node_modules/` não são versionados.

## Como demonstrar a integração

1. Abra o cardápio e escolha um hambúrguer.
2. Selecione adicionais e finalize com dados fictícios.
3. No mesmo navegador e domínio, abra `/admin` e entre na demonstração.
4. Acesse **Pedidos** e altere o status do pedido recebido.
5. Volte ao cardápio e abra **Meus pedidos** para conferir a atualização.
6. No PDV, utilize **Novo pedido** para lançar outra venda.

O estado é compartilhado na aplicação e persistido com a chave `bros-demo-v1`. Abas abertas no mesmo navegador e domínio recebem atualizações pelo evento `storage`. A sacola permanece em memória durante a navegação e é esvaziada ao recarregar a página.

## Limitações e evolução

- Pedidos e produtos não são sincronizados entre dispositivos ou navegadores diferentes.
- Não há API, banco de dados remoto, pagamento, envio para WhatsApp, impressão ou emissão fiscal.
- Pix, cartão e dinheiro são opções de demonstração, sem cobrança real.
- O guard e a sessão administrativa apenas organizam a navegação; não protegem dados contra acesso técnico.
- O total vendido inclui pedidos não cancelados do dia, incluindo os ainda em andamento; não representa conciliação de pagamentos.

Para uso comercial, será necessário implementar autenticação e autorização no servidor, API REST e persistência em banco de dados. A arquitetura planejada prevê Java + Spring Boot e PostgreSQL.
