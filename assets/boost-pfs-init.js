var boostPFS = new BoostPFS();
boostPFS.init(); 
if (typeof boostPFSConfig != 'undefined' 
	&& typeof boostPFSConfig.general != 'undefined' 
	&& typeof boostPFSConfig.general.isInitFilter != 'undefined' 
	&& boostPFSConfig.general.isInitFilter === true) { 
	boostPFS.initFilter(); 
} 
BoostPFS.jQ(window).on('load', function(){
	boostPFS.initSearchBox();
	boostPFS.initAnalytics();
});