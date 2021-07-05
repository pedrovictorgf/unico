# unico Market Place

This project consists of a NodeJS/Typescript application. That stores data about the free Market Places from São Paulo. The project contains 4 API's.

OBS: all the commands listed here should be ran from the root directory.

## Installation

In order to run the project locally you'll need to have Docker and docker-compose installed. After that we need to change permissions on the helper script. Below are links that can help with the installation of those. 

### Docker 
	https://docs.docker.com/engine/install/

### docker-compose
	https://docs.docker.com/compose/install/

After the installation or if you already got docker and docker-compose on your machine, run:
```bash
chmod +x start.sh

```
After that you should be good to go, just type in terminal:

```bash
sudo ./start.sh

```

Now the application is running on localhost:3000, and you should be able to access 1 URL:

### GET localhost:3000/market-places
	```json
[
    {
        "id": 1,
        "long": "-46550164",
        "lat": "-23558733",
        "setcens": "355030885000091",
        "areap": "3550308005040",
        "coddist": 87,
        "distrito": "VILA FORMOSA",
        "codsubpref": 26,
        "subprefe": "ARICANDUVA-FORMOSA-CARRAO",
        "regiao5": "Leste",
        "regiao8": "Leste 1",
        "nome_feira": "VILA FORMOSA",
        "registro": "4041-0",
        "logradouro": "RUA MARAGOJIPE",
        "numero": "S/N",
        "bairro": "VL FORMOSA",
        "referencia": "TV RUA PRETORIA\r"
    }
]
	```

### GET localhost:3000/market-places/id
	```json
 	{
        "id": 1,
        "long": "-46550164",
        "lat": "-23558733",
        "setcens": "355030885000091",
        "areap": "3550308005040",
        "coddist": 87,
        "distrito": "VILA FORMOSA",
        "codsubpref": 26,
        "subprefe": "ARICANDUVA-FORMOSA-CARRAO",
        "regiao5": "Leste",
        "regiao8": "Leste 1",
        "nome_feira": "VILA FORMOSA",
        "registro": "4041-0",
        "logradouro": "RUA MARAGOJIPE",
        "numero": "S/N",
        "bairro": "VL FORMOSA",
        "referencia": "TV RUA PRETORIA\r"
	}
	```

### DELETE localhost:3000/market-places/registerCode

### PUT localhost:3000/market-places/id
	Example request payload:
	```json
	{
    	"long": "-46550164",
    	"lat": "-23558733",
    	"setcens": "355030885000091",
    	"areap": "3550308005040",
    	"coddist": 87,
    	"distrito": "VILA FORMOSA",
    	"codsubpref": 26,
    	"subprefe": "ARICANDUVA-FORMOSA-CARRAO",
    	"regiao5": "Leste",
    	"regiao8": "Leste 1",
    	"nome_feira": "VILA FORMOSA",
    	"logradouro": "RUA MARAGOJIPE",
    	"numero": "S/N",
    	"bairro": "VL FORMOSA",
    	"referencia": "teste"
	}
	```

### Unit tests

If you want to run the unit tests locally, please run:

```bash
npm install

```

And then:

```bash
npm test

```