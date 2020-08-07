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
  `item_rating` float DEFAULT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,3,'\"Samsung QN43LS03T 43\"\" The Frame QLED 4K UHD Smar',3),(2,3,'\"LG 24\"\" Class 720p 60Hz LED HDTV - 24LF454B\"',4),(3,3,'\"VIZIO D-Series 40\"\" Class (39.50\"\" Diag.) 1080p F',5),(4,3,'Apple AirPods Pro',2),(5,3,'Bose QuietComfort 35 Wireless Headphones II',4),(6,3,'Bose SoundSport Free True Wireless Earbuds',5),(7,3,'New Powerbeats Wireless Earphones',3),(8,3,'PlayStation 4 1TB Console',2),(9,3,'NBA 2K21: Mamba Forever Edition - PlayStation 4',1),(10,3,'Call of Duty: Modern Warfare - PlayStation 4',3),(11,3,'Cyberpunk 2077 - PlayStation 4',5),(12,3,'Marvel\'s Avengers - PlayStation 4',3),(13,3,'\"LG 27GN750-B 27 UltraGear 16:9 240Hz Full HD IPS ',0),(14,3,'\"HP 27\"\" LED Computer Monitor (X3W26AA_ABA)\"',5),(15,3,'\"HP 24\"\" LED Computer Monitor (1LU21AA_ABA)\"',2),(16,3,'Thermaltake Riing Plus 14 RGB Software Enabled 140',3),(17,3,'Thermaltake Matrix Magnetic Fan Filter',1),(18,3,'TCL ALTO 5+ 2.1 Channel Sound Bar',3),(19,3,'Amazon Fire TV Stick with 4K Ultra HD Streaming Me',4),(20,3,'Roku Streaming Stick+ Black (3810R)',5);
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
  PRIMARY KEY (`review_id`),
  KEY `item_id` (`item_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `products` (`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Mandamermaid','Pretty cool tv','I wanted a tv that looked better in my new apartment',3,1),(2,'mrzwebb','surprised by the addition','My husband was very set on some solution for art to be shown in the house however it had to be a future solution. ',2.5,2),(3,'Bjornvdm','\"The best 32\"\" TV i have bought since ages\"','This is great',5,3),(4,'LeizN','The Art of my Samsung','\"Received and mounted my new Samsung Frame TV. TV is a bad moniker for this sophisticated and sleek device to stream media watch traditional TV\"',3.5,4),(5,'Art Loving Family ','Art Mode is Amazing! (the kids love it!)','we just got our frame tv this past week.',4,5),(6,'Borat','Just over the top!','we purchased our retirement home because I want to',5,6),(7,'EEProf ','Frame 32in can\'t turn off auto rotate','i have the 32in frame 2020 I mounted it portrait orientation the tv automatically switched the menu/layout to portrait mode (built in accelerometer) great. ',1.5,7),(8,'JONATHAN ','Poor Soft lack memory \'my photo\' 500MB USB2.0','\"Concept great!! Implementation Poor. USB 2.0 port not able to display pictures directly and requires transfer to \'My Photo\' area limited to 500 MB space. App size is over half used my application that can\'t be deleted that are preloaded. Samsung needs to remove the limitations by allowing deletion of preloaded apps and allow use of the USB ports to display directly for My Photos images. If done then product would be recommended.\"',4.5,8),(9,'karen ','One caveat','Excellent except had to get HDMI extender to resolve overheating issue',4,9),(10,'Tonyea','Very easy setup I love the device for my TV','The streaming stick with very easy to set up on my TV. The only problem I found with it is the remote does not power my TV on or off and it does not increase or decrease my volume. The streaming device told me that it would not be able to control my volume. Is this common?',3,10),(11,'Mandamermaid','Pretty cool tv','I wanted a tv that looked better in my new',3,11),(12,'mrzwebb','surprised by the addition','My husband was very set on some solution for art to be shown in the house however it had to be a future solution. ',2.5,12),(13,'Bjornvdm','\"The best 32\"\" TV i have bought since ages\"','I wanted a tv that looked better in my new apartment',5,13),(14,'LeizN','The Art of my Samsung','My husband was very set on some solution for art to be shown in the house however it had to be a future solution. ',3.5,14),(15,'Art Loving Family ','Art Mode is Amazing! (the kids love it!)','This is great',4,15),(16,'Steven','Just over the top!','\"Received and mounted my new Samsung Frame TV. TV is a bad moniker for this sophisticated and sleek device to stream media watch traditional TV\"',5,16),(17,'EEProf ','Frame 32in can\'t turn off auto rotate','we just got our frame tv this past week.',1.5,17),(18,'JONATHAN ','Poor Soft lack memory \'my photo\' 500MB USB2.0','we purchased our retirement home because I want to',4.5,18),(19,'karen ','One caveat','i have the 32in frame 2020 I mounted it portrait orientation the tv automatically switched the menu/layout to portrait mode (built in accelerometer) great. ',4,19),(20,'Tonyea','Very easy setup I love the device for my TV','\"Concept great!! Implementation Poor. USB 2.0 port not able to display pictures directly and requires transfer to \'My Photo\' area limited to 500 MB space. App size is over half used my application that can\'t be deleted that are preloaded. Samsung needs to remove the limitations by allowing deletion of preloaded apps and allow use of the USB ports to display directly for My Photos images. If done then product would be recommended.\"',3,20);
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

-- Dump completed on 2020-08-07 12:52:27
