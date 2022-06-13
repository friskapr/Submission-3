/* eslint-disable no-undef */
/* eslint linebreak-style: ["error", "windows"] */
const assert = require('assert');

Feature('Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const restoKosong = 'Tidak ada resto untuk ditampilkan';
Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('.list');
  I.see(restoKosong, '.list');
});

Scenario('unliking one resto', async ({ I }) => {
  I.dontSeeElement('.restaurant-item_link');
  I.amOnPage('/');

  I.seeElement('.restaurant-item_link');

  // I. wait();
  const firstResto = locate('.restaurant-item_link').first();
  const firstRestoTitles = await I.grabTextFrom(firstResto);
  I.wait();
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.list');

  const unlikedRestoTitle = await I.grabTextFrom('.restaurant-item_link');
  assert.strictEqual(firstRestoTitles, unlikedRestoTitle);

  I.seeElement('.restaurant-item_link');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant-item_link');
});
