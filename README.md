# kmolsite
http://chiamingyen.github.io/kmolsite/blog

這是一個能夠在 Windows 與 Ubuntu 環境下, 利用 Leo Editor 與 Pelican, 在 Github pages 中建立靜態網站的系統.

在 Windows 64bit 環境中, 可以使用 https://github.com/chiamingyen/kmol2016.git 可攜套件.

至於在 Ubuntu 環境則必須安裝 Python3, PyQt, Leo Editor, Pelican 與 Markdown.

使用方法:

* 下載 kmolsite 倉儲資料
* 利用 Leo Editor 開啟 kmol2016.leo
* 修改 Pelican 遠端設定 publishconf.py, 至少必須修改 SITEURL
* 利用 @button local pelican 產生近端使用的靜態網頁資料
* 利用 @button gh-pages pelican 產生遠端使用的靜態網頁資料
* 所有的 md 檔案位於 content 目錄下, 靜態網頁資料則位於 blog 目錄下
