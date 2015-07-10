function Person(name)
{
	this.name = name;
	this.parent = null;
	this.children = [];
	this.siblings = [];
	
	this.getChildren = function () 
	{
		return this.children;	
	}
};

var Nancy = new Person("Nancy")
var Adam = new Person("Adam")
var Jill = new Person("Jill")
var Carl = new Person("Carl")

Nancy.children.push(Adam, Jill, Carl)

console.log(Nancy.getChildren());
