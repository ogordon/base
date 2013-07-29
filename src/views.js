/* 
 * Vistas
 */

/*
 *
 * View Class to manage Registro Page
 *
 */


window.HomeView = Backbone.View.extend({

  initialize:function () {  
  	
  	this.template = _.template(tpl.get('home'));	  		
  	
  },
  
  // Events from the View's DOM 
  /*
  events: {
		"click #obj" : "_funcion",
  },*/
  
  /*
   * Render the page
   */
       	 
  render:function (e) {
    $(this.el).html(this.template());	
    return this;
  }
});

window.Home2View = Backbone.View.extend({

  initialize:function () {  
  	
  	this.template = _.template(tpl.get('home2'));	  		
  	
  },
  
  // Events from the View's DOM 
  
  events: {
		"click #btnPulsa" : "btnPulsado",
  },
  
  btnPulsado : function (e) {
	  e.preventDefault();
	  
	  alert("No, ahí no!!!!");
	  
  },
  
  /*
   * Render the page
   */
       	 
  render:function (e) {
    $(this.el).html(this.template());	
    return this;
  }
});