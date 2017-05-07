const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '590e8cf4ce10b5f01fc5916511';

// if ( !ObjectID.isValid(id) ) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		console.log('Id not found');
// 		return;
// 	}

// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var userId = '590e1ce7ca23b1d019f1f23f';

User.findById(userId).then((user) => {
	if (!user) {
		console.log('User not found');
		return
	}

	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));