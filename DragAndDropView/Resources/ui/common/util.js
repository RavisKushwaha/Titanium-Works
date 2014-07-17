/***
 * Class to create Utility function
 * @method  convertPixelToDp - take argument as pixel and return dp value.
 *
 * */

module.exports = {

	/**
	 * @param {int} [pixel] - pixel value
	 * @return dp value of given pixel value
	 * */
	convertPixelToDp : function(pixel) {
		return (pixel / (Titanium.Platform.displayCaps.dpi / 160));
	},
	convertDpToPixel : function(dp) {
		return (parseInt(dp) * (Titanium.Platform.displayCaps.dpi / 160));
	},
};
