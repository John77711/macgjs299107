
// var guitar = {};
// guitar.fb = {};
// guitar.data = {};

guitar.data.intervalNames = { 
		1 : 'ionian',
		2 : 'dorian',
		3 : 'phrygian',
		4 : 'lydian',
		5 : 'mixolydian',
		6 : 'aeolian',
		7 : 'locrian',
	}

guitar.data.majorScale = {};
/** theses values can be applied to normalised key map. */
guitar.data.majorScale.formula = [0,2,4,5,7,9,11]; 
guitar.data.majorScale.pattern1 = {};
guitar.data.majorScale.pattern2 = {};
guitar.data.majorScale.pattern3 = {};
guitar.data.majorScale.pattern4 = {};
guitar.data.majorScale.pattern5 = {};
guitar.data.majorScale.pattern6 = {};
guitar.data.majorScale.pattern7 = {};


guitar.data.majorScale.pattern1.b = [
							[1,4,0,0,0,0],
							[0,0,7,3,0,0],
							[2,5,1,4,6,2],
							[0,0,0,0,0,0],
							[3,6,2,5,7,3],
							[0,0,0,0,1,4],
							[0,0,0,0,0,0],
							[0,0,0,0,0,0],
	];


guitar.data.majorScale.pattern2.b = [
							[2,5,1,4,0,0],
							[0,0,0,0,0,0],
							[3,6,2,5,7,3],
							[4,0,0,0,1,4],
							[0,7,3,6,0,0],
							[0,0,0,0,2,5],
							[0,0,0,0,0,0],
							[0,0,0,0,0,0],
	];

guitar.data.majorScale.pattern3.b = [
					[3,6,2,5,0,0],
					[4,0,0,0,1,4],
					[0,7,3,6,0,0],
					[5,1,4,0,2,5],
					[0,0,0,7,0,0],
					[0,0,0,0,3,6],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
	];	

guitar.data.majorScale.pattern4.b = [
					[4,0,0,0,0,0],
					[0,7,3,6,0,0],
					[5,1,4,0,2,5],
					[0,0,0,7,0,0],
					[6,2,5,1,3,6],
					[0,0,0,0,4,0],
					[0,0,0,0,0,7],
					[0,0,0,0,0,0],
	];	

guitar.data.majorScale.pattern5.b = [
					[5,1,4,0,0,0],
					[0,0,0,7,0,0],
					[6,2,5,1,3,6],
					[0,0,0,0,4,0],
					[7,3,6,2,0,7],
					[0,0,0,0,5,1],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
	];	

guitar.data.majorScale.pattern6.b = [
					[6,2,5,1,0,0],
					[0,0,0,0,4,0],
					[7,3,6,2,0,7],
					[1,4,0,0,5,1],
					[0,0,7,3,0,0],
					[0,0,0,0,6,2],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
	];	

guitar.data.majorScale.pattern7.b = [
					[7,3,6,2,0,0],
					[1,4,0,0,5,1],
					[0,0,7,3,0,0],
					[2,5,1,4,6,2],
					[0,0,0,0,0,0],
					[0,0,0,0,7,3],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
				];	
				
				
				
guitar.data.pentatonics = {};

guitar.data.pentatonics.pattern1 = {};
guitar.data.pentatonics.pattern2 = {};
guitar.data.pentatonics.pattern3 = {};
guitar.data.pentatonics.pattern4 = {};
guitar.data.pentatonics.pattern5 = {};

guitar.data.pentatonics.pattern1.a = [
	[0,0,0,0,0,0],	
	[6,8,8,1,8,6],	
	[0,0,0,0,0,0],	
	[0,8,6,8,0,0],	
	[1,0,0,0,8,1],	
	[0,0,0,0,0,0],	
	[0,0,0,0,0,0],	
];

guitar.data.pentatonics.pattern2.a = [
	[0,0,0,0,0,0],	
	[0,8,6,8,0,0],	
	[1,0,0,0,8,1],	
	[0,0,0,8,0,0],	
	[8,8,1,0,6,8],	
	[0,0,0,0,0,0],	
	[0,0,0,0,0,0],	
]

