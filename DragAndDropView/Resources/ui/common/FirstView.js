//FirstView Component Constructor

var movableViews = require('ui/common/movableView');
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	
	
	var circle1 = Ti.UI.createView({
	        width: 30,
	        height: 30,
	        borderRadius : 15,
	        backgroundColor:'blue',
	        top: 100 - 15,
        	left : 100 - 15
	        
	    });
    circle2 = movableViews.getMovableObject({
		view : circle1,
		xCoordinate : 100,
		yCoordinate : 100,
	});

	self.add(circle1);
	self.add(circle2);
	return self;
}

module.exports = FirstView;
