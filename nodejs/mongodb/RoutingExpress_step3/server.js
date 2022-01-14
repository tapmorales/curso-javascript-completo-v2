// Não vamos fazer require pois o dotenv não será usado em prod
// require('dotenv').config()

// Vamos usar o mongoose e não o mongodb
// const { MongoClient } = require('mongodb');

const app = require('./src/app')
const connectDB = require('./src/db/connect')

const PORT = process.env.PORT || 3000

const url = process.env.MONGO_URL;


/***
 * O código abaixo é a conexão com o mongodb, mas vamos usar o mongoose
 * const client = new MongoClient(url);
const dbName = 'myFirstProject';

async function main() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('documents');

    const insertResult = await collection.insertMany([{ task: "task1", completed: false }, { task: "task2", completed: true }]);
    console.log('Inserted documents =>', insertResult);

    return 'done.';
}

main()
    .then(() => {
        app.listen(PORT)
    })
    .catch(console.error)
    .finally(() => client.close());
*/

const main = async () => {
    try {
        await connectDB(url)
        app.listen(PORT)
    } catch (e) {
        console.log(e)
    }
}

main()


