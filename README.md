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
# para no estar compilando a cada rato se automatiza con el modo Watch en el package.json checa el commit correspondiente a este cambio para ver explicitamente ahora solo tipea lo siguiente y aplicara cambios en tiempo real, puedes tener n terminales con + de shell
- npm run sass 
# gulp se instala con el siguiente comando desde terminal, se agrega la dependencia se crea gulpfile.js agregas una funcion y se agrega en package.json, pero tiene detalles con los exports pero se habilita con type module que puedes checar tambien como es en package.json
- npm i --save-dev gulp
# despues corres el gulpfile con npm run hola checa todo el commit para poder encontrar la coherencia y relacion entre lo mencionado en el commit 
- npm run hola
# SUPER IMPORTANTE se agrega module type en package.json al hacer uso de exports de lo contrario se rompe el app y no funciona