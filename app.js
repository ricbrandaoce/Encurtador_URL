var expresso = require('express');
var mongoose = require('mongoose');
const urlRouter = require('./routes/urlRoute');
var app = expresso();
var url = 'mongodb+srv://ricbrandao:Mongodb8@cluster0.vwxsn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
});
mongoose.connect(url);
app.listen(4900, function () {
});

app.use('/urls', urlRouter);
