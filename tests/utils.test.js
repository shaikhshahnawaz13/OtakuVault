const { escH, timeAgo, goalPercent, safeParse, clamp, starsDisplay, isValidUsername, truncate } = require('../src/utils');

describe('escH()', () => {
  test('escapes ampersands',            () => expect(escH('Tom & Jerry')).toBe('Tom &amp; Jerry'));
  test('escapes < and >',               () => expect(escH('<script>')).toBe('&lt;script&gt;'));
  test('escapes double quotes',          () => expect(escH('"hello"')).toBe('&quot;hello&quot;'));
  test('handles null',                   () => expect(escH(null)).toBe(''));
  test('handles undefined',              () => expect(escH(undefined)).toBe(''));
  test('coerces numbers',                () => expect(escH(42)).toBe('42'));
  test('safe strings unchanged',         () => expect(escH('Hello')).toBe('Hello'));
  test('empty string',                   () => expect(escH('')).toBe(''));
});

describe('timeAgo()', () => {
  const now = Date.now();
  test('just now < 60s',    () => expect(timeAgo(new Date(now - 30000))).toBe('just now'));
  test('minutes ago',       () => expect(timeAgo(new Date(now - 5 * 60000))).toBe('5m ago'));
  test('hours ago',         () => expect(timeAgo(new Date(now - 2 * 3600000))).toBe('2h ago'));
  test('days ago',          () => expect(timeAgo(new Date(now - 86400000))).toBe('1d ago'));
  test('ISO string input',  () => expect(timeAgo(new Date(now - 600000).toISOString())).toBe('10m ago'));
});

describe('goalPercent()', () => {
  test('null goal returns 0',       () => expect(goalPercent(10, null)).toBe(0));
  test('zero goal returns 0',       () => expect(goalPercent(10, 0)).toBe(0));
  test('50%',                       () => expect(goalPercent(25, 50)).toBe(50));
  test('clamps at 100',             () => expect(goalPercent(999, 10)).toBe(100));
  test('exactly at goal = 100',     () => expect(goalPercent(52, 52)).toBe(100));
  test('0 completed = 0',           () => expect(goalPercent(0, 50)).toBe(0));
});

describe('safeParse()', () => {
  test('already an array',     () => { const a = [1,2]; expect(safeParse(a)).toBe(a); });
  test('valid JSON string',    () => expect(safeParse('["Action"]')).toEqual(['Action']));
  test('null → fallback',      () => expect(safeParse(null)).toEqual([]));
  test('bad JSON → fallback',  () => expect(safeParse('{bad}', [])).toEqual([]));
  test('object passthrough',   () => { const o = {k:'v'}; expect(safeParse(o)).toBe(o); });
});

describe('clamp()', () => {
  test('within range',  () => expect(clamp(3, 1, 5)).toBe(3));
  test('below min',     () => expect(clamp(-5, 0, 10)).toBe(0));
  test('above max',     () => expect(clamp(15, 0, 10)).toBe(10));
  test('at min',        () => expect(clamp(0, 0, 5)).toBe(0));
  test('at max',        () => expect(clamp(5, 0, 5)).toBe(5));
});

describe('starsDisplay()', () => {
  test('0 stars',         () => expect(starsDisplay(0)).toBe('☆☆☆☆☆'));
  test('5 stars',         () => expect(starsDisplay(5)).toBe('★★★★★'));
  test('3 stars',         () => expect(starsDisplay(3)).toBe('★★★☆☆'));
  test('null → 0 stars',  () => expect(starsDisplay(null)).toBe('☆☆☆☆☆'));
  test('clamps above 5',  () => expect(starsDisplay(99)).toBe('★★★★★'));
  test('negative → 0',    () => expect(starsDisplay(-1)).toBe('☆☆☆☆☆'));
});

describe('isValidUsername()', () => {
  test('alphanumeric ok',        () => expect(isValidUsername('naruto123')).toBe(true));
  test('underscore ok',          () => expect(isValidUsername('otaku_fan')).toBe(true));
  test('space rejected',         () => expect(isValidUsername('otaku fan')).toBe(false));
  test('special chars rejected', () => expect(isValidUsername('fan@boy')).toBe(false));
  test('empty rejected',         () => expect(isValidUsername('')).toBe(false));
});

describe('truncate()', () => {
  test('short string unchanged',  () => expect(truncate('Naruto', 10)).toBe('Naruto'));
  test('truncates long string',   () => expect(truncate('Attack on Titan', 6)).toBe('Attack…'));
  test('empty string',            () => expect(truncate('', 10)).toBe(''));
  test('null → empty',            () => expect(truncate(null, 10)).toBe(''));
  test('exact length unchanged',  () => expect(truncate('Hello', 5)).toBe('Hello'));
});
