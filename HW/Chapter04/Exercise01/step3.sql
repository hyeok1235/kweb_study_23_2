CREATE TABLE `students` (
`student_id` INT NOT NULL,
`name` VARCHAR(20) NOT NULL,
`admission_year` YEAR NOT NULL,
`major` VARCHAR(20) NOT NULL,
`individual_num` INT NOT NULL AUTO_INCREMENT,
`tel_num` VARCHAR(20) NOT NULL,
`address` VARCHAR(30) NOT NULL,
`credit_total` INT NOT NULL DEFAULT 0,
`grade_average` DOUBLE NOT NULL DEFAULT 0.0,
`enroll_info` TINYINT(1) NOT NULL DEFAULT 1,
PRIMARY KEY (`individual_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;