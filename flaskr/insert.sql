DELETE from graph WHERE 1=1;
DELETE from axisdata WHERE 1=1;
DELETE from datapairs WHERE 1=1;
DELETE from program WHERE 1=1;
DELETE from datavalues WHERE 1=1;
DELETE from user WHERE 1=1;
DELETE from usertograph WHERE 1=1;


UPDATE SQLITE_SEQUENCE SET seq=0 WHERE name='axisdata';
UPDATE SQLITE_SEQUENCE SET seq=0 WHERE name='graph';
UPDATE SQLITE_SEQUENCE SET seq=0 WHERE name='datapairs';
UPDATE SQLITE_SEQUENCE SET seq=0 WHERE name='program';
UPDATE SQLITE_SEQUENCE SET seq=0 WHERE name='datavalues';

INSERT into graph (name,type) VALUES ('S&P500', 'line');
INSERT into graph (name,type) VALUES ('Number of coronavirus cases', 'line');
INSERT into graph (name,type) VALUES ('thrown touchdowns from Tom Brady', 'line');
INSERT into graph (name,type) VALUES ('Top Youtube Subscribers', 'line');
INSERT into graph (name,type) VALUES ('richest people in the world', 'line');
INSERT into graph (name,type) VALUES ('top listened to songs this week spotify', 'line');


INSERT into user (username,password,logintype,accountId,profilePicture,email) VALUES ('kkwasniewski','yolo','facebook','1','2','kwasiky@gmail.com');
INSERT into user (username,password,logintype,accountId,profilePicture,email) VALUES ('someoneelse','yoasdlo','faceboasdok','3','2','kwasiky@gmail.com');


INSERT into usertograph (userid,graphid,ordernum) VALUES (1,1,2);
INSERT into usertograph (userid,graphid,ordernum) VALUES (1,2,1);
INSERT into usertograph (userid,graphid,ordernum) VALUES (1,5,3);
INSERT into usertograph (userid,graphid,ordernum) VALUES (1,6,4);


INSERT into usertograph VALUES (2,2,1);
INSERT into usertograph VALUES (2,3,3);
INSERT into usertograph VALUES (2,4,2);

INSERT into axisdata (graphid,programid,name) VALUES (2,1,'cases');
INSERT into axisdata (graphid,programid,name) VALUES (2,1,'deaths');
INSERT into axisdata (graphid,programid,name) VALUES (2,1,'hospitalizations');


INSERT into axisdata (graphid,programid,name) VALUES (1,2,'num1');
INSERT into axisdata (graphid,programid,name) VALUES (1,2,'stuff');

INSERT into axisdata (graphid,programid,name) VALUES (3,3,'things');
INSERT into axisdata (graphid,programid,name) VALUES (3,3,'thestuff');
INSERT into axisdata (graphid,programid,name) VALUES (3,3,'others');
INSERT into axisdata (graphid,programid,name) VALUES (3,3,'finally');

INSERT into axisdata (graphid,programid,name) VALUES (4,2,'sdfg');
INSERT into axisdata (graphid,programid,name) VALUES (4,2,'asdfg');

INSERT into axisdata (graphid,programid,name) VALUES (5,2,'poiu');
INSERT into axisdata (graphid,programid,name) VALUES (5,2,'uiop');

INSERT into axisdata (graphid,programid,name) VALUES (6,2,'another thing');




INSERT into datavalues (axisdataid, value) VALUES (1,20);
INSERT into datavalues (axisdataid, value) VALUES (1,40);
INSERT into datavalues (axisdataid, value) VALUES (1,25);
INSERT into datavalues (axisdataid, value) VALUES (1,50);
INSERT into datavalues (axisdataid, value) VALUES (1,15);
INSERT into datavalues (axisdataid, value) VALUES (1,45);
INSERT into datavalues (axisdataid, value) VALUES (1,33);
INSERT into datavalues (axisdataid, value) VALUES (1,34);

INSERT into datavalues (axisdataid, value) VALUES (2,5);
INSERT into datavalues (axisdataid, value) VALUES (2,30);
INSERT into datavalues (axisdataid, value) VALUES (2,21);
INSERT into datavalues (axisdataid, value) VALUES (2,18);
INSERT into datavalues (axisdataid, value) VALUES (2,59);
INSERT into datavalues (axisdataid, value) VALUES (2,50);
INSERT into datavalues (axisdataid, value) VALUES (2,28);
INSERT into datavalues (axisdataid, value) VALUES (2,33);

INSERT into datavalues (axisdataid, value) VALUES (3,30);
INSERT into datavalues (axisdataid, value) VALUES (3,5);
INSERT into datavalues (axisdataid, value) VALUES (3,18);
INSERT into datavalues (axisdataid, value) VALUES (3,21);
INSERT into datavalues (axisdataid, value) VALUES (3,33);
INSERT into datavalues (axisdataid, value) VALUES (3,41);
INSERT into datavalues (axisdataid, value) VALUES (3,29);



