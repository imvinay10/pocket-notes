import React, { useContext, useState, useRef, useEffect } from "react";
import "./NoteContainer.module.css";
import UserContext from "../Context/UserContext";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import dayjs from "dayjs";

const NoteContainer = () => {
  const { currentgroup, hiddennotes } = useContext(UserContext);
  const [text, setText] = useState("");
  const ref = useRef();

  const extractusernamelogo = (name) => {
    if (!name) return "";
    let take = name.substring(0, 1);

    const spacePos = name.indexOf(" ");
    if (spacePos !== -1) {
      take += name[spacePos + 1] || "";
    }

    return take.toUpperCase();
  };

  const handleNotes = () => {
    if (text.trim().length === 0 || !currentgroup || !currentgroup.name) {
      return;
    }

    const note = {
      text: text.trim(),
      date: dayjs().format("D MMM YYYY"),
      time: dayjs().format("hh:mm A"),
    };

    let groups = JSON.parse(localStorage.getItem("groups")) || [];
    let group = groups.find((item) => item.name === currentgroup.name);
    if (!group) {
      group = { name: currentgroup.name, notes: [] };
      groups.push(group);
    }

    group.notes.push(note);
    localStorage.setItem("groups", JSON.stringify(groups));
    setText("");
  };

  useEffect(() => {
    if (text.trim().length > 0) {
      ref.current.style.color = "blue";
      ref.current.disabled = false;
    } else {
      ref.current.style.color = "gray";
      ref.current.disabled = true;
    }
  }, [text]);

  return (
    <div className="notes-section">
      <div className="notes-header">
        <FaArrowLeft className="arrow" onClick={() => hiddennotes(true)} />
        <div
          className="profile"
          style={{ backgroundColor: currentgroup?.color }}
        >
          {extractusernamelogo(currentgroup?.name)}
        </div>
        <div className="group-name">{currentgroup?.name}</div>
      </div>
      <div className="notes-body">
        {currentgroup &&
          currentgroup.name &&
          (() => {
            const groups = JSON.parse(localStorage.getItem("groups")) || [];
            const group = groups.find((item) => item.name === currentgroup.name);
            if (group && group.notes) {
              return group.notes.map((item, idx) => (
                <div key={idx} className="note-body">
                  {item.text}
                  <div className="note-time">
                    <div>{item.date} </div>
                    <div className="dot"></div>
                    <div>{item.time}</div>
                  </div>
                </div>
              ));
            }
            return null;
          })()}
      </div>

      <div className="notes-input">
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter your text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <span className="send" ref={ref}>
          <IoMdSend onClick={handleNotes} />
        </span>
      </div>
    </div>
  );
};

export default NoteContainer;
