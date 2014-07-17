/**
 * @author Ravi Shankar
 */

var  utils = require('ui/common/util');

module.exports = {

	getMovableObject : function(argument) {
	
	
	var circleX = 0,
	 circleY = 0,
	 platformWidth = utils.convertPixelToDp(Ti.Platform.displayCaps.platformWidth),
	 platformHeight =utils.convertPixelToDp(Ti.Platform.displayCaps.platformHeight)  ,
	 viewLeft = 0,
	 viewTop = 0;
	
	
	var circleView = Titanium.UI.createView({
		width: 30,
        height: 30,
        borderRadius : 15,
        backgroundColor: 'blue',
        top: argument.yCoordinate - 15,
		left : argument.xCoordinate -15 
        
	});
	
	
	var offset = {};
	circleView.addEventListener('touchstart', function(e){
		argument.view.opacity = 1.0;
		circleView.opacity = 0.0;
	    offset.x = utils.convertPixelToDp(e.x) -  argument.view.left;
	    offset.y = utils.convertPixelToDp(e.y) -  argument.view.top ;
	});
	circleView.addEventListener('touchmove', function(e)
	{
		viewLeft =utils.convertPixelToDp(e.x) - offset.x;
		viewTop = utils.convertPixelToDp(e.y) - offset.y;
		circleX = (viewLeft - 15) <= 0 ? 0 : (viewLeft + 30) > platformWidth? platformWidth - 30: viewLeft ;
		circleY = (viewTop - 15) <= 0 ? 0 : (viewTop + 30) > (platformHeight - 120)? (platformHeight - 120) - 30: viewTop ;
		argument.view.left = circleX;
	    argument.view.top = circleY;
	    
	});
	 
	circleView.addEventListener('touchend', function(e)
	{
		circleView.opacity = 1.0;
		argument.view.opacity = 0.0;
	    circleView.left = circleX;
	    circleView.top = circleY;
	    	   
	});

	return circleView;  
	},
};

