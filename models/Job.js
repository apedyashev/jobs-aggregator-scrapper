'use strict';

/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Job Schema
 */
const JobSchema = new Schema({
	title: {
		type: String,
	},
	shortDescription: {
		type: String,
	},
	levelOfEmployment: {
		type: String,
	},
	city: {
		type: String,
	},
	company: {
		type: String,
	},
	datePosted: {
		type: Date,
	},
	link: {
		type: String,
		unique: true,
	},
	created: {
		type: Date,
		default: Date.now,
	},
});

mongoose.model('Job', JobSchema);
