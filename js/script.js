
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
    
}