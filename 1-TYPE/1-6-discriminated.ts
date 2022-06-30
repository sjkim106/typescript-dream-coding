{
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "failed";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, pw: string): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  function printLoginState(state: LoginState): void {
    if (state.result === "success") {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}
