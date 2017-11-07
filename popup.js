// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Search the bookmarks when entering the search keyword.
// $(function() {
//   $('#search').change(function() {
//      $('#bookmarks').empty();
//      dumpBookmarks();

//   });
// });
// Traverse the bookmark tree, and print the folder and nodes.

function dumpBookmarks() {
  var b="";
  chrome.bookmarks.getTree(function (success){
    document.write("<body style='width: 400px'>");
    var a=success[0].children[0].children;
    for (var i = 0; i < a.length; i++) {
      var m = moment(a[i].dateAdded);
      var s = m.format("M/D/YYYY H:mm"); 
      //document.write("<td>Bookmark " + i + " is:</td>&nbsp;");
      document.write("<td><a href='"+a[i].url+"' target='new' >"+ a[i].title + "</a></td><br>");
      document.write("<td>" + s + " </td>&nbsp; <br>");
    }
     document.write("</body>");
  })
}

document.addEventListener('DOMContentLoaded', function () {
  dumpBookmarks();
});
