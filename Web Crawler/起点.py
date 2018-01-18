#!/usr/bin/python
# -*- coding:utf-8 -*-

import sys
import chardet
import re
import urllib.request
import csv

def GetHtml(url):
    try:
        respond = urllib.request.urlopen(url)
        return respond.read()
    finally:
        respond.close()

def GetElement(html,filter):
    re_filter = re.compile(filter)
    html=html.decode('utf-8')
    result = re.findall(re_filter,html)
    return result

def GetBookInfo(url, sum, writer):
    try:
        respone = GetHtml(url).decode('utf-8').encode('utf-8')
    except:
        print('here!')
        return sum
    # systemCoding = sys.getfilesystemencoding()
    # print('System default encoding:', systemCoding)
    # targetCoding = chardet.detect(GetHtml(url))
    # print('Html is encoding by : %',targetCoding)
    filter1 = r'<title>+(.+)+</title>'
    get_name = GetElement(respone,filter1)
    # get_author = str(get_name[0])
    filter2 = '<meta name="keywords" content="(.*)">\r\n'
    get_bookname = GetElement(respone,filter2)
    filter3 = '<a href=".*" class="red".*>(.*)</a>'
    get_bookTag = GetElement(respone,filter3)
    filter4 = '<p class="intro">(.*)</p>\r\n'
    get_bookSummary = GetElement(respone,filter4)
    data = [url]
    data = data + get_bookname + get_name + get_bookTag + get_bookSummary
    print(data)
    writer.writerow(data)
    return (sum+1)

csvfile = open("test.csv", "w")
writer = csv.writer(csvfile)
nameList = ['url','bookname','author','tag','summary']
writer.writerow(nameList)
sum = 0;
for i in range(3548786, 3548800):
    url = "http://book.qidian.com/info/"+str(id)
    try:
        sum = GetBookInfo(url, sum, writer)
        print(i, sum)
    except:
        print("no such a book: "+id)
csvfile.close()