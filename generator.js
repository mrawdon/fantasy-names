// Dependencies
var fs = require('fs'), path = require('path'), seedrandom = require('seedrandom');

module.exports = function(group, individual, quantity, type, seed) {
	
	if(typeof seed !== 'undefined') seedrandom(seed, {global: true});
	if(typeof group === 'undefined'){
		var groupDirs = fs.readdirSync(path.join(__dirname, 'generators/'));
		group = groupDirs[Math.floor(Math.random() * groupDirs.length)];
	}
	if(typeof individual === 'undefined'){
		var individualDirs = fs.readdirSync(path.join(__dirname, 'generators/'+group+'/'));
		individual = individualDirs[Math.floor(Math.random() * individualDirs.length)];
		individual = individual.substring(0,individual.indexOf('.'));
	}
	if(typeof quantity === 'undefined') quantity = 1;
	if(typeof type === 'undefined') type = 0;
	
	
	try {
		// TODO Refactor from global functions to FantasyNames.generators.group.individual
		eval(fs.readFileSync(path.join(__dirname, 'generators/'+group+'/'+individual+'.min.js'),'utf8'));
		var generator = eval('generator$'+group+'$'+individual);
		
		var output = "";
		for(var q = 0; q < quantity; q++) {
			output += generator(type);
			if(q < quantity - 1) output += '\n';
		}
		return output;
	} catch(e) {
		console.log(e);
		throw "Couldn't load: generator$"+group+"$"+individual;
	}
}
