var familyTree = {
	members: [],
	//Return person object
	find: function(name){
		for (var i = 0; i < familyTree.members.length; i++) {
			if (familyTree.members[i].name === name){
				return familyTree.members[i];
			};
		};
		console.log("Person not found");
	},	
	//Log grandparents name
	grandparentOf: function(name){
		console.log(this.find(name).grandparent);
	},
	//Log names of those with no siblings
	siblingLess: function(){
		for (var i = 0; i < familyTree.members.length; i++) {
			if (familyTree.members[i].siblings().length === 1){
				console.log(familyTree.members[i].name);
			};
		};
	},
	//Log names of those with no children	
	childLess: function () {
		for (var i = 0; i < familyTree.members.length; i++) {
			if (familyTree.members[i].children.length === 0){
				console.log(familyTree.members[i].name);
			};
		};
	},
	//Log most plentiful grandmother
	mostGrandchildren: function () {
		var highest = familyTree.members[0];
		for (var i = 0; i < familyTree.members.length-1; i++) {
			if (familyTree.members[i].grandchildren > highest.grandchildren){
				highest = familyTree.members[i]
			};
		};
		console.log(highest.name);
	}
}

function Person(name)
{
	this.name = name;
	this.parent = null;
	this.children = [];
	this.grandparent = null;
	this.grandchildren = 0;
	//Return all siblings, updated every call
	this.siblings = function(){
		if (this.parent != null){
			return this.parent.children
		} else{
			return [this];
		};
	},
	//Auto assign parents to children for member associations
	this.addChild = function(name) {
		var child = new Person(name);
		child.parent = this;
			if (child.parent.parent != null) {
				var granny = child.parent.parent
				child.grandparent = granny;
				granny.grandchildren += 1;
			}
		this.children.push(child);
	};
	//Auto add to family tree
	this.init();
};

//Add new people to family tree
Person.prototype.init = function(){
	familyTree.members.push(this);
};

//Add family members
// var nancy = new Person("Nancy");
// nancy.addChild("Adam");
// nancy.addChild("Jill");
// nancy.addChild("Carl");
// familyTree.find("Carl").addChild("Joseph");
// familyTree.find("Carl").addChild("Catherine");
// familyTree.find("Jill").addChild("Kevin");
// familyTree.find("Kevin").addChild("Samuel");
// familyTree.find("Kevin").addChild("George");
// familyTree.find("Kevin").addChild("James");
// familyTree.find("Kevin").addChild("Aaron");
// familyTree.find("James").addChild("Mary");
// familyTree.find("George").addChild("Patrick");
// familyTree.find("George").addChild("Robert");

// //Driver tests
// familyTree.grandparentOf("Kevin");
// console.log("-------");
// familyTree.siblingLess();
// console.log("-------");
// familyTree.mostGrandchildren();
// console.log("-------")
// familyTree.childLess();