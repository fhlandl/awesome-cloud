import Repository from './Repository';

export interface ISignUpRequest {
  loginId: string;
  password: string;
}

class UserRepository extends Repository {
  public async signup(dto: ISignUpRequest): Promise<void> {
    return this.client.post('/user/new', dto).then((res) => {
      console.log(res.data);
    });
  }
}

export default UserRepository;
