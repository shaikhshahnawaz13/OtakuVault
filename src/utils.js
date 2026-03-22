/**
 * utils.js — Pure utility functions extracted for unit testing.
 * script.js defines these as globals for the browser.
 * This file is ONLY used by the Jest test suite.
 */

function escH(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function timeAgo(ts) {
  const s = Math.floor((Date.now() - new Date(ts)) / 1000);
  if (s < 60)    return 'just now';
  if (s < 3600)  return Math.floor(s / 60) + 'm ago';
  if (s < 86400) return Math.floor(s / 3600) + 'h ago';
  return Math.floor(s / 86400) + 'd ago';
}

function goalPercent(completed, goal) {
  if (!goal || goal <= 0) return 0;
  return Math.min(100, Math.round((completed / goal) * 100));
}

function safeParse(val, fallback = []) {
  if (!val) return fallback;
  if (Array.isArray(val)) return val;
  if (typeof val === 'object') return val;
  try { return JSON.parse(val) || fallback; } catch { return fallback; }
}

function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function starsDisplay(rating) {
  const r = clamp(Math.round(rating || 0), 0, 5);
  return '★'.repeat(r) + '☆'.repeat(5 - r);
}

function isValidUsername(username) {
  return /^[a-zA-Z0-9_]+$/.test(username);
}

function truncate(str, maxLen) {
  if (!str) return '';
  return str.length > maxLen ? str.slice(0, maxLen) + '…' : str;
}

module.exports = { escH, timeAgo, goalPercent, safeParse, clamp, starsDisplay, isValidUsername, truncate };