guitar.data.pentatonics.pattern3.a = [
	[0,0,0,0,0,0],	
	[0,0,0,8,0,0],	
	[8,8,1,0,6,8],	
	[0,0,0,0,0,0],	
	[8,6,8,8,0,8],	
	[0,0,0,0,1,0],	
	[0,0,0,0,0,0],	
]

guitar.data.pentatonics.pattern4.a = [
	[0,0,0,0,0,0],	
	[8,6,8,8,0,8],	
	[0,0,0,0,1,0],	
	[0,0,8,6,0,0],	
	[8,1,0,0,8,8],	
	[0,0,0,0,0,0],	
	[0,0,0,0,0,0],	
];

guitar.data.pentatonics.pattern5.a = [
	[0,0,0,0,0,0],	
	[0,0,8,6,0,0],	
	[8,1,0,0,8,8],	
	[0,0,0,0,0,0],	
	[6,8,8,1,8,6],	
	[0,0,0,0,0,0],	
];




notes = {};	
notes.all = {};	
notes.all.sharps = ['A','A#','B','B#','C','C#','D','D#','E','E#','F','F#','G','G#'];
notes.all.flats = ['A','Bb','B','Cb','C','Db','D','Eb','E','Fb','F','Gb','G','Ab'];
notes.all.normalised = [
	['A','Bbb','G##'], //0
	['A#', 'Bb'], //1
	['B','A##','Cb'], //2
	['C', 'B#'], // 3
	['C#','Db'], //4
	['D','C##','Ebb'], //5
	['D#', 'Eb'], //6
	['E', 'D##','Fb'], //7
	['F','E#','Gbb'],  //8
	['F#', 'Gb'],  //9
	['G','F##','Abb'],  //10
	['G#','Ab']  //11
];


guitar.data.normalisedNotes = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
guitar.data.normalisedFingerboard = [
	[7,0,5,10,2,7], //open	
	[8,1,6,11,3,8], //1	
	[9,2,7,0,4,9], 	
	[10,3,8,1,5,10], 	
	[11,4,9,2,6,11], 	
	[0,5,10,3,7,0], //5	
	[1,6,11,4,8,1], 	
	[2,7,0,5,9,2], //7	
	[3,8,1,6,10,3], 	
	[4,9,2,7,11,4], //9	
	[5,10,3,8,0,5], 	
	[6,11,4,9,1,6], 	
	[7,0,5,10,2,7], //12
	[8,1,6,11,3,8], //13	
	[9,2,7,0,4,9], 	
	[10,3,8,1,5,10], 	
	[11,4,9,2,6,11], 	
	[0,5,10,3,7,0], //5	
	[1,6,11,4,8,1], 	
	[2,7,0,5,9,2], //7	
	[3,8,1,6,10,3], 	
	[4,9,2,7,11,4], //9	
	[5,10,3,8,0,5], 	
	[6,11,4,9,1,6], 	
	[7,0,5,10,2,7], //12	
];


guitar.data.harmonicMinor = {};
guitar.data.harmonicMinor.pattern1 = {};
guitar.data.harmonicMinor.pattern2 = {};
guitar.data.harmonicMinor.pattern3 = {};
guitar.data.harmonicMinor.pattern4 = {};
guitar.data.harmonicMinor.pattern5 = {};
guitar.data.harmonicMinor.pattern6 = {};
guitar.data.harmonicMinor.pattern7 = {};

guitar.data.harmonicMinor.pattern1.a = [
							[1,4,0,0,0,0],
							[0,0,7,3,0,0],
							[2,0,1,4,6,2],
							[0,5,0,0,0,0],
							[3,6,2,0,7,3],
							[0,0,0,5,1,4],
							[0,0,0,0,0,0],
							[0,0,0,0,0,0],
	];

guitar.data.harmonicMinor.pattern2.a = [
							[2,5,1,4,0,0],
							[0,0,0,0,0,0],
							[3,6,2,5,7,3],
							[4,0,0,0,1,4],
							[0,7,3,6,0,0],
							[0,0,0,0,2,5],
							[0,2,2,2,0,0],
							[0,0,0,0,0,0],
	];

