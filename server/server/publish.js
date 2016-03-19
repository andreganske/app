
var Personas = new Mongo.Collection('persona');
var Accounts = new Mongo.Collection('account');

/***********************************************************/

Meteor.publish('personas', function() {
	return Personas.find({});
});

Meteor.publish('personas-by-name', function(name) {
	return Personas.find({name: name});
});

Meteor.method('createPersona', function(json) {
	Personas.insert({
		name: json.name,
		createdAt: new Date(),
	});

});

/***********************************************************/

Meteor.publish('accounts', function() {
	return Accounts.find({});
});

Meteor.method('createAccount', function(json) {
	Accounts.insert({
		name: json.name,
		description: json.description,
		createdAt: new Date(),
		balance: json.balance
	});
});