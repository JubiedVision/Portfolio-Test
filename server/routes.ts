import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes can be added here if needed in the future
  // Example: app.get('/api/data', (req, res) => res.json({ message: 'ok' }));
  
  const httpServer = createServer(app);
  return httpServer;
}
