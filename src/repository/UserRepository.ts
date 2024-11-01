import Repository from './Repository';

export interface ISignUpRequest {
  loginId: string;
  password: string;
}

export interface ILoginRequest {
  loginId: string;
  password: string;
}

class UserRepository extends Repository {
  public async signup(dto: ISignUpRequest): Promise<void> {
    return this.client.post('/user/new', dto).then((res) => {
      console.log(res.data);
    });
  }

  public async login(dto: ILoginRequest): Promise<void> {
    return this.client
      .post('/user/login', dto, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
  }

  public async logout(): Promise<void> {
    return this.client
      .post('/user/logout', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
  }
}

export default UserRepository;
