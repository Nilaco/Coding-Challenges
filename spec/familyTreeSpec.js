describe("Tests existence of family tree", function(){
	it("Family tree exists", function(){
		expect(familyTree).toBeTruthy();
	});

	it("Family tree contains 14 members", function(){
		expect(familyTree.members.length).toBe(14);
	});
});

describe("Tests creation and associations of people", function(){
	var nancy = new Person("Nancy");
	nancy.addChild("Adam");
	nancy.addChild("Jill");
	nancy.addChild("Carl");
	familyTree.find("Carl").addChild("Joseph");
	familyTree.find("Carl").addChild("Catherine");
	familyTree.find("Jill").addChild("Kevin");
	familyTree.find("Kevin").addChild("Samuel");
	familyTree.find("Kevin").addChild("George");
	familyTree.find("Kevin").addChild("James");
	familyTree.find("Kevin").addChild("Aaron");
	familyTree.find("James").addChild("Mary");
	familyTree.find("George").addChild("Patrick");
	familyTree.find("George").addChild("Robert");

	it("Creates people objects", function(){
		expect(nancy.name).toBe("Nancy");
	});

	it("Child and parent association", function(){
		expect(familyTree.find("George").parent.name).toBe("Kevin");
	});
	it("Child and grandparent association(Kevin => Nancy)", function(){
		expect(familyTree.find("Kevin").grandparent.name).toBe("Nancy");
	});
})

describe("Tests expected results from given functions", function(){
	it("Returns all members with no siblings", function(){
		expect(familyTree.siblingLess()).toContain("Nancy", "Kevin", "Mary");
	});

	it("Returns all members with no children", function(){
		expect(familyTree.childLess()).toContain("Adam", "Catherine", "Joseph", "Samuel", "Aaron", "Mary", "Patrick", "Robert");
	});
});