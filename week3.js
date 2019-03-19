var arr=[];

       $( function() {

         console.log('hey');
         $( "#df1" ).draggable({
          
           revert:"invalid"
             
         });

         $( "#or1" ).droppable({

           accept:'#df1',
  
           drop: function( event, ui ) {
             
             $(this).css("opacity","1")
             $("or1").append (ui.draggable);
             $(ui.draggable).css({position:"relative",top:"0px",left:"0px"})
              
             .draggable("disable")
             .css({opacity:0});
             arr='b';
             /*
             $( this )

               .addClass( "ui-state-highlight" )

               .find( "p" )

               .html( "Dropped!" );

               
  */        
           }

         });

console.log('dropdetect');
       } );

    
       $( function() {

         console.log('hey');
         $( "#df2" ).draggable({
          
           revert:"invalid"
             
         });

         $( "#or2" ).droppable({

           accept:'#df2',
  
           drop: function( event, ui ) {
             $(this).css("opacity","1")
             $("or2").append (ui.draggable);
             $(ui.draggable).css({position:"relative",top:"0px",left:"0px"})
              
             .draggable("disable")
             .css({opacity:0});
             /*
             $( this )

               .addClass( "ui-state-highlight" )

               .find( "p" )

               .html( "Dropped!" );

               
  */        
           }

         });

console.log('dropdetect');
       } );


       $( function() {

         console.log('hey');
         $( "#df3" ).draggable({
          
           revert:"invalid"
             
         });

         $( "#or3" ).droppable({

  
           accept:'#df3',
           drop: function( event, ui ) {
             $(this).css("opacity","1")
             $("or3").append (ui.draggable);
             $(ui.draggable).css({position:"relative",top:"0px",left:"0px"})
              
             .draggable("disable")
             .css({opacity:0});
             /*
             $( this )

               .addClass( "ui-state-highlight" )

               .find( "p" )

               .html( "Dropped!" );

               
  */        
           }

         });

console.log('dropdetect');
       } );

       $( function() {

         console.log('hey');
         $( "#df4" ).draggable({
          
           revert:"invalid"
             
         });

         $( "#or4" ).droppable({

           accept:'#df4',
  
           drop: function( event, ui ) 
           {
             $(this).css("opacity","1")
             $("or4").append (ui.draggable);
             $(ui.draggable).css({position:"relative",top:"0px",left:"0px"})
              
             .draggable("disable")
             .css({opacity:0});
             /*
             $( this )

               .addClass( "ui-state-highlight" )

               .find( "p" )

               .html( "Dropped!" );

               
  */        
           }

         });

console.log('dropdetect');
       } );
/*

let sourceContainerId ="";
let dragSources = document.querySelectorAll('[draggable="true"]')
dragSources.forEach(dragSource =>{
  dragSource.addEventListener('dragstart',dragStart);
  dragSource.addEventListener("dragged",dragEnd);  
})
let dropTargets = document.querySelectorAll('[data-role="drag-drop-container"]')
dropTargets.forEach(dropTarget =>{
dropTarget.addEventListener('drop',dropped)
dropTarget.addEventListener('dragenter',cancelDefault)
dropTarget.addEventListener('dragover',cancelDefault)
})

function cancelDefault (e){
e.preventDefault()
e.stopPropagation()
return false
}

function dragStart(e){
  e.dataTransfer.setData('text/plain',e.target.id);
  sourceContainerId=this.parentElement.id;
  console.log('sourceContainerId',sourceContainerId);
  
}
function dropped(e){
  if (this.id !==sourceContainerId){
  console.log('dropped')
  cancelDefault(e)
  let id = e.dataTransfer.getData('text/plain')
  e.target.appendChild(document.querySelector('#' + id))
}
}
/*
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
*/


