var System =  new QuickStep.Model('System', [
	  'User'
	, 'Login'
	, 'plugins'
]);

var User = new QuickStep.Model('Book', [
	  'id'
	, 'username'
	, 'password'
	, 'firstName'
	, 'lastName'
	, 'email'

	, 'Books'
	, 'Entries'
	, 'Quotes'
	, 'Session'
]);

User.prototype.init = function(){
	this.Books = new QuickStep.Collection(Books);
	this.Entries = new QuickStep.Collection(Entries);
	this.Quotes = new QuickStep.Collection(Quotes);
};

var Session = new QuickStep.Model('Session', [
	  'token'
	, 'loginTime'
	, 'userId'
	, 'state'
]);

var Book = new QuickStep.Model('Book', [
	  'id'
	, 'title'
	, 'author'

	, 'Entires'
	, 'Quotes'
]);

var Entry = new QuickStep.Model('Entry', [
	  'id'
	, 'name'

	, 'Locations'
]);

var Location = new QuickStep.Model('Location', [
	  'id'
	, 'entryId'
	, 'bookId'
	, 'from'
	, 'to'
	, 'noteNumber'

	, 'Book'
]);

var Quote = new QuickStep.Model('Comment', [
	  'id'
	, 'locationId'
	, 'text'

	, 'Locations'	
]);
