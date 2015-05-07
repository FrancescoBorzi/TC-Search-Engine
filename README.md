# TC-Search-Engine

The **TrinityCore Search Engine** is a web application built with [AngularJS](https://angularjs.org/) and [Bootstrap](http://getbootstrap.com) which allows to search into the database of [TrinityCore MMORPG framework](https://github.com/TrinityCore/TrinityCore) and displays datas to the user into a friendly format.

It retrieves all datas querying the [TrinityCore JSON RESTful API](https://github.com/ShinDarth/TC-JSON-API/) and can currently show datas about **Items**, **NPCs** and **Quests**. 

## Installation

The application requires the [TrinityCore JSON RESTful API](https://github.com/ShinDarth/TC-JSON-API/), but it can be even in a separate machine.

Clone the TC-Search-Engine folder inside your web server directory:

`git clone https://github.com/ShinDarth/TC-Search-Engine.git`
Then copy the file **config.js.dist** to **config.js**, open it and set properly with the path of the API:

`app.api = "../TC-JSON-API/public/index.php/";`

which is the address of the API.

If you have an external server providing the API, set it like:

`app.api = "http://www.your.external.server.org/path/to/TC-JSON-API/public/index.php/";`

### License

The TrinityCore Search Engine is open-sourced software licensed under the [GNU GPL license](https://github.com/ShinDarth/TC-Search-Engine/blob/master/LICENSE).
