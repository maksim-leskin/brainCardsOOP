export class AppModel {
  constructor() {
    this.title = 'Категории';
    this.categories = [];
    this.cards = {};
  }


  async fetchCategories() {
    try {
      // запрос на сервер
      return this.categories;
    } catch (e) {
      this.categories = [];
      return this.categories
    }
  }

  async fetchCards(id) {
    try {
      // запрос на сервер id
      return this.cards;
    } catch (e) {
      this.cards = {};
      return {};
    }
  }

  async createCategory(data) {
    try {
      const newCategory = {};
      // запрос на сервер {data}
      this.categories.push(newCategory);
      return this.categories;
    } catch (e) {
      return this.categories
    }
  }

  async editCategory(id, data) {
    try {
      const category = this.categories.find(item => item.id === id);
      const editCategory = {};
      // запрос на сервер id, {data}
      Object.assign(category, editCategory);
      return this.categories
    } catch (e) {
      return this.categories
    }
  }


}