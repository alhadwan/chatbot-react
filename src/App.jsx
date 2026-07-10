import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMassages } from "./components/chatMassages";
import dayjs from "dayjs";
import "./App.css";
import { chatbot } from "supersimpledev";

function App() {
  const time = dayjs().valueOf();

  // modify chatbot responses after the component mounts
  useEffect(() => {
    chatbot.addResponses({
      "what time is it": () =>
        "The current time is " + new Date().toLocaleTimeString(),
      "flip the coin": () =>
        "You got a " + (Math.random() < 0.5 ? "Heads" : "Tails"),
      "toss the dies": () =>
        "You rolled a " + (Math.floor(Math.random() * 6) + 1),
    });
  }, []);

  const [massages, setMassages] = useState(
    JSON.parse(localStorage.getItem("messages") || "[]"),
  );

  const [botSpine, setBotSpine] = useState(false);

  //implement useEffect to save massages to localstorage
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(massages));
  }, [massages]);

  const title = `${massages.length} Messages`;

  return (
    <>
  <title>{title}</title>
    <div className="app-container">
      <ChatMassages massagesChat={massages} botSpine={botSpine} time={time} />
      <ChatInput
        time={time}
        setBotSpine={setBotSpine}
        setMassages={setMassages}
        massagesChat={massages}
      />
    </div>
    </>
      
  );
}

export default App;
