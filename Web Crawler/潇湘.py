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
        return sum
    filter1 = '<li><b>作者笔名：</b>(.*)</li>'
    get_author = GetElement(respone,filter1)
    if(get_author==[]):
        return sum
    filter2 = '<h1>(.*)<span>.*</span></h1>'
    get_bookname = GetElement(respone,filter2)
    filter3 = '<li><b>类别题材：</b><a href=.*>(.*)</a></li>'
    get_bookTag = GetElement(respone,filter3)
    data = [url]
    data = data + get_bookname + get_author + get_bookTag
    writer.writerow(data)
    return (sum+1)

csvfile = open("test.csv", "w")
writer = csv.writer(csvfile)
nameList = ['url','bookname','author','tag','summary']
writer.writerow(nameList)
sum = 0;
for i in range(500000, 600000):
    url = "http://www.xxsy.net/info/"+str(i)+".html"
    sum = GetBookInfo(url, sum, writer)
    print(i, sum)
csvfile.close()