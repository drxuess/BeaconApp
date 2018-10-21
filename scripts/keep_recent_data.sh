#!/bin/bash
dir='../data/FIRMS/c6/Australia_NewZealand/'

newest=$(ls -1 $dir | tail -n 1)

mv $dir$newest $dir'newest'
rm $dir'MODIS'*

sh csv2json.sh $dir'newest' > $dir'newest.json'