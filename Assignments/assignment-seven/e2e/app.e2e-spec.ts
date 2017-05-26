import { AssignmentSevenPage } from './app.po';

describe('assignment-seven App', () => {
  let page: AssignmentSevenPage;

  beforeEach(() => {
    page = new AssignmentSevenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
