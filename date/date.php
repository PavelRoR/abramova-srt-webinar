<?php 

date_default_timezone_set('Europe/Moscow');

$currentDate = new DateTime('now');

if ($currentDate->format('H') > 0) :
$currentDate->modify('+1 day');
endif;

$dateDayText = $currentDate->format('d');
$dateMonthText = $currentDate->format('m');
$dateYearText = $currentDate->format('y');

?>