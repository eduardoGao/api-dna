# DNA API

### About
API that recieves a DNA and return true if there is two or more strings with 4 equal characters. Otherwise return false.

------------

### API
Deployed in AWS  Elastic Beanstalk:
[http://nodedna-env.eba-m2ucx5m7.us-east-2.elasticbeanstalk.com/api/dna](http://nodedna-env.eba-m2ucx5m7.us-east-2.elasticbeanstalk.com/api/dna "http://nodedna-env.eba-m2ucx5m7.us-east-2.elasticbeanstalk.com/api/dna")


------------

### Installation

To run in local clone the repository and install the dependencies
```bash
npm install
```

To run the server
```bash
npm run start
```

Go to your `localhost:3003/api/dna` and get the stats

Make a POST in Postman with a new DNA
```
{
    "dna": ["ATGGGG", "CAACGC", "ATTGGT", "AAAAGG", "CCGTTA", "TCACTG"]
}
```
It will return a status code `200` if it is true or a `403` if it is false.
