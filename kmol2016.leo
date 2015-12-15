<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<?xml-stylesheet ekr_test ?>
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20151212173315.1"><vh>@settings</vh>
<v t="leo.20151212173315.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20151212173315.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20151213230723.1"><vh>Pelican 設定</vh>
<v t="leo.20151213230957.1"><vh>文章 Date 設定</vh></v>
<v t="leo.20151213230729.1"><vh>使用 summary plugin</vh></v>
</v>
<v t="leo.20151213173811.1" a="E"><vh>假如要送到 gh-pages 分支, 使用下列按鈕</vh>
<v t="leo.20151212173658.1"><vh>@button gh-pages pelican</vh></v>
</v>
<v t="leo.20151213173830.1" a="E"><vh>假如要在近端檢視, 使用下列按鈕</vh>
<v t="leo.20151213085727.1"><vh>@button local pelican</vh></v>
</v>
<v t="leo.20151212173725.1"><vh>@edit pelicanconf.py</vh></v>
<v t="leo.20151212173803.1"><vh>@edit publishconf.py</vh></v>
<v t="leo.20151213085752.1"><vh>@edit local_publishconf.py</vh></v>
<v t="leo.20151212173309.2"><vh>@path content</vh>
<v t="leo.20151212173407.1"><vh>@edit 20151212.md</vh></v>
<v t="leo.20151212204009.1"><vh>@edit 20151212-1.md</vh></v>
<v t="leo.20151212233655.1"><vh>@edit 20151213.md</vh></v>
<v t="leo.20151213090329.1"><vh>@edit 20151213-1.md</vh></v>
<v t="leo.20151213173154.1"><vh>@edit 20151213-2.md</vh></v>
</v>
<v t="amd.20151214223609.1"><vh>有關 Tipue Search</vh></v>
<v t="amd.20151215121740.1" a="E"><vh>@path theme</vh>
<v t="amd.20151215121758.1" a="E"><vh>@path pelican-bootstrap3</vh>
<v t="amd.20151215121816.1" a="E"><vh>@path templates</vh>
<v t="amd.20151215121827.1"><vh>@edit base.html</vh></v>
<v t="amd.20151215121849.1"><vh>@edit search.html</vh></v>
<v t="amd.20151215152634.1"><vh>@edit tags.html</vh></v>
</v>
</v>
<v t="amd.20151215154950.1" a="E"><vh>@path pelican-bootstrap3_local</vh>
<v t="amd.20151215154950.2" a="E"><vh>@path templates</vh>
<v t="amd.20151215154950.3"><vh>@edit base.html</vh></v>
<v t="amd.20151215154950.4"><vh>@edit search.html</vh></v>
<v t="amd.20151215154950.5"><vh>@edit tags.html</vh></v>
</v>
</v>
</v>
<v t="amd.20151215155650.1"><vh>@edit tipuesearch_content.json</vh></v>
<v t="amd.20151215155533.1"><vh>@edit tipuesearch_content.js</vh></v>
<v t="amd.20151215154225.1" a="E"><vh>@path plugin</vh>
<v t="amd.20151215154238.1" a="E"><vh>@path tipue_search</vh>
<v t="amd.20151215154248.1"><vh>@edit tipue_search.py</vh></v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="amd.20151214223609.1">static

index.html 中, 主要包含下列兩項設定:

css 使用

&lt;link rel="stylesheet" type="text/css" href="tipuesearch/tipuesearch.css"&gt;

搜尋表單

&lt;form action="search.html"&gt;
&lt;input type="text" name="q" id="tipue_search_input" autocomplete="off" required&gt;
&lt;/form&gt;

search.html 中, 則包含如下設定:

&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;link rel="stylesheet" href="../../inc/normalize.css"&gt;
&lt;link rel="stylesheet" href="../../inc/standard.css"&gt;

&lt;script type="text/javascript" src="tipuesearch/tipuesearch_set.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="tipuesearch/tipuesearch_content.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" type="text/css" href="tipuesearch/tipuesearch.css"&gt;
&lt;script type="text/javascript" src="tipuesearch/tipuesearch.min.js"&gt;&lt;/script&gt;

表單與搜尋結果列出處:

&lt;form action="search.html"&gt;
&lt;input type="text" name="q" id="tipue_search_input" autocomplete="off" required&gt;
&lt;/form&gt;
&lt;div id="tipue_search_content"&gt;&lt;/div&gt;

最後則是搜尋程式的啟動:

&lt;script&gt;
$(document).ready(function() {
     $('#tipue_search_input').tipuesearch();
});
&lt;/script&gt;

以上為 JQuery 的語法, 表示 document 載入完成後, 將會執行 id=tipue_search_input 物件的 tipuesearch 方法</t>
<t tx="amd.20151215121740.1"></t>
<t tx="amd.20151215121758.1"></t>
<t tx="amd.20151215121816.1"></t>
<t tx="amd.20151215154225.1"></t>
<t tx="amd.20151215154238.1"></t>
<t tx="amd.20151215154950.1"></t>
<t tx="amd.20151215154950.2"></t>
<t tx="leo.20151212173309.2"></t>
<t tx="leo.20151212173315.1"></t>
<t tx="leo.20151212173315.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20151212173315.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20151212173658.1">@language python
import os
#os.system("pelican content -o ./ -s publishconf.py -t theme/pelican-bootstrap3")
os.system("pelican content -o ./ -s publishconf.py")
g.es("admin pelican 執行完畢")

</t>
<t tx="leo.20151213085727.1">@language python
import os
#os.system("pelican content -o ./ -s local_publishconf.py -t theme/pelican-bootstrap3")
os.system("pelican content -o ./ -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")

</t>
<t tx="leo.20151213173811.1"></t>
<t tx="leo.20151213173830.1"></t>
<t tx="leo.20151213230723.1"></t>
<t tx="leo.20151213230729.1">利用

&lt;!-- PELICAN_END_SUMMARY --&gt;

來界定 Summary 摘要內容

前提, 必須設定 

PLUGIN_PATHS = ['plugin']

與

PLUGINS = ['liquid_tags.notebook', 'summary']

並且從 https://github.com/getpelican/pelican-plugins

取得 summary plugin</t>
<t tx="leo.20151213230957.1"># 設定網誌以 md 檔案建立的 file system date 為準, 無需自行設定

DEFAULT_DATE = 'fs'</t>
</tnodes>
</leo_file>
