import { MessageSidebar } from "./MessageSidebar";
import { ChatPanel } from "./ChatPanel";

export const ChatLayout = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      <MessageSidebar />
      <ChatPanel />
    </div>
  );
};