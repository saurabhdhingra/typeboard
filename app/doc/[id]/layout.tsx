import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";
import { use } from "react";

function DocLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const { id } = use(params);
  auth.protect();
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;
