import { AssignmentTwoPage } from './app.po';

describe('assignment-two App', () => {
  let page: AssignmentTwoPage;

  beforeEach(() => {
    page = new AssignmentTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
