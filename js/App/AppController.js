export class AppController {
  constructor(model) {
    this.model = model;
  }

  async handleGetCategories() {
    this.model.title = 'Категории';
    return {
      title: this.model.title,
      categories: await this.model.fetchCategories()
    }
  }

  async handleGetCards(id) {
    const category = await this.model.fetchCards(id)
    this.model.title = category.title;
    return category;
  }

  async handleCreateCategory(data) {
    this.model.title = 'Категории';
    return {
      title: this.model.title,
      categories: await this.model.createCategory(data)
    }
  }


  async handleEditCategory(id, data) {
    return {
      title: this.model.title,
      categories: await this.model.editCategory(id, data)
    }
  }

}