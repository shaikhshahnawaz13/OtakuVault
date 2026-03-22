const fs   = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
document.documentElement.innerHTML = html;

describe('Auth screen', () => {
  test('auth-screen exists',    () => expect(document.getElementById('auth-screen')).not.toBeNull());
  test('login email field',     () => expect(document.getElementById('l-email')).not.toBeNull());
  test('login password field',  () => expect(document.getElementById('l-pass')).not.toBeNull());
  test('signup username field', () => expect(document.getElementById('s-user')).not.toBeNull());
  test('signup email field',    () => expect(document.getElementById('s-email')).not.toBeNull());
  test('signup password field', () => expect(document.getElementById('s-pass')).not.toBeNull());
  test('auth error element',    () => expect(document.getElementById('auth-err')).not.toBeNull());
  test('2 auth tabs',           () => expect(document.querySelectorAll('.auth-tab').length).toBe(2));
});

describe('App shell', () => {
  test('#app exists',              () => expect(document.getElementById('app')).not.toBeNull());
  test('header exists',            () => expect(document.querySelector('header')).not.toBeNull());
  test('qs search input',          () => expect(document.getElementById('qs')).not.toBeNull());
  test('user avatar',              () => expect(document.getElementById('user-av')).not.toBeNull());
  test('admin btn hidden default', () => expect(document.getElementById('admin-nav-btn').style.display).toBe('none'));
});

describe('Pages exist', () => {
  ['trending','search','threads','mylist','profile','admin'].forEach(p => {
    test(`page-${p}`, () => expect(document.getElementById(`page-${p}`)).not.toBeNull());
  });
  test('trending active by default', () => expect(document.getElementById('page-trending').classList.contains('active')).toBe(true));
});

describe('Trending page', () => {
  test('trending-grid',   () => expect(document.getElementById('trending-grid')).not.toBeNull());
  test('stat-members',    () => expect(document.getElementById('stat-members')).not.toBeNull());
  test('stat-tracked',    () => expect(document.getElementById('stat-tracked')).not.toBeNull());
  test('stat-reviews',    () => expect(document.getElementById('stat-reviews')).not.toBeNull());
  test('stat-threads',    () => expect(document.getElementById('stat-threads')).not.toBeNull());
});

describe('Search page', () => {
  test('search-q input',          () => expect(document.getElementById('search-q')).not.toBeNull());
  test('suggestion-chips',        () => expect(document.getElementById('suggestion-chips')).not.toBeNull());
  test('search-results-wrap',     () => expect(document.getElementById('search-results-wrap')).not.toBeNull());
  test('search-popular-grid',     () => expect(document.getElementById('search-popular-grid')).not.toBeNull());
});

describe('Threads page', () => {
  test('threads-container',  () => expect(document.getElementById('threads-container')).not.toBeNull());
  test('threads-featured',   () => expect(document.getElementById('threads-featured')).not.toBeNull());
  test('thread-detail',      () => expect(document.getElementById('thread-detail')).not.toBeNull());
  test('thread-overlay',     () => expect(document.getElementById('thread-overlay')).not.toBeNull());
  test('t-title field',      () => expect(document.getElementById('t-title')).not.toBeNull());
  test('t-body field',       () => expect(document.getElementById('t-body')).not.toBeNull());
});

describe('My List page', () => {
  test('mylist-container',   () => expect(document.getElementById('mylist-container')).not.toBeNull());
  test('4 filter tabs',      () => expect(document.querySelectorAll('#page-mylist .tab-btn').length).toBe(4));
});

describe('Anime modal', () => {
  test('anime-overlay',       () => expect(document.getElementById('anime-overlay')).not.toBeNull());
  test('m-img',               () => expect(document.getElementById('m-img')).not.toBeNull());
  test('m-title',             () => expect(document.getElementById('m-title')).not.toBeNull());
  test('m-synopsis',          () => expect(document.getElementById('m-synopsis')).not.toBeNull());
  test('status btn watching', () => expect(document.getElementById('sb-w')).not.toBeNull());
  test('status btn complete', () => expect(document.getElementById('sb-c')).not.toBeNull());
  test('status btn plan',     () => expect(document.getElementById('sb-p')).not.toBeNull());
  test('5 star elements',     () => expect(document.querySelectorAll('#star-row .star').length).toBe(5));
  test('m-review textarea',   () => expect(document.getElementById('m-review')).not.toBeNull());
  test('anon-tog',            () => expect(document.getElementById('anon-tog')).not.toBeNull());
  test('community-reviews',   () => expect(document.getElementById('community-reviews')).not.toBeNull());
});

describe('Profile page', () => {
  test('profile-banner',          () => expect(document.getElementById('profile-banner')).not.toBeNull());
  test('profile-username-display',() => expect(document.getElementById('profile-username-display')).not.toBeNull());
  test('ps-tracked',              () => expect(document.getElementById('ps-tracked')).not.toBeNull());
  test('goal-bar',                () => expect(document.getElementById('goal-bar')).not.toBeNull());
  test('pinned-anime-grid',       () => expect(document.getElementById('pinned-anime-grid')).not.toBeNull());
  test('profile-bio-input',       () => expect(document.getElementById('profile-bio-input')).not.toBeNull());
  test('genre-grid',              () => expect(document.getElementById('genre-grid')).not.toBeNull());
  test('achievements-list',       () => expect(document.getElementById('achievements-list')).not.toBeNull());
});

describe('Toasts', () => {
  test('main toast',       () => expect(document.getElementById('toast')).not.toBeNull());
  test('ach-toast',        () => expect(document.getElementById('ach-toast')).not.toBeNull());
  test('ach-toast-title',  () => expect(document.getElementById('ach-toast-title')).not.toBeNull());
});

describe('Script & CSS links', () => {
  test('style.css linked',    () => expect([...document.querySelectorAll('link[rel="stylesheet"]')].some(l => l.href.includes('style.css'))).toBe(true));
  test('script.js loaded',    () => expect([...document.querySelectorAll('script[src]')].some(s => s.src.includes('script.js'))).toBe(true));
  test('supabase loaded',     () => expect([...document.querySelectorAll('script[src]')].some(s => s.src.includes('supabase'))).toBe(true));
  test('google fonts linked', () => expect([...document.querySelectorAll('link[href]')].some(l => l.href.includes('fonts.googleapis'))).toBe(true));
});
