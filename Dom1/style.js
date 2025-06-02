
const body = document.getElementById('body');//selecting the body by body id

const button = document.querySelectorAll('li');

/*const redColor = document.querySelector('.red');
redColor.addEventListener('click',function(){
   body.style.backgroundColor = '#ff7979';
});

const greenColor = document.querySelector('.green');
greenColor.addEventListener('click',function(){
    body.style.backgroundColor = '#0be881'
});

const blueColor = document.querySelector('.blue');
blueColor.addEventListener('click',function(){
   body.style.backgroundColor = '#70a1ff';
});

const pinkColor = document.querySelector('.pink');
pinkColor.addEventListener('click',function(){
   body.style.backgroundColor = '#FDA7DF';
});
*/
//doing together
button.forEach(function(value){
   value.addEventListener('click',function(){
       let className = this.classList[0];//classlist will be classified as the pressed button here. Like if i press blue it will be denoted as blue
       let color = '';//which i will give input will store there.. as red for red,as blue for blue
       if(className == 'red')
       {
         color = '#ff7979';
       }
       else if(className == 'blue')
       {
         color = '#70a1ff';
       }
       else if(className == 'green')
       {
         color = '#0be881';
       }
       else if(className == 'pink')
       {
         color = '#FDA7DF';
       }
       else if(className == 'purple')
       {
         color = '#D980FA'
       }

       body.style.backgroundColor = color;
   });
});

//Live : 
    file:///C:/Users/HP/OneDrive/Desktop/Dom1/index.html
