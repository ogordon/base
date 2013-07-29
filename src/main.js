/*
 * ExpoContact13 Mobile App
 * Creada por imelius - www.imelius.com
 * Selector de plantillas
 */
 
tpl = {
	
	// Hash of preloaded templates for the app
	
	templates:{},
	
	// Recursively pre-load all the templates for the app.
	// This implementation should be changed in a production environment. All the template files should be
	// concatenated in a single file.
	
	loadTemplates:function (names, callback) {		
		var that = this;
		var loadTemplate = function (index) {
		  var name = names[index];
		  $.get('src/tpl/' + name + '.html', function (data) {
		    that.templates[name] = data;
		    index++;
		    if (index < names.length) {
		      loadTemplate(index);
		    } else {
		      callback();
		    }
		  });
		}
		
		loadTemplate(0);
	},
	
	// Get template by name from hash of preloaded templates
	
	get:function (name) {
	  return this.templates[name];
	}	
};

/*
 * ExpoContact13 Mobile App
 * Creada por imelius - www.imelius.com
 * Backbone Router App
 */

var AppRouter = Backbone.Router.extend({

	// Router listen by Backbone.js

  routes:{
    "":"init",
    "home":"home",
    "home2":"home2"
  },

  initialize:function () {
    
    // Función que se ejecuta al iniciar el router
    
    console.log("inicializando router...");
    
  },

  init:function () { 		
	  console.log("Default route...");   
    //app.changePage(new window.HomeView());
  },
  
  home:function() {
		console.log("Home...");  
    app.changePage(new window.HomeView());
  },
  
  home2:function() {
		console.log("Home 2...");  
    app.changePage(new window.Home2View());
  },
    
  changePage:function (page) {
  	
  	// Add the Page attribute for jQM visualitation
  	
    $(page.el).attr('data-role', 'page');
    $(page.el).attr('data-theme', 'd');

    // Tell the View to render itself the HTML content
    
    page.render();
    
    // Add the rendered page to the body content
    
    $('body').append($(page.el));
    
    // Add the footer to everypage
    
    /*var footer = new window.FooterView();
		footer.render();		
		$($(page.el)).append($(footer.el));    
    */
    
    // Define the page transition 
    
    var transition = "flow"; 
    
    // We don't want to slide the first page
    
    if (this.firstPage) {
      transition = 'none';
      this.firstPage = false;
    }
    
    // Tell jQM to show our new page
    
    $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
  }
});

$(document).ready(function () {

	$.mobile.loading( 'show', {
		text: '',
		textVisible: false,
		theme: 'c',
		html: ""
	});	
            
  // Load HTML View templates
  // Same name than tpl/<file> without .html
  
  tpl.loadTemplates([
  	'home',
  	'home2'], function () {

    	// After template loading we start the backbone routing engine
    
      app = new AppRouter();
      app.changePage(new window.HomeView());
      
      // Allow to use Back browser button
      
      Backbone.history.start();
    });
});