
#Database 

SQL server database connection has been used.


Creating virtual environments

$ python3 -m venv /path/to/new/virtual/environment

Install project dependencies:

$ pip install -r requirements.txt

Apply Make migrations

$ python manage.py makemigrations

Then simply apply the migrations:

$ python manage.py migrate

Import backend-fronend-data.json file

$python manage.py loaddata backend-fronend-data.json 

You can now run the development server:

$ python manage.py runserver 127.0.0.1:8000


# React JS Setup

cd frontend/

Then Need to install dependencies for react

$ npm install


Configure Baekend IP or domain in frontend->src->constants->api.js

Finally Run React on Fronend Directory
$ npm start








