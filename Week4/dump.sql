/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: user
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 11 DEFAULT CHARSET = latin1;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: user
# ------------------------------------------------------------

INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (3, 'test@test', 'test');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (4, '123@123', '123');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (5, '11@11', '11@11');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (6, '1234@1234', '1234');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (7, '1234', '1234');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (8, '123', '123');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (9, '12@12', '12');
INSERT INTO
  `user` (`id`, `email`, `password`)
VALUES
  (10, '12', '12');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
