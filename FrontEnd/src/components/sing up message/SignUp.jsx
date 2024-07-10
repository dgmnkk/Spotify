import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MessageContext } from "../../contexts/message.context";
import "./signup.scss";

export default function SignUp() {
  const { isMessage, switchMessage } = useContext(MessageContext);

  return (
    <>
      {isMessage ? (
        <div className="container">
          <div className="text">
            <span className="title">Пробне використання Spotify</span>
            <span className="desc">
              Зареєструйся, щоб слухати пісні й подкасти без обмежень. Іноді ми
              будемо показувати рекламу. Додавати кредитно карту не потрібно.
            </span>
          </div>
          <Link to="register" className="link">
            <button
              className="register-button"
              onClick={() => {
                switchMessage(false);
              }}
            >
              Зареєструватися безкоштовно
            </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
