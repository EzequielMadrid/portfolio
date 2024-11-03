import { Header } from "@/sections/Header";
import { MyHub } from "@/sections/Hub";
import { Applications } from "@/sections/Apps";

export default function Home() {
  return (
    <div>
      <Header />
      <MyHub />
      <Applications />
    </div>
  );
}
