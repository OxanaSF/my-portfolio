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
  border: 0.063rem solid none;
  box-shadow: rgba(0, 0, 0, 0.16) 0rem 0.063rem 0.25rem;
  width: 70%;
  padding: 5rem;
  margin: auto;
  border-radius: 1rem;

  .i-mail:after,
  .i-mail .mail-anim:after {
    content: '';
    position: absolute;
    bottom: 0.313rem;
    left: 0.313rem;
    width: 0.938rem;
    height: 0.25rem;
    border-bottom: 0.125rem solid black;
    border-top: 0.125rem solid black;
  }

  .i-mail:before,
  .i-mail .mail-anim:before {
    content: '';
    position: absolute;
    top: 0.313rem;
    right: 0.313rem;
    width: 0.438rem;
    height: 0.375rem;
    background: black;
  }

  .i-success:after,
  .i-success .success-anim:after {
    content: '';
    position: absolute;
    bottom: 0.75rem;
    left: 0.688rem;
    width: 0.938rem;
    height: 0.5rem;
    border-bottom: 0.125rem solid #2b5876;
    border-left: 0.125rem solid #2b5876;
    transform: rotate(-45deg);
  }

  .container {
    left: calc(50% - 15rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  .animation {
    width: 33.75rem;
    height: 2.125rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }

  .i-mail,
  .i-mail .mail-anim {
    width: 4rem;
    height: 3rem;
    border-radius: 5% 5%;
    border: 0.125rem solid black;
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
    margin: -0.125rem 0 0 -0.125rem;
    animation: moveL 0.8s linear;
    
  }
  @keyframes moveL {
    100% {
      transform: translateX(13.75rem) rotateY(90deg);
    }
  }

  .line {
    padding: 0.063rem 13.125rem;
    background-image: linear-gradient(
      to right,
      #000 30%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: top;
    background-size: 0.938rem 0.125rem;
    background-repeat: repeat-x;
    
    
  }

  .i-success,
  .i-success .success-anim {
    width: 2.5rem;
    height: 1.875rem;
    border-radius: 5% 5%;
    border: 0.125rem solid #2b5876;
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
      border-bottom: 0.125rem solid #fff;
      border-left: 0.125rem solid #fff;
      
    }
  }
  .i-success .success-anim {
    margin: -0.125rem 0 0 -0.125rem;
    animation: moveR 0.8s 1s linear;
   

    
  }
  @keyframes moveR {
    0% {
      transform: translateX(-13.75rem) rotateY(90deg);
      
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
