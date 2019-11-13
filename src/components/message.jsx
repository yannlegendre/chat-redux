import React from 'react';

const Message = (props) => {
  const { author, createdAt, content } = props.message;

  return (
    <div className="message-container">
      <i className="author">
        <span>{author}</span>
        <small>{new Date(createdAt).toLocaleTimeString()}</small>
      </i>
      <p>{content}</p>
    </div>
  );
};

export default Message;
