//image =dr2 empties=or2




/*
 *
 *
var id;

let dragSource = document.querySelector('#df1')
dragSource.addEventListener('dragstary',dragStart)

let dropTarget = document.querySelector('#or1')
dropTarget.addEventListener('drop',dropped)
dropTarget.addEventListener('dragenter',cancelDefault)
dropTarget.addEventListener('dragover',cancelDefault)

function cancelDefault (e){

e.preventDefault()
e.stopPropagation()
return false
}
function dragStart1(e){

console.log('dragStart')
  e.dataTransfer.serData('text/plain',e.target.id)

}
function dropped(e){
console.log('dropped')
  cancelDefault(e)
  let id=e.dataTransfer.getDate('text/plain')
  e.target.appenChild(document.querySelector('#' + id))
}





const dr2=document.querySelector('.df2');
const or2=document.querySelectorAll('.or2');

df2.addEventListener('dragstart'dragStart);
df2.addEventListener('dragend',dragEnd);

for (const empty of or2){
empty.addEventListener('dragover',dragOver);
empty.addEventListener('dragenter',dragEnter);
empty.addEventListener('dragleave',dragLeave);
empty.addEventListener('drop',dragDrop);
}

function dragStart(){

this.className += 'hold'; 
setTimeout(() =>(this.className='invisible'),0);
}
function dragEnd(){
this.className='dr2';
}

function dragOver(e){
  e.preventDefault();
console.log('over');
}

function dragEnter(e){
e.preventDefault();
this.className +='hovered';
console.log('enter');
}
function dragLeave(){
console.log('leave');
this.className='or2';
}
function dragDrop(){
  this.className='or2';
  this.append(df2);
console.log('drop');
}


 *
 * */
