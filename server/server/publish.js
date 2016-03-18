
var Persona = new Mongo.Collection('persona');

Meteor.publish('personas', function() {
	return Persona.find();
});

Meteor.publish('personas-by-name', function(name) {
	return Persona.find({name: name});
});

/***********************************************************/

Meteor.method('create', function(json) {
	Persona.insert({
		name: json.name,
		createdAt: new Date(),
	});

});