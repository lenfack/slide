
let offset = 0;
    step = 0;
    go = 0;
    num = 0;
const border = document.querySelectorAll('.item-info');
      line = document.querySelector('.header__color');
      move = document.querySelector('.info__card');
      btn = document.querySelector('.next');

btn.addEventListener('click', start);

function start() {
step++ 
  if(size() > 1200){
         //шаг для карточки
    if(step === 5){   //чтоб карточка не выходила за границы
        step = 0;
    }
    if(step < 3){     //выделение карточки стоит на месте до шага 4
      go = 0;
    } else if(step >= 3 && step < 4) {    //marginLeft дописывается
      go -= 300;
    }

    offset++                   // шаг для полоски
    if(offset > 4){
      offset = 0;
      num = 0;
    }
    if(offset > 0){
      num += 60;
    }
  

    move.style.left = go + 'px';
    line.style.marginLeft = num + 'px';
    borderActiv(step)
  }

  if(size() < 1200 && size() > 910){
         //шаг для карточки
    if(step === 5){   //чтоб карточка не выходила за границы
        step = 0;
    }
    if(step < 1){     //выделение карточки стоит на месте до шага 4
        go = 0;
    } else if(step >= 2 && step < 4) {    //marginLeft дописывается
        go -= 300;
    }
  
    offset++                   // шаг для полоски
    if(offset > 4){
        offset = 0;
        num = 0;
    }
    if(offset > 0){
        num += 60;
    }
    
  
    move.style.left = go + 'px';
    line.style.marginLeft = num + 'px';
    borderActiv(step)
  }

  if(size() < 910 && size() > 600){
    //шаг для карточки
    if(step === 5){   //чтоб карточка не выходила за границы
        step = 0;
    }
    if(step < 1){     //выделение карточки стоит на месте до шага 4
      go = 0;
    } else if(step > 1 && step < 5) {    //marginLeft дописывается
      go -= 300;
    }
    

    offset++                   // шаг для полоски
    if(offset > 4){
      offset = 0;
      num = 0;
    }
    if(offset > 0){
      num += 22;
    }


    move.style.left = go + 'px';
    line.style.marginLeft = num + 'px';
    borderActiv(step)
  }

  if(size() < 600){
    //шаг для карточки
    if(step === 5){   //чтоб карточка не выходила за границы
        step = 0;
    }
    if(step === 0){     //выделение карточки стоит на месте до шага 4
      go = 0;
    } else if(step > 0 && step < 5) {    //marginLeft дописывается
      go -= 300;
    }

    offset++                   // шаг для полоски
    if(offset > 4){
      offset = 0;
      num = 0;
    }
    if(offset > 0){
      num += 22;
    }


    move.style.left = go + 'px';
    line.style.marginLeft = num + 'px';
    borderActiv(step)
  }
};

document.querySelector('.back').addEventListener('click', function() {
step--

  if(size() > 1200){
    if(step < 0){
      step = 4;
    }
    if(step > 3){
      go -= 300;
    } else if(step < 3){
      go = 0;
    }

    offset--
    if(offset < 0){
      offset = 4;
      num = 300;
    }
    if(offset < 5){
      num -= 60;
    }

      move.style.left = go + 'px';
      line.style.marginLeft = num + 'px';
      borderActiv(step)
  }

  if(size() < 1200 && size() > 910){
    if(step < 0){
      step = 4;
    }
    if(step > 3){
      go -= 600;
    } else if(step < 3 && step > 0){
      go += 300 ;
    }
  

    offset--
    if(offset < 0){
      offset = 4;
      num = 300;
    }
    if(offset < 5){
      num -= 60;
    }
  
    move.style.left = go + 'px';
    line.style.marginLeft = num + 'px';
    borderActiv(step)
  }

  if(size() < 910 && size() > 600){
    if(step < 0){
      step = 4;
    }
    if(step >= 4){
      go -= 900;
    } else if(step < 4 && step > 0){
      go += 300 ;
    } else if(step == 0){
      go = 0;
    }
    
    offset--
    if(offset < 0){
      offset = 4;
      num = 110;
    }
    if(offset < 5){
      num -= 22;
    }
    
  move.style.left = go + 'px';
  line.style.marginLeft = num + 'px';
  borderActiv(step)
  }

  if(size() < 600){
    if(step < 0){
      step = 4;
    }
    if(step >= 4){
      go -= 1207;
    } else if(step < 4 && step > 0){
      go += 302 ;
    } else if(step == 0){
      go = 0;
    }
    
    offset--
    if(offset < 0){
      offset = 4;
      num = 110;
    }
    if(offset < 5){
      num -= 22;
    }
    
  move.style.left = go + 'px';
  line.style.marginLeft = num + 'px';
  borderActiv(step)
  }

  clearInterval(timer);  
});

//функция для перебора всех vertical__item и добавление или удаление класса active
function borderActiv(i){
  border.forEach(item => {
    item.classList.remove('active');
  })
  border[i].classList.add('active');
}
borderActiv(0)


function size (){
  return document.body.clientWidth;
}
size()


const timer = setInterval(() => {
  if(btn.addEventListener('click', start)){
    clearInterval(timer)
  }else {
    start();
  }
}, 3000);

// Вешаем на прикосновение функцию handleTouchStart
document.addEventListener('touchstart', handleTouchStart, false);  
// А на движение пальцем по экрану - handleTouchMove      
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
        } else {
            /* right swipe */
        }                       
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};