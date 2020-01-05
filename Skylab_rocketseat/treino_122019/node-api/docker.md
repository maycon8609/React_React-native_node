baixar imagem
  sudo docker pull "nome imagem sem aspas"

  ex:
  sudo docker pull mongo

listar containes docker 
  sudo docker ps

criar container docker
  sudo docker run --name "nome do container sem aspas" -p 27017:27017 -d "imagem desejada sem aspas"

  ex:
  sudo docker run --name mongodb -p 27017:27017 -d mongo

lista todos os containes ate os pausados
  sudo docker ps -a

startar container pausado
  sudo docker start "nome do container sem aspas"

  ex:
  sudo docker start mariadb