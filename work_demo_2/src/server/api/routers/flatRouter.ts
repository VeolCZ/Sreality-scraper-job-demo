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
  addFlats: publicProcedure
  .input(
    z.object({
      name: z.string(),
      locality: z.string(),
      imgUrls: z.string().array(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.flats.create({
        data: {
          name: input.name,
          locality: input.locality,
          imgUrls: input.imgUrls,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),
});
