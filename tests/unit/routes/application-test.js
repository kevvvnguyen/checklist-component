import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | application', function (hooks) {
  setupTest(hooks);

  test('The application route exists', function (assert) {
    let route = this.owner.lookup('route:application');
    assert.ok(route);
  });
});
