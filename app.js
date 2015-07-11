//Hold family members
var familyTree = [];

function Person(name)
{
	this.name = name;
	this.parent = null;
	this.children = [];
	this.siblings = [];
	this.grandparent = null;
	
	this.addChild = function(name) {
		var child = new Person(name);
		child.parent = this;
			if (child.parent.parent != null) {
				child.grandparent = child.parent.parent;
			}
		this.children.push(child);
	};
	this.init();
};

//Add new people to family tree
Person.prototype.init = function(){
	familyTree.push(this)
};

var findPerson = function(name){
	for (var i = 0; i < familyTree.length; i++) {
		if (familyTree[i].name === name){
//			console.log(familyTree[i]);
			return familyTree[i];
		}
	}
	console.log("Person not found");
}

//Add family members
var nancy = new Person("Nancy");
nancy.addChild("Adam")
nancy.addChild("Jill")
nancy.addChild("Carl")
findPerson("Carl").addChild("Joseph")
findPerson("Carl").addChild("Catherine")
findPerson("Jill").addChild("Kevin")
findPerson("Kevin").addChild("Samuel")
findPerson("Kevin").addChild("George")
findPerson("Kevin").addChild("James")
findPerson("Kevin").addChild("Aaron")
findPerson("James").addChild("Mary")
findPerson("George").addChild("Patrick")
findPerson("George").addChild("Robert")


console.log(findPerson("James").grandparent)