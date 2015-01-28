(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#sortGrid', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture');
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.sortGrid(), this.elems, 'should be chainable');
  });

  test('sets classes correctly', function() {
    expect(2);
    strictEqual(this.elems.sortGrid().children().is('.sortGrid_item'), true, 'should have class sortGrid_item');
    strictEqual(this.elems.sortGrid({css3:true, animate:false, filter:this.elems.children().eq(0)}).children().is('.sortGrid_hidden'), true, 'should have class sortGrid_hidden');
  });

}(jQuery));
