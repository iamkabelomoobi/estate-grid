import { Context } from "../../../app/context";
import { Prisma } from "@estate-grid/db";

export const updateUser = async (
  id: string,
  data: { name?: string; image?: string | null },
  ctx: Context,
  query?: object,
  transaction?: Prisma.TransactionClient,
) => {
  const db = transaction ?? ctx.prisma;
  return db.user.update({
    ...(query ?? {}),
    where: { id },
    data,
  });
};
