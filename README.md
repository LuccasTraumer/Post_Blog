# Post Blog

Post Blog is a project in Angular and Spring boot where you can make Post in this website, this project is very important to me because I put most part a have learning on last 6 mouth in my interning, this is not evrything i learning but make this project make me put a hands on code and make mistakes and learnig with this mistakes.

# Part tecnichal:

## Frontend: 
Frontend of this application was made with framework Angular 8 and bootstrap 4, the unit test haven't been done yet but I will make in Jest on a future close.
To make a routing in Angular a use HttpClientModule and to consume API rest. Service is very simple and a will make a refactory him, to divide responsability.

## Backend:
Backend was made in Spring boot with libs: JPA, Devtools, Longbok, Jaktar(to persiste data), Spring web and Mongodb. JPA I use to abstract the implementation of connection with database and is very easy to use. I choice mongodb because is very simple and easy to use, unfortunately I don't know how use docker yet so the database is local and has configurated on application.prorie on spring. 
The Controller of application was 3 route and 2 is the same route but with http verb diferent(GET, POST, PUT, DELETE) so the same route recive all requests. 
DTO (Data Transfer Object) of Post use annotation @Document and has 4 atribute and 2 of them has automatically filled.

## Database:

Databa used is MongoDB beacause is very simple and easy to use, simple to see all data and to make a CRUD is very simple too.

