# Instituto
## PWA + FullStack (MongoDB, Express, NodeJS)
 
# Introducción

Este es un proyecto realizado como práctica para el módulo de 2ºDAW. Actualmente no está desplegado, pero con suerte dentro de poco lo estará en Heroku.
La aplicación está desarrollada además como PWA (Progressive Web App). 
Si la abres con Android y pulsas en la opción "Añadir a pantalla de inicio", se te instalará dicha aplicación en tu móvil como si tratará de una aplicación nativa. 
Para realizarlo en iOS, basta con abrir el menú de opciones que está situado en la parte inferior (El icono del centro) y seleccionar la opción “Añadir a pantalla de inicio”.
Se utilizan los mínimos recursos (ya sean estos paquetes, librerías o frameworks). Tambien se intenta minimizar el número de archivos utilizados. Este proyecto NO necesita de frameworks como Angular, React o Vue para el FrondEnd, ya que hacemos uso de VanillaJS ( MEAN, MERN, MEVN ).
La interfaz está desarrollada en forma de SPA (Single Page Application).

Los archivos utilizados son los siguientes:
├── package.json
├── package-lock.json
├── server.js
├── models.js
├── routes.js
├── public
│   ├── manifest.json
│   ├── service-worker.js
│   ├── images/icons/*
│   ├── favicon.png
│   ├── index.html
│   ├── style.css
│   └── app.js
└── README.md

Para el BackEnd los archivos necesarios son:
    • package.json 
    • package-lock.json 
    • index.js 
    • models.js 
    • routes.js 
    
Para el FrontEnd los archivos necesarios son:
    • public/favicon.png 
    • public/index.html 
    • public/style.css 
    • public/app.js 
    
Para Aplicación Web Progresiva
    • public/manifest.json 
    • public/service-worker.js 
    • public/images/icons/* 
    
#Despliegue en local

Para poder ejecutar este proyecto en tu equipo local, sigue los siguientes pasos:
    1. Instala el servidor MongoDB. Consulta la página oficial. 
    2. Clona este repositorio en tu equipo: 
      git  clone  https://github.com/Diegocd/Instituto.git
      cd   tiendaw
    3. Instala los módulos necesarios; 
      sudo apt install nodejs npm
      npm  install express nodemon yarn
    4. Inicia la aplicación 
      npm  start
    5. Abre en el navegador web la URL http://localhost:3000. 
    
# Despliegue en Docker

Si deseas mantener limpio tu equipo y no tener que instalar Nodejs ni MongoDB, entonces puedes utilizar Docker.
Para ello, sigue los siguientes pasos:

    1. Instala el software para Docker. En Ubuntu: 
      sudo  apt  install  docker.io  docker-compose
      sudo  adduser  `id -un`  docker
      Cierra sesión y vuelve a iniciarla para cargar la nueva configuración de usuario ya añadido al grupo docker.
    2. Clona este repositorio en tu equipo: 
      git  clone  https://github.com/Diegocd/Instituto.git  &&   cd   Instituto
    3. Dentro de la carpeta que contiene el código, ejecuta: 
      docker-compose  up  -d
      
NOTA: Los puertos 80 y 27017 no deben estar ocupados por ningún servicio previo. Son necesarios para los servicios de Node y Mongo que lanzará Docker.

# PWA: Aplicación Web Progresiva

La tecnología PWA es relativamente nueva, iniciandose en el año 2015 bajo el auspicio de Google.
Dicha tecnología pretende, mediante la aplicación de pequeñas adaptaciones, usar las tecnologías web (HTML + CSS + Javascript) para el desarrollo de aplicaciones de escritorio y móviles.
Como el lector entendido en el asunto comprenderá rápidamente, las implicaciones de tal tecnología son enormes:
    • Desarrollo para web, para escritorio y para móvil. Todo en uno. 
    • Simplificación del desarrollo. 
        ◦ "No es necesario" aprender lenguajes como Java o Swift. 
        ◦ "No es necesario" desarrollar de forma nativa (SDKs para Android e iOS). 
        ◦ "No es necesario" desarrollar de forma híbrida (Frameworks Cordova, React Native, Angular Ionic. Electron para el             
           escritorio) 
    • Uso de Web APIs, las cuales son bastantes, muchas de ellas aún en desarrollo: fetch, websockets, geolocalización, audio,      
      speech, ... 
En las fechas en las que escribo esto (Diciembre 2018), el soporte para Aplicaciones Web Progresivas no está completamente soportado en todos los entornos. Entornos en los que se sabe que están soportadas son:
    • PC y portátiles 
        ◦ Windows 10 (Chrome 70+) 
        ◦ GNU/Linux (Chrome 70+) 
        ◦ Chrome OS (Chrome 67+) 
        ◦ Mac (aún bajo desarrollo) 
    • Móviles 
        ◦ Android 
        ◦ iOS (parcial, a partir de iOS 11.3) 
        
# Instalacción en PC o Portátil

El escritorio usado ha sido KDE bajo sistema operativo GNU/Linux. Las especificaciones concretas se muestran a continuación:
    • Google Chrome Versión 71.0.3578.98 (Build oficial) (64 bits) 
    • Distribución Linux KDE neon 18.04 LTS 
        ◦ KDE Frameworks 5.53.0 
        ◦ Qt 5.11.2 (compilado con 5.11.2) 
        ◦ El sistema de ventanas xcb 

Para instalar en el escritorio a través del navegador Chrome, seguimos los siguientes pasos.
    1. Pulsamos en el menú del navegador y luego en Instalar ... 
    2. Confirmamos 
    3. Una vez instalada nos aparecerá un icono en el escritorio. 
    4. Es posible abrir la aplicación desde el navegador, pulsando en el menú y luego en Abrir ... 
    5. No obstante, es más cómodo hacerlo desde el icono del escritorio.
    6. Una vez hecho, veremos una ventana con la aplicación.

# Desinstalacción en PC o Portátil

Por último, si deseamos desinstalar la aplicación, bastará con pulsar en el menú de la ventana y luego en Desinstalar

# Instalación en móvil Android o iOS

Cuando accedemos a la URL de la aplicación mediante el navegador Chrome, y éste detecta que se trata de una PWA, nos mostrará en la parte inferior de la pantalla del móvil un mensaje para añadir la aplicación web a la pantalla de inicio. El proceso es similar a la instalación de una aplicación nativa, aunque suele ser menos pesado y ocupar menos espacio de disco.
A continuación se muestran algunas capturas de pantalla.
Primero pulsamos en el mensaje Añadir(icono del centro en el caso de iOS) ... a la pantalla de inicio que aparece en la parte inferior de la pantalla.
Confirmamos.
Y podemos ver los detalles de la instalación.

Si no nos aparece el mensaje de instalación en la parte inferior de la pantalla, tenemos otra forma de hacerlo mediante el uso del menú del navegador.
Una vez instalada la aplicación se nos creará un acceso directo en la pantalla de nuestro móvil.
Si abrimos la aplicación veremos algo similar a lo siguiente.
A todos los efectos la aplicación aparece en Android como si de una aplicación nativa se tratese. Observese que no aparece incrustada dentro del navegador, sino como aplicación independiente.
Para desinstalar una aplicación en Android bastará con arrastrarla a la papelera. Para desinstalarla en iOS mantén el icono pulsado unos segundos hasta que se ponga a temblar y presiona la “X” que aparece en una esquina del icono. Acepta y listo.

