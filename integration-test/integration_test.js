const assert = require('assert');

Feature('Votes');

Scenario('Number of votes reflected in results', async ({ I }) => {
    await I.executeScript(() => {
        window.open('https://proyecto-ing-soft-3-result.herokuapp.com/', 'new window')
    })
    let votes = await I.grabTextFromAll('#result > span');

    await I.executeScript(() => {
        window.open('https://proyecto-ing-soft-3-vote.herokuapp.com/', 'new window')
    })
    I.amOnPage('https://proyecto-ing-soft-3-vote.herokuapp.com/')
    I.see('Argentina vs Brazil!')
    I.seeElement('button.a')
    I.seeElement('button.b')
    I.click('#a')
    I.see('(Tip: you can change your vote)')


    await I.executeScript(() => {
        window.open('https://proyecto-ing-soft-3-result.herokuapp.com/', 'new window')
    })
    let votesVerification = await I.grabTextFromAll('#result > span')


    assert.equal(votes[0], votesVerification[0])

});

