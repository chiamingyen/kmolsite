var tipuesearch = {"pages":[{"url":"http://chiamingyen.github.io/kmolsite/ubuntu-1404-zhi-xing-python-wang-ji-cheng-shi.html","tags":"Python","title":"Ubuntu 14.04 執行 Python 網際程式","text":"Nginx 當前端, 在 Ubuntu 以 uwsgi 執行 Python 程式 nginx.conf 設定 user www-data; worker_processes 4 ; pid /run/nginx.pid; events { worker_connections 768 ; # multi_accept on ; } http { ## # Basic Settings ## sendfile on ; tcp_nopush on ; tcp_nodelay on ; keepalive_timeout 65 ; types_hash_max_size 2048 ; # server_tokens off ; # server_names_hash_bucket_size 64 ; # server_name_in_redirect off ; include /etc/nginx/mime.types; default_type application /octet-stream; ## # Logging Settings ## access_log /var/log/nginx/access.log; error_log /var/log/nginx/error.log; ## # Gzip Settings ## gzip on ; gzip_disable \"msie6\" ; # gzip_vary on ; # gzip_proxied any; # gzip_comp_level 6 ; # gzip_buffers 16 8 k; # gzip_http_version 1 . 1 ; # gzip_types text /plain text /css application /json application /x-javascript text /xml application /xml application /xml+rss text /javascript; ## # nginx-naxsi config ## # Uncomment it if you installed nginx-naxsi ## #include /etc/nginx/naxsi_core.rules; ## # nginx-passenger config ## # Uncomment it if you installed nginx-passenger ## #passenger_root /usr; #passenger_ruby /usr/bin/ruby; ## # Virtual Host Configs ## include /etc/nginx/conf.d/*.conf; include /etc/nginx/sites-enabled/*; } #mail { # # See sample authentication script at: # # http: //wiki.nginx.org/ImapAuthenticateWithApachePhpScript # # # auth_http localhost /auth.php; # # pop 3 _capabilities \"TOP\" \"USER\" ; # # imap_capabilities \"IMAP4rev1\" \"UIDPLUS\" ; # # server { # listen localhost:110; # protocol pop 3 ; # proxy on ; # } # # server { # listen localhost:143; # protocol imap; # proxy on ; # } #} include /etc/nginx/sites-enabled/*; 表示導入 sites-enabled 中的所有設定檔. 而 sites-enabled 中只有一個 default 指向 sites-available/default, 所以隨後的設定都以 sites-available/default 檔案為主 sites-availables/default 設定檔案: server { listen 80 default_server ; listen [ :: ] : 80 default_server ipv6only = on ; listen 443 ssl ; listen [ :: ] : 443 ssl ipv6only = on ; location / static { alias / home / hp3 / cmsimply / wsgi / static / ; } location / { include uwsgi_params ; uwsgi_pass 127 . 0 . 0 . 1 : 8080 ; } server_name localhost ; #ssl on ; ssl_certificate / etc / nginx / ssl / nginx .crt ; ssl_certificate_key / etc / nginx / ssl / nginx .key ; ssl_session_timeout 5m ; ssl_protocols SSLv3 TLSv1 TLSv1 .1 TLSv1 .2 ; ssl_ciphers \"HIGH:!aNULL:!MD5 or HIGH:!aNULL:!MD5:!3DES\" ; ssl_prefer_server_ciphers on ; try_files $ uri $ uri / = 404 ; } 其中的 include uwsgi_params;, 表示 uwsgi_params 檔案必須位於與 default 設定檔案同一個目錄, 也就是必須位於 sites-available 目錄中. uwsgi_pass 127.0.0.1:8080; 表示 uwsgi 伺服傳送是透過近端主機中的 8080 埠號傳資料給 nginx, 然後再由 nginx 透過埠號 80 與 443 進行全球資訊網伺服, 因此用戶無法直接擷取 uwsgi 所傳出的資料, 而是經過內部 8080 傳給 nginx 後再以 http 或 https 與請求連線的客戶端進行互動. uwsgi_params 檔案內容: uwsgi_param QUERY_STRING $ query_string ; uwsgi_param REQUEST_METHOD $ request_method ; uwsgi_param CONTENT_TYPE $ content_type ; uwsgi_param CONTENT_LENGTH $ content_length ; uwsgi_param REQUEST_URI $ request_uri ; uwsgi_param PATH_INFO $ document_uri ; uwsgi_param DOCUMENT_ROOT $ document_root ; uwsgi_param SERVER_PROTOCOL $ server_protocol ; uwsgi_param REMOTE_ADDR $ remote_addr ; uwsgi_param REMOTE_PORT $ remote_port ; uwsgi_param SERVER_ADDR $ server_addr ; uwsgi_param SERVER_PORT $ server_port ; uwsgi_param SERVER_NAME $ server_name ; 處理好 nginx 設定之後, 接著處理 uwsgi 的啟動, 希望在開機時就交由操作系統啟動, 這裡透過 /etc/init/uwsgi.conf 設定完成. /etc/init/uwsgi.conf 檔案內容: description \"uwsgi Emperor\" start on runlevel [2345] stop on runlevel [06] respawn exec uwsgi --uid hp3 --gid hp3 --emperor /home/hp3/uwsgi_ini 以上採用 uwsgi Emperor 的設定方式啟動 /home/hp3/uwsgi_ini 目錄中的所有 uwsgi 程式啟動. 而目前位於 /home/hp3/uwsgi_ini 目錄中只有一個 uwsgi.ini 檔案, 內容如下: [uwsgi] socket = :8080 processes = 4 master = true chdir = /home/hp3/cmsimply/wsgi wsgi-file = /home/hp3/cmsimply/wsgi/application 表示要以近端的 8080 埠號啟動 uwsgi, 而且設定執行目錄與執行的 uwsgi 應用程式 /home/hp3/cmsimply/wsgi/application 這時很重要的一點就是 application 必須採 uwsgi 啟動設定, 也就是與 OpenShift 端的啟動方式相同. /home/hp3/cmsimply/wsgi/application 最後啟動設定為: if inOpenshift: # operate in OpenShift application = cherrypy.Application(root, config = application_conf) else: # operate in localhost #cherrypy.server.socket_port = 8080 #cherrypy.server.socket_host = 'XXX.XXX.17.103' #cherrypy.quickstart(root, config = application_conf) application = cherrypy.Application(root, config = application_conf)"},{"url":"http://chiamingyen.github.io/kmolsite/2016kmol-initialized.html","tags":"kmol","title":"2016kmol initialized","text":"https://github.com/chiamingyen/kmol2016 是一個 Windows 64 位元環境下的可攜程式系統. 製作步驟如下: 選擇安裝 Python 3.4.4, 原因為 Python 3.5 與 PyQt5 必須自行編譯, 為了簡化, 選擇 Python 3.4.4, 並且使用現成的 PyQt5-5.5.1-gpl-Py3.4-Qt5.5.1-x64.exe 安裝 Python 3.4.4 時, 因為要製作成可攜免安裝套件, 故意不安裝 pip, 隨後再透過 get-pip.py 以手動安裝. 安裝 pip 後, 再利用 Leo Editor 原始碼安裝, 同時利用 pip 安裝 pelican Markdown Flask 為了要使用 Tipue Search , 再安裝 beautifulsoup4 為了要執行協同產品開發的設計運算分析, 還要安裝 Jupyter"},{"url":"http://chiamingyen.github.io/kmolsite/tipue-site-search-for-pelican.html","tags":"Pelican","title":"Tipue Site Search for Pelican","text":"Pelican 靜態網站關鍵字搜尋 在這個網站中, 我們使用 Tipue Search 來搜尋內容. https://github.com/getpelican/pelican-plugins/tree/master/tipue_search Tipue Search requires BeautifulSoup. 利用 pip 安裝 beautifulsoup4 模組. pip install beautifulsoup4 此外, 為了要執行協同產品開發的設計運算分析, 還要安裝 Jupyter : pip install jupyter 而在 pelican 的網誌 md 檔案中, 則是透過 liquid_tags plugin 中的 notebook 來導入 Jupyter notebook 檔案."},{"url":"http://chiamingyen.github.io/kmolsite/2016kmol-ce-shi.html","tags":"Brython","title":"2016kmol 測試","text":"在 Plican 靜態網頁系統中,Title 若使用中文, 而且不指定 Slug 的情況下, 系統會將中文字逐一轉為英文拼音來建立網誌檔案. 以下利用 Brython 語法, 在網頁中繪圖: 使用方法: http://www.brython.info/ window.onload=function(){ brython(1); } # 導入 doc from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"plotarea\"] ctx = canvas.getContext(\"2d\") # 進行座標轉換, x 軸不變, y 軸反向且移動 canvas.height 單位光點 # ctx.setTransform(1, 0, 0, -1, 0, canvas.height) # 以下採用 canvas 原始座標繪圖 flag_w = canvas.width flag_h = canvas.height circle_x = flag_w/4 circle_y = flag_h/4 # 先畫滿地紅 ctx.fillStyle='rgb(255, 0, 0)' ctx.fillRect(0,0,flag_w,flag_h) # 再畫青天 ctx.fillStyle='rgb(0, 0, 150)' ctx.fillRect(0,0,flag_w/2,flag_h/2) # 畫十二道光芒白日 ctx.beginPath() star_radius = flag_w/8 angle = 0 for i in range(24): angle += 5*math.pi*2/12 toX = circle_x + math.cos(angle)*star_radius toY = circle_y + math.sin(angle)*star_radius # 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo if (i): ctx.lineTo(toX, toY) else: ctx.moveTo(toX, toY) ctx.closePath() # 將填色設為白色 ctx.fillStyle = '#fff' ctx.fill() # 白日:藍圈 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w*17/240, 0, math.pi*2, True) ctx.closePath() # 填色設為藍色 ctx.fillStyle = 'rgb(0, 0, 149)' ctx.fill() # 白日:白心 ctx.beginPath() ctx.arc(circle_x, circle_y, flag_w/16, 0, math.pi*2, True) ctx.closePath() # 填色設為白色 ctx.fillStyle = '#fff' ctx.fill()"},{"url":"http://chiamingyen.github.io/kmolsite/pelican-jin-duan-yu-yuan-duan-de-she-ding.html","tags":"Pelican","title":"Pelican 近端與遠端的設定","text":"Pelican 近端與遠端的設定 基本的概念是, 在近端時, 靜態網頁使用相對目錄, SITEURL 設為 \"./\", 而在 Github pages 時, 則採用制式的符號名稱加上 repository 名稱作為 SITEURL. 另外一個近端與遠端的差異為 Tipue search, 近端時, 利用 static 模組, 將所有網頁內容存為 tipuesearch_content.js, 而在 Github pages 時, 則使用 json 模組, 網頁內容存為 tipuesearch_content.json 格式. 其中為了在網誌內容編寫與功能開發過程中, 能夠完全在近端測試 Github pages 端的所有功能, 利用 Leo Editor 的 @buttton 與 @edit, 分別針對兩端所需要的不同設定加以區分, 就連 theme 中有關 Tipue search 的啟動與設定, 也是分為近端與遠端兩套. 在 kmolsite 的專案中, 我們可以發現, Leo Editor 在面對這些不同環境, 不同設定, 而必須以不同指令產生不同內容的情況下, 可以說應付自如."},{"url":"http://chiamingyen.github.io/kmolsite/remove-local-and-remote-branch.html","tags":"Git","title":"Remove local and remote branch","text":"刪除近端與遠端的 Git 分支 To delete a local branch git branch -D the_local_branch To remove a remote branch git push origin :the_remote_branch or git push origin --delete the_remote_branch"}]};