# Companies API development


Simple Node.js + Express + MongoDB API to manage Company data with search and filters. Optional React frontend included.

## Prerequisites

- Node.js >= 16
- MongoDB Atlas (online) — ensure you have your connection URI

## Setup (backend)

1. Clone repo
2. `cd companies-api-development`
3. `cp .env.example .env` and update `MONGO_URI` with your MongoDB Atlas connection string
4. `npm install`
5. Start: `npm run dev` (requires nodemon) or `npm start`
   
API base: `http://localhost:5000/api/companies`

## Example requests

- `GET /api/companies?q=media&industry=Media&tech=React,Node.js`
- `POST /api/companies` with JSON body to create new company.

## Frontend

- `cd frontend`
- `npm install`
- `npm start` (dev server). Ensure proxy to backend or CORS is configured.

## Submission

- Name folder: `k_ramesh_companies_api`
