import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({
  setMassages,
  massagesChat,
  setBotSpine,
  time,
  setShowWelcomeMassage,
}) {
  const [input, setInput] = useState("");

  function handleSubmit() {
    const oldMessages = [
      ...massagesChat,
      {
        massage: input,
        time: time,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setMassages(oldMessages);
    setBotSpine(true);

    setTimeout(() => {
      const response = Chatbot.getResponse(input);
      setBotSpine(false);
      setMassages([
        ...oldMessages,
        {
          massage: response,
          time: time,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    }, 3000);

    setInput("");
  }
  return (
    <div className="chat-input-button">
      <input
        value={input} //control input -> changes the text inside the input box when we setInput(" ");
        onChange={(e) => setInput(e.target.value)}
        className="chat-input"
        type="text"
        size="30"
        placeholder="Send a message to Chatbot"
      />
      <button className="send-button" onClick={handleSubmit}>
        Send
      </button>
      <button
        className="clear-button"
        onClick={() => {
          localStorage.clear();
          setMassages([]);
          setShowWelcomeMassage(true);
        }}
      >
        Clear
      </button>
    </div>
  );
}
