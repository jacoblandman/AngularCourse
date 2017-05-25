import { AssignmentFourPage } from './app.po';

describe('assignment-four App', () => {
  let page: AssignmentFourPage;

  beforeEach(() => {
    page = new AssignmentFourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
