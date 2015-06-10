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