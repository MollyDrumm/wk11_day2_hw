const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.removeDinosaur = function () {
  this.dinosaurs = this.dinosaurs.pop();
};

module.exports = Park;
