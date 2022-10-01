/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";
import { Eye, EyeSlash } from "phosphor-react";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import logoImg from "../assets/logo.svg";

import { Button, Input } from "../components/shared/Form";

import {
  AuthContent,
  Box,
  ButtonContainer,
  Container,
  InputContainer,
} from "../styles/pages/auth";

const Auth: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleButton = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => setIsLoading(true), 5000);
    });

  return (
    <>
      <Head>
        <title>Login - RentX</title>
      </Head>

      <Container>
        <AuthContent>
          <Image src={logoImg} width={48} height={48} alt="" />
          <Box>
            <h1>Acesse sua conta</h1>

            <InputContainer>
              <Input type="text" id="email" label="E-mail" />
            </InputContainer>

            <InputContainer>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                label="Password"
                icon={
                  showPassword ? (
                    <Eye size={24} color="#A1A1A1" />
                  ) : (
                    <EyeSlash size={24} color="#A1A1A1" />
                  )
                }
                onIconClick={() => setShowPassword(!showPassword)}
              />
            </InputContainer>
            <a href="/">Esqueci minha senha</a>

            <ButtonContainer>
              <Button
                loading={true}
                loadingMessage="Entrando..."
                onClick={handleButton}
              >
                Entrar
              </Button>
            </ButtonContainer>

            <p>
              Não possui uma conta? <br />
              <a href="/">Cadastre-se já!</a>
            </p>
          </Box>
        </AuthContent>
      </Container>
    </>
  );
};

export default Auth;
