var tipuesearch = {"pages":[{"url":"./posts/2015/12/21/2016kmol-ce-shi/index.html","title":"2016kmol 測試","text":"在 Plican 靜態網頁系統中,Title 若使用中文, 而且不指定 Slug 的情況下, 系統會將中文字逐一轉為英文拼音來建立網誌檔案. 以下利用 Brython 語法, 在網頁中繪圖: 使用方法: http://www.brython.info/ window.onload=function(){ brython(1); } # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"plotarea\"] ctx = canvas.getContext(\"2d\") # 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點 # ctx.setTransform(1, 0, 0, -1, 0, canvas.height) # 以下採用 canvas 原始座標繪圖 flag_w = canvas.width flag_h = canvas.height circle_x = flag_w/4 circle_y = flag_h/4 # 先畫滿地紅 ctx.fillStyle='rgb(255, 0, 0)' ctx.fillRect(0,0,flag_w,flag_h) # 再畫青天 ctx.fillStyle='rgb(0, 0, 150)' ctx.fillRect(0,0,flag_w/2,flag_h/2) # 畫十二道光芒白日 ctx.beginPath() star_radius = flag_w/8 angle = 0 for i in range(24): angle += 5*math.pi*2/12 toX = circle_x + math.cos(angle)*star_radius toY = circle_y + math.sin(angle)*star_radius # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo if (i): ctx.lineTo(toX, toY) else: ctx.moveTo(toX, toY) ctx.closePath() # 將填色設為白色 ctx.fillStyle = '#fff' ctx.fill() # 白日:藍圈 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True) ctx.closePath() # 填色設為藍色 ctx.fillStyle = 'rgb(0, 0, 149)' ctx.fill() # 白日:白心 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True) ctx.closePath() # 填色設為白色 ctx.fillStyle = '#fff' ctx.fill() Brython canvas 繪圖程式碼: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 <!-- 導入 brython_dist.js --> <script type= \"text/javascript\" src= \"http://brython.info/src/brython_dist.js\" ></script> <!-- 啟動 brython() --> <script> window . onload = function (){ brython ( 1 ); } </script> <!-- 以下利用 Brython 程式執行繪圖 --> <canvas id= \"plotarea\" width= \"300\" height= \"200\" ></canvas> <script type= \"text/python3\" > # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc [ \"plotarea\" ] ctx = canvas . getContext ( \"2d\" ) # 進行座標轉換 , x 軸不變 , y 軸反向且移動 canvas . height 單位光點 # ctx . setTransform ( 1 , 0 , 0 , - 1 , 0 , canvas . height ) # 以下採用 canvas 原始座標繪圖 flag_w = canvas . width flag_h = canvas . height circle_x = flag_w / 4 circle_y = flag_h / 4 # 先畫滿地紅 ctx . fillStyle = 'rgb(255, 0, 0)' ctx . fillRect ( 0 , 0 , flag_w , flag_h ) # 再畫青天 ctx . fillStyle = 'rgb(0, 0, 150)' ctx . fillRect ( 0 , 0 , flag_w / 2 , flag_h / 2 ) # 畫十二道光芒白日 ctx . beginPath () star_radius = flag_w / 8 angle = 0 for i in range ( 24 ) : angle += 5 * math . pi * 2 / 12 toX = circle_x + math . cos ( angle ) * star_radius toY = circle_y + math . sin ( angle ) * star_radius # 只有 i 為 0 時移動到 toX , toY , 其餘都進行 lineTo if ( i ) : ctx . lineTo ( toX , toY ) else : ctx . moveTo ( toX , toY ) ctx . closePath () # 將填色設為白色 ctx . fillStyle = '#fff' ctx . fill () # 白日 : 藍圈 ctx . beginPath () ctx . arc ( circle_x , circle_y , flag_w * 17 / 240 , 0 , math . pi * 2 , True ) ctx . closePath () # 填色設為藍色 ctx . fillStyle = 'rgb(0, 0, 149)' ctx . fill () # 白日 : 白心 ctx . beginPath () ctx . arc ( circle_x , circle_y , flag_w / 16 , 0 , math . pi * 2 , True ) ctx . closePath () # 填色設為白色 ctx . fillStyle = '#fff' ctx . fill () </script> 其他的 Brython 程式範例: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 from browser import html , doc # use plotarea as canvas canvas = doc [ \"background_canvas\" ] # 準備在 canvas 中繪圖 def draw_line ( x1 , y1 , x2 , y2 , color = \"red\" ): ctx . beginPath () ctx . moveTo ( x1 , y1 ) ctx . lineTo ( x2 , y2 ) ctx . strokeStyle = color ctx . stroke () ctx = canvas . getContext ( '2d' ) size = 30 for i in range ( size + 1 ): # 水平線 draw_line ( 100 , 100 + i * 10 , 100 + size * 10 , 100 + i * 10 , \"black\" ) # 垂直線 draw_line ( 100 + i * 10 , 100 , 100 + i * 10 , 100 + size * 10 , \"red\" ) 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 from browser import html , doc # use plotarea as canvas canvas = doc [ \"background_canvas\" ] # 準備在 canvas 中繪圖 def draw_line ( x1 , y1 , x2 , y2 , color = \"red\" ): ctx . beginPath () ctx . moveTo ( x1 , y1 ) ctx . lineTo ( x2 , y2 ) ctx . strokeStyle = color ctx . stroke () def fill_rectangle ( x1 , y1 , x2 , y2 , color = \"red\" ): ctx . beginPath () ctx . moveTo ( x1 , y1 ) ctx . lineTo ( x1 , y2 ) ctx . lineTo ( x2 , y2 ) ctx . lineTo ( x2 , y1 ) ctx . lineTo ( x1 , y1 ) ctx . fillStyle = color ctx . fill () ctx = canvas . getContext ( '2d' ) size = 30 for i in range ( size + 1 ): # 水平線 draw_line ( 100 , 100 + i * 10 , 100 + size * 10 , 100 + i * 10 , \"black\" ) # 垂直線 draw_line ( 100 + i * 10 , 100 , 100 + i * 10 , 100 + size * 10 , \"red\" ) fill_rectangle ( 0 , 0 , 100 , 100 ) 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 import math from browser import html , doc # use plotarea as canvas canvas = doc [ \"background_canvas\" ] # 準備在 canvas 中繪圖 def draw_line ( x1 , y1 , x2 , y2 , color = \"red\" ): ctx . beginPath () ctx . moveTo ( x1 , y1 ) ctx . lineTo ( x2 , y2 ) ctx . strokeStyle = color ctx . stroke () # x, y 為中心, r 為半徑, angle 旋轉角, solid 空心或實心, color 顏色 def star ( x , y , r , angle = 0 , solid = False , color = \"#f00\" ): # 以 x, y 為圓心, 計算五個外點 deg = math . pi / 180 # 圓心到水平線距離 a = r * math . cos ( 72 * deg ) # a 頂點向右到內點距離 b = ( r * math . cos ( 72 * deg ) / math . cos ( 36 * deg )) * math . sin ( 36 * deg ) # 利用畢氏定理求內點半徑 rin = math . sqrt ( a ** 2 + b ** 2 ) # 查驗 a, b 與 rin #print(a, b, rin) if ( solid ): ctx . beginPath () for i in range ( 5 ): xout = ( x + r * math . sin (( 360 / 5 ) * deg * i + angle * deg )) yout = ( y + r * math . cos (( 360 / 5 ) * deg * i + angle * deg )) # 外點增量 + 1 xout2 = x + r * math . sin (( 360 / 5 ) * deg * ( i + 1 ) + angle * deg ) yout2 = y + r * math . cos (( 360 / 5 ) * deg * ( i + 1 ) + angle * deg ) xin = x + rin * math . sin (( 360 / 5 ) * deg * i + 36 * deg + angle * deg ) yin = y + rin * math . cos (( 360 / 5 ) * deg * i + 36 * deg + angle * deg ) # 查驗外點與內點座標 #print(xout, yout, xin, yin) if ( solid ): # 填色 if ( i == 0 ): ctx . moveTo ( xout , yout ) ctx . lineTo ( xin , yin ) ctx . lineTo ( xout2 , yout2 ) else : ctx . lineTo ( xin , yin ) ctx . lineTo ( xout2 , yout2 ) else : # 空心 draw_line ( xout , yout , xin , yin , color ) # 畫空心五芒星, 無關畫線次序, 若實心則與畫線次序有關 draw_line ( xout2 , yout2 , xin , yin , color ) if ( solid ): ctx . fillStyle = color ctx . fill () ctx = canvas . getContext ( '2d' ) ''' size = 30 for i in range(size+1): # 水平線 draw_line(100, 100+i*10, 100+size*10, 100+i*10, \"black\") # 垂直線 draw_line(100+i*10, 100, 100+i*10, 100+size*10, \"red\") ''' star ( 100 , 100 , 30 , 0 , True , \"#f00\" ) #star(300, 300, 50, 0, False, \"#000\") for i in range ( 5 ): for j in range ( 5 ): star ( 200 + 65 * i , 200 + 65 * j , 30 , 0 , False , \"#000\" ) 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 import math from browser import doc import browser.timer def draw_circle ( x , y , r , linethick = 1 , color = \"black\" ): global ctx ctx . beginPath () ctx . lineWidth = linethick ctx . arc ( x , y , r , 0 , math . pi * 2 , true ) ctx . closePath () ctx . strokeStyle = color ctx . stroke () def draw (): global theta , ctx , canvas , x , y , r , dx , dy # clear canvas context ctx . clearRect ( 0 , 0 , canvas . width , canvas . height ) # draw circle draw_circle ( x , y , 10 ) # calculate new x, y position theta = theta + dx x = 200 + r * math . cos ( theta * math . pi / 180 ) y = 200 - r * math . sin ( 2 * theta * math . pi / 180 ) x , y , r = 200 , 200 , 50 # define canvas and context canvas = doc [ \"background_canvas\" ] ctx = canvas . getContext ( \"2d\" ) # fourbar linkage inputs theta = 0 degree = math . pi / 180 dx = 2 dy = 4 browser . timer . set_interval ( draw , 10 ) 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 import math from browser import html , doc # use plotarea as canvas canvas = doc [ \"background_canvas\" ] # 準備在 canvas 中繪圖 def draw_line ( x1 , y1 , x2 , y2 , color = \"red\" ): ctx . beginPath () ctx . moveTo ( x1 , y1 ) ctx . lineTo ( x2 , y2 ) ctx . strokeStyle = color ctx . stroke () # x, y 為中心, r 為半徑, angle 旋轉角, solid 空心或實心, color 顏色 def star ( x , y , r , angle = 0 , solid = False , color = \"#f00\" ): # 以 x, y 為圓心, 計算五個外點 deg = math . pi / 180 # 圓心到水平線距離 a = r * math . cos ( 72 * deg ) # a 頂點向右到內點距離 b = ( r * math . cos ( 72 * deg ) / math . cos ( 36 * deg )) * math . sin ( 36 * deg ) # 利用畢氏定理求內點半徑 rin = math . sqrt ( a ** 2 + b ** 2 ) # 查驗 a, b 與 rin #print(a, b, rin) if ( solid ): ctx . beginPath () for i in range ( 5 ): xout = ( x + r * math . sin (( 360 / 5 ) * deg * i + angle * deg )) yout = ( y + r * math . cos (( 360 / 5 ) * deg * i + angle * deg )) # 外點增量 + 1 xout2 = x + r * math . sin (( 360 / 5 ) * deg * ( i + 1 ) + angle * deg ) yout2 = y + r * math . cos (( 360 / 5 ) * deg * ( i + 1 ) + angle * deg ) xin = x + rin * math . sin (( 360 / 5 ) * deg * i + 36 * deg + angle * deg ) yin = y + rin * math . cos (( 360 / 5 ) * deg * i + 36 * deg + angle * deg ) # 查驗外點與內點座標 #print(xout, yout, xin, yin) if ( solid ): # 填色 if ( i == 0 ): ctx . moveTo ( xout , yout ) ctx . lineTo ( xin , yin ) ctx . lineTo ( xout2 , yout2 ) else : ctx . lineTo ( xin , yin ) ctx . lineTo ( xout2 , yout2 ) else : # 空心 draw_line ( xout , yout , xin , yin , color ) # 畫空心五芒星, 無關畫線次序, 若實心則與畫線次序有關 draw_line ( xout2 , yout2 , xin , yin , color ) if ( solid ): ctx . fillStyle = color ctx . fill () ctx = canvas . getContext ( '2d' ) ''' size = 30 for i in range(size+1): # 水平線 draw_line(100, 100+i*10, 100+size*10, 100+i*10, \"black\") # 垂直線 draw_line(100+i*10, 100, 100+i*10, 100+size*10, \"red\") ''' star ( 100 , 100 , 30 , 0 , True , \"#f00\" ) #star(300, 300, 50, 0, False, \"#000\") for i in range ( 5 ): for j in range ( 5 ): star ( 200 + 65 * i , 200 + 65 * j , 30 , 0 , False , \"#000\" ) dataURL = canvas . toDataURL () doc [ 'canvas_image' ] . src = dataURL","tags":"Brython"},{"url":"./posts/2015/12/21/develop-python-program-in-leo-editor/index.html","title":"Develop Python Program in Leo Editor","text":"在 Leo Editor 環境開發並執行 Python 程式 以下我們利用 Leo Editor 用來開發 CherryPy 網際程式, 首先開啟一個新的 Leo Editor 專案 新增一個節點, 標題寫上\"@edit mycherrypy1.py\", 而內容則是: 1 2 3 4 5 6 7 import cherrypy class HelloWorld ( object ): @cherrypy.expose def index ( self ): return \"Hello World, 可以開始開發 Cherrypy 程式!\" cherrypy . quickstart ( HelloWorld ()) 接著, 再建立一個節點, 標題寫上\"@button run mycherrypy1.py\", 而內容則是: 1 2 3 4 5 6 7 import subprocess p = subprocess . Popen ( 'start cmd /c v:\\ide\\python34\\python mycherrypy1.py' , shell = True ) p . wait () print ( 'done' ) 然後, 將這個專案存為 cherrypy1.leo, 並且將滑鼠停在 @button run mycherrypy1.py 這個節點上, 按下上方的 script-button, 系統將會建立一個按鈕. 當您按下這個按鈕時, Leo Editor 將會執行這個 button 所對應的 Python 程式, 也就是在背後執行\"啟動執行 mycherrypy1.py\"的 dos command 指令. 這樣的 CherrPy 程式編輯與執行, 可以在程式內容更新時, 由此背後執行的 dos command 自動重新啟動 CherryPy 程式, 而無需使用者介入開關. 總結上述過程: 運用 @edit 節點指令, 將節點的內容存入外部的檔案, 在此就是建立一個可以在近端執行的 CherryPy 網際程式 運用 @button 可以建立一個內容為 Python 程式的指令按鈕, 當使用者按下此一按鈕, Leo Editor 就會設法執行此一 Python 程式 將與按鈕對應的程式透過 subprocess 模組, 讓程式在系統背景狀態下執行, 表示不要與 Leo Editor 執行中的 Python 程序有所瓜葛 這樣的 CherryPy 程式開發模式, 當使用者更新程式內容時, 系統會自動關閉, 再啟動 CherryPy 程式, 而使用者也可以透過 Ctrl+C 關閉上面所開啟的 dos command 程式執行 所完成的 leo 專案: https://copy.com/GXuWZ6YwaaiPpZKd","tags":"Leo Editor"},{"url":"./posts/2015/12/21/recursively-import-all-python-files-into-leo-editor/index.html","title":"Recursively import all python files into Leo Editor","text":"以遞迴方式導入 Python 程式碼. 此功能已經內建在 Leo Editor 的 scripts/scripts.leo 中, 程式碼如下: 1 2 3 4 5 6 7 8 9 '''Recursively import all python files in a directory and clean the result.''' c . recursiveImport ( dir_ = r'./' , kind = '@clean' , # The new best practice. one_file = False , safe_at_file = False , theTypes = None , # Same as ['.py'] ) 將此一節點從 scripts.leo 取出後, 存入要 import 程式碼的專案目錄中, 然後存為 .leo 後, 按下 Ctrl+b 就可以運行, 當然導入之後, 所有節點都以 @path 開頭, 表示此 leo 檔案並未與外部檔案直接存取互動, 而是將程式碼從外部檔案中, 架構性地取出, 並且存在 leo 專案檔中. 另外, 也可以透過下列程式導入特定目錄中的 Python 程式: 1 2 import leo.core.leoImport as leoImport leoImport . importFiles ( aDirectory , \".py\" )","tags":"Leo Editor"},{"url":"./posts/2015/12/20/rattlecad-on-ubuntu/index.html","title":"rattleCAD on Ubuntu","text":"在 Ubuntu 環境中執行 rattleCAD http://rattlecad.sourceforge.net/ 是以 TCL 編寫的, 在 Windows 下載 rattleCAD, 會有一個 rattlecad.exe, 可以直接執行, 但是在 Ubuntu 環境中, 就必須要透過 tclsh rattleCAD.tcl 才能執行, 只是在 Ubuntu 14.04 中缺少了 tdom 與 BWidget 模組, 必須補安裝後, rattleCAD 才能正確執行. 1 sudo apt-get install tdom BWidget","tags":"Ubuntu"},{"url":"./posts/2015/12/19/use-python-script-to-check-dictionary/index.html","title":"Use python script to check dictionary","text":"利用 Python 程式協助查英文單字 查單字程式碼: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 import urllib.request from bs4 import BeautifulSoup import sys , codecs # 將系統輸出語系編碼設為 utf8 sys . stdout = codecs . getwriter ( \"utf8\" )( sys . stdout . detach ()) # 表示要讀入的文章檔名為 wed.txt filename = \"wed\" \"\"\" Project: Concordancer Jr. File name: concordance.py Description: Counts up the number of each unique word in a block of plain text. Copyright (C) 2010 Steve Osborne, srosborne (at) gmail.com http://yakinikuman.wordpress.com/ ******* This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>. ******* Version history: 1.0 Oct 27 2010 2.0 Nov 11, 2010 - put into a class. Can now be called with any block of text. \"\"\" class Concordancer : def __init__ ( self ): #from http://www.duboislc.org/EducationWatch/First100Words.html #some common words a little fishy... \"water\"? \"oil\"?? But no \"am\"??? self . common = [ 'the' , 'of' , 'and' , 'a' , 'to' , 'in' , 'is' , 'you' , 'that' , 'it' , 'he' , 'was' , 'for' , 'on' , 'are' , 'as' , 'with' , 'his' , 'they' , 'i' , 'at' , 'be' , 'this' , 'have' , 'from' , 'or' , 'one' , 'had' , 'by' , 'word' , 'but' , 'not' , 'what' , 'all' , 'were' , 'we' , 'when' , 'your' , 'can' , 'said' , 'there' , 'use' , 'an' , 'each' , 'which' , 'she' , 'do' , 'how' , 'their' , 'if' , 'will' , 'up' , 'other' , 'about' , 'out' , 'many' , 'then' , 'them' , 'these' , 'so' , 'some' , 'her' , 'would' , 'make' , 'like' , 'him' , 'into' , 'time' , 'has' , 'look' , 'two' , 'more' , 'write' , 'go' , 'see' , 'number' , 'no' , 'way' , 'could' , 'people' , 'my' , 'than' , 'first' , 'water' , 'been' , 'call' , 'who' , 'oil' , 'its' , 'now' , 'find' , 'long' , 'down' , 'day' , 'did' , 'get' , 'come' , 'made' , 'may' , 'part' ] self . wordIndex = dict () #will be a count of each word in the input text self . total = 0 #total words self . unique = 0 #unique words def getCommon ( self ): return self . common def updateCommon ( self , newCommon ): #newCommon is a list of words to be used on future calls to topWordsNotCommon self . common = newCommon def extendCommon ( self , newCommon ): #newCommon is a list of words to be added to self.common self . common . extend ( newCommon ) def populateIndex ( self , data ): #data is a block of text #splits up data and adds each word to the index #repeated calls to populateIndex will NOT clear the index - will just keep adding up words in new block of text for word in data . split (): #splits at and removes whitespace self . addword ( word ) self . calculateUniqueWords () self . calculateTotalWords () def addword ( self , word ): word = word . translate ( \"0123456789.!?,;:*\\)\\(\\[\\] \\\\\\n /' \\\" \" ) #remove punctuation, numbers, and newlines if len ( word ) > 5 and word . isalpha (): word = word . lower () #convert to lower case #special case of dashes \"--\": separate into two words if \"--\" in word : words = word . replace ( '--' , ' ' ) for w in words . split (): self . addword ( w ) elif word in self . wordIndex : self . wordIndex [ word ] = self . wordIndex [ word ] + 1 else : self . wordIndex [ word ] = 1 def getSortedIndex ( self ): #note - sorted returns a list of tuples, not a dictionary s1 = sorted ( list ( self . wordIndex . items ()), key = lambda item : item [ 0 ]) #secondary key: sort alphabetically s2 = sorted ( s1 , key = lambda item : item [ 1 ], reverse = True ) #primary key: sort by count return s2 def calculateUniqueWords ( self ): self . unique = len ( self . wordIndex ) def calculateTotalWords ( self ): total = 0 for word in list ( self . wordIndex . keys ()): total = total + self . wordIndex [ word ] self . total = total def topWords ( self , n , fExcludeCommon = 1 ): #run only after \"populateIndex\" for meaningful output #returns list of top min(n,unique) words in the index #fExcludeCommon: if 1 [default], excludes any words in self.common. Set to 0 to include all words. #returns list of (word,count) pairs for the top n words. 'count' is the count of that word. s2 = self . getSortedIndex () lwords = [] i = 0 while len ( lwords ) < n and i < self . unique : key = s2 [ i ][ 0 ] value = s2 [ i ][ 1 ] item = ( key , value ) if fExcludeCommon : if key not in self . common : lwords . append ( item ) else : lwords . append ( item ) i = i + 1 return lwords # 以上為統計文章中單字出現次數的類別 def chk_dict ( 單字 ): url = 'http://dictionary.sina.com.tw/word/ec/' response = urllib . request . urlopen ( url + 單字 ) text = response . read () try : html_doc = text . decode ( \"utf-8\" ) except : html_doc = text . decode ( \"latin-1\" ) return html_doc def parse_doc ( 網頁超文件 ): all_text = \"\" soup = BeautifulSoup ( 網頁超文件 ) div_tag = soup . findAll ( 'div' ,{ 'class' , \"word_text1\" }) for i in range ( len ( div_tag )): all_text += div_tag [ i ] . get_text () return all_text + \" \\n \" # 用來統計單字次序的全域變數 word_count = 0 def 查單字(單字): global word_count html_doc = chk_dict ( 單字 ) our_text = parse_doc ( html_doc ) if our_text == \" \\n \" : word_def = \"查不到與 \" + 單字 + \" 有關的資料 \\n \" else : word_count += 1 word_def = str ( word_count ) + \". \" + 單字 + \": \\n \" word_def += our_text word_def += \"_\" * 50 + \" \\n \" return word_def # 檔案是要將結果存檔用的 handle 檔案 = open ( \"words_\" + filename + \".txt\" , \"w\" , encoding = \"UTF-8\" ) # 以下為統計文章單字用的程式呼叫 concord = Concordancer () file = filename + '.txt' f = open ( file , 'rt' , encoding = \"utf-8\" ) data = f . read () #the whole file as one big string concord . populateIndex ( data ) n = concord . unique print ( \"Top %s words:\" % n ) top = concord . topWords ( n ) # 隨後的 key 就是單字 order = 0 all_text = \"\" for item in top : order += 1 key = item [ 0 ] value = item [ 1 ] #print(order,\"%s:%s\" % (key,value)) print ( order , key , value ) all_text += 查單字 ( key ) 檔案 . write ( all_text ) print ( \"done\" )","tags":"Python"},{"url":"./posts/2015/12/19/leo-editor-jiao-xue-yi/index.html","title":"Leo Editor 教學(一)","text":"有人說, Leo 編輯器是程式開發歷程上的一項創新, 也有人說, 一旦用上手, 就再也回不去了. 但是, 這樣一套看似程式開發與資料編輯管理的神器級工具, 為何如此冷門, 好像受歡迎程式不如預期? 經過整理歸納, 理由如下: Leo Editor 歷經 Python2 與 Tkinter 的年代, 到目前採 Python3 與 PyQt5 的架構後, 網路上仍然留存許多幾年前甚或十年前的舊導引資料, 初學者很難掌握正確的資訊, 因此無法輕易導入. Leo Editor 雖然全部使用 Python 編寫, 但是在同時支援 Python2 與 Python3 的情況下, 程式碼中仍留存許多老舊的設計與秘笈指令, 即使是使用 Leo Editor 多年的老手都很不容易通盤掌握, 更遑論新手. Leo Editor 的開發群面對龐大的程式碼, 雖然不斷積極在思考改良, 但是真正能夠動手貢獻新功能或參與計劃的人數, 卻非常少, 因此進展的速度與靈活度並非很高. 總之, Leo Editor 並非是一套能夠輕易上手的工具, 但也正因為如此, 才需要有更多人能夠面對上述三項問題, 努力提供更多的實用導引資料, 介紹比較常用的功能, 而且協助 Leo Editor 開發群, 讓這套工具可以由更多新手接棒, 持續更新改進. 以下, 我們將從系統的安裝開始, 逐步介紹 Leo Editor 的相關功能. 安裝 Leo Editor Leo Editor 在 5.1 版時推出 @clean 節點指令功能, 這項新功能改進了先前 @auto 指令在內容置入 Leo Editor 特有標註的問題, 因此大家若要安裝, 記得一定要使用 5.1 以上的版本. 至於什麼是\"節點指令功能\", 什麼又是\"Leo Editor 特有標註\", 我們隨後再來了解. Leo Editor 推廣上的另外一個問題, 上面已經提過, 門檻高導致冷門, 參與人數少則導致 Ubuntu 目前的 apt-get install leo, 仍然會安裝舊的 Leo Editor 5.0 版, 因此初學者必須非常細心, 努力收集資料, 綜合判讀, 才能走上一條正確的學習之路. 好了, 我們先從 Windows 操作系統的安裝看起. 因為 Leo Editor 5.1 版可以在 Python3 環境下開啟, 而 Leo Editor 5.1 版採用 PyQt 作為圖形介面, 因此 Leo Editor 5.1 版的安裝 , 就必須從 Python3 與 PyQt 的安裝開始. 在 Windows 環境下安裝 Python3 非常簡單, 但是安裝 PyQt 則相對比較困難, 主要原因在於 Windows 環境下 PyQt 的安裝, 牽涉到程式碼的編譯, 而通常網路上現成的簡易 PyQt 安裝套件會牽涉到版本, 假如 Python3 與 PyQt 版本沒有正確搭配, 簡易 PyQt 安裝套件就無法完成安裝. 以下在 Windows 環境中的 Python3 與 PyQt 安裝, 又分為固定式安裝與可攜式安裝, 而所謂的可攜式安裝 ,其實就是在固定式安裝之後, 透過額外的啟動及卸載設定, 讓安裝套件可以在不同的 Windows 操作系統中使用. Windows 環境 Python3 安裝 安裝 Python 3.4, 選擇不安裝 pip 利用 python get-pip.py, 安裝 pip 安裝 PyQt5-5.5.1-gpl-Py3.4-Qt5.5.1-x64.exe https://www.riverbankcomputing.com/software/pyqt/download5 下載 Leo Editor 原始碼, https://github.com/leo-editor/leo-editor/releases/tag/broke-abbrev 利用 pip install broke-abbrev.zip 安裝 Leo Editor 可攜 Python3.4 設定 建立 data 目錄, 並在 data 目錄中建立 home, tmp, apps, Python34, SciTE 等子目錄, 其中 Python34 來自 C:\\Python34, SciTE 也是安裝後直接複製到 data 目錄中. 將 lanuchLeo.py 存到 data/apps 目錄中, 用來啟動 Leo Editor 1 2 3 4 5 6 \"\"\" Leo launcher script A minimal script to launch leo. \"\"\" import leo.core.runLeo leo . core . runLeo . run () 啟動與關閉可攜系統的 start.bat 與 stop.bat 設定碼如下: start.bat 設定 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 @ echo off REM 設定 V 硬碟代號與 data 目錄對應 set Disk = y subst %Disk% : \"data\" REM 設定 leo 相關對應 Home 位置 set HomePath = %Disk% :\\home set HomeDrive = %Disk% :\\home set Home = %Disk% :\\home REM 設定 Leo 所用的編輯器 set LEO_EDITOR = %Disk% :\\SciTE\\SciTE.exe REM 將後續的指令執行, 以 %Disk% 為主 %Disk% : REM 設定 PYTHONPATH set PYTHONPATH = %Disk% :\\Python 34 REM Jupyter 設定 set JUPYTER_CONFIG_DIR = %Disk% :\\home\\.jupyter\\profile_nbserver REM 設定 Jre 路徑, 特別注意 CLASSPATH 後的分號, 一定要有 set JAVA_HOME = %Disk% :\\Java\\jre 1 . 8 . 0 _ 51 set CLASSPATH = .; REM 設定 node.js 相關路徑 set NODE_PATH = %Disk% :\\nodejs\\node_modules\\npm\\node_modules; %Disk% :\\nodejs\\node_modules\\npm set path1 = %PATH% ; %Disk% :\\Python 34 ; %Disk% :\\Anaconda 3 \\Scripts; %JAVA_HOME% \\bin; %Disk% :\\nodejs; set path2 = %Disk% :\\apps\\Git\\bin; %Disk% :\\apps\\pandoc; %Disk% :\\apps\\portableLatex\\MiKTeX\\texmf\\miktex\\bin; path = %path1% ; %path2% ; REM 啟動 SciTE start /MIN %Disk% :\\SciTE\\SciTE.exe REM 取 IPV4 IP address for /f \"delims=[] tokens=2\" %%a in ( 'ping -4 %computername% -n 1 &#94;| findstr \"[\"' ) do ( set thisip = %%a ) REM echo %thisip% REM 取 IPV6 IP address REM for /f \"delims=[] tokens=2\" %%a in ('ping %computername% -n 1 &#94;| findstr \"[\"') do (set thisip=%%a) REM echo %thisip% REM 啟動 Jupyter cd %Disk% :\\tmp start %Disk% :\\Python 34 \\python.exe \"%Disk%:\\Python34\\Scripts\\jupyter-script.py\" notebook --ip = %thisip% --certfile = %Disk% :\\home\\ssl_cert.pem --profile = nbserver cd .. REM 啟動 VMEmulator REM start %Disk%:\\apps\\nand2tetris\\tools\\VMEmulator.bat REM 啟動 Assembler REM start %Disk%:\\apps\\nand2tetris\\tools\\Assembler.bat REM 啟動 CPUEmulator REM start %Disk%:\\apps\\nand2tetris\\tools\\CPUEmulator.bat REM 啟動 HardwareSimulator REM start %Disk%:\\apps\\nand2tetris\\tools\\HardwareSimulator.bat REM 啟動 JackCompiler REM start %Disk%:\\apps\\nand2tetris\\tools\\JackCompiler.bat REM 啟動 TextComparer REM start %Disk%:\\apps\\nand2tetris\\tools\\TextComparer.bat REM 啟動 node.js REM 啟動 node.js REM start /MIN cmd.exe /k \"%Disk%:\\nodejs\\nodejsvars.bat\" REM start %Disk%:\\nodejs\\node.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe REM 啟動 node.js REM start %Disk%:\\IDE\\nodejs\\node.exe REM C:\\WINDOWS\\system32\\cmd.exe /k %Disk%:\\IDE\\nodejs\\nodejsvars.bat REM 啟動 Leo 編輯器 python.exe %Disk% :\\apps\\launchLeo.py Exit stop.bat 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 @ echo off set Disk = y REM 關閉 nginx REM taskkill /IM nginx.exe /F REM 關閉 SciTE taskkill /IM SciTE.exe /F REM 關閉 python taskkill /IM python.exe /F REM 清除 log 資料 path = %PATH% ; REM del /Q /F Y:\\tmp\\*.* REM copy Y:\\www\\cmsimplexh_20130809\\cmsimple\\log_clean.txt V:\\www\\cmsimpleSpring2013\\cmsimple\\log.txt REM del /Q /F Y:\\tmp\\*.* REM 終止虛擬硬碟與目錄的對應 subst %Disk% : /D REM 關閉 cmd 指令視窗 taskkill /IM cmd.exe /F EXIT 當然也可以直接下載以 Python 3.3 建立的 Windows 可攜式 Leo Editor: https://github.com/chiamingyen/portable_leoeditor","tags":"Leo Editor"},{"url":"./posts/2015/12/16/how-to-create-a-pelican-static-site/index.html","title":"How to create a Pelican static site?","text":"如何在 Github page 建立靜態網誌系統? 1994 年開始, 許多人用 html 建立功能陽春的網站, 二十一個年頭過去, 無論大家經歷過多麼令人讚嘆激賞的全球資訊網技術, 我們終於又回到當時的起點, 還是採用最陽春的 html 格式來建立網站, 唯一的差別是, 這一次我們真正感受到天涯若比鄰, 遠端與近端, 在分散式版本的最高運行模式下, 原來是同一端. 從 https://staticsitegenerators.net/ 可以發現, 截至目前, 已經有超過 400 種靜態網頁產生器, 其中以 Python 編寫的 Pelican, https://github.com/getpelican/pelican 算是其中的佼佼者. 至於在 Github pages 環境中採用靜態網頁系統, 相較於動態網頁系統的好處, 一般都認為: 比較安全 比較不會過時 部署成本比較低 可在各種平台上使用 各階段改版資料均有紀錄 以下介紹利用 Python3 與 Pelican 建立能在 Gihub pages 部署的工具與環境. 工具組 假如您使用 Windows 64 位元操作系統, 可以直接下載可攜式系統 https://github.com/chiamingyen/kmol2016 , 理論上, 只要按下 start.bat, 系統就會啟動 Leo Editor, 並且在對應啟動的 cmd 指令視窗, 就可以直接執行 git 指令. 假如您使用 Ubuntu 操作系統, 則必須安裝 Python3, PyQt, Leo Editor, Pelican, Markdown, 假如還希望透過 Jupyter 進行 notebook 檔案導入, 還要安裝 Jupyter. Pelican 網誌系統 可以透過 git clone 本網站的倉儲資料 https://github.com/chiamingyen/kmolsite , 然後將分支切換到 gh-pages, 就可以利用 Leo Editor 開啟分支工作目錄中的 kmol2016.leo, 然後開始建立自己的 Pelican 靜態網誌. kmol2016 系統說明 這裡所謂的\"可攜 kmol2016\", 其實就是在 Windows 64 位元的環境中, 可以無需安裝, 直接利用 start.bat 中的設定, 就可以在 Windows 操作系統中執行建立 Pelican 靜態網誌所需要的指令, 其中包括啟動 Leo Editor, 執行 git 指令以及啟動 Jupyter 等. kmolsite 系統說明 開啟 kmol2016.leo 後, 可以發現 @path content 以下的子節點, 就是 Pelican 網誌系統的原始 md 檔案, 只要透過 @button local pelican 指令的執行, 就可以在近端建立 Pelican 靜態網誌, 而 @button gh-pages pelican 則用來建立 Github pages 端的 Pelican 靜態網誌資料. 從\"設定與開發\"節點下, 可以發現 pelicanconf.py 為近端與遠端的共同設定檔, 而近端透過 Pelican 轉檔時, 則採用 local_publishconf.py, 而 Gihub pages 端則使用 publishconf.py. 其中因為採用 Tipue search plugin, 在近端使用 tipuesearch_content.js 而在遠端則使用 tipuesearch_content.json, 所以才會將 theme 目錄下區隔近端使用 pelican-bootstrap3_local, 而遠端則使用 pelican-bootstrap3 目錄, 其間的差異在於啟動 Tipue search 搜尋的模式設定, 近端為 static, 而遠端則為 json.","tags":"Pelican"},{"url":"./posts/2015/12/16/ubuntu-1404-zhi-xing-python-wang-ji-cheng-shi/index.html","title":"Ubuntu 14.04 執行 Python 網際程式","text":"Nginx 當前端, 在 Ubuntu 以 uwsgi 執行 Python 程式. nginx.conf 設定 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 user www-data; worker_processes 4 ; pid /run/nginx.pid; events { worker_connections 768 ; # multi_accept on ; } http { ## # Basic Settings ## sendfile on ; tcp_nopush on ; tcp_nodelay on ; keepalive_timeout 65 ; types_hash_max_size 2048 ; # server_tokens off ; # server_names_hash_bucket_size 64 ; # server_name_in_redirect off ; include /etc/nginx/mime.types; default_type application /octet-stream; ## # Logging Settings ## access_log /var/log/nginx/access.log; error_log /var/log/nginx/error.log; ## # Gzip Settings ## gzip on ; gzip_disable \"msie6\" ; # gzip_vary on ; # gzip_proxied any; # gzip_comp_level 6 ; # gzip_buffers 16 8 k; # gzip_http_version 1 . 1 ; # gzip_types text /plain text /css application /json application /x-javascript text /xml application /xml application /xml+rss text /javascript; ## # nginx-naxsi config ## # Uncomment it if you installed nginx-naxsi ## #include /etc/nginx/naxsi_core.rules; ## # nginx-passenger config ## # Uncomment it if you installed nginx-passenger ## #passenger_root /usr; #passenger_ruby /usr/bin/ruby; ## # Virtual Host Configs ## include /etc/nginx/conf.d/*.conf; include /etc/nginx/sites-enabled/*; } #mail { # # See sample authentication script at: # # http: //wiki.nginx.org/ImapAuthenticateWithApachePhpScript # # # auth_http localhost /auth.php; # # pop 3 _capabilities \"TOP\" \"USER\" ; # # imap_capabilities \"IMAP4rev1\" \"UIDPLUS\" ; # # server { # listen localhost:110; # protocol pop 3 ; # proxy on ; # } # # server { # listen localhost:143; # protocol imap; # proxy on ; # } #} 72 行中的 include /etc/nginx/sites-enabled/*; 表示導入 sites-enabled 中的所有設定檔. 而 sites-enabled 中只有一個 default 指向 sites-available/default, 所以隨後的設定都以 sites-available/default 檔案為主 sites-availables/default 設定檔案: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 server { listen 80 default_server ; listen [ :: ] : 80 default_server ipv6only = on ; listen 443 ssl ; listen [ :: ] : 443 ssl ipv6only = on ; location / static { alias / home / hp3 / cmsimply / wsgi / static / ; } location / { include uwsgi_params ; uwsgi_pass 127 . 0 . 0 . 1 : 8080 ; } server_name localhost ; #ssl on ; ssl_certificate / etc / nginx / ssl / nginx .crt ; ssl_certificate_key / etc / nginx / ssl / nginx .key ; ssl_session_timeout 5m ; ssl_protocols SSLv3 TLSv1 TLSv1 .1 TLSv1 .2 ; ssl_ciphers \"HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES\" ; ssl_prefer_server_ciphers on ; try_files $ uri $ uri / = 404 ; } 其中第 13 行 include uwsgi_params;, 表示 uwsgi_params 檔案必須位於與 default 設定檔案同一個目錄, 也就是必須位於 sites-available 目錄中. 第 14 行 uwsgi_pass 127.0.0.1:8080; 表示 uwsgi 伺服傳送是透過近端主機中的 8080 埠號傳資料給 nginx, 然後再由 nginx 透過埠號 80 與 443 進行全球資訊網伺服, 因此用戶無法直接擷取 uwsgi 所傳出的資料, 而是經過內部 8080 傳給 nginx 後再以 http 或 https 與請求連線的客戶端進行互動. uwsgi_params 檔案內容: 1 2 3 4 5 6 7 8 9 10 11 12 13 uwsgi_param QUERY_STRING $ query_string ; uwsgi_param REQUEST_METHOD $ request_method ; uwsgi_param CONTENT_TYPE $ content_type ; uwsgi_param CONTENT_LENGTH $ content_length ; uwsgi_param REQUEST_URI $ request_uri ; uwsgi_param PATH_INFO $ document_uri ; uwsgi_param DOCUMENT_ROOT $ document_root ; uwsgi_param SERVER_PROTOCOL $ server_protocol ; uwsgi_param REMOTE_ADDR $ remote_addr ; uwsgi_param REMOTE_PORT $ remote_port ; uwsgi_param SERVER_ADDR $ server_addr ; uwsgi_param SERVER_PORT $ server_port ; uwsgi_param SERVER_NAME $ server_name ; 處理好 nginx 設定之後, 接著處理 uwsgi 的啟動, 希望在開機時就交由操作系統啟動, 這裡透過 /etc/init/uwsgi.conf 設定完成. /etc/init/uwsgi.conf 檔案內容: 1 2 3 4 5 6 7 description \"uwsgi Emperor\" start on runlevel [2345] stop on runlevel [06] respawn exec uwsgi --uid hp3 --gid hp3 --emperor /home/hp3/uwsgi_ini 以上採用 uwsgi Emperor 的設定方式啟動 /home/hp3/uwsgi_ini 目錄中的所有 uwsgi 程式啟動. 而目前位於 /home/hp3/uwsgi_ini 目錄中只有一個 uwsgi.ini 檔案, 內容如下: 1 2 3 4 5 6 [uwsgi] socket = :8080 processes = 4 master = true chdir = /home/hp3/cmsimply/wsgi wsgi-file = /home/hp3/cmsimply/wsgi/application 表示要以近端的 8080 埠號啟動 uwsgi, 而且設定執行目錄與執行的 uwsgi 應用程式 /home/hp3/cmsimply/wsgi/application 這時很重要的一點就是 application 必須採 uwsgi 啟動設定, 也就是與 OpenShift 端的啟動方式相同. /home/hp3/cmsimply/wsgi/application 最後啟動設定為: 1 2 3 4 5 6 7 8 9 if inOpenshift: # operate in OpenShift application = cherrypy.Application(root, config = application_conf) else: # operate in localhost #cherrypy.server.socket_port = 8080 #cherrypy.server.socket_host = 'XXX.XXX.17.103' #cherrypy.quickstart(root, config = application_conf) application = cherrypy.Application(root, config = application_conf)","tags":"Ubuntu"},{"url":"./posts/2015/12/16/pelican-jin-duan-yu-yuan-duan-de-she-ding/index.html","title":"Pelican 近端與遠端的設定","text":"Pelican 近端與遠端的設定. 基本的概念是, 在近端時, 靜態網頁使用相對目錄, SITEURL 設為 \"./\", 而在 Github pages 時, 則採用制式的符號名稱加上 repository 名稱作為 SITEURL. 另外一個近端與遠端的差異為 Tipue search, 近端時, 利用 static 模組, 將所有網頁內容存為 tipuesearch_content.js, 而在 Github pages 時, 則使用 json 模組, 網頁內容存為 tipuesearch_content.json 格式. 其中為了在網誌內容編寫與功能開發過程中, 能夠完全在近端測試 Github pages 端的所有功能, 利用 Leo Editor 的 @buttton 與 @edit, 分別針對兩端所需要的不同設定加以區分, 就連 theme 中有關 Tipue search 的啟動與設定, 也是分為近端與遠端兩套. 在 kmolsite 的專案中, 我們可以發現, Leo Editor 在面對這些不同環境, 不同設定, 而必須以不同指令產生不同內容的情況下, 可以說應付自如. 網誌存檔與呼叫設定 近端的設定, 主要在於瀏覽器無法自行開啟 index.html, 因此 ARTICLE_URL 直接指到 index.html 1 2 3 4 5 # 改為依照日期存檔呼叫 ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{date: %d }/{slug}/index.html' ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{date: %d }/{slug}/index.html' PAGE_URL = 'pages/{slug}/' PAGE_SAVE_AS = 'pages/{slug}/index.html' 而在 gh-pages 端的設定, 因為會直接開啟各網誌文章目錄中的 index.html, 因此 ARTICLE_URL 只要設到文章目錄即可. 1 2 3 4 5 # 改為依照日期存檔呼叫 ARTICLE_URL = 'posts/{date:%Y}/{date:%m}/{date: %d }/{slug}/' ARTICLE_SAVE_AS = 'posts/{date:%Y}/{date:%m}/{date: %d }/{slug}/index.html' PAGE_URL = 'pages/{slug}/' PAGE_SAVE_AS = 'pages/{slug}/index.html' codehilite 設定 首先是 Pelican 的設定檔案: 1 2 # 近端與遠端的 code hightlight MD_EXTENSIONS = [ 'fenced_code' , 'extra' , 'codehilite(linenums=True)' ] 接著則是在所選擇的 Pygment css 設定檔案最後面, 加上以下格式設定碼: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 /* For codehilite */ .codehilitetable , .linenos { background : #2d2d2d ; color : #f2f0ec ; } .codehilitetable { font : 12px / 20px \"Source Code Pro\" , monospace ; overflow-x : auto ; display : block ; border-left : 3px solid #FF8000 ; border - radius : 2px ; padding : .8em 0 ; } .codehilitetable tbody tr { display : block ; } .codehilitetable pre { display : block ; margin : 0 ; padding : 0 ; border : 0 ; font-size : 100% ; font : inherit ; vertical-align : baseline ; background-color : inherit ; line-height : inherit ; color : inherit ; word - break : initial ; word - wrap : initial ; } .c , .linenos { color : #747369 ; } .codehilitetable , .linenos { background : #2d2d2d ; color : #f2f0ec ; } .linenos { border-right : 1px solid #3d3d3d ; padding-right : 0.7em ; margin-right : 0.7em ; width : 3em ; text-align : right ; position : absolute ; - webkit - user - select : none ; - khtml - user - select : none ; - moz - user - select : none ; - ms - user - select : none ; user - select : none ; } .codehilite { margin : 0 1em 0 3.5em ; } .c , .linenos { color : #747369 ; } .err { color : #f2777a ; } .k { color : #c9c ; } .l { color : #f99157 ; } .n { color : #f2f0ec ; } .o { color : #6cc ; } .p { color : #f2f0ec ; } .cm { color : #747369 ; } .cp { color : #747369 ; } .c1 { color : #747369 ; } .cs { color : #747369 ; } .gd { color : #f2777a ; } .ge { font-style : italic ; } .gh { color : #f2f0ec ; font-weight : bold ; } .gi { color : #9c9 ; } .gp { color : #747369 ; font-weight : bold ; } .gs { font-weight : bold ; } .gu { color : #6cc ; font-weight : bold ; } .kc { color : #c9c ; } .kd { color : #c9c ; } .kn { color : #6cc ; } .kp { color : #c9c ; } .kr { color : #c9c ; } .kt { color : #fc6 ; } .ld { color : #9c9 ; } .m { color : #f99157 ; } .s { color : #9c9 ; } .na { color : #69c ; } .nb { color : #f2f0ec ; } .nc { color : #fc6 ; } .no { color : #f2777a ; } .nd { color : #6cc ; } .ni { color : #f2f0ec ; } .ne { color : #f2777a ; } .nf { color : #69c ; } .nl { color : #f2f0ec ; } .nn { color : #fc6 ; } .nx { color : #69c ; } .py { color : #f2f0ec ; } .nt { color : #6cc ; } .nv { color : #f2777a ; } .ow { color : #6cc ; } .w { color : #f2f0ec ; } .mf { color : #f99157 ; } .mh { color : #f99157 ; } .mi { color : #f99157 ; } .mo { color : #f99157 ; } .sb { color : #9c9 ; } .sc { color : #f2f0ec ; } .sd { color : #747369 ; } .s2 { color : #9c9 ; } .se { color : #f99157 ; } .sh { color : #9c9 ; } .si { color : #f99157 ; } .sx { color : #9c9 ; } .sr { color : #9c9 ; } .s1 { color : #9c9 ; } .ss { color : #9c9 ; } .bp { color : #f2f0ec ; } .vc { color : #f2777a ; } .vg { color : #f2777a ; } .vi { color : #f2777a ; } .il { color : #f99157 ; }","tags":"Pelican"},{"url":"./posts/2015/12/16/nginx-yu-uwsgi-de-jie-he/index.html","title":"nginx 與 uwsgi 的結合","text":"最新版的 nginx 必須與 2.0 版以上的 uwsgi 配合, 否則無法啟動. 這是發生在編號 103 HP 伺服器上的問題, 透過查驗, 才知道, 其實在各種協同合作模式中, 必須了解細節才能解決問題. 2015.11.03 情況: IPV4 與 IPV6 都可以 SSH, 因此從遠端進入, 開始尋找為何 nginx 與 uwsgi 無法正常結合運作. 首先新增管理者用戶: 1 2 sudo adduser username sudo visudo 將 username 納為可以執行 sudo 的帳號 在 %sudo 行下增加一行, 然後按下 Ctrl+O, 再按 Enter 經過 uwsgi 版次查驗, 發現透過 sudo apt-get install uwsgi 所安裝的版本為 1.9.17.1 版, 必須設法轉為 2.0 以上版本 版本查驗: 1 uwsgi --version 結果為 1.9.17.1-debian, 必須改為 2.0.11.2, 否則無法與 nginx 結合 移除利用 sudo apt-get install uwsgi 安裝的 1.9.17.1 版的 uswgi 1 sudo apt-get remove uwsgi 準備利用 pip3 安裝 uwsgi 其中必須執行 c 程式編譯, 因此必須安裝 build-essential 與 python3-dev 1 sudo apt-get install build-essential python3-dev 接著利用 pip3 安裝 uwsgi 1 sudo pip3 install uwsgi 利用 which uwsgi 找到 2.0.11.2 版的 uwsgi 位於 /usr/local/bin/uwsgi 因為 /etc/alternatives/uwsgi 指向 /usr/bin/uwsgi-core 為舊版, 因此必須重新設定 symbolic link, 讓 uwsgi 指令指到 2.0 版本. 1 2 3 cd /etc/alternatives sudo rm uwsgi (刪除舊的 symbolic link) sudo ln -s /usr/local/bin/uwsgi uwsgi (將新的 /usr/local/bin/uwsgi 對應到 uwsgi) 完成後執行: 1 sudo service uwsgi restart 就可順利啟動 nginx 中所對應設定的 CMSimply","tags":"Ubuntu"},{"url":"./posts/2015/12/16/2016kmol-initialized/index.html","title":"2016kmol initialized","text":"https://github.com/chiamingyen/kmol2016 是一個 Windows 64 位元環境下的可攜程式系統. 製作步驟如下: 選擇安裝 Python 3.4.4, 原因為 Python 3.5 與 PyQt5 必須自行編譯, 為了簡化, 選擇 Python 3.4.4, 並且使用現成的 PyQt5-5.5.1-gpl-Py3.4-Qt5.5.1-x64.exe 安裝 Python 3.4.4 時, 因為要製作成可攜免安裝套件, 故意不安裝 pip, 隨後再透過 get-pip.py 以手動安裝. 安裝 pip 後, 再利用 Leo Editor 原始碼安裝, 同時利用 pip 安裝 pelican Markdown Flask 為了要使用 Tipue Search , 再安裝 beautifulsoup4 為了要執行協同產品開發的設計運算分析, 還要安裝 Jupyter","tags":"kmol"},{"url":"./posts/2015/12/16/remove-local-and-remote-branch/index.html","title":"Remove local and remote branch","text":"刪除近端與遠端的 Git 分支. To delete a local branch git branch -D the_local_branch To remove a remote branch git push origin :the_remote_branch or git push origin --delete the_remote_branch","tags":"Git"},{"url":"./posts/2015/12/16/tipue-site-search-for-pelican/index.html","title":"Tipue Site Search for Pelican","text":"Pelican 靜態網站關鍵字搜尋. 在這個網站中, 我們使用 Tipue Search 來搜尋內容. https://github.com/getpelican/pelican-plugins/tree/master/tipue_search Tipue Search requires BeautifulSoup. 利用 pip 安裝 beautifulsoup4 模組. pip install beautifulsoup4 此外, 為了要執行協同產品開發的設計運算分析, 還要安裝 Jupyter : pip install jupyter 而在 pelican 的網誌 md 檔案中, 則是透過 liquid_tags plugin 中的 notebook 來導入 Jupyter notebook 檔案.","tags":"Pelican"}]};