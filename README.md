# NestJS

## Instalação

> npm i -g @nestjs/cli
> nest -h
> nest new project-name

<hr>

* O nest é totalmente baseado no uso de decorators
* Decorator -> Servem para acoplar funcionalidade em classes, funções, variáveis
* O nest é totalmente baseado no uso de modules, para dividir a aplicação em vários pedacinhos
* app.module é o módulo principal
* Cada método de uma classe controller vira uma rota da aplicação
* Qualquer coisa que não seja controller (arquivo que recebe rotas) é provider (repositories, services)
* **Inversão de dependências**: Ao invés do controller importar uma dependencia e sair utilizando, o principio de inversão de dependencia diz que o controller receberá suas dependencias como parâmetros. E quem for chamar o controller é quem enviará as dependências pra ele.

<hr>

-> Veja no app.controller que o AppController recebe um AppService. O app.module instancia esse AppController, mas em nenhum momento passa um AppService. Em app.service, o nest através do decorator @injectable identifica que a classe AppService e automaticamente injeta ela no AppController através dos providers. O nome disso é **Injeção de dependências**

## Dependências

> Prisma: npm i prisma -D

```shell
npx prisma init --datasource-provider SQLite
npx prisma migrate dev
```

> Prisma Client: npm i @prisma/client
> Class Validator: npm i class-validator

## Outros comandos importantes

* npm run lint -- --fix