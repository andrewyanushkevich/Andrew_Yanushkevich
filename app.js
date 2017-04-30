var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/hello', function(reg, res){
	res.send('hello World');
});
console.log('aaaa');
app.listen(3000, function(){
	console.log('Example app listening on port 3000');
});
