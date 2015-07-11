//Hold family members
var familyTree = [];

function Person(name)
{
	this.name = name;
	this.parent = null;
	this.children = [];
	this.siblings = [];
	this.grandparent = null;
	this.grandchildren = 0;
	
	this.addChild = function(name) {
		var child = new Person(name);
		child.parent = this;
			if (child.parent.parent != null) {
				var granny = child.parent.parent
				child.grandparent = granny.name;
				granny.grandchildren += 1;
			}
		this.children.push(child);
	};
	//Auto add to family tree
	this.init();
};

//Add new people to family tree
Person.prototype.init = function(){
	familyTree.push(this)
};

//Grab person object
var findPerson = function(name){
	for (var i = 0; i < familyTree.length; i++) {
		if (familyTree[i].name === name){
			return familyTree[i];
		}
	}
	console.log("Person not found");
}

//Return names of the childless 
var noChildren = function(){
	for (var i = 0; i < familyTree.length; i++) {
		if (familyTree[i].children.length === 0){
			console.log(familyTree[i].name);
		}
	}
}

//Return name of most plentiful grandmother
var highestGrandchildren = function(){
	var highest = familyTree[0];
	for (var i = 0; i < familyTree.length-1; i++) {
		if (familyTree[i].grandchildren > highest.grandchildren){
			highest = familyTree[i]
		}
	}
	console.log(highest.name);
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


// console.log(findPerson("Kevin").grandchildren)
noChildren();
console.log("-----------");
highestGrandchildren();