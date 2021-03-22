PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;

CREATE TABLE ITEM_DIET ( 
item_id        VARCHAR (6) NOT NULL, 
Diet_code      VARCHAR (6) NOT NULL, 
FOREIGN KEY (item_id) REFERENCES MENU(Item_id), 
FOREIGN KEY (Diet_code) REFERENCES DIETARY_PROVISION(Diet_code));

CREATE TABLE MENU ( 
Item_id        VARCHAR(6) PRIMARY KEY, 
Item_name      VARCHAR(50), 
Description    VARCHAR (250), 
Category_id    VARCHAR(20), 
Price          FLOAT, 
FOREIGN KEY (Category_id) REFERENCES CATEGORY(Category_id));


CREATE TABLE DIETARY_PROVISIONS ( 
Diet_code VARCHAR (6) PRIMARY KEY, 
Name      VARCHAR (50));

CREATE TABLE ORDER_DETAILS ( 
Order_number   INT PRIMARY KEY,   
Item_id        VARCHAR(6), 
QUANTITY       INT, 
SUBTOTAL       FLOAT, 
FOREIGN KEY (Order_number) REFERENCES ORDERS(Order_number), 
FOREIGN KEY (Item_id ) REFERENCES MENU(Item_id ));


CREATE TABLE STAFF ( 
Staff_id       VARCHAR (6) PRIMARY KEY,   
Title          VARCHAR (15), 
First_name     VARCHAR (9), 
Surname        VARCHAR (20), 
Address        VARCHAR (100), 
Phone_no       INTEGER, 
Email          VARCHAR (100));


CREATE TABLE LOGIN ( 
Username       VARCHAR (6) NOT NULL PRIMARY KEY, 
Password       VARCHAR (6) NOT NULL, 
Staff_id       VARCHAR (6) , 
LoginStatus    VARCHAR (6) NOT NULL, 
FOREIGN KEY (Staff_id  ) REFERENCES STAFF(Staff_id));


CREATE TABLE CUSTOMER( 
Customer_id     int  PRIMARY KEY, 
First_Name      VARCHAR(50), 
TableNumber     VARCHAR (5), 
Email           VARCHAR(100));


CREATE TABLE ORDERS( 
Order_number     INT PRIMARY KEY, 
ORDER_Date       Date, 
Time             Time, 
TableNumber      VARCHAR(5), 
Order_Completed  VARCHAR(5), 
Staff_id         VARCHAR(6), 
Customer_id      int, 
FOREIGN KEY (Staff_id) REFERENCES STAFF (Staff_id), 
FOREIGN KEY (Customer_id ) REFERENCES CUSTOMER (Customer_id ));

CREATE TABLE CATEGORY( 
Category_id        VARCHAR (20) PRIMARY KEY, 
Name              VARCHAR (15));


INSERT INTO DIETARY_PROVISIONS VALUES('V','Vegan');
INSERT INTO DIETARY_PROVISIONS VALUES('VN','Vegetarian');
INSERT INTO DIETARY_PROVISIONS VALUES('PN','Pescatarian');
INSERT INTO DIETARY_PROVISIONS VALUES('NF','Nut free');
INSERT INTO DIETARY_PROVISIONS VALUES('EF','Egg Free');
INSERT INTO DIETARY_PROVISIONS VALUES('LF','Lactose Free');
INSERT INTO DIETARY_PROVISIONS VALUES('N','No provisions');

