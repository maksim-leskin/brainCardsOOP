import {AppModel} from "./App/AppModel.js";
import {AppController} from "./App/AppController.js";
import {AppView} from "./App/AppView.js";
import {HeaderModel} from "./Header/HeaderModel.js";
import {HeaderController} from "./Header/HeaderController.js";
import {HeaderView} from "./Header/HeaderView.js";


const init = () => {
  // header
  const headerModel = new HeaderModel()
  const headerController = new HeaderController(headerModel)
  const headerView = new HeaderView(headerController);

  // app
  const appModel = new AppModel();
  const appController = new AppController(appModel);
  const appView = new AppView(
    {
      header: document.querySelector('.header'),
      app: document.querySelector('#app'),
    },
    {
      headerView
    },
    appController,
  );

  appView.render();
};

init();