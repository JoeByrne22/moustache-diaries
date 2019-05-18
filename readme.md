## Week 7 Day 1 Homework

### Your Task
Using the starter code make an app with a front end and backend which has an INDEX and SHOW route. It can be on anything you like and you will be working on it all week.

Start by making an express backend (this is the same as in project 2 but without any views). Use *Insomnia* to make sure that your back end sends the correct data. You will need to send your request to localhost:4000 and make sure that you include /api in front of your url. For example:

`http://localhost:4000/api/stuff`

You will need to make:

- A model for your data
- An `environment` file which includes port and database URI. Make sure that you are using port 4000.
- A `seeds` file aka `create-data.js` which you can run to add data to your database.
- A controller which runs an INDEX and SHOW function.

Once you have a functional back end move onto your angular front end. Create both an index and a show view which uses the data from your back end.

# IMPORTANT TIPS
* You will need to run your client (`yarn start:client`), server (`yarn start:server`) and mongod (`mongod`) in order to make your app work.

* To add data to the database via your seeds file run (`yarn seed`).

* Use the apps we made in class as a guide.
