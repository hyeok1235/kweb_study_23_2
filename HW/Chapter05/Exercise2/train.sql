-- 5.2.1
SELECT `users`.`id`, `users`.`name`, `tickets`.`seat_number` FROM `users`
INNER JOIN `tickets`
ON `tickets`.`train` = 11 AND `tickets`.`user` = `users`.`id`
ORDER BY `tickets`.`seat_number` ASC;
-- 5.2.2
SELECT `users`.`id`, `users`.`name`, 
Count(`tickets`.`train`) AS `trains_count`, 
SUM(`trains`.`distance`) / 10 AS `total_distance`
FROM `tickets`
INNER JOIN `users` ON `tickets`.`user` = `users`.`id`
INNER JOIN `trains` ON `tickets`.`train` = `trains`.`id`
GROUP BY `tickets`.`user`
ORDER BY `total_distance` DESC
LIMIT 0, 6;
-- 5.2.3
SELECT `trains`.`id`, `types`.`name` AS `type`, 
`src`.`name` AS `src_stn`, `dst`.`name` AS `dst_stn`,
Timediff(`trains`.`arrival`, `trains`.`departure`) AS `travel_time`
FROM `trains`
INNER JOIN `types` ON `types`.`id` = `trains`.`type`
INNER JOIN `stations` AS `src` ON `trains`.`source` = `src`.`id`
INNER JOIN `stations` AS `dst` ON `trains`.`destination` = `dst`.`id`
ORDER BY `travel_time` DESC
LIMIT 0, 6;
-- 5.2.4
SELECT `types`.`name` AS `type`, 
`src`.`name` AS `src_stn`, `dst`.`name` AS `dst_stn`,
`trains`.`departure` AS `departure`, `trains`.`arrival` AS `arrival`,
Round(`types`.`fare_rate` * `trains`.`distance` / 1000, -2) AS `fare`
FROM `trains`
INNER JOIN `types` ON `types`.`id` = `trains`.`type`
INNER JOIN `stations` AS `src` ON `trains`.`source` = `src`.`id`
INNER JOIN `stations` AS `dst` ON `trains`.`destination` = `dst`.`id`
ORDER BY `departure` ASC;
-- 5.2.5
SELECT `trains`.`id`, `types`.`name`, 
`src`.`name` AS `src_stn`, `dst`.`name` AS `dst_stn`,
COUNT(*) AS `occupied`, `types`.`max_seats` AS `maximum`
FROM `tickets`
INNER JOIN `trains` ON `tickets`.`train` = `trains`.`id`
INNER JOIN `types` ON `types`.`id` = `trains`.`type`
INNER JOIN `stations` AS `src` ON `src`.`id` = `trains`.`source`
INNER JOIN `stations` AS `dst` ON `dst`.`id` = `trains`.`destination`
GROUP BY `tickets`.`train`
ORDER BY `trains`.`id` ASC;
-- 5.2.6
SELECT `trains`.`id`, `types`.`name`, 
`src`.`name` AS `src_stn`, `dst`.`name` AS `dst_stn`,
COUNT(`tickets`.`user`) AS `occupied`, `types`.`max_seats` AS `maximum`
FROM `tickets`
RIGHT OUTER JOIN `trains` ON `tickets`.`train` = `trains`.`id`
INNER JOIN `types` ON `types`.`id` = `trains`.`type`
INNER JOIN `stations` AS `src` ON `src`.`id` = `trains`.`source`
INNER JOIN `stations` AS `dst` ON `dst`.`id` = `trains`.`destination`
GROUP BY `tickets`.`train`
ORDER BY `trains`.`id` ASC;