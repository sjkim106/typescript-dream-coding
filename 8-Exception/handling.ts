class NetworkClient {
  tryConnect(): void {
    throw new Error("no network!");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    this.userService.login();
  }
}