INSERT INTO ITEM_DIET VALUES('M001','LF');
INSERT INTO ITEM_DIET VALUES('M002','N');
INSERT INTO ITEM_DIET VALUES('M003','N');
INSERT INTO ITEM_DIET VALUES('M004',' N');
INSERT INTO ITEM_DIET VALUES('M006','PN');
INSERT INTO ITEM_DIET VALUES('M007','V');
INSERT INTO ITEM_DIET VALUES('M007','VN');
INSERT INTO ITEM_DIET VALUES('M008','V');
INSERT INTO ITEM_DIET VALUES('M009','PN');
INSERT INTO ITEM_DIET VALUES('M010','N');
INSERT INTO ITEM_DIET VALUES('M011','PN');
INSERT INTO ITEM_DIET VALUES('M012','N');
INSERT INTO ITEM_DIET VALUES('M013','N');
INSERT INTO ITEM_DIET VALUES('M014','PN');
INSERT INTO ITEM_DIET VALUES('M015','V');
INSERT INTO ITEM_DIET VALUES('M101','N');
INSERT INTO ITEM_DIET VALUES('M102','N');
INSERT INTO ITEM_DIET VALUES('M103','N');
INSERT INTO ITEM_DIET VALUES('M104','N');
INSERT INTO ITEM_DIET VALUES('M105','N');
INSERT INTO ITEM_DIET VALUES('M106','PN');
INSERT INTO ITEM_DIET VALUES('M107','VN');
INSERT INTO ITEM_DIET VALUES('M108','VN');
INSERT INTO ITEM_DIET VALUES('M109','PN');
INSERT INTO ITEM_DIET VALUES('M110','N');
INSERT INTO ITEM_DIET VALUES('M111','N');
INSERT INTO ITEM_DIET VALUES('M112','N');
INSERT INTO ITEM_DIET VALUES('M113','N');
INSERT INTO ITEM_DIET VALUES('M114','N');
INSERT INTO ITEM_DIET VALUES('M115','N');
INSERT INTO ITEM_DIET VALUES('M116','N');
INSERT INTO ITEM_DIET VALUES('M117','N');
INSERT INTO ITEM_DIET VALUES('M118','N');
INSERT INTO ITEM_DIET VALUES('M119','N');
INSERT INTO ITEM_DIET VALUES('M120','N');
INSERT INTO ITEM_DIET VALUES('M121','PN');
INSERT INTO ITEM_DIET VALUES('M122','PN');
INSERT INTO ITEM_DIET VALUES('M123',' PN');
INSERT INTO ITEM_DIET VALUES('M124',' PN');
INSERT INTO ITEM_DIET VALUES('M125',' PN');
INSERT INTO ITEM_DIET VALUES('M126',' N');
INSERT INTO ITEM_DIET VALUES('M127',' N');
INSERT INTO ITEM_DIET VALUES('M128',' N');
INSERT INTO ITEM_DIET VALUES('M129',' N');
INSERT INTO ITEM_DIET VALUES('M130',' N');
INSERT INTO ITEM_DIET VALUES('M131',' N');
INSERT INTO ITEM_DIET VALUES('M132',' N');
INSERT INTO ITEM_DIET VALUES('M133',' N');
INSERT INTO ITEM_DIET VALUES('M134',' N');
INSERT INTO ITEM_DIET VALUES('M135',' V');
INSERT INTO ITEM_DIET VALUES('M136',' N');
INSERT INTO ITEM_DIET VALUES('M137',' VN');
INSERT INTO ITEM_DIET VALUES('M138',' V');
INSERT INTO ITEM_DIET VALUES('M139',' VN');
INSERT INTO ITEM_DIET VALUES('M140',' V');

