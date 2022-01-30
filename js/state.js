/**
 * 
 */

state = {};

state.notes = {};
state.notes.reset = {
    'hard' : [
        'half1','mask', 'on1',
        'd1','d2','d3','d4','d5','d6','d7',
        'r1','r2','r3','r4','r5','r6','r7',
        'n0','n1','n2','n3','n4','n5','n6','n7','n8','n9','n10','n11', 'off1','on2'
    ],
    'soft' : [
        'half1', 'mask', 'on1', 'off1','d1','d2','d3','d4','d5',
        'r1','r2','r3','r4','r5','r6','r7',
        'd6','d7','n0','n1','n2','n3','n4','n5','n6','n7'
    ]
};

/**
 * @todo: to be implemented from guitar obj.
 */
state.key = 0;
state.scale = 'major';
state.position = [];

/**
 * Should modes switch to pitch axis? 
 */
state.pitchAxis = false; // add to gui controls.

/**
 * Should a mask be used.
 */
state.useMask = false;