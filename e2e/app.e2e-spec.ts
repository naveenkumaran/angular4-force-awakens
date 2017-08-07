import { Angular4ForceAwakensPage } from './app.po';

describe('angular4-force-awakens App', () => {
  let page: Angular4ForceAwakensPage;

  beforeEach(() => {
    page = new Angular4ForceAwakensPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
