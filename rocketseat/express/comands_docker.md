//docker
docker -- ver os comanodos

//baixando 'mongo' 
sudo docker pull mongo 

//configurando 
sudo docker run --name mongodb -p 27017:27017 -d mongo

--name = o nome de referencia, voce escolhe
-p = redirencionar da porta que tiver escultando na maquina para o padrao do mongo e a porta 27017

então -p portMaquina:padraoMongo // -p 27017:27017 || tanto faz -p 10000:27017

//retornar as imagens que estão rodando
sudo docker ps

//retornar todas as imagen ate as inativas
sudo docker ps -a

-a = 'all' retorna todas

//execultar imagens inativas 
docker start nome_dataBase

ex: sudo docker start mongodb

<-- iportante sempre executar como sudo -->