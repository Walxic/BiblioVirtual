# BiblioVirtual
Creacion de las carpetas backend y frontend
Creacion del .gitignore (desde https://www.toptal.com/developers/gitignore)
Dentro de la carpeta backend:
 Creacion del entorno virtual y activarlo (python -m venv venv)
 Instalacion de Django (pip istall django)
 Creacion del proyecto "Reseñas" (django-admin startproject)
 Creacion de las App "Tareas y "Resenas" (python manage.py startapp resenas)
 Modificacion del setting.py para agregar las apps creadas
 Migracion de las tablas a utilizar para que django corra sin problemas.
Instalacion del DRF (pip install djangorestframework) 
	Para crear las APIS
 Intalacion del modulo Headers para facilitar la comunicacion entre el back y el front (pip install django-cors-headers)
 De la documentacion de Corsheader sacamos las modificaciones del setting.py:
	INSTALLED_APPS = [
    ...,
    "corsheaders",
    ...,
    ]
	MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
    ]
 Modificacion del setting.py para agregar la lista de servidores se pueden conectar a Django, el puerto 3000 en este caso que es el de React
	CORS_ALLOWED_ORIGINS = [
    "https://localhost:3000",
    "https://sub.example.com",
   	]
 Creacion del serializer para mandar al front la info en formanto jason
  (documentacion de DRF)
 Generar las views (tarea y resena)
 Creacion de las URLs que se van a utilizar para la API (Get, POst, Put, Delete)

Dentro de la carpeta frontend:
 Creacion del front en REACT (npx creat-react-app AppBiblio)
 instalar: npm install react-router-dom (Es un modulo para tener multiples paginas en el front)
 instalar: npm install react-hot-toast (Es para tener mensajes cuando sufra algun cambio tipo de borrar, modificar, crear)
 instalar: axios (para la comunicacion con el back)
 instalar: react-hook-form (es para validar el input que nosotros creemos en el front)
