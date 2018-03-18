
// // GETELEMENTSBYTAGNAME //

// var itemC = document.getElementsByTagName('li');

// for (var i=0; i<itemC.length; i+=2){
//     itemC[i].style.backgroundColor='#EEE';
// }

// for (var i=1; i<itemC.length; i+=2){
//     itemC[i].style.backgroundColor='#CCC';
// }


// ADD REMOVE VARIABLES SETUP //
var itemList = document.getElementById('items');
var item = document.getElementById('item');
var form = document.getElementById('addForm');
var input = document.getElementById('filter');
//Form to listen
form.addEventListener('submit', addItem);

//to delete
itemList.addEventListener('click', removeItem);

//filter
input.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    // console.log(item.value);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item.value));
    li.className = 'list-group-item';
    console.log(li);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}



//To Delete
function removeItem(e){
    //console.log('1');
    // since this listens on the whole li
    if(e.target.classList.contains('delete')){
        //console.log('2');
        if(confirm('Are you sure to delete the '+e.target.previousSibling.data +' ?')){
            //grab the parent
            // console.log(e.target.previousSibling.data);
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }
    }
}


// Filtering
function filterItems(e){
    // console.log(e.target.value);
    var search = e.target.value.toLowerCase();
    // console.log(search);
    var items = document.getElementsByTagName('li');
    // gives a html collection 
    // convert to array for flexibility
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      //here the first child is the text(item)
      // second chils is the Button X

      // console.log(itemName);
      if(itemName.toLowerCase().indexOf(search) != -1){
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
        });
}

// FUN PART //

var body1 = document.getElementsByTagName('body');
body1[0].addEventListener('mousemove', colorChange);

//listen from the checkbox
var x=1;
var checkBox = document.getElementById('checkbox');
checkBox.addEventListener('click', changeVal);


function changeVal(){
    if(x){
        x=0;
        document.getElementById('filter').style.border='1px solid grey';
        document.getElementById('header-title').style.color='white';
    }else{
        x=1;
    }
}

function colorChange(e){
    if(x){
        // console.log(e);
        var r = (e.clientX % 255);
        // console.log(r);
        var g = ((e.clientY + 20) % 255);
        var b = ((r+g) % 255);
        
        var checkBox = document.getElementById('checkbox');
        
        
        document.getElementById('filter').style.border='6px solid rgb('+r+','+g+','+b+')';
        document.getElementById('header-title').style.color='rgb('+r+','+g+','+b+')';

    }   
}

