import styled from "styled-components";
import { SContainerProps } from "../interfaces/global.interface";

export const ContainerNavBar = styled.div`
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 60px;
  background: var(--color-background);

  .content-links {
    padding: 18px 21px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: row;

      .link-btn {
        padding: 5px;
        list-style: none;
        margin-left: 40px;
        text-decoration: none;
        color: var(--color-font-primary);
      }

      .link-btn:active,
      .link-btn:focus {
        border-radius: 5px;
        background: var(--navbar-color-button);
      }
    }
    .img-btn {
      padding-right: 11px;
    }

    .link-login {
      text-decoration: none;
      padding: 0 21px;
      color: var(--color-font-primary);
    }
  }
`;

export const Card = styled.div<SContainerProps>`
  ${(props) => props.shadow && "box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);"}
  width: ${(props) => props.width || "405px"};
  border-radius: ${(props) => props.background || "5px"};
  height: ${(props) => props.height || "338px"};
  padding ${(props) => (props.active ? "20px" : "0px")};
  border: ${(props) => props.background || "1px solid rgba(51, 51, 51, 0.2)"};
  background: var(--color-font-primary);
  background-image: url("${(props) => props.background}");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: ${(props) => props.background};
    margin-left: -10px;
  }

  .container-header {
    background: var(--color-header);
    padding: 15px;

    h1 {
      font-size: 14px;
      font-weight: 400;
      padding: 0px;
      margin: 0px;
    }
  }
  
  .left {
    width: 10%;
  }

  .right, .left {
    margin-top: 100px;
    
    h1 {
      font-size: 20px;
    }
  }
`;

export const CardContentBody = styled.div`
  height: 200px;
  h2 {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgba(51, 51, 51, 0.2);
    padding: 18px 112px 18px 112px;
  }

  .logo-card {
    display: flex;
    height: 125px;
    margin: auto;
    justify-content: center;
    align-items: center;
  }

  .description-card {
    width: 80%;
    margin: auto;
  }
`;

export const ContainerButton = styled.button<SContainerProps>`
  margin: ${(props) => props.top || "100px"} auto;
  width: ${(props) => props.width || "250"}px;
  display: flex;
  box-sizing: border-box;
  height: ${(props) => props.height || "60px"};
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.font || "18px"};
  padding: 10px;
  font-weight: ${(props) => (props.color ? "600" : "normal")};
  border-radius: 15px;
  border: 1px solid var(--color-background);
  background: ${(props) =>
    props.background ? props.background : "rgba(0, 0, 0, 0)"};
  outline: none;
  ${(props) => (props.shadow ? `box-shadow: ${props.shadow}` : "")};

  .link-btn {
    color: ${(props) =>
      props.background ? props.color : "var(--color-background)"};
  }
`;

export const ContainerNews = styled.div`
  background: rgba(0, 0, 0, 0.34);
  height: 100%;

  .card-floatting {
    width: 428px;
    background-color: var(--color-background-opacity);
    position: relative;
    left: -60px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50px;
    padding: 11px 11px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 50px;
    border-radius: 5px;

    .title-h3-italic {
      font-style: normal;
      font-size: 23px;
      font-weight: bold;
    }
  }

  .content-news {
    width: 787px;
    left: 28px;
    position: relative;
    bottom: -200px;
    color: var(--color-font-primary);
  }
`;

export const ContainerOtherNews = styled.div`
  display: flex;

  img {
    height: 100%;
  }

  .data-content {
    padding: 20px;

    .description-card {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

export const ContainerCardDemandas = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .title-h1 {
    color: var(--color-font-primary);
  }
`;

export const ContainerSponsor = styled.div`
  width: 80%;
  margin: 85px auto;
  img {
    margin: 0 48px;
  }
`;

