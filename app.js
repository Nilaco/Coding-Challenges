var familyTree = [];

function Person(name)
{
	this.name = name;
	this.parent = null;
	this.children = [];
	this.siblings = [];
	
	this.addChild = function(name) 
	{
		var child = new Person(name)
		child.parent = this
		this.children.push(child);
	};
	
	this.init();
};

Person.prototype.init = function(){
	familyTree.push(this)
};

//Driver test
console.log(familyTree);
var nancy = new Person("Nancy");
nancy.addChild("Adam")
console.log(familyTree);