INSERT into datavalues (axisdataid, value) VALUES (4,1);
INSERT into datavalues (axisdataid, value) VALUES (4,2);
INSERT into datavalues (axisdataid, value) VALUES (4,10);
INSERT into datavalues (axisdataid, value) VALUES (4,20);
INSERT into datavalues (axisdataid, value) VALUES (4,30);
INSERT into datavalues (axisdataid, value) VALUES (4,40);
INSERT into datavalues (axisdataid, value) VALUES (4,50);
INSERT into datavalues (axisdataid, value) VALUES (4,60);

INSERT into datavalues (axisdataid, value) VALUES (5,1);
INSERT into datavalues (axisdataid, value) VALUES (5,1);
INSERT into datavalues (axisdataid, value) VALUES (5,2);
INSERT into datavalues (axisdataid, value) VALUES (5,3);
INSERT into datavalues (axisdataid, value) VALUES (5,5);
INSERT into datavalues (axisdataid, value) VALUES (5,8);
INSERT into datavalues (axisdataid, value) VALUES (5,13);
INSERT into datavalues (axisdataid, value) VALUES (5,21);






INSERT into datavalues (axisdataid, value) VALUES (6,1333);
INSERT into datavalues (axisdataid, value) VALUES (6,3122);
INSERT into datavalues (axisdataid, value) VALUES (6,223);
INSERT into datavalues (axisdataid, value) VALUES (6,334);
INSERT into datavalues (axisdataid, value) VALUES (6,335);
INSERT into datavalues (axisdataid, value) VALUES (6,136);
INSERT into datavalues (axisdataid, value) VALUES (6,173);
INSERT into datavalues (axisdataid, value) VALUES (6,118);

INSERT into datavalues (axisdataid, value) VALUES (7,111);
INSERT into datavalues (axisdataid, value) VALUES (7,111);
INSERT into datavalues (axisdataid, value) VALUES (7,121);
INSERT into datavalues (axisdataid, value) VALUES (7,131);
INSERT into datavalues (axisdataid, value) VALUES (7,152);
INSERT into datavalues (axisdataid, value) VALUES (7,183);
INSERT into datavalues (axisdataid, value) VALUES (7,1143);
INSERT into datavalues (axisdataid, value) VALUES (7,1214);

INSERT into datavalues (axisdataid, value) VALUES (8,132);
INSERT into datavalues (axisdataid, value) VALUES (8,2322);
INSERT into datavalues (axisdataid, value) VALUES (8,1044);
INSERT into datavalues (axisdataid, value) VALUES (8,2420);
INSERT into datavalues (axisdataid, value) VALUES (8,3022);
INSERT into datavalues (axisdataid, value) VALUES (8,4033);
INSERT into datavalues (axisdataid, value) VALUES (8,50333);
INSERT into datavalues (axisdataid, value) VALUES (8,61230);

INSERT into datavalues (axisdataid, value) VALUES (9,1421);
INSERT into datavalues (axisdataid, value) VALUES (9,11123);
INSERT into datavalues (axisdataid, value) VALUES (9,2331);
INSERT into datavalues (axisdataid, value) VALUES (9,333);



INSERT into datavalues (axisdataid, value) VALUES (10,120);
INSERT into datavalues (axisdataid, value) VALUES (10,420);
INSERT into datavalues (axisdataid, value) VALUES (10,235);
INSERT into datavalues (axisdataid, value) VALUES (10,540);
INSERT into datavalues (axisdataid, value) VALUES (10,125);
INSERT into datavalues (axisdataid, value) VALUES (10,415);
INSERT into datavalues (axisdataid, value) VALUES (10,323);
INSERT into datavalues (axisdataid, value) VALUES (10,334);

INSERT into datavalues (axisdataid, value) VALUES (11,53);
INSERT into datavalues (axisdataid, value) VALUES (11,320);
INSERT into datavalues (axisdataid, value) VALUES (11,231);
INSERT into datavalues (axisdataid, value) VALUES (11,118);
INSERT into datavalues (axisdataid, value) VALUES (11,519);
INSERT into datavalues (axisdataid, value) VALUES (11,530);
INSERT into datavalues (axisdataid, value) VALUES (11,248);
INSERT into datavalues (axisdataid, value) VALUES (11,313);


INSERT into datavalues (axisdataid, value) VALUES (12,120);
INSERT into datavalues (axisdataid, value) VALUES (12,420);
INSERT into datavalues (axisdataid, value) VALUES (12,235);
INSERT into datavalues (axisdataid, value) VALUES (12,540);
INSERT into datavalues (axisdataid, value) VALUES (12,125);
INSERT into datavalues (axisdataid, value) VALUES (12,415);
INSERT into datavalues (axisdataid, value) VALUES (12,323);
INSERT into datavalues (axisdataid, value) VALUES (12,334);
INSERT into datavalues (axisdataid, value) VALUES (12,53);
INSERT into datavalues (axisdataid, value) VALUES (12,320);
INSERT into datavalues (axisdataid, value) VALUES (12,231);
INSERT into datavalues (axisdataid, value) VALUES (12,118);
INSERT into datavalues (axisdataid, value) VALUES (12,519);
INSERT into datavalues (axisdataid, value) VALUES (12,530);
INSERT into datavalues (axisdataid, value) VALUES (12,248);
INSERT into datavalues (axisdataid, value) VALUES (12,313);

