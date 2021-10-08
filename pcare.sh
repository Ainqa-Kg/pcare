#!/bin/bash

path="Users\SathishRakin\Documents\pcare"

while true

do

	cd $path > /dev/null &> /dev/null
	git add --all > /dev/null &> /dev/null
	git commit -m "Auto-Commit at : " &> /dev/null
	git pull > /dev/null &> /dev/null
	git push -u origin master &> /dev/null
done