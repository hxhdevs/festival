# festival
crear package.json con
- npm init
- npm i node
# despues de haverse instalado se modifica package.json en dependencies si se instala del siguiente modo se instala pero como desarrollo devdependencies
- npm i -D sass
# si se esta desarrollando como desarrollo y no deseas llevar node_modules puedes borrar la carpeta y tipear lo siguiente para reinstalar las dependencias incluidas en package.json
- npm i 
# para que tome en cuenta los cambios hechos en el CSS y los compile a SASS compilar cada que se cambie y tipear lo siguiente y cambiar de build a dist segun sea el caso en package.json
- npm run sass