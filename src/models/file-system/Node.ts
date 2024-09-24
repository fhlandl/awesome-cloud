class Node {
  private name: string;

  private createdAt: Date;

  constructor(name: string) {
    this.name = name;
    this.createdAt = new Date();
  }
}

export default Node;