// pattern 3

guitar.data.harmonicMinor.pattern3.a = [   // temp - requires update...
					[3,6,2,5,0,0],
					[4,0,0,0,1,4],
					[0,7,3,6,0,0],
					[5,1,4,0,2,5],
					[0,0,0,7,0,0],
					[0,0,0,0,3,6],
					[0,0,0,0,0,2],
					[0,0,0,0,0,0],
	];	

guitar.data.harmonicMinor.pattern4.a = [
					[4,0,0,0,0,3],
					[0,7,3,6,0,0],
					[5,1,4,0,2,5],
					[0,0,0,7,0,0],
					[6,2,5,1,3,6],
					[0,0,0,0,4,0],
					[0,0,0,0,0,7],
					[0,0,0,0,0,0],
	];	

guitar.data.harmonicMinor.pattern5.a = [
					[5,1,4,0,0,0],
					[0,0,0,7,0,0],
					[6,2,5,1,3,6],
					[0,0,0,0,4,0],
					[7,3,6,2,0,7],
					[0,0,0,0,5,1],
					[0,0,3,0,0,0],
					[0,0,0,0,0,0],
	];	


guitar.data.harmonicMinor.pattern6.a = [
					[6,2,5,1,0,0],
					[0,0,0,0,4,0],
					[7,3,6,2,0,7],
					[1,4,0,0,5,1],
					[0,0,7,3,0,0],
					[0,0,0,0,6,2],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
	];	


guitar.data.harmonicMinor.pattern7.a = [
					[7,3,6,2,0,0],
					[1,4,0,0,5,1],
					[0,0,7,3,0,0],
					[2,5,1,4,6,2],
					[0,0,0,0,0,0],
					[0,0,0,0,7,3],
					[0,0,0,0,0,0],
					[0,0,0,0,0,0],
				];	
				


guitar.data.triads = {};
guitar.data.triads.major = {};
guitar.data.triads.major.positions = {};

guitar.data.triads.major.positions.a = [
	[0,0,0,0,0,0],
	[0,0,0,5,0,3],
	[0,0,0,0,1,0],
	[0,0,3,0,0,0],
	[5,1,0,0,0,0],
];

guitar.data.triads.major.positions.b = [
	[0,0,0,0,0,0],
	[0,0,0,0,0,5],
	[0,0,0,0,0,0],
	[0,0,5,1,3,0],
	[0,0,0,0,0,0],
	[0,3,0,0,0,0],
	[1,0,0,0,0,0],
];	

guitar.data.triads.major.positions.c = [
	[0,0,0,0,0,0],
	[0,0,0,0,5,1],
	[0,0,0,3,0,0],
	[0,5,1,0,0,0],
	[0,0,0,0,0,0],
	[3,0,0,0,0,0],
	[0,0,0,0,0,0],
];

guitar.data.triads.minor = {};
guitar.data.triads.minor.positions = {};

guitar.data.triads.minor.positions.a = [
	[0,0,0,0,0,3],
	[0,0,0,5,0,0],
	[0,0,3,0,1,0],
	[0,0,0,0,0,0],
	[5,1,0,0,0,0],
];

guitar.data.triads.minor.positions.b = [
	[0,0,0,0,0,0],
	[0,0,0,0,0,5],
	[0,0,0,0,3,0],
	[0,0,5,1,0,0],
	[0,3,0,0,0,0],
	[0,0,0,0,0,0],
	[1,0,0,0,0,0],
];	

guitar.data.triads.minor.positions.c = [
	[0,0,0,0,0,0],
	[0,0,0,3,5,1],
	[0,0,0,0,0,0],
	[0,5,1,0,0,0],
	[3,0,0,0,0,0],
	[0,0,0,0,0,0],
	[0,0,0,0,0,0],
];

///
guitar.position = guitar.data.majorScale.pattern1.b;

	
/**
 * Random num
 */
 guitar.data.random = function(num) {
	return Math.floor(Math.random() * num);
}