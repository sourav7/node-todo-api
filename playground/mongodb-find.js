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

    // col.find().toArray().then((docs) => {
    //     console.log('TODOS:::::');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // col.find({ completed: false }).toArray().then((docs) => {
    //     console.log('TODOS:::::');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    col.find().count().then((count) => {
        console.log(`TODOS::::: ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    client.close();

});