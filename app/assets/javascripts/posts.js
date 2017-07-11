
$(document).ready(function() {
  /* Activating Best In Place */
  jQuery(".best_in_place").best_in_place();
});




$(document).ready(function(){
// disable auto discover
		Dropzone.autoDiscover = false;
		// grap our upload form by its id
		$('*[id^="edit_post"]').dropzone({
			// restrict image size to a maximum 1MB
			maxFilesize: 100,
			// changed the passed param to one accepted by
			// our rails app
			paramName: "post[image]",
			// show remove links on each image upload
			addRemoveLinks: true
		});
});
