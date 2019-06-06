CREATE DATABASE events_db;

USE events_db;

CREATE TABLE events (
      id INT AUTO_INCREMENT
    , event_name VARCHAR (255)
    , event_address VARCHAR (255)
    , event_category VARCHAR (255)
    , event_date DATE
    , active BOOLEAN
    , PRIMARY KEY (id)
);