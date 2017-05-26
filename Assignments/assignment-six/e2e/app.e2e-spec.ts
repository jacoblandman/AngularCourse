import { AssignmentSixPage } from './app.po';

describe('assignment-six App', () => {
  let page: AssignmentSixPage;

  beforeEach(() => {
    page = new AssignmentSixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
