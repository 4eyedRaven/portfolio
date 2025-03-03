import { cookies } from "next/headers";
import HomeClient from "./HomeClient";

export default async function Page() {
  // Read the "locale" cookie on the server
  const cookieStore = await cookies();
  const initialLang = cookieStore.get("locale")?.value || "en";
  
  // Pass the initial language to the client component
  return <HomeClient initialLang={initialLang} />;
}