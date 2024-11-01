# [Qover](https://www.qover.com/) Case: Build an insurance app
<img width="999" alt="Screenshot 2024-11-01 at 2 48 49 PM" src="https://github.com/user-attachments/assets/8e0e1433-cae7-4a1e-9faa-01e0b649f00b">


## Description

This application is built with [Nest.js](https://github.com/nestjs/nest), [React](https://reactjs.org/), [React Redux](https://react-redux.js.org/), [TypeScript](https://www.typescriptlang.org/), & [MongoDB](https://www.mongodb.com/atlas/database).

## Getting started

This application has a frontend built with React / Redux and a backend built with Nest.js (Node.js + TypeScript). The frontend is modeled after the supplied [Zeplin](https://zeplin.io/) project. Since this application is only run in development with insensitive data, I will share the environment variables.

### Backend

Create a `.env` file with:

```
DB_USER = 'Qover'
DB_PASSWORD = 'Ninja'
JWT_SECRET = 'secretKey'
```

Then get started:

```
cd backend
npm install
npm run start
```

The backend runs on port `5000`.

[MongoDB Atlas](https://cloud.mongodb.com/v2/61e98b2d379a532d41a1bb6a#metrics/replicaSet/61e98c925d49dd4d31b25535/explorer/nestjs/) is used to store the car data, as well as, the user credentials.

The user is authenticated through [Nest.js](https://docs.nestjs.com/security/authentication), which generates a JWT. This access token is stored in the frontend in `localStorage`. Only authenticated users will be able to log in and access the application.

### Frontend

Create a `.env` file with:

```
REACT_APP_NESTJS_BASE_URL=http://localhost:5000
```

Then get started in another terminal while backend is running:

```
cd frontend
npm install
npm run start
```

The frontend runs on port `3000`.

### To view

View the application on http://localhost:3000.

Login Credentials:

```
Email: Qover
Password: Ninja
```

## Next Steps

- More tests! I only initially set up the backend controller and service tests. The frontend test runner is set up with [jest](https://jestjs.io/), but is not completed. To push to production, I would complete testing of both the backend and frontend end-to-end.
- Make sure the application is 100% responsive; need more UI designs (limited on the designs given).
