# CoffeeCartel API (Node/Express)

This repo contains source code for CoffeeCartel API, responsible for fetching requests and responses.

<img src="/src/assets/cc-banner.PNG" alt="Banner Image" title="Banner Image" width="550px" height="450px">

## Table of Contents

- [Repo](#Repo)
- [Installation](#Installation)
- [Folder Structure](#FolderStructure)
- [Features](#Features)

## Repo

Frontend: https://github.com/josephkohhh/coffeecartel-frontend

Backend: https://github.com/josephkohhh/coffeecartel-backend

## Installation

If you haven't download Nodejs, please install first from https://nodejs.org/en/download

To install and set up your project:

```bash
cd path/to/your-desired-directory

git clone -b prod https://github.com/josephkohhh/coffeecartel-api.git

cd coffeecartel-api

npm install

```

## Folder Structure

```
coffeecartel-api
├─ .git
├─ .gitattributes
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ assets
   │  └─ cc-banner.PNG
   ├─ config
   │  └─ db.mjs
   ├─ index.mjs
   ├─ middleware
   │  └─ verifyToken.mjs
   ├─ models
   │  └─ userModel.mjs
   ├─ routes
   │  ├─ root.mjs
   │  └─ user.mjs
   ├─ schema
   │  ├─ user.mjs
   │  └─ userValidation.mjs
   ├─ services
   │  └─ userService.mjs
   └─ utils
      ├─ comparePasswords.mjs
      └─ hashPassword.mjs

```

## Features

- HTTP GET, POST & PATCH Requests
- Sequelize ORM
- JWT token
- bcrypt Hashing Algorithm
- Express Validator
- CORS
