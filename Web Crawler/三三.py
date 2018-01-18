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
        respone = GetHtml(url).decode('gbk').encode('utf-8')
    except:
        return sum
    filter1 = '<meta property="og:novel:author" content="(.*)"/>\r\n'
    get_author = GetElement(respone,filter1)
    filter2 = '<meta property="og:title" content="(.*)"/>\r\n'
    get_bookname = GetElement(respone,filter2)
    filter3 = '<meta property="og:novel:category" content="(.*)"/>\r\n'
    get_bookTag = GetElement(respone,filter3)
    filter4 = '<meta property="og:description" content="(.*)"/>\r\n'
    get_bookSummary = GetElement(respone,filter4)
    data = [url]
    data = data + get_bookname + get_author + get_bookTag + get_bookSummary
    writer.writerow(data)
    return (sum + 1)

csvfile = open("test.csv", "w")
writer = csv.writer(csvfile)
nameList = ['url','bookname','author','tag','summary']
writer.writerow(nameList)
sum = 0;
for i in range(0,7):
    for j in range(5001, 6700):
        url = "http://www.33yqxs.com/"+str(i)+"/"+str(j)+"/"
        sum = GetBookInfo(url, sum, writer)
        print(i, sum)
csvfile.close()