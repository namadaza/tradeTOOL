# tradeTool
----------------------------------------------
Basic trading website developed using an isomorphic MERN stack!
  * MongoDB NoSQL database, used with Mongoose ORM
  * Express.js middleware
  * React.js for frontend
  * Node.js ecosystem

Next step is to develop this project into cleaner MERN boilerplate.

# Dev Quickstart
```sh
 npm install
 mongod &
 webpack --watch &
 nodemon server.js &
```

# Framework Versions

* ReactJS v15.2.0
  - UI
```sh
<script src="https://fb.me/react-15.2.0.js"></script>
<script src="https://fb.me/react-dom-15.2.0.js"></script>
```
* Redux or Flux
  - UI client-side framework

* NodeJS v4.4.7
  - Server
  - https://nodejs.org/en/
  - Recommended to use nvm to manage your versions

* MongoDB v3.2
  - Database
  - https://docs.mongodb.com/manual/installation/
  - Install MongoDB first, to run mongod, you need to do the following:
  ```sh
  sudo mkdir -p /data/db
  sudo chmod 0755 /data/db
  sudo chown $USER /data/db
  ```
  - mongo ds027145.mlab.com:27145/heroku_mmxxx5w1 -u admin -p tradetool1!
  - dbuser: admin
  - dbpassword: tradetool1!
