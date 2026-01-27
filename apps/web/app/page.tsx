import { prismaClient } from "db/client";


export default async function Home() {
  const users = prismaClient.user.findMany()
  return (
    <div>
      Users:
        ${JSON.stringify(users)}
    </div>
  );
}
