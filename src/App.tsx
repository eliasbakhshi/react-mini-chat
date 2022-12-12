import React, { useRef, useState } from "react";
import { MentionsInput, Mention } from "react-mentions";
import "./styles/app.scss";
import { users } from "./data/users";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { addMessage } from "./redux/Messages";
import Message from "./components/Message";
import MentionStyle from "./styles/MentionStyle.js";
import MentionInputStyle from "./styles/MentionInputStyle.js";

export const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const controlsForm = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const messages = useAppSelector((state) => state.messages);
  const dispatch = useAppDispatch();

  const highlightMentions = (message : string) => {
    message = message.replace('<%', '<p class="mentioned">');
    message = message.replace('%>', '</p>');

    return message
  }
  const onSubmitFrom = (event: React.FormEvent<HTMLFormElement> | null) => {
    event?.preventDefault();
    
    if (!inputRef.current || inputRef.current.value.trim() === "") {
      if (inputRef.current) inputRef.current.value = "";
      setMessage("");
      return;
    }

    dispatch(
      addMessage({
        value: highlightMentions(message),
        id: String(messages.length),
        reaction: "",
      })
    );

    inputRef.current.value = "";
    setMessage("");
  };

  // Submit when user click on enter 
  const onKeyDownHandle = ( e : | React.KeyboardEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLInputElement> ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onSubmitFrom(null);
    }    
  };

  return (
    <div className="container">
      <header>Chatty chat chat</header>
      <div className="message-container">
        {messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>
      <form className="controls" ref={controlsForm} onSubmit={onSubmitFrom}>
        <MentionsInput
          onKeyDown={onKeyDownHandle}
          value={message}
          inputRef={inputRef}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={"Message"}
          a11ySuggestionsListLabel={"Message"}
          style={MentionStyle}
        >
          <Mention trigger="@" data={users} markup="<%__display__%>" style={MentionInputStyle} />
        </MentionsInput>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};
