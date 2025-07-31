import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hash, MessageCircle, Settings, LogOut } from "lucide-react";

interface Chat {
  id: string;
  name: string;
  type: 'dm' | 'group';
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar?: string;
  isOnline?: boolean;
}

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    type: 'dm',
    lastMessage: 'Hey, how are you doing?',
    timestamp: '2m ago',
    unread: 2,
    isOnline: true
  },
  {
    id: '2',
    name: 'Team Alpha',
    type: 'group',
    lastMessage: 'Meeting at 3pm today',
    timestamp: '15m ago',
    unread: 0
  },
  {
    id: '3',
    name: 'Bob Smith',
    type: 'dm',
    lastMessage: 'Thanks for the help!',
    timestamp: '1h ago',
    unread: 0,
    isOnline: false
  },
  {
    id: '4',
    name: 'Design Team',
    type: 'group',
    lastMessage: 'New mockups are ready',
    timestamp: '2h ago',
    unread: 1
  }
];

export const MessageSidebar = () => {
  return (
    <div className="w-80 bg-sidebar-bg border-r border-sidebar-border flex flex-col">
      {/* User Profile Section */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-online-indicator rounded-full border-2 border-sidebar-bg"></div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-sidebar-foreground">John Doe</h3>
            <p className="text-xs text-sidebar-foreground/70">Online</p>
          </div>
          <Button variant="ghost" size="icon" className="text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-muted">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          <div className="px-3 py-2">
            <h4 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Direct Messages</h4>
          </div>
          
          {mockChats.filter(chat => chat.type === 'dm').map((chat) => (
            <Card key={chat.id} className="p-3 bg-transparent border-none hover:bg-sidebar-muted cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={chat.avatar} />
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">
                      {chat.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  {chat.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-online-indicator rounded-full border border-sidebar-bg"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-sidebar-foreground truncate">{chat.name}</p>
                    <span className="text-xs text-sidebar-foreground/60">{chat.timestamp}</span>
                  </div>
                  <p className="text-xs text-sidebar-foreground/70 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-sidebar-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {chat.unread}
                  </div>
                )}
              </div>
            </Card>
          ))}

          <div className="px-3 py-2 mt-4">
            <h4 className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">Group Chats</h4>
          </div>

          {mockChats.filter(chat => chat.type === 'group').map((chat) => (
            <Card key={chat.id} className="p-3 bg-transparent border-none hover:bg-sidebar-muted cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-sidebar-accent/20 rounded-lg p-2">
                  <Hash className="h-4 w-4 text-sidebar-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-sidebar-foreground truncate">{chat.name}</p>
                    <span className="text-xs text-sidebar-foreground/60">{chat.timestamp}</span>
                  </div>
                  <p className="text-xs text-sidebar-foreground/70 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-sidebar-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {chat.unread}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-sidebar-border">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-muted"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};