// export const  dynamic = "force-dynamic";
// or
// export const revalidate = 60; // revalidate this page every 60 seconds
import { prismaClient } from "db/client";


export default async function Home() {
  const users = await prismaClient.user.findMany()
  console.log(users)
  return (
    <div>
      Users:
        ${JSON.stringify(users)}
    </div>
  );
}
