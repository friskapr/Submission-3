/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

const restoKosong = 'Tidak ada resto untuk ditampilkan';
Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('.list');
  I.see(restoKosong, '.list');
});

Scenario('liking one resto', async ({ I }) => {
  I.see(restoKosong, '.list');

  I.amOnPage('/');
  I.seeElement('.restaurant-item_link');
  I.wait();
  const firstResto = locate('.restaurant-item_link').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.seeElement('#likeButton');
  I.wait();
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.list');
  const likedRestoTitle = await I.grabTextFrom('.restaurant-item_link');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
