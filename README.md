
# Skincare-project

this is a simple e-commerce website that sells skincare products, the checkout is via whatsapp to communicate with the local vendor

## TECH STACK

package manager:node js,node version:LTS
styling:primeng ,CSS
language:typescript
version control:GITHUB

## DEPLOYMENT

Frontend =Github pages
Backend =Render
Email Server=RESEND

## ContactFormFlow/ BACKEND README

user submits form on angular frontend
Angular sends request to backend endpoint

## Overview

The backend server was built with Node.js and Express.
it uses body-parser and JSON parsing, cors for Cross- Origin support,
it uses Resend for seding emails.The server is hosted on Render.

## build(pages/routes)

Home- Hero section
product-grid/list of skincare products(images,description and prices)
About-info
Contact- Whatsapp button,email phone

Product Flow : Each product card has a"ADD TO CART" button,when clicked opens whatsapp chat
with Pre-filled messages that connects you to the seller
Whatsapp Integration: Uses router link
Design: CSS gris for product display on desktop swithc to flexbox(column) for mobile
with media queries.
A Floating Whatsapp buton at the buttom right for a quick chat
Product List with primeNg paginator,Each product has a rating stars

## Intergration Details

- **Method:** POST
// - **Request Body:**
//   {
//     "fullName": string,
//     "email": string,
//     "phone": string,
//     "message": string
//   }
// - **Response:** JSON success or error message

## Key Dependencies

- express: Web framework
// - body-parser: JSON request parsing
// - cors: Cross-Origin Resource Sharing
// - resend: Email sending via Resend API
// - dotenv: Environment variables (optional)

## HOW TO RUN LOCALLY

 1. Clone the repo.
 2. Run: npm install
 3. Set environment variables ( RESEND_API_KEY, PORT).
 4. Start server: npm start
 5. Server runs on PORT (default 5000).

## Deployment

- Hosted on **Render**.
- Auto-deploys from the main branch on push.

## HOW TO TEST ON POSTMAN

// curl -X POST https://*********onrender.com/contact \
//   -H "Content-Type: application/json" \
//   -d '{"fullName":"John Doe","email":"john@ example.com","phone":"1234567890","message":"Hello"}'
//  test the backend url on post man and check your email
