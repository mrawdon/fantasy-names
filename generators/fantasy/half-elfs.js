var nm1 = ["Aal", "Abe", "Ad", "Ada", "Ade", "Al", "An", "Ar", "Arn", "Aro", "Aud", "Ave", "Bal", "Bar", "Bel", "Ber", "Bri", "Char", "Chris", "Cler", "Col", "Con", "Cor", "Cra", "Cris", "Dan", "Dav", "Der", "Don", "Dor", "Dra", "Ed", "Eir", "El", "Eli", "Em", "Eme", "Eng", "Er", "Ever", "Fal", "Far", "Fara", "Fer", "Fran", "Fred", "Fril", "Ful", "Ga", "Gab", "Gaer", "Gal", "Gale", "Gar", "Gef", "Geof", "Ger", "Gib", "Gil", "Gir", "God", "Gra", "Greg", "Ha", "Hal", "Ham", "Han", "Har", "Have", "Hem", "Hen", "Hewe", "Hig", "Hil", "Hor", "Hu", "Hum", "Ian", "Ilo", "Im", "Ing", "Ingel", "Isem", "Ivo", "Iz", "Jac", "Jam", "Jame", "Jaqu", "Jar", "Jef", "Jen", "Jer", "Jere", "Jor", "Jose", "Kev", "Kri", "Lam", "Lan", "Lance", "Laun", "Leo", "Lor", "Mal", "Malcu", "Mar", "Maug", "Mei", "Mer", "Mic", "Mich", "Mik", "Nic", "Nich", "Nig", "Nige", "Nik", "Nil", "Nor", "Nyco", "Ori", "Os", "Pan", "Per", "Perci", "Pet", "Pete", "Pier", "Quo", "Rad", "Raf", "Raim", "Rain", "Ran", "Raw", "Ray", "Raym", "Reim", "Rem", "Ren", "Rey", "Reyn", "Ri", "Ric", "Rich", "Rob", "Rod", "Rog", "Roge", "Rol", "Rot", "Sal", "Sala", "Sam", "San", "Sar", "Sim", "Sten", "Steph", "Syl", "Tan", "Ted", "Teod", "Ter", "Thi", "Thom", "Tib", "To", "Tob", "Tra", "Tris", "Tyb", "Tyr", "Uan", "Ul", "Um", "Ur", "Val", "Van", "Vic", "Vil", "Wal", "War", "Wat", "Wi", "Wil", "Wim", "Wis", "Wy", "Wym", "Xan", "Xav", "Yen", "Yor", "Ysem", "Zan", "Zyl"];
var nm2 = ["amar", "arat", "alath", "avor", "bane", "ben", "borin", "byran", "coril", "craes", "dal", "dar", "deyr", "dil", "dithas", "dorr", "driel", "dryn", "duil", "duin", "dyr", "ellan", "elor", "enas", "endyl", "esin", "faelor", "faerd", "falen", "farin", "fin", "finas", "fire", "fyndar", "fyr", "gotin", "gretor", "homin", "horn", "idon", "indel", "is", "kas", "kath", "koris", "ladar", "ladon", "lael", "laer", "laeril", "laern", "laeron", "laith", "lamar", "lamir", "lan", "lanann", "lando", "lanor", "lar", "lareo", "las", "lathan", "lather", "leath", "len", "lidyr", "linar", "lion", "lis", "lisar", "lith", "luar", "luin", "lumin", "manas", "mar", "mede", "mer", "meron", "minar", "mir", "mitar", "mon", "morn", "mus", "naith", "nall", "nalor", "nan", "nar", "naril", "nas", "neak", "neiros", "nian", "nik", "nor", "nos", "orin", "osrin", "ovar", "parin", "phanis", "phar", "phon", "qarim", "qinor", "rach", "rath", "rauth", "reak", "red", "rel", "reth", "rian", "ridan", "ril", "rion", "rith", "ron", "ros", "roth", "ruil", "rune", "ryll", "rym", "ryn", "rynn", "rynnon", "san", "saran", "sariph", "seith", "shor", "sin", "staer", "tael", "taor", "tar", "telar", "tevar", "tharal", "thath", "thil", "thin", "thor", "thorn", "tien", "torin", "trydal", "tumil", "uin", "valor", "vendor", "verel", "voril", "warith", "win", "word", "xian", "xiron", "yeras", "ynor", "zaphir", "zaren"];
var nm3 = ["Aal", "Aan", "Ad", "Ade", "Adel", "Ael", "Al", "Ale", "Ali", "Alu", "Aly", "Am", "Ame", "Amel", "An", "Ar", "Ari", "Ath", "Athe", "Aub", "Av", "Ave", "Avi", "Avil", "Beat", "Bel", "Ber", "Bi", "Bran", "Bren", "Bri", "Brid", "Brun", "Byn", "Car", "Ced", "Chris", "Clar", "Co", "Cris", "Dar", "Del", "Eb", "Ed", "Ede", "Edel", "El", "Eli", "Elin", "Elis", "Eliz", "Elye", "Elyen", "Elys", "Em", "Emel", "Emil", "Es", "Esa", "Eve", "Evel", "Eza", "Fae", "Fha", "Ga", "Gab", "Gaen", "Gal", "Gen", "Gene", "Gif", "Gis", "Gise", "Gisel", "Glo", "Glor", "Gon", "Gre", "Gres", "Gwen", "Ha", "Had", "Haly", "Har", "Haw", "He", "Hege", "Heil", "Hel", "Her", "Herme", "Hil", "Ho", "Hos", "Ib", "Ile", "Ima", "In", "Ioh", "Iro", "Is", "Isa", "Ise", "Isel", "Ismen", "Iso", "Isol", "Issa", "Isso", "Ive", "Jac", "Jan", "Jana", "Jean", "Jeh", "Jeha", "Jen", "Jene", "Jes", "Jessi", "Jil", "Jin", "Jis", "Joan", "Joh", "Joha", "Joy", "Jul", "Kri", "Kys", "Les", "Lib", "Lil", "Lili", "Lin", "Lis", "Liz", "Lora", "MAde", "Ma", "Maal", "Mad", "Maer", "Mag", "Mah", "Mal", "Man", "Mar", "Mare", "Mari", "Math", "Maud", "Mel", "Meli", "Mer", "Mere", "Mil", "Mili", "Mir", "Mol", "Myl", "Na", "Nan", "Neri", "Ni", "Nin", "Nor", "Ol", "Ophi", "Or", "Ori", "Phaye", "Pri", "Qi", "Que", "Rel", "Res", "Roh", "Rosa", "Rose", "Sa", "Sael", "Saf", "Sal", "Sar", "Sara", "Sel", "Seph", "Sera", "Sul", "Sus", "Syl", "Ta", "Tam", "Tef", "Teph", "Thef", "Ther", "Tif", "Tyl", "Una", "Uri", "Ven", "Vic", "Vyl", "Win", "Wol", "Xil", "Xyr", "Yes", "Yll", "Ysa", "Yv", "Zel", "Zin"];
var nm4 = ["aerys", "anys", "atha", "bellis", "brae", "bwynn", "caena", "caiah", "cerys", "charis", "cia", "daerae", "dalar", "danna", "dee", "delia", "diane", "dis", "dove", "dris", "due", "dyl", "elor", "enyphe", "faen", "farrel", "fine", "galyn", "gwynn", "hala", "hana", "hava", "heira", "hera", "here", "hophe", "kaala", "kaela", "kaen", "kiasha", "kilia", "laela", "laema", "laena", "laerla", "laevar", "lahne", "lais", "lana", "lanae", "lanil", "lanis", "lanna", "lantha", "lara", "larel", "lartha", "larue", "latha", "laurel", "laya", "layna", "ledha", "lee", "lei", "leia", "lena", "lenas", "lendra", "leria", "lessa", "lesse", "leth", "letha", "li", "lia", "liana", "liania", "lica", "lihn", "lila", "lin", "lira", "lisa", "litia", "livren", "lon", "lone", "lora", "lorna", "lossa", "luna", "lurie", "luth", "lya", "lyn", "lynn", "lynna", "lynor", "lynthi", "lyrra", "madia", "mae", "malis", "manda", "mara", "maya", "medha", "mere", "mia", "micca", "mylla", "myra", "mythe", "na", "naestra", "nalore", "nalue", "nalyn", "nandra", "naril", "narra", "nastha", "nath", "nee", "nesia", "nesra", "nia", "niel", "niya", "noa", "noel", "nor", "nora", "nys", "ona", "phenee", "phira", "pisys", "qarin", "qwyn", "radyl", "rae", "raele", "raera", "raine", "rainne", "ralla", "rana", "ranthae", "rathla", "ravae", "reene", "rele", "relle", "ria", "riah", "riani", "riara", "riel", "rien", "rika", "rila", "rin", "rina", "rindra", "riona", "ris", "rissa", "rith", "rithe", "rolia", "rona", "ronyn", "rora", "rue", "runia", "ryl", "ryll", "ryn", "sala", "salia", "sarda", "saria", "sario", "seris", "sevel", "shara", "shee", "shera", "shia", "sia", "sianna", "star", "stele", "stine", "sula", "synora", "syra", "sys", "tala", "talia", "tarzah", "tha", "thae", "thaela", "thana", "thara", "theris", "thion", "thyl", "tihne", "tora", "trana", "tria", "trine", "vae", "vara", "viel", "vis", "vyre", "walyn", "wana", "waris", "wyn", "xaris", "xipha", "yana", "yaries", "yeth", "yra", "zael", "zee", "zenya", "ziar", "zira"];
var nm5 = ["Ad", "Ae", "Ara", "Bal", "Bei", "Bi", "Bry", "Cai", "Car", "Chae", "Cra", "Da", "Dae", "Dor", "Eil", "El", "Ela", "En", "Er", "Fa", "Fae", "Far", "Fen", "Gen", "Gil", "Glyn", "Gre", "Hei", "Hele", "Her", "Hola", "Ian", "Iar", "Ili", "Ina", "Jo", "Kea", "Kel", "Key", "Kris", "Leo", "Lia", "Lora", "Lu", "Mag", "Mia", "Mira", "Mor", "Nae", "Neri", "Nor", "Ola", "Olo", "Oma", "Ori", "Pa", "Per", "Pet", "Phi", "Pres", "Qi", "Qin", "Qui", "Ralo", "Rava", "Rey", "Ro", "Sar", "Sha", "Syl", "The", "Tor", "Tra", "Tris", "Ula", "Ume", "Uri", "Va", "Val", "Ven", "Vir", "Waes", "Wran", "Wyn", "Wysa", "Xil", "Xyr", "Yel", "Yes", "Yin", "Ylla", "Zin", "Zum", "Zyl"];
var nm6 = ["balar", "banise", "bella", "beros", "can", "caryn", "ceran", "cyne", "dan", "di", "dithas", "dove", "faren", "fiel", "fina", "fir", "geiros", "gella", "golor", "gwyn", "hana", "harice", "hice", "horn", "jeon", "jor", "jyre", "kalyn", "kas", "kian", "krana", "lamin", "lana", "lar", "lee", "len", "leth", "lynn", "maer", "maris", "menor", "moira", "myar", "mys", "na", "nala", "nan", "neiros", "nelis", "norin", "peiros", "petor", "phine", "phyra", "qen", "qirelle", "quinal", "ra", "ralei", "ran", "rel", "ren", "ric", "rie", "rieth", "ris", "ro", "rona", "rora", "roris", "salor", "sandoral", "satra", "stina", "sys", "thana", "thyra", "toris", "tris", "tumal", "valur", "varis", "ven", "vyre", "warin", "wenys", "wraek", "wynn", "xalim", "xidor", "xina", "xisys", "yarus", "ydark", "ynore", "yra", "zana", "zeiros", "zorwyn", "zumin"];

function generator$fantasy$half_elfs(type) {

	i = Math.floor(Math.random() * 10); {
		rnd3 = Math.floor(Math.random() * nm5.length);
		rnd4 = Math.floor(Math.random() * nm6.length);
		nameLast = nm5[rnd3] + nm6[rnd4];
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm3.length);
			rnd2 = Math.floor(Math.random() * nm4.length);
			names = nm3[rnd] + nm4[rnd2] + " " + nameLast;
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm2.length);
			names = nm1[rnd] + nm2[rnd2] + " " + nameLast;
		}
		return names;
	}

}