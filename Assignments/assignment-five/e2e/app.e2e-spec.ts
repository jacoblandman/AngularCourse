import { AssignmentFivePage } from './app.po';

describe('assignment-five App', () => {
  let page: AssignmentFivePage;

  beforeEach(() => {
    page = new AssignmentFivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
