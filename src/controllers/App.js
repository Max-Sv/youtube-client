import AppView from '../views/AppView';
import getResponseUrl from '../models/getResponseUrl';

export default class App {
  constructor() {
    this.apiKey = 'AIzaSyDDOiiewv2iadjJnU6dioJUXFW27uqVTKM';
  }

  start() {
    getResponseUrl.key = this.apiKey;
    const view = new AppView();
    view.render();
  }
}
