Feature('voter');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://proyecto-ing-soft-3-vote.herokuapp.com/')
    I.seeElement('Argentina vs Brazil!')
    I.seeElement('button.a')
    I.seeElement('button.b')
    I.click('Argentina')
    I.see('(Tip: you can change your vote)')
});
