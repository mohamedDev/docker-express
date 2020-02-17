#!/usr/bin/env bash

case $1 in
	create-env-dev)
		echo "############################################################################"
        echo "we are going to create docker container for developper envirements expressjs"
        echo "############################################################################"
#        if [ -f "./.env" ]
#        then
#            echo ".env found."
#        else
#            cp ./infrastructure/env_dev/.env
#        fi
        cp ./infrastructure/env_dev/* ./ && cp ./infrastructure/env_dev/.env ./ && docker-compose up -d --build
		;;
	start)
        echo "############################################################################"
        echo "we are going to start dev server on docker container"
        echo "############################################################################"
		winpty docker exec -it $(grep APP_CONTAINER_NAME .env | cut -d '=' -f2) npm run dev
		break
		;;
esac
