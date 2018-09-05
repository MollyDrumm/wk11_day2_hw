const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Jurasic Park", 100);
  });

  it('should have a name', function(){;
    const actual = park.name;
    assert.strictEqual(actual, "Jurasic Park");
  });

  it('should have a ticket price', function(){;
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function(){;
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){;
    const actual = park.dinosaurs.push("t-rex");
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){;
    park.dinosaurs.push("diplodopus");
    park.removeDinosaur();
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
