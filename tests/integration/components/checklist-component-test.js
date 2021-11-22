import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render, pauseTest } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { ChecklistComponentDummy1, ChecklistComponentDummy2 } from '../test-support-json';
import $ from 'jquery';

module('Integration | Component | checklist-component', function (hooks) {
  setupRenderingTest(hooks);

  test('Empty list test', async function (assert) {
    await render(hbs`<ChecklistComponent />`);

    assert.equal(findAll('.flex-container').length, 0, 'No data rows rendered.');
    assert.equal($('button:disabled').length, 1, 'Download button is disabled.');
    assert.equal($('.selected-files-class').text().includes('None selected'), 1, 'None selected displayed correctly.');
  });

  test('List test - 5 entries and one selected', async function (assert) {
    const filesImport = ChecklistComponentDummy1();
    this.set('files', filesImport);

    await render(hbs`<ChecklistComponent @files={{this.files}} />`);

    assert.equal(findAll('.flex-container').length, 5, 'All five data rows rendered.');
    assert.equal(findAll('.selectable-row').length, 2, 'Two selectable rows rendered.')
    assert.equal(findAll('.selected-row').length, 1, 'One selected row rendered.')
    assert.equal($('button:disabled').length, 0, 'Download button is enabled.');
    assert.equal($('.selected-files-class').text().includes('1'), 1, 'Selected 1 displayed correctly.');
  });
});
