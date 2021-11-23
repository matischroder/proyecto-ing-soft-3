const assert = require('assert');

Feature('Votes');

Scenario('Votes reflected in results', async ({ I }) => {
    I.amOnPage('https://proyecto-ing-soft-3-result.herokuapp.com/')
    I.see('ARG')
    I.see('BRZ')
    let votes1 = await I.grabTextFrom('#result > span')
    console.log("We actually have " + votes1)

    await I.executeScript(() => {
        window.open('https://proyecto-ing-soft-3-vote.herokuapp.com/', 'new window')
    })
    I.amOnPage('https://proyecto-ing-soft-3-vote.herokuapp.com/')
    I.see('Argentina vs Brazil!')
    I.seeElement('button.a')
    I.seeElement('button.b')
    I.click('#a')
    I.see('(Tip: you can change your vote)')

    I.switchTo();
    I.amOnPage('https://proyecto-ing-soft-3-result.herokuapp.com/')
    let votes2 = await I.grabTextFrom('#result > span')
    console.log("Now we have " + votes2)

    I.switchToNextTab();
    I.clearCookie();
    I.click('#b');

    I.switchTo();
    I.amOnPage('https://proyecto-ing-soft-3-result.herokuapp.com/')
    let votes3 = await I.grabTextFrom('#result > span')
    console.log("Finally we have " + votes3)

    votes1 = parseInt(votes1.replace(/\D/g, ""));
    votes2 = parseInt(votes2.replace(/\D/g, ""));
    votes3 = parseInt(votes3.replace(/\D/g, ""));

    assert.equal(votes1,votes2-1,votes2-2)
});
