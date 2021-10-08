#!/bin/bash

path="Users\SathishRakin\Documents\pcare"

while true

do

	inotifywait --recursive -qq -e attrib,create,delete,modify_self,move,move_self,close_erite $path
	cd $path > /dev/null &> /dev/null
	git add --all > /dev/null &> /dev/null
	git commit -m "Auto-Commit at : " &> /dev/null
	git pull > /dev/null &> /dev/null
	git push -u origin master &> /dev/null
done