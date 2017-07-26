// Dependencies
var fs = require('fs'), path = require('path'), seedrandom = require('seedrandom');

var characters = [];

if(typeof group === 'undefined'){
	var groupDirs = fs.readdirSync(path.join(__dirname, 'groups/'));
	groupDirs.forEach(group=>{
		var groupList = require('./groups/'+group);	
		
		characters = characters.concat(groupList);
	});
}



module.exports = function(seed) {
	
	if(typeof seed !== 'undefined') seedrandom(seed, {global: true});
	
	return characters[Math.floor(Math.random() * characters.length)];
};