#databases

## Intro
* what is databases?
    * A colletion of information/databases
    * Has an interface
* SQL(relational) vs NoSQL(non-relational)
    * relational : tabular, flat, has pattern, multiple tables
    * non-relational: nested, no pattern, no table


# MongoDb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org

# Mongo commands
* help
* show dbs
* use table name
* show collection
* db.(collection name).insert   c
* db.(collection name).find()   r
* db.(collection name).update(ob1, {$set: ob2}    u
* db.(collection name).remove()   d

# mongoose
* ODM object data mapper
* javascript layer under mongodb