INSERT INTO MENU VALUES('M001','Sticky Chicken Wings','Glazed in BBQ sauce.','Starter',4.95);
INSERT INTO MENU VALUES('M002','Crackerjack Prawns','With Sweet n Sour sauce','Starter',5.95);
INSERT INTO MENU VALUES('M003','Nachos','With cheese sauce, guacamole, salsa, sour cream and jalapenos','Starter',4.95);
INSERT INTO MENU VALUES('M004','Breaded Mushrooms','With garlic mayo dip','Starter',3.95);
INSERT INTO MENU VALUES('M005','Fresh Atlantic Crab claws','With honey marinated dipping sauce','Starter',5.95);
INSERT INTO MENU VALUES('M006','Voodoo Jumbo Shrimp','With voodoo sauce and blue cheese dipping sauce','Starter',5.50);
INSERT INTO MENU VALUES('M007','Deep Fried Jumbo Shrimp','With garlic mayo dip','Starter',5.95);
INSERT INTO MENU VALUES('M010','Golden Chicken Tenders','With honey mustard dipping sauce','Starter',4.95);
INSERT INTO MENU VALUES('M009','Fresh Steamed Mussels','With garlic mayo dip','Starter',3.95);
INSERT INTO MENU VALUES('M011','Colossal Organic Shrimp','With a zesty cocktail sauce and a lemon wedge','Starter',5.95);
INSERT INTO MENU VALUES('M012','Roasted Crisp Potato Skins','With sour cream and spring onions','Starter',2.95);
INSERT INTO MENU VALUES('M013','Stuffed Jalapeno Peppers','With cream cheese','Starter',2.95);
INSERT INTO MENU VALUES('M014','Deep Fried Calamari','With deep fried Tempura and Tartar sauce','Starter',3.95);
INSERT INTO MENU VALUES('M015','Vegan Spring Rolls','Hand rolled and indulgently deep-fried wheat pastry filled with sweet cabbage','Starter',2.95);
INSERT INTO MENU VALUES('M106','Fish Burger','A Cod fillet, inside a a toasted bun ','Main',5.5);
INSERT INTO MENU VALUES('M107','Veggie Burger','A Spiced chipotle vegan bean burger topped with mushroom, ','Main',4.50);
INSERT INTO MENU VALUES('M109','Simple Salmon','A grilled salmon fillet with green vegetables and a rich butter sauce ','Main',7.00);
INSERT INTO MENU VALUES('M108','Quorn Burger','A Grilled Quorn fillet with cheese sauce in a toasted bun ','Main',6.00);
INSERT INTO MENU VALUES('M110','Quarter BBQ Chicken','Smoked original Bar B Q style and finished over coal','Main',6.00);
INSERT INTO MENU VALUES('M111','Half BBQ Chicken','Smoked original Bar B Q style and finished over coal','Main',8.00);
INSERT INTO MENU VALUES('M112','Whole BBQ Chicken','Smoked original Bar B Q style and finished over coal','Main',12.00);
INSERT INTO MENU VALUES('M113','HALF RACK Smoked Baby Back Ribs','Hand Trimmed slow smoked over hickory wood served with Bar B Q sauce','Main',8.95);
INSERT INTO MENU VALUES('M115','Bar B Q Ribs and Chicken','Half a Slab of Baby back Ribs and Quarter Bar B Q Chicken','Main',13.95);
INSERT INTO MENU VALUES('M116','Ribs, Chicken and Shrimp','Half a Slab of Baby back Ribs and Quarter Bar B Q Chicken and a Jumbo Shrimp','Main',16.95);
INSERT INTO MENU VALUES('M117','Bar B Q Ribs and Shrimp','Full Rack of Baby back Ribs and Jumbo Shrimp','Main',12.95);
INSERT INTO MENU VALUES('M118','Half Bar B Q Chicken and Shrimp','Jumbo Shrimp and Quarter Bar B Q Chicken','Main',13.95);
INSERT INTO MENU VALUES('M119','Bar B Q Ribs and Chicken','Half a Slab of Baby back Ribs and Quarter Bar B Q Chicken','Main',12.95);
INSERT INTO MENU VALUES('M120','Bar B Q Blowout for 2','Full Rack of Baby back Ribs and Half Bar B Q Chicken Jumbo Shrimp and French Fries','Main',18.95);
INSERT INTO MENU VALUES('M121','Half Lobster Tail','Half Lobster Tail with Potatoes and Garlic Cream','Main',19.95);
INSERT INTO MENU VALUES('M122','Whole Lobster Tail','Whole Lobster Tail with Potatoes and Garlic Butter','Main',20.95);
INSERT INTO MENU VALUES('M123','Whole Giant Shrimp','With Garlic Butter','Main',12.95);
INSERT INTO MENU VALUES('M124','Whole Atlantic Crab','Steamed with Garlic Butter','Main',13.95);
INSERT INTO MENU VALUES('M125','Sea Food Combo','Half Lobster Tail with Crab Claws Mussels Clams Shrimp and Potatoes','Main',25.50);
INSERT INTO MENU VALUES('M127','Bar B Q Brisket Sandwick','Premium Beef Slow Smoked with BBQ sauce and topped with Sweet Pickle','Main',9.95);
INSERT INTO MENU VALUES('M128','Rump Steak','Served with French fries or rice and salad or coleslaw','Main',12.0);
INSERT INTO MENU VALUES('M129','T Bone Steak','Served with French fries or rice and salad or coleslaw','Main',13.00);
INSERT INTO MENU VALUES('M130','House Steak','Served with French fries or rice and salad or coleslaw','Main',9.00);
INSERT INTO MENU VALUES('M131','Sirloin Steak','Served with French fries or rice and salad or coleslaw','Main',16.0);
INSERT INTO MENU VALUES('M132','Ribeye Steak','Served with French fries or rice and salad or coleslaw','Main',18.00);
INSERT INTO MENU VALUES('M133','Filet Steak','Served with French fries or rice and salad or coleslaw','Main',30.00);
INSERT INTO MENU VALUES('M134','Lamb Steak','Served with French fries or rice and salad or coleslaw','Main',14.95);
INSERT INTO MENU VALUES('M136',' Lamb Cutlets','Served with French fries or rice and salad or coleslaw','Main',13.95);
INSERT INTO MENU VALUES('M137','Roasted Mixed Veg','Served with Olives and Pasta Salad','Main',11.95);
INSERT INTO MENU VALUES('M138','Vegan Pizza','Served with Olives and Pasta Salad','Main',12.0);
INSERT INTO MENU VALUES('M140','Chickpea Pot Roast','Served with Verduras Con Olivada','Main',11.00);
INSERT INTO MENU VALUES('M201','Apple pie','Apple pie, served hot with your choice of real dairy ice cream, custard or fluffy cream.','Dessert',4.95);
INSERT INTO MENU VALUES('M202','Chocolate fudge cake','With Belgian chocolate sauce and real dairy ice cream','Dessert',4.95);
INSERT INTO MENU VALUES('M203','Treacle Sponge','With your choice of real dairy ice cream, custard or fluffy cream','Dessert',4.95);
INSERT INTO MENU VALUES('M204','Vanilla cheesecake','Topped with strawberry compote and served with fluffy cream','Dessert',4.95);
INSERT INTO MENU VALUES('M205','Chocolate Sponge','With your choice of real dairy ice cream, custard or fluffy cream','Dessert',4.95);
INSERT INTO MENU VALUES('M206','Apple Crumble','With your choice of real dairy ice cream, custard or fluffy cream','Dessert',4.95);
INSERT INTO MENU VALUES('M207','Baked Pear','With your choice of real dairy or custard','Dessert',4.95);
INSERT INTO MENU VALUES('M208','Maple and Caramelised Bacon Ice Cream','With your choice of real dairy ice cream, custard or fluffy cream','Dessert',4.95);
INSERT INTO MENU VALUES('M209','Banana Cream Pie','With your choice of real dairy ice cream, custard or fluffy cream','Dessert',4.95);
INSERT INTO MENU VALUES('M210','Exotic Fresh Fruit Platter','With your choice of real dairy ice cream, custard or fluffy cream','Dessert',4.95);
INSERT INTO MENU VALUES('M211','Ice Cream Sundae','With vanilla ice cream and chocolate sauce','Dessert',4.95);
INSERT INTO MENU VALUES('M301','Coke','330ml','Drinks',1.60);
INSERT INTO MENU VALUES('M302','Lemonade','330ml','Drinks',1.50);
INSERT INTO MENU VALUES('M303','Fanta','330ml','Drinks',1.50);
INSERT INTO MENU VALUES('M304','Fruit Juice','330ml','Drinks',1.75);
INSERT INTO MENU VALUES('M306','Apple Juice','330ml','Drinks',1.00);
INSERT INTO MENU VALUES('M307','Orange Juice','330ml','Drinks',1.00);
INSERT INTO MENU VALUES('M308','Pineapple Juice','330ml','Drinks',1.00);
INSERT INTO MENU VALUES('M309','Mineral Water','330ml','Drinks',1.60);
INSERT INTO MENU VALUES('M310','Fizzy Water','330ml','Drinks',1.60);
INSERT INTO MENU VALUES('M311','Hot Chocolate','330ml','Drinks',2.50);
INSERT INTO MENU VALUES('M312','Tea','330ml','Drinks',2.50);
INSERT INTO MENU VALUES('M313','Coffee','330ml','Drinks',2.50);
INSERT INTO MENU VALUES('M314','Ice Tea','330ml','Drinks',1.60);
INSERT INTO MENU VALUES('M315','Diet Coke','330ml','Drinks',1.60);
INSERT INTO MENU VALUES('M316','Strawberry Daiquiri','Bacardi Carta Blanca, Green Charttreuse, Strawberry and Lime ','Drinks',7.90);
INSERT INTO MENU VALUES('M317','Margarita- different flavours available',' Gold Tequila Blended with Fresh Lime and Triple Sec','Drinks',7.90);
INSERT INTO MENU VALUES('M318','Mojito','White Rum Blended with Fresh Lime and Mixed with Infused Minty Syrup',' Drinks',7.90);
INSERT INTO MENU VALUES('M319','Pina Colada','Rum, Tropical Coconut Cream and Frersh Pineapple Juice','Drinks',1.60);
INSERT INTO MENU VALUES('M320','Miami Vice','Strawberry Daiquiri on top pf a Pina Colada','Drinks',1.60);
INSERT INTO MENU VALUES('M008','Voodoo Chicken Wings','With voodoo sauce and blue cheese dipping','Starter',5.95);
INSERT INTO MENU VALUES('M101','Hamburger','A tender  inside a toasted bun','Main',3.00);
INSERT INTO MENU VALUES('M102','Cheese Burger','A tender inside a toasted bun with a single slice of mature cheese','Main',4.00);
INSERT INTO MENU VALUES('M139','Vegetarian Nut Roast','Served with Pepper Potatoes and Tofu Salad','Main',14.95);
INSERT INTO MENU VALUES('M135','Vegan Steak','Served with French fries or rice and salad or coleslaw','Main',12.95);
INSERT INTO MENU VALUES('M126','Pulled Pork Sandwich','Smoked Low and Slow Hand Pulled pork with French fries','Main',7.95);
INSERT INTO MENU VALUES('M114','FULL RACK Smoked Baby Back Ribs','Hand Trimmed slow smoked over hickory wood served with Bar B Q sauce','Main',11.95);
INSERT INTO MENU VALUES('M105','Chicken Burger','A chicken breast fillet inside a toasted bun','Main',5.50);
INSERT INTO MENU VALUES('M104','Double Cheese Burger','2 tender beef patties inside a toasted bun with 2 slices of mature cheese','Main',5.00);
INSERT INTO MENU VALUES('M103','Double Hamburger','2 tender beef patties inside a toasted','Main',4.00);


