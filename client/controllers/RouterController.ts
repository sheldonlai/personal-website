import createBrowserHistory from 'history/createBrowserHistory';


export class RouterController {
  static history = createBrowserHistory();

  static redirect(url: string) {
    RouterController.history.push(url);
  }
}