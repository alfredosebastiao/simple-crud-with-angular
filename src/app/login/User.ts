export class User {
  private name: string;
  private email: string;
  userName: string;
  senha: string;
  setName(name) {
    this.name = name;
  }
  setEmail(email) {
    this.email = email;
  }
  setUserName(userName) {
    this.userName = userName;
  }
  setSenha(senha) {
    this.senha = senha;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getUser() {
    return this.userName;
  }
  getSenha() {
    return this.senha;
  }
}
