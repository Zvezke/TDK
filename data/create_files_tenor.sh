#!/bin/bash

# Loop from 1 to 20
for i in {1..20}
do
   touch "tenor$i.pdf" # Creates an empty file with the name "tenor[i].pdf"
done
