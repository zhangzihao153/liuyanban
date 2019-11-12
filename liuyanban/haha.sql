/*
SQLyog Enterprise - MySQL GUI v6.15
MySQL - 5.0.45-community-nt : Database - message55
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

create database if not exists `message55`;

USE `message55`;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `admins` */

DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
  `adminld` int(11) NOT NULL auto_increment,
  `adminName` varchar(20) collate utf8_unicode_ci NOT NULL,
  `adminPwd` varchar(50) collate utf8_unicode_ci NOT NULL,
  `adminPhone` varchar(20) collate utf8_unicode_ci NOT NULL,
  PRIMARY KEY  (`adminld`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `admins` */

insert  into `admins`(`adminld`,`adminName`,`adminPwd`,`adminPhone`) values (1,'tom','123','15383232252'),(2,'susan','123456','1531057325');

/*Table structure for table `message` */

DROP TABLE IF EXISTS `message`;

CREATE TABLE `message` (
  `messageId` int(11) NOT NULL auto_increment,
  `author` varchar(20) collate utf8_unicode_ci NOT NULL,
  `title` varchar(100) collate utf8_unicode_ci NOT NULL,
  `content` varchar(500) collate utf8_unicode_ci NOT NULL,
  `face` char(10) collate utf8_unicode_ci NOT NULL,
  `reply` varchar(200) collate utf8_unicode_ci NOT NULL default '',
  `addTime` datetime default NULL,
  PRIMARY KEY  (`messageId`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `message` */

insert  into `message`(`messageId`,`author`,`title`,`content`,`face`,`reply`,`addTime`) values (68,'杜甫','古诗','1234567890','1.gif','123','2019-11-12 09:03:10'),(69,'张子豪','啊飒飒的','驱蚊器签伪签伪味去额未全额委屈味去我而且','1.gif','11111111111','2019-11-12 09:38:43'),(70,'是撒旦发射点','撒旦士大夫vvvv','vvvvvvvvvvvvvvvv','1.gif','123123123333333333','2019-11-12 09:47:27'),(71,'哇哇哇哇哇哇哇哇哇哇哇','嗡嗡嗡嗡嗡嗡嗡嗡嗡','哇哇哇哇哇哇哇','1.gif','1231233333333333333','2019-11-12 09:49:18'),(75,'水水水水水水水水','水水水水水水水水','水水水水水搜','1.gif','ggggggggggggg','2019-11-12 14:11:25');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
