<?php

$max = $_REQUEST['max'];

$oneRep = calculateUpperBodyORM($max);
echo printORM($oneRep);

function calculateUpperBodyORM($weight)
{
	$upperBodyOneRepMax = round(($weight * 1.1307) + 0.6998);
	return $upperBodyOneRepMax;	
}

function calculateLowerBodyORM($weight)
{
	$lowerBodyOneRepMax = ($weight * 1.109703) + 14.2546;
}

function printORM($calculatedValue)
{
	print '
	<h2>Your One Rep Max is:</h2>
	<p>'.$calculatedValue.' kg</p>';
}

?>