export const ContainerDoubt = styled.div<SContainerProps>`
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || "var(--color-background)"};
  height: ${(props) => props.height || "100%"};
  display: flex;
  justify-content: center;
  align-items: center;

  .container-left {
    width: 44%;
    margin: 92px;
  }

  .container-center {
    width: 20%;
  }

  .container-right {
    width: 40%;
    text-align: right;
    display: flex;
    flex-direction: column;

    span {
      padding: 10px;
    }

    .icon-send {
      width: 60px;
      height: 60px;
      position: static;
      margin-top: -70px;
      margin-left: 400px;
      background-color: var(--color-background);
      padding: 15px;
      border-radius: 50px;
    }
  }

  .title-h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    display: flex;
    color: white;
    align-items: flex-end;
  }
`;

export const InputStyle = styled.input<SContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background || "#fff"};
  border-radius: 5px;
  outline: none;
`;

export const TextareaStyle = styled.textarea<SContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background || "#fff"};
  border-radius: 5px;
  outline: none;
`;

export const ContainerFooterPainel = styled.a`
  display: flex;
  position: absolute;
  width: 300px;
  height: 40px;
  background-color: var(--color-background-footer);
  color: white;
  justify-content: center;
  align-items: center;
  bottom: 0;
  z-index: 1;
  text-decoration: none;
  transition: ease-in-out 0.4s;

  &:hover {
    color: #cecece;
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  height: 447px;
  display: flex;

  .container-left {
    width: 65%;
    margin-right: 100px;

    .container-top,
    .container-bottom {
      display: flex;
      flex-direction: row;

      .subtitle {
        font-size: 25px;
        text-decoration: none;
        padding: 20px;
      }
    }
  }

  .container-right {
    margin-left: 200px;
    width: 30%;

    img {
      margin-bottom: 30px;
    }
  }

  .container-left,
  .container-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerChip = styled.a``;

export const ButtonSubmitStyle = styled.img<SContainerProps>`
  background-image: url(${(props) => props.background});
`;

export const ContainerWelcome = styled.div`
  box-shadow: 10px 3px 13px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.44);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 71px;
`;

export const ContainerAccessLogin = styled.div<SContainerProps>`
  display: flex;
  width: 80%;
  margin: 30px;
  border-radius: 5px;
  flex-direction: row;
  background: rgba(51, 51, 51, 0.5);

  .logo {
    background: rgba(51, 51, 51, 0.6);
    background-image: ${(props) => props.background};
    border-radius: 5px 0px 0px 5px;
    padding: 10px;
    width: 200px;
    height: 100%;

    img {
      width: 50px;
      height: 50px;
      margin: 19px 29px;
    }
  }

  .description {
    padding: 15px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    .link-a {
      color: white;
    }

    .subtitle-p {
      margin-right: 50px;
      font-weight: 200;
      text-align: justify;
      font-size: 14px;
      line-height: 1;
    }
  }
`;

export const ContainerSublined = styled.div<SContainerProps>`
  position: absolute;

  h3 {
    font-size: ${(props) => `${props.font}px`};
    padding-bottom: 15px;
    border-bottom: 3px solid var(--color-background);
  }
