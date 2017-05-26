import { FormsTdPage } from './app.po';

describe('forms-td App', () => {
  let page: FormsTdPage;

  beforeEach(() => {
    page = new FormsTdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
