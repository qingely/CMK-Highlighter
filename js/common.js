/*
 * License:
 *
 * This software is distributed under the terms of the GNU General Public License v3.
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Copyright (c) 2017, Iván Ruvalcaba <mario.i.ruvalcaba[at]gmail[dot]com>
 */

function loadOptions() {  // eslint-disable-line no-unused-vars
  if ('undefined' !== typeof localStorage) {
    document.getElementById('textareaKeywords').value = localStorage.getItem('keywords');

    let showOccurrences = localStorage.getItem('showOccurrences');
    showOccurrences = 'true' === showOccurrences || null === showOccurrences;
    document.getElementById('checkboxShowOccurrences').checked = showOccurrences;

    let subtleHighlighting = localStorage.getItem('subtleHighlighting');
    subtleHighlighting = 'true' === subtleHighlighting && null !== subtleHighlighting;
    document.getElementById('checkboxSubtleHighlighting').checked = subtleHighlighting;
  }
}

function saveOptions() {  // eslint-disable-line no-unused-vars
  if ('undefined' !== typeof localStorage) {
    localStorage.setItem('keywords', document.getElementById('textareaKeywords').value);
    localStorage.setItem('showOccurrences', document.getElementById('checkboxShowOccurrences').checked);
    localStorage.setItem('subtleHighlighting', document.getElementById('checkboxSubtleHighlighting').checked);
  }
}