INSERT into datavalues (axisdataid, value) VALUES (13,120);
INSERT into datavalues (axisdataid, value) VALUES (13,420);
INSERT into datavalues (axisdataid, value) VALUES (13,235);
INSERT into datavalues (axisdataid, value) VALUES (13,540);
INSERT into datavalues (axisdataid, value) VALUES (13,125);
INSERT into datavalues (axisdataid, value) VALUES (13,415);
INSERT into datavalues (axisdataid, value) VALUES (13,323);
INSERT into datavalues (axisdataid, value) VALUES (13,334);
INSERT into datavalues (axisdataid, value) VALUES (13,53);
INSERT into datavalues (axisdataid, value) VALUES (13,320);
INSERT into datavalues (axisdataid, value) VALUES (13,231);
INSERT into datavalues (axisdataid, value) VALUES (13,118);
INSERT into datavalues (axisdataid, value) VALUES (13,519);
INSERT into datavalues (axisdataid, value) VALUES (13,530);
INSERT into datavalues (axisdataid, value) VALUES (13,248);
INSERT into datavalues (axisdataid, value) VALUES (13,313);



INSERT into datavalues (axisdataid, value) VALUES (14,1240);
INSERT into datavalues (axisdataid, value) VALUES (14,4220);
INSERT into datavalues (axisdataid, value) VALUES (14,2355);
INSERT into datavalues (axisdataid, value) VALUES (14,5450);
INSERT into datavalues (axisdataid, value) VALUES (14,1255);
INSERT into datavalues (axisdataid, value) VALUES (14,4155);
INSERT into datavalues (axisdataid, value) VALUES (14,3253);
INSERT into datavalues (axisdataid, value) VALUES (14,3354);
INSERT into datavalues (axisdataid, value) VALUES (14,535);
INSERT into datavalues (axisdataid, value) VALUES (14,3250);
INSERT into datavalues (axisdataid, value) VALUES (14,2351);
INSERT into datavalues (axisdataid, value) VALUES (14,1158);
INSERT into datavalues (axisdataid, value) VALUES (14,5159);
INSERT into datavalues (axisdataid, value) VALUES (14,5350);
INSERT into datavalues (axisdataid, value) VALUES (14,2458);
INSERT into datavalues (axisdataid, value) VALUES (14,3153);
INSERT into datavalues (axisdataid, value) VALUES (14,1250);
INSERT into datavalues (axisdataid, value) VALUES (14,4250);
INSERT into datavalues (axisdataid, value) VALUES (14,2355);
INSERT into datavalues (axisdataid, value) VALUES (14,5450);
INSERT into datavalues (axisdataid, value) VALUES (14,1255);
INSERT into datavalues (axisdataid, value) VALUES (14,4515);
INSERT into datavalues (axisdataid, value) VALUES (14,5323);
INSERT into datavalues (axisdataid, value) VALUES (14,3534);
INSERT into datavalues (axisdataid, value) VALUES (14,553);
INSERT into datavalues (axisdataid, value) VALUES (14,3520);
INSERT into datavalues (axisdataid, value) VALUES (14,2531);
INSERT into datavalues (axisdataid, value) VALUES (14,1158);
INSERT into datavalues (axisdataid, value) VALUES (14,5159);
INSERT into datavalues (axisdataid, value) VALUES (14,5350);
INSERT into datavalues (axisdataid, value) VALUES (14,248);
INSERT into datavalues (axisdataid, value) VALUES (14,313);
INSERT into datavalues (axisdataid, value) VALUES (14,120);
INSERT into datavalues (axisdataid, value) VALUES (14,420);
INSERT into datavalues (axisdataid, value) VALUES (14,2355);
INSERT into datavalues (axisdataid, value) VALUES (14,540);
INSERT into datavalues (axisdataid, value) VALUES (14,1252);
INSERT into datavalues (axisdataid, value) VALUES (14,4152);
INSERT into datavalues (axisdataid, value) VALUES (14,3232);
INSERT into datavalues (axisdataid, value) VALUES (14,3324);
INSERT into datavalues (axisdataid, value) VALUES (14,532);
INSERT into datavalues (axisdataid, value) VALUES (14,3220);
INSERT into datavalues (axisdataid, value) VALUES (14,231);
INSERT into datavalues (axisdataid, value) VALUES (14,1128);
INSERT into datavalues (axisdataid, value) VALUES (14,5129);
INSERT into datavalues (axisdataid, value) VALUES (14,530);
INSERT into datavalues (axisdataid, value) VALUES (14,2428);
INSERT into datavalues (axisdataid, value) VALUES (14,3123);