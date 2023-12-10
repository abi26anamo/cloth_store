import React from "react";
import Container from "../components/Container";
import FormWrapper from "../components/FormWrapper";
import LoginForm from "./LoginForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
const Login = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <FormWrapper>
        <LoginForm currentUser = {currentUser} />
      </FormWrapper>
    </Container>
  );
};

export default Login;
