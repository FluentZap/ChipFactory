function ChipFactory() {
  this.chipTemplates = [];
  this.chipTemplates.push(new ChipTemplate(1,2,2, "Green"));
  this.chipTemplates.push(new ChipTemplate(2,1,1, "Blue"));
  this.chipTemplates.push(new ChipTemplate(1,2,1, "Red"));
  this.chipInventory = [];
  var greenInv = new InventoryItem("Green", 0);
  this.chipInventory.push(greenInv);
  var redInv = new InventoryItem("Red", 0);
  this.chipInventory.push(redInv);
  var blueInv = new InventoryItem("Blue", 0);
  this.chipInventory.push(blueInv);
  this.copperInventory = 5000;
  this.plasticInventory = 5000;
  this.acidInventory = 5000;
}

// This
ChipFactory.prototype.createChip = function (chipType) {

};

ChipFactory.prototype.addToInventory = function(chipType, quantity) {
  //var newChip = new InventoryItem(chipType, quantity)
  if (chipType === this.chipInventory[0].chipType) {
    this.copperInventory -= quantity
    this.plasticInventory -= (quantity*2)
    this.acidInventory -= (quantity*2)
    this.chipInventory[0].quantity += quantity;
  } else if (chipType === this.chipInventory[1].chipType) {
    this.copperInventory -= (quantity*2)
    this.plasticInventory -= quantity
    this.acidInventory -= quantity
    this.chipInventory[1].quantity += quantity;
  } else if (chipType === this.chipInventory[2].chipType){
    this.copperInventory -= quantity
    this.plasticInventory -= (quantity*2)
    this.acidInventory -= quantity
    this.chipInventory[2].quantity += quantity;
  } else {
    alert("WTF DUDE?!")
  }
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

var myFactory = new ChipFactory();


function Copper() {

}

function Plastic() {

}

function Acid() {

}
