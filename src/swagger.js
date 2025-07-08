const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "📚 Book Library API",
      version: "1.0.0",
      description: "A simple API for managing books",
    },
    components: {
      schemas: {
        Book: {
          type: "object",
          properties: {
            _id: { type: "string" },
            title: { type: "string" },
            author: { type: "string" },
            description: { type: "string" },
            status: { type: "string", enum: ["read", "unread"] },
            date: { type: "string", format: "date-time" },
          },
        },
        BookInput: {
          type: "object",
          required: ["title", "author", "description"],
          properties: {
            title: { type: "string", minLength: 4, maxLength: 100 },
            author: { type: "string", minLength: 4, maxLength: 30 },
            description: { type: "string", minLength: 10, maxLength: 1000 },
            status: { type: "string", enum: ["read", "unread"] },
          },
        },
      },
    },    
    servers: [
      {
        url: "http://localhost:7777",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // <-- Adjust this to where your routes are
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
