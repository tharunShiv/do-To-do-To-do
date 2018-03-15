var item = document.getElementsByTagName('li');


for (var i=0; i<item.length; i+=2){
    item[i].style.backgroundColor='#ccc';
}

for (var i=1; i<item.length; i+=2){
    item[i].style.backgroundColor='#999';
}