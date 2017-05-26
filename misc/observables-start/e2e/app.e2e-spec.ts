import { ObservablesStartPage } from './app.po';

describe('observables-start App', () => {
  let page: ObservablesStartPage;

  beforeEach(() => {
    page = new ObservablesStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
