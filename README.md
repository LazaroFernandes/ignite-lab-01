# IGNITE LAB BY ROCKETSEAT

## DEVELOPING A BACK-END AND FRONT-END PROJECT USING

- React
- Auth0
- NestJS
- GraphQL
- Apache Kafka
- Next.js
- Apollo Client (GraphQL)

### Requirement

- Install

```
npm i -g @nestjs/cli
```

### Documentation

#### Auth0

- https://auth0.com/docs
- https://manage.auth0.com/dashboard/us/ignite-lab-dani2022/

#### NESTJS

- https://docs.nestjs.com/

Run the following code inside the classroom and purchases folder:

```
nest generate module database
nest generate module http
nest generate guard authorization --no-spec
nest generate service prisma
```

Run the following code inside the web folder:

- to install auth0 module to authenticate
```
yarn add @auth0/nextjs-auth0
openssl rand -hex 32
```

- to install graphql
```
npm i @nestjs/graphql @nestjs/apollo graphql apollo-server-express
```

## PRISMA
For the Backend for each of microservices
```
npm i prisma -D
npm i @prisma/client
```
- to create the tables
```
npx prisma migrate dev
```
- to open studio
```
npx prisma studio
```