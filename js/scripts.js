function ChipFactory() {
  this.chipTemplates = [];
  this.chipTemplates.push(new ChipTemplate(1,2,2, "Green"));
  this.chipTemplates.push(new ChipTemplate(2,1,1, "Blue"));
  this.chipTemplates.push(new ChipTemplate(1,2,1, "Red"));
  this.chipInventory = [];
  var greenInv = new InventoryItem("Green", 0);
  this.chipInventory.push(greenInv);
  this.copperInventory = 5000;
  this.plasticInventory = 5000;
  this.acidInventory = 5000;
}

// This
ChipFactory.prototype.createChip = function (chipType) {

};

ChipFactory.prototype.addToInventory = function(chipType, quantity) {
  //var newChip = new InventoryItem(chipType, quantity)
  if (chipType === this.chipInventory[0].chipType){
    this.chipInventory[0].quantity += quantity;
  }
  //this.chipInventory.push(newChip);
}

function ChipTemplate(copper, plastic, acid, chipType) {
  this.copper = copper,
  this.plastic = plastic,
  this.acid = acid,
  this.chipType = chipType
}

function InventoryItem(chipType, quantity) {
  this.chipType = chipType,
  this.quantity = quantity
}


// ChipFactory.prototype.getInventory = function (chipType) {
//   for (var i = 0, )
// };
var myFactory = new ChipFactory();


function Copper() {

}

function Plastic() {

}

function Acid() {

}
