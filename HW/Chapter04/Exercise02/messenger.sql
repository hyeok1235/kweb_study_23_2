CREATE TABLE `users` (
`id` INT NOT NULL,
`username` VARCHAR(20) NOT NULL,
`pw` VARCHAR(20) NOT NULL,
`nickname` VARCHAR(20) NOT NULL,
`profile_photo_link` VARCHAR(50) NOT NULL,
`profile_message` VARCHAR(50) NOT NULL,
`quit_bool` TINYINT(1) NOT NULL DEFAULT 0,
`sign_up_date` DATETIME NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `channels` (
`id` INT NOT NULL,
`name` VARCHAR(20) NOT NULL,
`creater_id` INT NOT NULL,
`link` VARCHAR(20) NOT NULL,
`max_capacity` INT NOT NULL,
`quit_bool` TINYINT(1) NOT NULL DEFAULT 0,
`create_date` DATETIME NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`creater_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8; 

CREATE TABLE `chats` (
`id` INT NOT NULL,
`content` VARCHAR(20) NOT NULL,
`writer_id` INT NOT NULL,
`channel_id` INT NOT NULL,
`chat_date` DATETIME NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`writer_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
FOREIGN KEY (`channel_id`) REFERENCES `channels`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks` (
`id` INT NOT NULL,
`blocker_id` INT NOT NULL,
`blockee_id` INT NOT NULL,
`block_date` DATETIME NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`blocker_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
FOREIGN KEY (`blockee_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows` (
`id` INT NOT NULL,
`follower_id` INT NOT NULL,
`followee_id` INT NOT NULL,
`follow_date` DATETIME NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`follower_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
FOREIGN KEY (`followee_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;