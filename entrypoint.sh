#!/bin/sh

# Run Prisma migrations
echo "Running Prisma migrations..."
npx prisma migrate dev --name init

# Generate Prisma Client
echo "Generating Prisma Client..."
npx prisma generate

# Start Next.js development server
echo "Starting Next.js dev server..."
npm run dev