INSERT INTO ORDER_DETAILS VALUES(1,'M001',2,9.50);
INSERT INTO ORDER_DETAILS VALUES(2,'M102',2,8.00);
INSERT INTO ORDER_DETAILS VALUES(3,'M101',1,3.00);
INSERT INTO ORDER_DETAILS VALUES(4,'M203',1,4.95);
INSERT INTO ORDER_DETAILS VALUES(5,'M301',3,1.60);
INSERT INTO ORDER_DETAILS VALUES(6,'M104',2,10.0);
INSERT INTO ORDER_DETAILS VALUES(7,'M102',2,8.00);
INSERT INTO ORDER_DETAILS VALUES(8,'M108',2,12.00);
INSERT INTO ORDER_DETAILS VALUES(9,'M302',2,3.00);
INSERT INTO ORDER_DETAILS VALUES(10,'M301',2,3.20);
INSERT INTO ORDER_DETAILS VALUES(11,'M107',3,13.50);
INSERT INTO ORDER_DETAILS VALUES(12,'M140',1,11.00);
INSERT INTO ORDER_DETAILS VALUES(13,'M139',1,14.95);
INSERT INTO ORDER_DETAILS VALUES(14,'M301',1,1.60);
INSERT INTO ORDER_DETAILS VALUES(15,'M207',1,4.95);
INSERT INTO ORDER_DETAILS VALUES(16,'M317',1,7.90);
INSERT INTO ORDER_DETAILS VALUES(17,'M316',1,7.90);
INSERT INTO ORDER_DETAILS VALUES(18,'M211',2,9.50);
INSERT INTO ORDER_DETAILS VALUES(19,'M132',1,18.00);
INSERT INTO ORDER_DETAILS VALUES(20,'M134',1,14.95);
INSERT INTO ORDER_DETAILS VALUES(21,'M124',1,13.95);
INSERT INTO ORDER_DETAILS VALUES(22,'M123',1,12.95);
INSERT INTO ORDER_DETAILS VALUES(23,'M316',1,7.90);
INSERT INTO ORDER_DETAILS VALUES(24,'M125',1,25.50);
INSERT INTO ORDER_DETAILS VALUES(25,'M127',1,9.95);
INSERT INTO ORDER_DETAILS VALUES(26,'M136',1,13.95);
INSERT INTO ORDER_DETAILS VALUES(27,'M137',2,23.90);
INSERT INTO ORDER_DETAILS VALUES(28,'M001',1,4.95);
INSERT INTO ORDER_DETAILS VALUES(29,'M002',1,4.95);
INSERT INTO ORDER_DETAILS VALUES(30,'M201',1,4.95);
INSERT INTO ORDER_DETAILS VALUES(31,'M204',1,4.95);
INSERT INTO ORDER_DETAILS VALUES(32,'M206',1,4.95);
INSERT INTO ORDER_DETAILS VALUES(33,'M105',1,5.50);
INSERT INTO ORDER_DETAILS VALUES(34,'M102',1,4.00);
INSERT INTO ORDER_DETAILS VALUES(35,'M101',1,3.00);
INSERT INTO ORDER_DETAILS VALUES(36,'M301',1,1.60);
INSERT INTO ORDER_DETAILS VALUES(37,'M302',1,1.50);
INSERT INTO ORDER_DETAILS VALUES(38,'M309',1,1.60);
INSERT INTO ORDER_DETAILS VALUES(39,'M310',1,1.60);
INSERT INTO ORDER_DETAILS VALUES(40,'M311',2,5.00);

 
INSERT INTO STAFF VALUES('ST001','Mr','Trevor','Gibbons','56 Jacob street, London',7743345211,'Trevor.gibbons1@live.com');
INSERT INTO STAFF VALUES('ST002','Miss','Taylor','Crayne','9a Streatham high road, London',7986786478,'Taylorcrayne@icloud.com');
INSERT INTO STAFF VALUES('ST003','Miss','Natasha','Bowler','165 Abercorn road, London',7723677980,'N.Bowler@icloud.com');
INSERT INTO STAFF VALUES('ST004','Miss','Daniella','Dixon','3 Thornton road, London',7949098435,'Dandixon34@aol.com');
INSERT INTO STAFF VALUES('ST005','Mr','Jamie','Wise','31 Aberfoyle Road, London',7946502938,'MrJamieWise@hotmail.com');
INSERT INTO STAFF VALUES('ST006','Miss','Donzaleigh','Wilson','3 Derinton street, London',7723405968,'D.Wilson@icloud.com');
INSERT INTO STAFF VALUES('ST007','Mr','Carter','Walker','1 Downing street, London',7861307748,'CartierCarter3@live.com');
INSERT INTO STAFF VALUES('ST008','Mr','Atlas','Walker','23 Lessingham Avenue, London',7963726152,'MapsOnMaps@hotmail.com');
INSERT INTO STAFF VALUES('ST009','Miss','Dior','Williams','312a Green Lane, London',7415307283,'Dior3060@outlook.com');
INSERT INTO STAFF VALUES('ST010','Mr','Christian','Osborne','77 Granton Road, London',7961509483,'ChristianDiorDior@aol.com');
INSERT INTO STAFF VALUES('ST011','Dr','Davion','Beaker','192 Pontin high street, London',7890568900,'davion.beaker@gmail.com');
INSERT INTO STAFF VALUES('ST012','Miss','Simone','Dallas','61C Greenfield lane, Croydon',7890444231,'dallassimone@icloud.com');
INSERT INTO STAFF VALUES('ST013','Mrs','Jayde','Fagan','23 Eldertree Road, London',2034569087,'jaydefagan22@aol.com');
INSERT INTO STAFF VALUES('ST014','Mr','Steven','Gold','64 Moyser Road, Croydon',7985412567,'goldiesteven@hotmail.com');
INSERT INTO STAFF VALUES('ST015','Mr','Joshua','Marks','1009 East street, London',2085188756,'Josh.mark@gmail.com');
INSERT INTO STAFF VALUES('ST016','Miss','Caroline','Summer','312 Putney Bridge road, London',7986345212,'summercaroline@aol.com');
INSERT INTO STAFF VALUES('ST017','Mr','Anton','Bell','66a Charles Drive, London',7898473909,'A.Bell@hotmail.com');
INSERT INTO STAFF VALUES('ST018','Mr','Nathaniel','Hewitt','161a London Drive, London',748951909,'Nathan.Hewitt@hotmail.com');
INSERT INTO STAFF VALUES('ST019','Mrs','Holly','Michaels','66a Mayor Street, London',7172873909,'mrsmichaels2@live.com');
INSERT INTO STAFF VALUES('ST020','Miss','Jane','Halloway','12 Jones close, London',7789563909,'Hollowaypretty1@icloud.com');

