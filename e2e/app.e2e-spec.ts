import { LibroRecetasPage } from './app.po';

describe('libro-recetas App', () => {
  let page: LibroRecetasPage;

  beforeEach(() => {
    page = new LibroRecetasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
