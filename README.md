# youtube-playlist-total-time
Script that calculates total time of your Youtube playlist.

## Instructions:
- Open page with your Youtube list
- Open browser console (probably F12)
- Paste and run this code for enabling jQuery in your page:
```
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
```
- Paste and run this code for jQuery no conflict:
```
jQuery.noConflict();
```
- Finaly paste and run this code in console to get calculated total time:
```
var sum_s = 0;
var sum_m = 0;
var sum_h = 0;

jQuery('.timestamp span').each(function(){
var time = jQuery(this).text().split(':');
sum_s += parseInt(time[1]); 
sum_m += parseInt(time[0]); 
});

sum_h = Math.floor(sum_m/60);
sum_m = sum_m%60 + Math.floor(sum_s/60);
sum_s = sum_s%60;

alert(sum_h + " hours, " + sum_m + " minutes, " + sum_s + "seconds");
```

Enjoy this until Youtube change it's markup, or adds this functionality :)
