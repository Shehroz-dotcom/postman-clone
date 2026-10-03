import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" flex flex-col h-screen w-screen">
      <Button className={"cursor-pointer"}>H E L L O </Button>
    </div>
  );
}
