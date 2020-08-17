-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: product_reviews
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `item_name` varchar(50) NOT NULL,
  `average_stars` float DEFAULT NULL,
  `5_stars` int DEFAULT NULL,
  `4_stars` int DEFAULT NULL,
  `3_stars` int DEFAULT NULL,
  `2_stars` int DEFAULT NULL,
  `1_stars` int DEFAULT NULL,
  `total_stars` int DEFAULT NULL,
  `total_reviews` int DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,3,'\"Samsung QN43LS03T 43\"\" The Frame QLED 4K UHD Smar',4.05556,11,2,2,1,2,18,18),(2,3,'\"LG 24\"\" Class 720p 60Hz LED HDTV - 24LF454B\"',1.95833,1,1,4,NULL,NULL,12,12),(3,3,'\"VIZIO D-Series 40\"\" Class (39.50\"\" Diag.) 1080p F',2.66667,1,NULL,1,NULL,NULL,3,3),(4,3,'Apple AirPods Pro',1.9,NULL,NULL,2,NULL,NULL,5,5),(5,3,'Bose QuietComfort 35 Wireless Headphones II',3.16667,2,1,1,1,NULL,6,6),(6,3,'Bose SoundSport Free True Wireless Earbuds',3.33333,2,NULL,NULL,NULL,NULL,3,3),(7,3,'New Powerbeats Wireless Earphones',0.75,NULL,NULL,NULL,NULL,NULL,2,2),(8,3,'PlayStation 4 1TB Console',2.25,NULL,NULL,NULL,NULL,NULL,2,2),(9,3,'NBA 2K21: Mamba Forever Edition - PlayStation 4',0,NULL,NULL,NULL,NULL,NULL,1,1),(10,3,'Call of Duty: Modern Warfare - PlayStation 4',0,NULL,NULL,NULL,NULL,NULL,1,1),(11,3,'Cyberpunk 2077 - PlayStation 4',5,1,NULL,NULL,NULL,NULL,1,1),(12,3,'Marvel\'s Avengers - PlayStation 4',2.5,NULL,NULL,NULL,NULL,NULL,1,1),(13,3,'\"LG 27GN750-B 27 UltraGear 16:9 240Hz Full HD IPS ',5,1,NULL,NULL,NULL,NULL,1,1),(14,3,'\"HP 27\"\" LED Computer Monitor (X3W26AA_ABA)\"',3.5,NULL,NULL,NULL,NULL,NULL,1,1),(15,3,'\"HP 24\"\" LED Computer Monitor (1LU21AA_ABA)\"',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,3,'Thermaltake Riing Plus 14 RGB Software Enabled 140',5,1,NULL,NULL,NULL,NULL,1,1),(17,3,'Thermaltake Matrix Magnetic Fan Filter',1.5,NULL,NULL,NULL,NULL,NULL,1,1),(18,3,'TCL ALTO 5+ 2.1 Channel Sound Bar',4.5,NULL,NULL,NULL,NULL,NULL,1,1),(19,3,'Amazon Fire TV Stick with 4K Ultra HD Streaming Me',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,3,'Roku Streaming Stick+ Black (3810R)',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(50) DEFAULT NULL,
  `review_title` varchar(255) DEFAULT NULL,
  `review` varchar(1000) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `item_id` int DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `products` (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=202 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (2,'mrzwebb','surprised by the addition','My husband was very set on some solution for art to be shown in the house however it had to be a future solution. ',2.5,2,'2020-08-11 00:25:31'),(3,'Bjornvdm','\"The best 32\"\" TV i have bought since ages\"','This is great',5,3,'2020-08-11 00:25:31'),(4,'LeizN','The Art of my Samsung','\"Received and mounted my new Samsung Frame TV. TV is a bad moniker for this sophisticated and sleek device to stream media watch traditional TV\"',3.5,4,'2020-08-11 00:25:31'),(6,'Borat','Just over the top!','we purchased our retirement home because I want to',5,6,'2020-08-11 00:25:31'),(7,'EEProf ','Frame 32in can\'t turn off auto rotate','i have the 32in frame 2020 I mounted it portrait orientation the tv automatically switched the menu/layout to portrait mode (built in accelerometer) great. ',1.5,7,'2020-08-11 00:25:31'),(8,'JONATHAN ','Poor Soft lack memory \'my photo\' 500MB USB2.0','\"Concept great!! Implementation Poor. USB 2.0 port not able to display pictures directly and requires transfer to \'My Photo\' area limited to 500 MB space. App size is over half used my application that can\'t be deleted that are preloaded. Samsung needs to remove the limitations by allowing deletion of preloaded apps and allow use of the USB ports to display directly for My Photos images. If done then product would be recommended.\"',4.5,8,'2020-08-11 00:25:31'),(12,'mrzwebb','surprised by the addition','My husband was very set on some solution for art to be shown in the house however it had to be a future solution. ',2.5,12,'2020-08-11 00:25:31'),(13,'Bjornvdm','\"The best 32\"\" TV i have bought since ages\"','I wanted a tv that looked better in my new apartment',5,13,'2020-08-11 00:25:31'),(14,'LeizN','The Art of my Samsung','My husband was very set on some solution for art to be shown in the house however it had to be a future solution. ',3.5,14,'2020-08-11 00:25:31'),(16,'Steven','Just over the top!','\"Received and mounted my new Samsung Frame TV. TV is a bad moniker for this sophisticated and sleek device to stream media watch traditional TV\"',5,16,'2020-08-11 00:25:31'),(17,'EEProf ','Frame 32in can\'t turn off auto rotate','we just got our frame tv this past week.',1.5,17,'2020-08-11 00:25:31'),(18,'JONATHAN ','Poor Soft lack memory \'my photo\' 500MB USB2.0','we purchased our retirement home because I want to',4.5,18,'2020-08-11 00:25:31'),(21,'werw',NULL,NULL,NULL,NULL,'2020-08-11 00:25:31'),(22,'werw',NULL,NULL,NULL,NULL,'2020-08-11 00:25:31'),(23,'werw',NULL,NULL,NULL,NULL,'2020-08-11 00:25:31'),(24,'Rahul',NULL,NULL,NULL,NULL,'2020-08-11 00:25:31'),(25,'ewr','er','ewrwe',NULL,NULL,'2020-08-11 00:25:31'),(26,'MOMO','super cool','I love it',NULL,NULL,'2020-08-11 00:25:31'),(27,'MOMO','super cool','I love it',NULL,NULL,'2020-08-11 00:25:31'),(28,'MOMO','super cool','I love it',NULL,NULL,'2020-08-11 00:25:31'),(29,'Coffee lover','coffee is great','A great beverage to start your day',NULL,NULL,'2020-08-11 00:25:31'),(30,'yada','This is great','yada yada',NULL,NULL,'2020-08-11 00:25:31'),(31,'yada','This is great','yada yada',NULL,NULL,'2020-08-11 00:25:31'),(32,'cat','cat','cat',NULL,NULL,'2020-08-11 00:25:31'),(33,'werew','rwer','werwqerewr',NULL,NULL,'2020-08-11 00:25:31'),(34,'weqw','eqwe','qweeqwe',NULL,NULL,'2020-08-11 00:25:31'),(35,'weqw','eqwe','qweeqwe',NULL,NULL,'2020-08-11 00:25:31'),(36,'weqw','eqwe','qweeqwe',NULL,NULL,'2020-08-11 00:25:31'),(37,'weqw','eqwe','qweeqweer',NULL,NULL,'2020-08-11 00:25:31'),(38,'weqw','eqwe','qweeqweer',NULL,NULL,'2020-08-11 00:25:31'),(39,'weqw','eqwe','qweeqweer',NULL,NULL,'2020-08-11 00:25:31'),(40,'weqw','eqwe','qweeqweer',NULL,NULL,'2020-08-11 00:25:31'),(41,'wqewqe','wqewq','wqewewq',NULL,NULL,'2020-08-11 00:25:31'),(42,'wqewqe','wqewq','wqewewq',NULL,NULL,'2020-08-11 00:25:31'),(43,'','','',NULL,NULL,'2020-08-11 00:25:31'),(44,'','','',NULL,NULL,'2020-08-11 00:25:31'),(45,'','','',NULL,NULL,'2020-08-11 00:25:31'),(46,'','','',NULL,NULL,'2020-08-11 00:25:31'),(47,'data','data','data',NULL,NULL,'2020-08-11 00:26:27'),(48,'I am good','this is review','How about you',NULL,NULL,'2020-08-11 00:38:26'),(49,'','','',NULL,NULL,'2020-08-11 00:51:56'),(50,'','','',NULL,NULL,'2020-08-11 00:51:59'),(51,'','','',NULL,NULL,'2020-08-11 00:52:00'),(52,'','','',NULL,NULL,'2020-08-11 01:08:15'),(53,'','','',NULL,NULL,'2020-08-11 01:08:15'),(54,'','','',NULL,NULL,'2020-08-11 01:08:16'),(55,'Rahul','Adding star','Added start',NULL,NULL,'2020-08-11 01:20:02'),(56,'Rahul','Adding star','Added start',NULL,NULL,'2020-08-11 01:20:29'),(57,'Rahul','Adding star','Added start',NULL,NULL,'2020-08-11 01:21:12'),(58,'Rahul','Adding star','Added start',NULL,NULL,'2020-08-11 01:21:13'),(59,'Rahul','Adding star','Added start',NULL,NULL,'2020-08-11 01:21:15'),(60,'Rahul','Adding star','Added start',NULL,NULL,'2020-08-11 01:21:16'),(61,'dsfsdgh','sfdsa','dh',NULL,NULL,'2020-08-11 01:24:03'),(62,'sdf','sdf','wfrw',NULL,NULL,'2020-08-11 01:24:26'),(63,'ewre','erfew','undefined',NULL,NULL,'2020-08-11 01:26:45'),(64,'input','input','input',NULL,NULL,'2020-08-11 01:31:12'),(65,'rc','rc','rc',NULL,NULL,'2020-08-11 01:32:29'),(69,'','','',0,NULL,'2020-08-11 02:44:55'),(70,'','','',0,NULL,'2020-08-11 03:08:17'),(71,'','','',0,NULL,'2020-08-11 03:08:18'),(72,'qwe','eqwe','qweqwe',2,NULL,'2020-08-11 03:16:59'),(73,'qwe','eqwe','qweqwe',2,NULL,'2020-08-11 03:17:00'),(74,'','','',0,NULL,'2020-08-11 04:08:01'),(79,'fsdf','dfs','sdf',0,NULL,'2020-08-12 01:06:22'),(87,'','','',0,NULL,'2020-08-12 01:13:23'),(88,'ert','ert','ert',0,NULL,'2020-08-12 01:17:04'),(89,'ert','ert','ert',0,NULL,'2020-08-12 01:19:35'),(90,'','','',0,NULL,'2020-08-12 01:19:43'),(91,'','','',0,NULL,'2020-08-12 01:19:45'),(92,'','','',0,NULL,'2020-08-12 01:19:47'),(93,'','','',0,NULL,'2020-08-12 01:19:48'),(94,'','','',0,NULL,'2020-08-12 01:19:50'),(96,'asd','dasd','asd',0,NULL,'2020-08-12 02:28:02'),(99,'','','',0,NULL,'2020-08-12 02:32:07'),(100,'','','',0,NULL,'2020-08-12 02:41:29'),(101,'','','',0,NULL,'2020-08-12 02:42:16'),(102,'','','',0,NULL,'2020-08-12 02:44:54'),(103,'asdasd','dsad','asdasd',2,NULL,'2020-08-12 02:45:13'),(105,'erwt','45645','wertwertfdags',5,NULL,'2020-08-12 02:50:51'),(110,'','','',0,NULL,'2020-08-12 03:17:19'),(112,'fsdaf','fsadf','sdfs',5,NULL,'2020-08-12 03:17:36'),(113,'df','sdf','fdsaf',2,NULL,'2020-08-12 03:17:45'),(114,'','','',0,NULL,'2020-08-12 03:41:12'),(115,'made','rahul','this',5,NULL,'2020-08-12 03:44:03'),(116,'','','',0,NULL,'2020-08-12 03:44:53'),(117,'i','i','i',5,NULL,'2020-08-12 03:46:34'),(119,'werweqr','werwer','werweqr',3,NULL,'2020-08-12 03:55:51'),(120,'hello','hello','hello',0,NULL,'2020-08-12 04:20:33'),(121,'Rahul','rahul','rah',3,NULL,'2020-08-12 05:31:25'),(122,'dqw','sada','dqwd',4,NULL,'2020-08-12 05:44:53'),(123,'534','435','345',2,NULL,'2020-08-12 05:54:47'),(124,'3232','323','232',3,NULL,'2020-08-12 06:12:12'),(125,'rwer','erwer','werwe',5,NULL,'2020-08-12 06:14:04'),(126,'Rahul','rahul','rahul',0,2,'2020-08-12 06:19:09'),(128,'wassup','Very good product','I like it',3,3,'2020-08-12 06:20:45'),(130,'Homie','Excellent product','Cant take my eyes off',5,5,'2020-08-12 06:22:20'),(131,'cool','good','hello',4,5,'2020-08-12 06:23:14'),(136,'NetflixAndChill','Worst product I ever bought','Cant chill',1,1,'2020-08-12 06:34:31'),(138,'JustKiddin','I love it','REALLY???',1,1,'2020-08-12 06:36:00'),(139,'','qwewqe','qweqw',0,2,'2020-08-12 14:08:11'),(140,'fsf','dds','fsdf',3,2,'2020-08-12 14:10:40'),(143,'Noname','Impressive','Great display and sound quality',4,1,'2020-08-12 15:31:19'),(144,'qwe','ASDASD','QWEWQ',3,2,'2020-08-12 19:42:44'),(145,'qwe','ASDASD','QWEWQ',3,2,'2020-08-12 19:42:45'),(147,'SDFSD','ASDAS','DASD',3,2,'2020-08-12 19:49:24'),(150,'Rahul','I like the view','HAHA',5,6,'2020-08-13 04:06:36'),(151,'123','123','132',0,2,'2020-08-13 16:19:18'),(154,'','','',0,4,'2020-08-14 19:57:35'),(157,'Rahul','godd','dsfsadfsdaf',3,4,'2020-08-14 20:20:53'),(166,'qwe','weq','eqwe',3,4,'2020-08-14 20:22:56'),(168,'eqwe','weqw','eqwe',2,5,'2020-08-14 20:25:56'),(169,'','','',0,2,'2020-08-15 00:53:07'),(170,'gfgh','good','jfjyf',3,5,'2020-08-15 03:19:01'),(172,'','','',0,2,'2020-08-15 16:06:38'),(173,'new','new','new',4,2,'2020-08-17 03:53:49'),(174,'das','sdf','das',3,1,'2020-08-17 04:23:50'),(176,'dasd','swda','sdasd',5,1,'2020-08-17 04:53:59'),(178,'Rahul','rahul','rahul',5,1,'2020-08-17 04:55:51'),(179,'r','r','r',5,1,'2020-08-17 04:56:26'),(180,'','','',5,1,'2020-08-17 04:57:59'),(181,'p','p','p',5,1,'2020-08-17 05:03:05'),(182,'q','q','q',5,1,'2020-08-17 05:03:44'),(183,'','','',5,1,'2020-08-17 05:05:56'),(184,'','','',5,1,'2020-08-17 05:08:27'),(185,'','','',5,1,'2020-08-17 05:10:10'),(186,'pp','pp','pp',5,1,'2020-08-17 05:10:54'),(187,'8678','678','8678',5,5,'2020-08-17 05:15:18'),(188,'Rahul','rahul','tuyty',5,11,'2020-08-17 05:17:43'),(189,'98','rahul','-89',3,1,'2020-08-17 05:19:28'),(190,'','qweqw','',4,1,'2020-08-17 05:20:43'),(191,'','','',5,2,'2020-08-17 05:22:32'),(192,'','','',0,3,'2020-08-17 05:22:37'),(193,'','','',0,4,'2020-08-17 05:22:42'),(194,'','','',0,6,'2020-08-17 05:22:53'),(195,'','','',0,5,'2020-08-17 05:22:57'),(196,'','','',0,7,'2020-08-17 05:23:02'),(197,'','','',0,8,'2020-08-17 05:23:09'),(198,'','','',0,9,'2020-08-17 05:23:13'),(199,'','','',0,10,'2020-08-17 05:23:18'),(200,'','','',2,1,'2020-08-17 12:28:48'),(201,'','','',5,1,'2020-08-17 12:31:10');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-17  9:26:18
