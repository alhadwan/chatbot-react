import { ChatMassage } from "./ChatMassage";
import { Spine } from "./Spine";
import { useAutoScroll } from "../hooks/useAutoScroll";
import type { MassageChat } from "../types";
import robotProfile from "../assets/robot.png";
import "./chatMassages.css";

interface ChatMassagesProps {
  massagesChat: MassageChat[];
  botSpine: boolean;
}

export function ChatMassages({ massagesChat, botSpine }: ChatMassagesProps) {

  const massageRef = useAutoScroll(massagesChat);
  return (
    <div className="massage-container" ref={massageRef}>
      <div className="welcome-message">
        {massagesChat.length === 0 && <p>Welcome to the Chat!</p>}
      </div>
      {massagesChat.map((chat) => (
        <ChatMassage
          key={chat.id}
          time={chat.time}
          massage={chat.massage}
          sender={chat.sender}
        />
      ))}
      {botSpine && (
        <div className="robot-chat">
          <img src={robotProfile} className="robot-logo" />
          <Spine />
        </div>
      )}
    </div>
  );
}
