const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Jurasic Park", 100);
  });

  it('should have a name');
    const actual = park.name;
    assert.strictEqual(actual, "Jurasic Park");

  it('should have a ticket price');
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);

  it('should have a collection of dinosaurs');
    const actual = park.dinosaurs;
    assert.strictEqual(actual, []);

  it('should be able to add a dinosaur to its collection');
    const actual = park.dinosaurs.push("t-rex");
    assert.strictEqual(actual, 1);

  it('should be able to remove a dinosaur from its collection');
    park.dinosaurs.push("diplodopus");
    const actual = park.dinosaurs.removeDinosaur;
    assert.strictEqual(actual, 0);

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
