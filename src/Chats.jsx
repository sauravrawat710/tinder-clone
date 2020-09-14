import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="yo whats up!"
        timestamp="35 minutes ago"
        profilePic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Chat
        name="Ellen"
        message="whats up?"
        timestamp="45 minutes ago"
        profilePic="https://i.pinimg.com/originals/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg"
      />
      <Chat
        name="Sandra"
        message="Holla!"
        timestamp="3 days ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
      />
      <Chat
        name="Natasha"
        message="Oops there is he is..."
        timestamp="1 week ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5837EeYernc7eCuG4Xfpb0aQ9r3gV-KhV5Q&usqp=CAU"
      />
    </div>
  );
}

export default Chats;
