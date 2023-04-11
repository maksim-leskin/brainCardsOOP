export class AppView {
  constructor({header, app}, {headerView}, controller) {
    this.header = header;
    this.app = app;

    this.headerView = headerView;

    this.controller = controller;
    this.bindListeners();
  }

  async onCategoryClick() {
    const data = await this.controller.handleGetCategories();
    this.headerView.updateTitle(data.title);
  }

  async onCardsClick() {
    const data = await this.controller.handleGetCards();
    this.headerView.updateTitle(data.title);
  }

   onCreateClick = async () => {
    const data = await this.controller.handleCreateCategory();
    this.headerView.updateTitle(data.title);
  }

  async onEditClick() {
    const data = await this.controller.handleEditCategory();
    this.headerView.updateTitle(data.title);
  }

  bindListeners() {
    this.headerView.headerBtnElem.addEventListener('click', this.onCreateClick);
  }

  async render() {
    this.headerView.render(this.header);
    this.onCategoryClick()
  }
}