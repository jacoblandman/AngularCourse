import { AssignmentThreePage } from './app.po';

describe('assignment-three App', () => {
  let page: AssignmentThreePage;

  beforeEach(() => {
    page = new AssignmentThreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
