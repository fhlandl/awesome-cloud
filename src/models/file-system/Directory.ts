import File from './File';
import Node from './Node';

class Directory extends Node {
  private children: (Directory | File)[];

  constructor(name: string) {
    super(name);
    this.children = [];
  }

  public add(child: Directory | File) {
    this.children.push(child);
  }
}

export default Directory;
