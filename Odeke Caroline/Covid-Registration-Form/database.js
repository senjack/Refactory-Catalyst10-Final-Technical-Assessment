//We are creating afile that will tell the controller where to find the database.
//We shall be exporting our database to the server file that will help establish the 
//database connection.


module.exports = {
    //Here we are establishing a portnuumber to our database .
    //This is a connection string and a path to the database.
            database:'mongodb://localhost:55000/Covid-Registration-Form',
    //The secret is our password.
      secret:'Carol'
      //We are establishing the portnuumber to our database.
      //The server can sometimes be our password.
}