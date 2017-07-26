// Dependencies
var fs = require('fs'), path = require('path'), seedrandom = require('seedrandom');

module.exports = function(group,seed) {
	
	if(typeof seed !== 'undefined') seedrandom(seed, {global: true});
	if(typeof group === 'undefined'){
		var groupDirs = fs.readdirSync(path.join(__dirname, 'groups/'));
		group = groupDirs[Math.floor(Math.random() * groupDirs.length)];
	}
	var groupList = require('./groups/'+group);	
	return groupList[Math.floor(Math.random() * groupList.length)];
};