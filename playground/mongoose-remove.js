const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: ''}).then((todo) => {

// });

Todo.findByIdAndRemove('590f9eb9d265f42d9ec80737').then((todo) => {
	console.log(todo);
});