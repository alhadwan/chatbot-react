import userProfile from "../assets/Ali.jpg";
import robotProfile from "../assets/robot.png";
import "./ChatMassage.css";
import dayjs from "dayjs";

interface chatMassageProp{
  massage: string;
  sender: string;
  time: number;
}

export function ChatMassage({ massage, sender, time }:chatMassageProp) {
  // console.log(userProfile);
  // const massage = props.massage
  // const massage = props.sender
  // const {massage,sender} = props

  // if (sender === "user") {
  //   return (
  //     <div>
  //       {massage}
  //       <img src="/user.png" width="30" />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className={sender === "robot" ? "robot-chat" : "user-chat"}>
        {sender === "robot" && (
          <img src={robotProfile} className="robot-logo" />
        )}

        <div className="massages-text">
          <div>{massage}</div>
          <div className="massages-time">{dayjs(time).format("h:mma")}</div>
        </div>

        {sender === "user" && (
          <img src={userProfile} className="user-logo self-logo" />
        )}
      </div>
    </>
  );
}
