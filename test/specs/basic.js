describe('Check page', () => {
  it('should have the right title', () => {
    browser.url('http://localhost:3000/webpack-react-redux-saga-router-stylus');
    expect(browser)
      .toHaveTitle('This is title');
  });

  it('click on "About us" link going to redirect', () => {
    const link = $('=About us');

    link.click();
    expect(browser).toHaveUrlContaining('/about');
  });

  it('click on "Click me!" work', () => {
    const button = $('button=Click me!');
    const counter = $('#counter');

    expect(counter).toHaveText('0');
    button.click();
    expect(counter).toHaveText('1');
  });
});
