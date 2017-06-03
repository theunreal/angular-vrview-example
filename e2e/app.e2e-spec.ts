import { VrviewPage } from './app.po';

describe('vrview App', () => {
  let page: VrviewPage;

  beforeEach(() => {
    page = new VrviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
