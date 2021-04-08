<h1 align="center">
    <img alt="Chargefy" title="Chargefy" src="../.github/chargefy.png" width="180px" />
</h1>

# Backend

## Features

- DB (sqlite typeorm)
  - pces ✔
  - images ✔
  - PCEs update on cascade with images ✔
  - views ✔
  - location to store images localy ✔
- error handlers ✔
- routes to get/post PCEs ✔

will be included later

- User login ✨

## How to run the backend

```bash
git clone https://github.com/Pedroassuncao/Chargefy.git
cd /chargefy/backend
yarn install
yarn dev
```

PS: Have a small script configured to run some commands

## How to test

Use software API like [Insomnia](https://insomnia.rest/) (recommended) or [Postman](https://www.postman.com/)

 - Create PCE
	 - POST
	 - Multipar form ( image upload)
 - List all PCEs
	 - GET
	 - http://localhost:3333/pces
 - Specific PCE
	 - http://localhost:3333/pces/id 		(where id = 1,2,3...)

Json format
```json
       {
      "id": (note necessary, its auto incremented)
      "name": "string",
      "latitude": number,
      "longitude": number,
      "about": "string",
      "charger_type": "string",
      "opening_hours": "string"
	    }
```

## Creators

**Pedro Assunção**

- <https://github.com/Pedroassuncao>

## Copyright and license

<img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=2effb9&labelColor=000000">

Code released under the [MIT License](https://reponame/blob/master/LICENSE).

Enjoy :metal:
