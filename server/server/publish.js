if (Meteor.isServer) {

	JsonRoutes.Middleware.use(JsonRoutes.Middleware.parseBearerToken);
	JsonRoutes.Middleware.use(
		JsonRoutes.Middleware.authenticateMeteorUserByToken
	);
	JsonRoutes.ErrorMiddleware.use(RestMiddleware.handleErrorAsJson);

	// Setup public endpoints to lists
	SimpleRest.configure({
		collections: []
	});

	var Persona = new Mongo.Collection('persona');

	Meteor.publish('personas', function() {
		return Persona.find();
	});

	Meteor.publish('personas-by-name', function(name) {
		return Persona.find({name: name});
	},{
		getArgsFromRequest: function(request) {
			return [request.query.name];
		}
	});

	/***********************************************************/

	Meteor.method('create', function(json) {
		
		Persona.insert({
			name: json.name,
			createdAt: new Date(),
		});

	});

}