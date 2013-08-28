JO.Collections.Posts = Backbone.Collection.extend({
	model: JO.Models.Post,
	url: "/posts.json"
});