`;

export const ContainerInput = styled.div`
  h2 {
    font-size: 18px;
  }

  input {
    width: 100%;
    padding: 10px;
    outline: 0;
    background: var(--color-background-primary);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export const ContainerTextarea = styled.div`
  h2 {
    font-size: 18px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    outline: 0;
    height: 25vh;
    background: var(--color-background-primary);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export const ContainerDefault = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;

  img {
    padding: 10px;
    margin: auto;
    width: 80px;
    height: 80px;
  }

  span {
    width: 100%;
    margin: 15px 0 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  a {
    color: var(--color-background-alternative);
    text-decoration: none;
    text-align: center;
    padding-top: 10px;
  }
`;

export const ContainerH1 = styled.h1<SContainerProps>`
  display: flex;
  padding-right: 4px;
  color: ${(props) => props.color || "white"};
  font-family: "Inter";
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  font-size: ${(props) => props.font ?? "35"}px;
`;

export const ContainerProgress = styled.div`
  width: 450px;
  text-align: center;
  padding: 1px;
  margin: 10px 0 10px 0;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  background-color: var(--color-background);
`;

export const ContainerNavMenu = styled.div`
  display: flex;
  color: black;
  position: absolute;
  top: 400px;
  width: 80vw;
  left: 9.4vw;
  right: 9.4vw;
  padding: 0;
  align-self: center;
  border-bottom: 0.3rem solid var(--color-background);

  nav {
    display: flex;
    padding: 0;
    margin: -1px;

    li {
      padding: 15px;
      margin: 0 10px;
    }

    ul:active,
    ul:focus,
    ul:hover {
      cursor: pointer;
      background-color: var(--color-background);
      color: white;
      transition: ease-in-out;
      transition-duration: 0.6s;
    }

    ul {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
  }
`;

export const ContainerSubMenu = styled.div`
  position: relative;
  text-align: justify;
  justify-content: space-evenly;
  top: 490px;
  display: flex;
  flex-wrap: wrap;
  left: 9.4vw;
  right: 9.4vw;
  width: 80%;
  height: 600px;
`;

export const ContainerMenuSuspenso = styled.div`
  position: absolute;
  right: 100px;
  top: 60px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  z-index: 1;
`;

export const ContainerCardProposta = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 313px;
  height: 269px;
  padding: 40px;
  margin: 20px;

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  .body {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: -80px;
  }
`;

export const ContainerSearch = styled.div<SContainerProps>`
  border: 1px solid
    var(${(props) => props.border || "--color-background-alternative"});
  border-radius: ${(props) => props.borderRadius || "30px"};
  padding: 0px 10px;
  display: flex;
  background: ${(props) => props.background};
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width || "70%"};
  height: 46px;

  input {
    border: 0px;
    width: 96%;
    border-radius: ${(props) => props.borderRadius || "30px"};
    outline: 0;
    height: 100%;
  }
`;

export const ContainerSelect = styled.select<SContainerProps>`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid ${(props) => props.background};
  border-radius: 10px;
  padding: 10px;
  width: ${(props) => props.width};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: right;
  padding-right: 30px;
  outline: none;
  color: var(--color-select);
`;

export const ContainerFilter = styled.div<SContainerProps>`
  width: 400px;
  border-radius: 6px;
  box-shadow: 0px 1px 10px black;
  border: 0;
  background: ${(props) => props.background || "rgba(0 ,0 ,0 ,0)"};
  display: flex;
  flex-direction: column;
  padding: 20px;

  .container-styled {
    margin: 10px 0 30px 30px;
  }

  h3 {
    color: ${(props) => props.colorT};
  }

  .content-list {
    margin-top: 20px;
    margin-left: 10px;
  }

  @media (max-width: 1300px) {
    position: absolute;
    z-index: 1;
  }
`;

export const ContainerChecklist = styled.div<SContainerProps>`
  color: ${(props) => props.color ?? "var(--color-background)"};
`;

export const InputCheckList = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

export const CardContainerDemandas = styled.div`
  width: 65%;
  height: 250px;
  padding: 15px;
  margin: auto 40px;
  margin-top: 30px;
  background: #ffffff;
  box-shadow: 1px 0px 11px -1px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (max-width: 1300px) {
    width: 90%;
  }

  .container {
    display: flex;
    flex-direction: row;
  }

  .photo {
    margin: 30px;
    width: 40%;
  }

  .content-header {
    padding: 20px;

    .content-title {
      display: flex;

      h3 {
        font-weight: 500;
      }
    }

    .subtitle-p {
      color: #000000;
      font-weight: 100;
      font-size: 16px;
    }
  }

  .content-demandas-body {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: -20px;
    padding: 5px;
    justify-content: space-between;

    p {
      width: 70%;
      text-align: justify;
    }

    .button-more {
      margin: 0;
      padding: 0;
      width: 150px;
    }
  }
