//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
const collectionName = 'Todos';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log(err);
        return console.log('Unable to connect to MongoDB server');
    }

    console.log("Connected to MongoDB server");
    const col = client.db(dbName).collection(collectionName);

    //deleteMany
    // col.deleteMany({ text: 'eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // col.deleteOne({
    //     "text": "eat lunch"
    // }).then(result => {
    //     console.log(result);
    // });

    //findOneAndDelete
    col.findOneAndDelete({completed:false}).then(result=>{
        console.log(result);
    });

    //col.findOneAndDelete({_id: new ObjectID('the id')});

    client.close();

});