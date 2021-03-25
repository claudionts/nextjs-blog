<h1 aling="center">
    <a href="_______"> Translation, Inc </a>
</h1>
<p align="center">🚀 Desafio de consumir uma blog API com com NextJs, utilizando componente genérico para gerar tag's SEO etc...</p>
<br/>
<h3 aling="center"> 🖥️ Instruções ✍️</h3>

##### ✅ Instalação e Start
- [ ] Clonar repositório
- [ ] Acessar o diretório `frontend`
- [ ] Instalar dependências do projeto `npm install`
- [ ] Fazer build da aplicação `npm run build`
- [ ] Subir o servidor `npm run start`
- [ ] Acessar o servidor na porta `http://localhost:9045/`

##### Desafio feito por Claudio Neto [ claudionts@gmail.com ]
##### Nesse branch no diretório `pages/posts/[id].tsx:65` temos a geração do cache dos artigos em build
###### Neste caso o build fica bem demorado, pois acessa todos os artigos para criar o cache das páginas
###### Cache este que dura 2hrs `pages/posts/[id].tsx:81`