`;

export const ContainerMenuRight = styled.div<SContainerProps>`
  position: relative;
  width: 300px;
  height: 100vh;
  color: white;
  background-color: var(--navbar-color-button);
  z-index: 1;

  .container-header-painel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    .content-logout {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      span {
        color: white;
        font-weight: 200;
      }
    }
  }

  .content-data {
    margin-top: 40px;
  }
`;

export const ContainerChipCard = styled.div`
  width: 100%;

  .content-body-painel {
    display: flex;
    width: 90%;
    margin: auto 15px;
    align-items: center;

    border-bottom: 1px solid rgba(234, 234, 234, 0.3);
    h2 {
      color: white;
      margin: 10px;
      font-size: 20px;
      padding: 0 10px;
      font-weight: 350;
    }
  }

  .content-options-painel {
    padding: 5px 55px;

    h5 {
      font-weight: 200;
    }

    .subitens-h5 {
      text-decoration: none;
      font-weight: 200;
      margin-left: 20px;
      padding: 2px;
    }

    .btn-popUp:hover,
    .subtitle-p:hover,
    .subitens-h5:hover {
      font-weight: 200;
      font-size: 21px;
      color: white;
      content: "*";
    }
  }

  .btn-popUp {
    font-weight: 200;
    font-size: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const CopyRight = styled.div`
  width: 360px;
  left: 10px;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  top: 940px;
  bottom: 0;
  display: flex;
  flex-direction: row;
  border-top: 0.2px solid var(--color-border);
  font-size: 17px;
  font-weight: 200;
`;

export const ButtonMenu = styled.button<SContainerProps>`
  outline: 0;
  position: absolute;
  z-index: 1;
  left: ${(props) => (props.active ? "380px" : "0px")};
  width: 72px;
  height: 45px;
  top: 20px;
  border: 0;
  background-color: var(--navbar-color-button);
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
`;

export const ContainerChipLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 315px;
  height: 82px;
  padding: 0 15px 0 0;
  align-items: center;
  background-color: white;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);

  .span-icon {
    height: 50px;
    padding: 10px;
    width: 60px;
    background-color: var(--color-background);
    border-radius: 5px;
  }

  .span-text {
    text-align: center;

    .subtitle {
      color: #000;
      font-size: 12px;
      font-weight: 200;
    }
  }
`;

export const ContainerPopup = styled.div<SContainerProps>`
  background: #ffffff;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: ease-in-out;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;

  .container-modal-popup {
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    z-index: 1;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin: 100px auto;
    background: white;

    .header-popup {
      width: 100%;
      height: 10%;
      padding: 20px;

      .btn-back {
        background: 0px;
        border: 0;
      }
    }

    .container-popup {
      width: 100%;
      height: 90%;
    }
  }
`;

export const ContentProfile = styled.div`
  .header-profile {
    height: 120px;
    width: 120px;
    margin: auto;

    img {
      width: 100%;
      border: 3px solid var(--color-background);
      border-radius: 100px;
      padding: 5px;
    }
  }

  .content-profile {
    padding: 20px;
    margin: 10px auto;
    border-top: 0.2px solid #cecece;
    width: 80%;
    text-align: center;

    .name-box h1 {
      line-height: 0.9;
      font-weight: 500;
    }

    .city-box,
    .charge-box {
      margin-top: 10px;
      font-weight: 100;
    }

    .job-box {
      margin-top: 40px;
      font-weight: 200;
    }

    .contact-box {
      font-weight: 500;
      margin-top: 0px;
    }

    .city-box {
      flex-direction: row;
      display: flex;
      margin: 10px auto;
      width: 76%;

      justify-content: space-between;
      align-items: center;

      span {
        margin-top: 10px;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const ContainerEixos = styled.div<SContainerProps>`
  background-image: url(${(props) => props.background});
`;