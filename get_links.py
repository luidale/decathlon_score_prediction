#!/usr/bin/python
# -*- coding: utf-8 -*-
'''
Collects links for images starting with "https://lh3.googleusercontent.com/"
and having length more than 100
'''

import re
import urllib
import os

import requests

## Get albums
albums = []
with open(os.path.join(".","static","images","albums.txt")) as f_in:
        for line in f_in:
                albums.append(line.strip())
                
## Get datafrom webpage
f_album_names = open(os.path.join(".","static","images","album_names.txt"),"w")
for i,album in enumerate(albums):
        print(album)
        html = requests.get(album)
        html_split = iter(html.text.split("\n"))
        f_out = open(os.path.join(".","static","images","".join([str(i+1),".txt"])),"w")
        for line in html_split:
                #get links for photots
                if line.find('["https://lh3.googleusercontent.com/') != -1:
                        image = "https://lh3.googleusercontent.com/"+re.findall('"https://lh3.googleusercontent.com/([a-zA-Z0-9 _\-./]+)"',line)[0]
                        if len(image) > 100:
                                f_out.write(image+"\n")
                                #print(image)
                #get album names
                if line.find('<title>') != -1:
                        #print(line)
                        #title = re.findall('<title>([a-zA-Z0-9 \)\(_\-./]+) \- Google',line)[0]
                        title = line.split("<title>")[1].split(" - Google")[0]
                        f_album_names.write(title.encode('utf-8')+"\n")
                        print(title)
        f_out.close()
f_album_names.close()

                







            
