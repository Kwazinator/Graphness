DELETE from graph WHERE 1=1;

UPDATE SQLITE_SEQUENCE SET seq=0 WHERE name='graph';

INSERT into graph (name,dataid) VALUES ('S&P500', 1);
INSERT into graph (name,dataid) VALUES ('Number of coronavirus cases', 2);
INSERT into graph (name,dataid) VALUES ('thrown touchdowns from Tom Brady', 3);
INSERT into graph (name,dataid) VALUES ('Top Youtube Subscribers', 4);
INSERT into graph (name,dataid) VALUES ('richest people in the world', 5);
INSERT into graph (name,dataid) VALUES ('top listened to songs this week spotify', 6);