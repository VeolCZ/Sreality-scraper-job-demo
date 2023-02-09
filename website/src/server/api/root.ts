import { createTRPCRouter } from "./trpc";
import { flatRouter } from "./routers/flatRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  flatRouter: flatRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
