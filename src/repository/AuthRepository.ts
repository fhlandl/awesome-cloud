import Repository from './Repository';

class AuthRepository extends Repository {
  public async checkAuth(): Promise<void> {
    return this.client.get('/auth', { withCredentials: true }).then((res) => {
      console.log(res.data);
    });
  }
}

export default AuthRepository;
