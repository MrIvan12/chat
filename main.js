const input_name = document.querySelector('#input_name');
const input_comment= document.querySelector('#input_comment');
const button = document.querySelector('#button');
const comments = document.querySelector('.comments');

let comments2 = [];
let d = new Date();
loadComments();
button.addEventListener('click',function(){
    event.preventDefault();
    let comment = {
        time:d,
        name:input_name.value,
        comment2:input_comment.value

    }
    input_comment.value ='';
    comments2.push(comment);
    console.log(comments2);
    saveComment();
    viweComments();
});
function saveComment(){
    localStorage.setItem('message',JSON.stringify(comments2));
}
function loadComments(){
    if(localStorage.getItem('message')) comments2=  JSON.parse(localStorage.getItem('message'));
    viweComments();
}
function viweComments(){
    let out='';
    comments2.forEach(function(elem){

     out += `<p>
     <span><small><em>${elem.time}</em></small></span><br>
    ${elem.name + ':' + elem.comment2}
     </p>`
    });
    comments.innerHTML = out;
}