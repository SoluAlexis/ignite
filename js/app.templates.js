angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/partials/about.html","<md-content id=\"about\" ng-show=\"!files.length\" layout-fill=\"layout-fill\" class=\"md-padding\"><h2>Open one or more pdf files from your dropbox, and play with auto-advancing.</h2><p>files are processed locally, nothing is sent to any server.</p><div class=\"ui divider\"></div><div class=\"ui warning message\">built for the <a href=\"http://ocftw.kktix.cc/events/ignite-od\">Ignite Open Data</a> event</div><a href=\"https://github.com/clkao/ignite\">github</a></md-content><md-progress-linear ng-show=\"started\" ng-if=\"hasPDF\" md-mode=\"buffer\" value=\"{{pageProgress}}\" md-buffer-value=\"{{slideProgress}}\" style=\"z-index: 10\" class=\"ignite md-warn\"></md-progress-linear><ng-pdf template-url=\"app/partials/viewer.html\" ng-if=\"hasPDF\" ng-class=\"{ready: ready}\" ng-style=\"{position: \'fixed\', top: 0, left:0, right: 0, bottom: 0, \'z-index\': 9}\" scale=\"page-fit\" ng-controller=\"PDFPlayerCtrl\"></ng-pdf>");
$templateCache.put("app/partials/nav.html","<div id=\"sidehover\" ng-mouseover=\"hover()\"></div><div ng-controller=\"LeftCtrl\"><md-sidenav md-component-id=\"left\" md-is-locked-open=\"!files\" class=\"md-sidenav-left md-whiteframe-z2\"><md-toolbar class=\"md-theme-indigo\"><h1 class=\"md-toolbar-tools\">Ignite Talks</h1></md-toolbar><md-content class=\"md-padding\"><md-button ng-click=\"close()\" hide-gt-md=\"\" class=\"md-primary\">Close</md-button><md-button ng-click=\"dropbox()\" class=\"md-primary\"><i class=\"large icon dropbox\"></i>dropbox</md-button><md-button ng-files-model=\"localFiles\" class=\"md-primary\"><label><i class=\"large icon file\"></i><input type=\"file\" multiple=\"multiple\" accept=\"application/pdf\" style=\"display: none\"/>local files</label></md-button><md-list role=\"list\" ui-sortable=\"ui-sortable\" ng-model=\"files\"><md-item role=\"listitem\" ng-repeat=\"file in files\"><md-item-content><div class=\"md-tile-left\"><img ng-src=\"{{file.icon}}\" class=\"face\"/></div><div ng-click=\"trigger(file)\" class=\"md-tile-content\"><h3>{{file.name}}</h3></div></md-item-content></md-item></md-list><md-button ng-click=\"reset()\" class=\"md-primary\">RESET</md-button></md-content></md-sidenav></div>");
$templateCache.put("app/partials/viewer.html","<canvas id=\"pdf-canvas\" xng-controller=\"PDFPlayerCtrl\" style=\"margin: auto; display: block; position: absolute; top: 0; bottom: 0; left: 0; right: 0\"></canvas><md-icon ng-show=\"ready &amp;&amp; !started\" md-svg-src=\"https://google.github.io/material-design-icons/av/svg/ic_play_circle_outline_24px.svg\" alt=\"Start\" style=\"z-index: 99; width: 100%; height: 100%; position: fixed; left: 0; top: 0; color: red\" ng-click=\"start()\" class=\"s48\"></md-icon>");}]);