INSERT INTO LOGIN VALUES('TBlock123','djkfik4e9rtj','ST001','HIGH');
INSERT INTO LOGIN VALUES('T.Crayne90210','BrainyCraynie','ST002','LOW');
INSERT INTO LOGIN VALUES('Natasha_Bowler12','BashyTashy','ST003','LOW');
INSERT INTO LOGIN VALUES('Danie.Dixon','DD12345678','ST004','HIGH');
INSERT INTO LOGIN VALUES('Mr_J_Wise','Dragon29','ST005','HIGH');
INSERT INTO LOGIN VALUES('D.Wilson60','Adjkfghjr94343','ST006','LOW');
INSERT INTO LOGIN VALUES('Handsome123','Qdjkfi84e3','ST007','LOW');
INSERT INTO LOGIN VALUES('GoodLooks123','123djfirjgf','ST008','HIGH');
INSERT INTO LOGIN VALUES('CutteyDD','938SFGHH','ST009','HIGH');
INSERT INTO LOGIN VALUES('ChristianD15','D69Gkld8dn','ST010','HIGH');
INSERT INTO LOGIN VALUES('XOMAN290','J345hfjd@$','ST011','LOW');
INSERT INTO LOGIN VALUES('NappilyEverAfter','XXXLOVEXXX','ST012','HIGH');
INSERT INTO LOGIN VALUES('','ZABGKFO345','ST013','HIGH');
INSERT INTO LOGIN VALUES('SteveGold123','ODJFV$%&*32','ST014','LOW');
INSERT INTO LOGIN VALUES('JoshyMarks25','LOPEXZ34958','ST015','LOW');
INSERT INTO LOGIN VALUES('Car_Summer','DFJFZXC£%^&','ST016','HIGH');
INSERT INTO LOGIN VALUES('A_Bell29487','KDLSICMF£$%^','ST017','LOW');
INSERT INTO LOGIN VALUES('Nath_39585','DEPPIMPACT45','ST018','LOW');
INSERT INTO LOGIN VALUES('HollyMicksNIG','HLHJF$^^%$3r4','ST019','LOW');
INSERT INTO LOGIN VALUES('Hollaway1234','KVJSR394578DE','ST020','LOW');

