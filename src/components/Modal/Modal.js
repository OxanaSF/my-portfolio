import styled from 'styled-components';

const Modal = () => {
  return (
    <ModalStyled>
      <div className="modal-container">
        <div className="container">
          <div className="animation">
            <div className="i-mail">
              <div className="mail-anim"></div>
            </div>
            <div className="line"></div>
            <div className="i-success">
              <div className="success-anim"></div>
            </div>
          </div>
          <div className="message">
            <p>Your message has been sent</p>
            <p>successfully!</p>
          </div>
        </div>
      </div>
    </ModalStyled>
  );
};

const ModalStyled = styled.section`
  border: 1px solid none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 70%;
  padding: 5rem;
  margin: auto;
  border-radius: 1rem;

  .i-mail:after,
  .i-mail .mail-anim:after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 15px;
    height: 4px;
    border-bottom: 2px solid black;
    border-top: 2px solid black;
  }

  .i-mail:before,
  .i-mail .mail-anim:before {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    width: 7px;
    height: 6px;
    background: black;
  }

  .i-success:after,
  .i-success .success-anim:after {
    content: '';
    position: absolute;
    bottom: 12px;
    left: 11px;
    width: 15px;
    height: 8px;
    border-bottom: 2px solid #2b5876;
    border-left: 2px solid #2b5876;
    transform: rotate(-45deg);
  }

  .container {
    /* position: absolute; */
    /* top: 50%; */
    left: calc(50% - 240px);
    /* width: 50%; */
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .animation {
    width: 33.75rem;
    height: 2.125;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .i-mail,
  .i-mail .mail-anim {
    width: 4rem;
    height: 3rem;
    border-radius: 5% 5%;
    border: 2px solid black;
    position: relative;
    animation: transformS 0.3s linear;
  }
  @keyframes transformS {
    50% {
      transform: scale(0.5, 0.5);
      opacity: 0.5;
    }
  }
  .i-mail .mail-anim {
    margin: -2px 0 0 -2px;
    animation: moveL 0.8s linear;
  }
  @keyframes moveL {
    100% {
      transform: translateX(220px) rotateY(90deg);
    }
  }

  .line {
    padding: 1px 210px;
    background-image: linear-gradient(
      to right,
      #000 30%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 15px 2px;
    background-repeat: repeat-x;
  }

  .i-success,
  .i-success .success-anim {
    width: 40px;
    height: 30px;
    border-radius: 5% 5%;
    border: 2px solid #2b5876;
    position: relative;
    animation: transformB 0.3s 1.4s linear forwards;
  }
  .i-success:after,
  .i-success .success-anim:after {
    animation: transformBA 0.3s 1.4s linear forwards;
  }
  @keyframes transformB {
    50% {
      transform: scale(1.5, 1.5);
      background: #2b5876;
    }
    100% {
      background: #2b5876;
    }
  }
  @keyframes transformBA {
    100% {
      border-bottom: 2px solid #fff;
      border-left: 2px solid #fff;
    }
  }
  .i-success .success-anim {
    margin: -2px 0 0 -2px;
    animation: moveR 0.8s 1s linear;
  }
  @keyframes moveR {
    0% {
      transform: translateX(-220px) rotateY(90deg);
    }
    50% {
      transform: translateX(0) rotateY(0);
    }
  }

  .message {
    text-align: center;
    margin-top: 5rem;
    color: #2b5876;
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media (max-width: 900px) {
    width: 90%;
    padding: 2rem;
    border-radius: 0.5rem;

    .animation {
      width: 90%;
    }

    .line {
      padding: 1px 3rem;
    }

    .message {
    margin-top: 3rem;
    font-size: 1.2rem;
  
  }
  }
`;

export default Modal;
