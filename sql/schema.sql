DROP DATABASE IF EXISTS imgdb;

CREATE DATABASE imgdb;

use imgdb;

DROP TABLE IF EXISTS user_table;

CREATE TABLE user_table(
    userId VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50)
);

DROP TABLE IF EXISTS image_table;

CREATE TABLE image_table(
     imageId VARCHAR(50) PRIMARY KEY,
     userId VARCHAR(50) NOT NULL,
     title VARCHAR(50) NOT NULL,
     description VARCHAR(200),
     originalFileName VARCHAR(50),
     uploadedFileName VARCHAR(50),
     uploadFilePath VARCHAR(500)
);