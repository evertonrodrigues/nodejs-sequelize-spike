# Nodejs Sequelize Spike

Project to study Nodejs with Sequilze

### Setup

```
docker pull postgres

docker pull dpage/pgadmin4

docker network create --driver bridge postgres-network

docker run --name my-postgres -e "POSTGRES_PASSWORD=postgres" -p 5432:5432 -v /home/everton/dev/tools/volume-pg:/var/lib/postgresql/data -d postgres

docker run --name my-pgadmin --network=postgres-network -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=postgres" -e "PGADMIN_DEFAULT_PASSWORD=postgres" -d dpage/pgadmin4

```    

### Tools

-  [PgAdmin4](http://localhost:15432)
