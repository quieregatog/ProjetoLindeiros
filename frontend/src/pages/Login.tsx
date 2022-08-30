/* eslint-disable no-return-assign */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import React, { useEffect } from "react";
import { authLoginThunk } from "app/reducers/user/thunk";
import { AppDispatch } from "app/store";
import { LoadingDefault } from "components/Loading";
import NavBar from "components/NavBar";
import { IStateData } from "interfaces/components.interface";
import { IUserLogin } from "interfaces/data/user.interface";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "util/form/useForm";
import { useNavigate } from "react-router";
import { addUser, lock } from "../assets/icons";
// import ButtonCard from "../components/Buttons/ButtonCard";
import CardDefault from "../components/Card/CardDefault";
import WelcomeLogin from "../components/Card/Welcome";
import InputStyle from "../components/Inputs";
import SublinedText from "../components/Label/Sublined";
import { ContainerPage } from "./styled";

function Login() {
  const { users } = useSelector((state: IStateData) => state);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // const toastId = useRef();
  const initialState: IUserLogin = {
    username: "",
    password: "",
  };

  const { onChange, values } = useForm(initialState);
  const handleSaveData = (data: any) => {
    dispatch(
      authLoginThunk({
        ...data,
      }),
    );
  };

  useEffect(() => {
    if (users.tryLogin) {
      if (users.error !== "") {
        toast(users.error, {
          autoClose: 3000,
          type: "error",
        });
      } else if (users.message !== "") {
        navigate("/painel");
      }
    }
  }, [navigate, users.error, users.message, users.tryLogin]);

  return (
    <>
      <NavBar />
      <LoadingDefault active={users.loading} />
      <ContainerPage style={{ display: "flex", height: "100vh" }}>
        <WelcomeLogin />

        <div className="login">
          <SublinedText size="32" title="Login" />

          <form
            className="form-login"
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveData(values);
            }}
          >
            <InputStyle
              title="Email"
              name="username"
              type="email"
              onChange={onChange}
              required
              placeholder="Digite o seu e-mail"
            />
            <span> </span>
            <InputStyle
              onChange={onChange}
              name="password"
              title="Senha"
              type="password"
              required
              placeholder="Digite a sua senha"
            />

            <button className="btn-send">Enviar dados</button>
          </form>

          <div className="container-footer">
            <CardDefault
              width="224px"
              height="154px"
              title="Esqueci minha senha"
              icon={lock}
              url=" "
            />
            <CardDefault
              width="224px"
              height="154px"
              title="Não possui cadastro?"
              icon={addUser}
              url=" "
            />
          </div>
        </div>
        <ToastContainer />
      </ContainerPage>
    </>
  );
}

export default Login;