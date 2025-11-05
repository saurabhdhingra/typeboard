import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";


function DocLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const { id } = params;
  auth.protect();
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}

export default DocLayout;
