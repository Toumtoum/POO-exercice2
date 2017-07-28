function warrior (name,attack,defense,health){

  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.health = health;

  this.combat = function (warriorX){

      warriorX.health -= this.attack;
      alert(this.name+" attack "+warriorX.name);
      alert(warriorX.name+" health left "+warriorX.health);

  };
}

function magician (name,attack,defense,health,mana){

  this.name = name;
  this.attack = attack;
  this.defense = defense;
  this.health = health;
  this.mana = mana;

  this.combat = function (warriorX){

      warriorX.health -= this.attack;
      alert(this.name+" attack "+warriorX.name);
      alert(warriorX.name+" health left "+warriorX.health);
  };

  this.treatement = function (){

    if (this.mana >= 10){
      this.mana -= 10;
      this.health +=10;
      alert(this.name+" trying to heal his wound");
      alert(this.name+" health left "+this.health);
    }

    else {
      alert("You're screwed "+this.name);
    }
  };
}

var bob = new warrior ("bob",10,10,100);
var patrick = new warrior ("patrick",20,20,100);
var captainCrab = new magician ("Captain Crab",25,30,150,10);


patrick.combat(captainCrab);
bob.combat(captainCrab);
captainCrab.treatement();
captainCrab.combat(bob);
