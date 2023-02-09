import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const flatRouter = createTRPCRouter({
  getFlats: publicProcedure
  .input(z.object({ skip: z.number() }))
  .query(async ({ ctx, input }) => {
    return await ctx.prisma.flats.findMany({
        skip: input.skip,
        take: 20
      })
  }),
});
