import { AssignmentOnePage } from './app.po';

describe('assignment-one App', () => {
  let page: AssignmentOnePage;

  beforeEach(() => {
    page = new AssignmentOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
