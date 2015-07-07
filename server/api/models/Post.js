/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		// relationships
		user: {
		    model: 'user'
		},

		//attr
		title : { type: 'string' },
		body : { type: 'string' },
		intro : { type: 'string'},
		bgCoverImg : { type: 'string'},
		imgOne : { type: 'string'},
		imgTwo : { type: 'string'},
		imgThree : { type: 'string'},
		tldr : { type: 'string'},
		tags : { type: 'array' },
	}
};
