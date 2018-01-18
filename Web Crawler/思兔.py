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
    # print(respone)
    filter1 = '<title>(.*)《.*</title>'
    get_author = GetElement(respone,filter1)
    if (get_author == []):
        return sum
    # print(get_author)
    filter2 = '<title>.*《(.*)》.*</title>'
    get_bookname = GetElement(respone,filter2)
    # print(get_bookname)
    filter3 = '類別：<a href=".*">(.*)</a>'
    get_bookTag = GetElement(respone,filter3)
    # print(get_bookTag)
    filter4 = '<meta name="description" content="(.*)"/>'
    get_bookSummary = GetElement(respone,filter4)
    # print(get_bookSummary)
    data = [url]
    data = data + get_bookname + get_author + get_bookTag + get_bookSummary
    try:
        writer.writerow(data)
    except:
        return sum
    return (sum + 1)

csvfile = open("test.csv", "w")
writer = csv.writer(csvfile)
nameList = ['url','bookname','author','tag','summary']
writer.writerow(nameList)
sum = 0;
for i in range(130000, 140000):
    url = "http://www.sto.cc/"+str(i)+"-1/"
    sum = GetBookInfo(url, sum, writer)
    print(i, sum)
csvfile.close()