INSERT INTO CUSTOMER VALUES(1,'Jimmy Chops','4','jimmy.chops@email.co.uk');
INSERT INTO CUSTOMER VALUES(2,'Andrew McMannus','2','a.mcmannus@email.com');
INSERT INTO CUSTOMER VALUES(3,'Elizabeth Phillips','6','e.m.phillips@email.org');
INSERT INTO CUSTOMER VALUES(4,'Alexis McRonald','9','alexis153@email.com');
INSERT INTO CUSTOMER VALUES(5,'Francesca Flapjack','1','fflapjack@email.com');
INSERT INTO CUSTOMER VALUES(6,'Bert Maclin','3','b.maclin@email.gov');
INSERT INTO CUSTOMER VALUES(7,'Paris Geller','1','p.geller@email.com');
INSERT INTO CUSTOMER VALUES(8,'Rory Gilmore','7','rory.gilmore@email.co.uk');
INSERT INTO CUSTOMER VALUES(9,'Franky Benny','10','f.benny928@email.com');
INSERT INTO CUSTOMER VALUES(10,'Mitchum Ketchup','4','m.e.ketchup@email.org');

INSERT INTO ORDERS VALUES(1,2002,'19:15:00','4','1','ST001',1);
INSERT INTO ORDERS VALUES(2,2002,'18:30:00','2','1','ST002',2);
INSERT INTO ORDERS VALUES(3,2001,'16:15:00','6','0','ST003',3);
INSERT INTO ORDERS VALUES(4,2000,'15:00:00','9','1','ST004',4);
INSERT INTO ORDERS VALUES(5,2000,'14:00:00','1','0','ST005',5);
INSERT INTO ORDERS VALUES(6,2000,'10:15:00','3','0','ST006',6);
INSERT INTO ORDERS VALUES(7,2000,'17:30:00','1','0','ST007',7);
INSERT INTO ORDERS VALUES(8,1999,'13:00:00','7','1','ST008',8);
INSERT INTO ORDERS VALUES(9,1999,'12:45:00','10','0','ST009',9);
INSERT INTO ORDERS VALUES(10,1998,'12:30:00','4','1','ST010',10);

COMMIT;
