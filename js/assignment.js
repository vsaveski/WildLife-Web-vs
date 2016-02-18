/*
 *		This file contains the javascript code for our page
 */

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled
// templates many times
var categories_template, tabs_template;

//
var source, html, str;

// Helper function that returns lowercase
Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

// Helper function that will evaluate every specific count of items
Handlebars.registerHelper('everyOther', function (index, amount, scope) {
  if ( ++index % amount )
    return scope.inverse(this);
  else
    return scope.fn(this);
});


// document read gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	// compile all of our templates ready for use
  source = $('#tabs-template').html();
  tabs_template = Handlebars.compile(source);
  html = tabs_template(animals_data);
	$('#tab-container').html(html);
  source = $('#category-template').html();
  categories_template = Handlebars.compile(source);


  $('.tab').click(function(){
    var index = $(this).data('id');
    html = categories_template(animals_data.category[index]);
    $(".nav-pills .active").removeClass("active");
    $(this).addClass('active');
    $('#content').html(html);
  });

  $('#tabs li:first-child').click();

});
