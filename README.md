# Develepor Accelerator Program - Month 2 Assessment

## Introduction

By now, you have experience in Nodejs and GraphQL. This assessment will build on your application of the first assessment as you add a graphql server to your backend!

## Challenge

### TRACKMATIC

Trackmatic's Client structure is as such: A Group (eg Massmart) can have many Organisations (eg Massmart Logistics, Makro, Massbuild which is Builders Warehouse) which in turn can have many Sites (Physical location, such as Makro Germiston, Builders Warehouse Norwood)

The group schema is:

```javascript
{
    id: int,
    name: "string",
}
```

The org schema is:

```javascript
{
    id:int,
    groupId:int,
    name:"string"
}
```

The site schema is:

```javascript
{
    id:int,
    orgId:int,
    name:"string",
    location:[
        {
            lat:float,
            lng:float
        },
    ]
}
```

the `location` array is an array of latitude/longitude coordinates which essentially make a shape if plotted on a map, encircling the physical location of the site.

All the fields in each schema are mandatory.

**REQUIRED**: Use the [joi](https://www.npmjs.com/package/joi) validation library to make sure any inputs fit the schema!

## Required methods / functions:

- CRU (Create, Read, Update) of all Orgs, Groups, Sites.
- Graphql schema, queries and resolvers for all the typedefs
- In a group, I should be able to fetch all Orgs below it, in an org, all sites.

## Tech Stack

- nodejs
- Download [Docker](https://www.docker.com/products/docker-desktop) and then [Kitematic](https://github.com/docker/kitematic/releases) to get a mysql container running on your local machine. (Kitematic is technically a deprecated technology, and docker itself will say you can just use docker desktop. If you can get that working, then more power to you!). On kitematic, you can just search for mysql, but [here](https://hub.docker.com/_/mysql) are the docs to give you more info.
- Use the [sequelize](https://sequelize.org/) npm library to configure a database with the required schema. If you want a brief crash course on SQL as a language, check [this](https://www.mysqltutorial.org/) out. You really only need to understand creating databases / tables / fields, and basic search and update querying. Don't go into views and stored procedures and the like!
- use [Apollo Graphql](https://www.apollographql.com/docs/apollo-server/) as a server layer

## Outcomes

- A graphql layer that can be accessed from the playground, with required queries/mutations

- do NOT worry about login/authentication behaviour for this

- We will also be assessing code QUALITY - are things structured neatly, referenced smoothly, readable, etc

- you may reuse any code you've previously built and ANY/ALL resources.

## DEADLINE

- 16 July 2021

## Good luck!
