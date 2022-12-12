import React, { useState } from "react";
import Linkify from "react-linkify";
import "../styles/app.scss";
import { useAppDispatch } from "../redux/hooks";
import { ChangeReaction } from "../redux/Messages";
import parse from 'html-react-parser';


type MessageType = {
    value: string;
    id: string;
    reaction: string;
  };
  
  type MessageProps = {
    message: MessageType;
  };
  
const Message = ({ message } : MessageProps )  => {
    const { value, id, reaction } = message;
    const [picker, setPicker] = useState(false);
    const dispatch = useAppDispatch();
    const onPickerClick = () => {
      setPicker(!picker);
    };
  
    const onThumbsUp = () => {
      dispatch(ChangeReaction({ id, reaction: "👍" }));
      setPicker(!picker);
    };
  
    const onThumbsDown = () => {
      dispatch(ChangeReaction({ id, reaction: "👎" }));
      setPicker(!picker);
    };
  
    return (
      <div className="message">
        <Linkify>{parse(value)}</Linkify>
        {reaction && <div className="reaction">{reaction}</div>}
        <div className="reactions">
          <button className="add-reaction" onClick={onPickerClick}>
            😃
          </button>
          {picker && (
            <div className="reactions-alternatives">
              <button onClick={onThumbsUp}>👍</button>
              <button onClick={onThumbsDown}>👎</button>
            </div>
          )}
        </div>
      </div>
    );
  };

export default Message
