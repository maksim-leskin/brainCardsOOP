
export class HeaderModel {
  constructor (title) {
    this.title = title;
  }

  setTitle (title) {
    this.title = title;
    return this.title
  }
  
}