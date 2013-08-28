JO.Views.PostView = Backbone.View.extend({
	initialize: function () {
		var thisView = this;

		var renderCallback = thisView.render.bind(thisView);
		thisView.model.on("add", renderCallback);
		thisView.model.on("remove", renderCallback);
	},
	render: function () {
		var thisView = this;

		var renderedContent = JST["posts/detail"]({post: thisView.model});

		thisView.$el.html(renderedContent);
		return thisView;
	}
});