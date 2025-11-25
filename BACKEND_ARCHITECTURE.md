# Backend Architecture & Logic

## Overview
Since you are deploying to Vercel, the most efficient and cost-effective backend approach is to use **Vercel Serverless Functions** (Node.js) combined with a cloud database. This avoids the need for a separate backend server.

## Technology Stack
- **Runtime**: Node.js (Vercel Serverless Functions)
- **Database**: **Supabase** (PostgreSQL) is recommended for relational financial data, or **MongoDB Atlas** for flexibility.
- **Authentication**: **JWT (JSON Web Tokens)** for custom auth or **Supabase Auth** for a managed solution.

## Data Models (Schema)

### 1. Users (Members)
```json
{
  "id": "UUID",
  "coopId": "NDC/COOP/0023",
  "fullName": "String",
  "email": "String",
  "passwordHash": "String",
  "role": "USER" | "ADMIN",
  "createdAt": "Date"
}
```

### 2. Savings (Wallet)
```json
{
  "userId": "UUID",
  "totalContribution": "Number",
  "quarterlyProfit": "Number",
  "lastWithdrawalDate": "Date"
}
```

### 3. Loans
```json
{
  "id": "UUID",
  "userId": "UUID",
  "type": "NORMAL" | "EMERGENCY" | "COMMODITY",
  "amount": "Number",
  "durationMonths": "Number",
  "guarantorId": "String",
  "status": "PENDING" | "APPROVED" | "REJECTED" | "PAID",
  "appliedAt": "Date"
}
```

### 4. Transactions
```json
{
  "id": "UUID",
  "userId": "UUID",
  "type": "DEPOSIT" | "WITHDRAWAL" | "LOAN_DISBURSEMENT" | "LOAN_REPAYMENT",
  "amount": "Number",
  "status": "COMPLETED" | "PENDING",
  "date": "Date"
}
```

## API Endpoints (Logic)

### Authentication
- `POST /api/auth/register`: Validates input, hashes password, creates User record.
- `POST /api/auth/login`: Verifies password, returns JWT token.

### User Dashboard
- `GET /api/user/profile`: Returns user details and savings balance (requires Token).
- `POST /api/loans/apply`:
    1. Check if user has active loan (prevent multiple).
    2. Validate guarantor exists.
    3. Create Loan record with status 'PENDING'.
- `POST /api/savings/withdraw`:
    1. Check `lastWithdrawalDate` (must be > 2 years).
    2. Check amount <= 30% of `totalContribution`.
    3. Create Transaction record.

### Admin Dashboard
- `GET /api/admin/stats`: Aggregates total assets, loans, and inflow.
- `GET /api/admin/loans`: Lists all loans with status 'PENDING'.
- `PUT /api/admin/loans/:id/approve`: Updates loan status to 'APPROVED' and creates a 'LOAN_DISBURSEMENT' transaction.

## Next Steps for Implementation
1. Set up a Supabase project.
2. Create the tables defined above.
3. Create a new folder `api/` in your project root.
4. Write Node.js functions for each endpoint using the Supabase JS client.
