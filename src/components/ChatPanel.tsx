import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Smile, Paperclip, Hash } from "lucide-react";

interface Message {
  id: string;
  sender: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  isOwn: boolean;
}

const mockMessages: Message[] = [
  {
    id: '1',
    sender: {
      name: 'Alice Johnson',
      avatar: '/placeholder.svg'
    },
    content: 'Hey everyone! How are you all doing today?',
    timestamp: '10:30 AM',
    isOwn: false
  },
  {
    id: '2',
    sender: {
      name: 'You',
    },
    content: 'Hi Alice! I\'m doing great, thanks for asking. How about you?',
    timestamp: '10:32 AM',
    isOwn: true
  },
  {
    id: '3',
    sender: {
      name: 'Bob Smith',
    },
    content: 'Same here! Looking forward to our meeting at 3pm today.',
    timestamp: '10:35 AM',
    isOwn: false
  },
  {
    id: '4',
    sender: {
      name: 'Alice Johnson',
      avatar: '/placeholder.svg'
    },
    content: 'Perfect! I\'ve prepared all the materials we need. Should be a productive session.',
    timestamp: '10:37 AM',
    isOwn: false
  }
];

export const ChatPanel = () => {
  return (
    <div className="flex-1 flex flex-col bg-message-bg">
      {/* Chat Header */}
      <div className="h-16 border-b border-border px-6 flex items-center justify-between bg-background">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2">
            <Hash className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Team Alpha</h2>
            <p className="text-sm text-muted-foreground">4 members</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View Details
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isOwn ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {!message.isOwn && (
              <Avatar className="h-8 w-8 mt-1">
                <AvatarImage src={message.sender.avatar} />
                <AvatarFallback className="bg-primary/20 text-primary text-xs">
                  {message.sender.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
            
            <div className={`flex-1 max-w-lg ${message.isOwn ? 'text-right' : 'text-left'}`}>
              {!message.isOwn && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-foreground">{message.sender.name}</span>
                  <span className="text-xs text-chat-timestamp">{message.timestamp}</span>
                </div>
              )}
              
              <Card 
                className={`p-3 inline-block ${
                  message.isOwn 
                    ? 'bg-message-own border-primary/20' 
                    : 'bg-message-other border-border'
                } hover:bg-message-hover transition-colors`}
              >
                <p className="text-sm text-foreground">{message.content}</p>
                {message.isOwn && (
                  <div className="text-xs text-chat-timestamp mt-1">{message.timestamp}</div>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input Area */}
      <div className="p-4 border-t border-border bg-chat-input-bg">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Paperclip className="h-4 w-4" />
          </Button>
          
          <div className="flex-1 relative">
            <Input
              placeholder="Type a message..."
              className="pr-20 bg-background border-border focus:border-primary"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Smile className="h-4 w-4" />
              </Button>
              <Button size="icon" className="h-8 w-8 bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};