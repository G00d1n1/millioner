// async function getResponse(){
//   // let response = await fetch('http://h213142582.nichost.ru/docs/images/brands')
//   let response = await fetch('https://jsonplaceholder.typicode.com/photos')
//   let content = await response.json()
//   content = content.splice(0, 3)
//   let list = document.querySelector('.game__options')
//   let key
//   console.log(content)
//   for(key in content){
//     list.innerHTML += 
//     `
//       <div>${content[key].title}</div>
//       <p>${content[key].url}</p>
//     `
//   }
// }
// getResponse()

// import {arr} from './cards.js'
      // анимация для игровых кнопок
// после кнопки старт, отследить и задать определенному элементу класс(table__active)

let arr = [
  {stady: 1, question: 'Что сказал космонавт Юрий Гагарин, когда полетел в космос?', a1: 'Погнали', a2: 'Помчались', a3: 'Поехали', a4: 'Ну будем', answer: 'Поехали'},
  {stady: 2, question: 'Сколько секунд в часе', a1: '36 000', a2: '3600', a3: '7200', a4: '360', answer: '3600'},
  {stady: 3, question: 'В каком году родился А.С.Пушкин', a1: '1769', a2: '1799', a3: '1789', a4: '1793', answer: '1799'},
  {stady: 4, question: 'Автором известнейшей картины «Джоконда» является:', a1: 'Малевич', a2: 'Леонардо да Винчи', a3: 'Рафаэль', a4: 'Ван Гог', answer: 'Леонардо да Винчи'},
  {stady: 5, question: 'Золушка, убегая с бала, потеряла:', a1: 'Перчатку', a2: 'Туфельку', a3: 'Шарфик', a4: 'Корону', answer: 'Туфельку'},
  {stady: 6, question: 'Место для выступления артистов в цирке называется:', a1: 'Арена', a2: 'Ринг', a3: 'Сцена', a4: 'Площадка', answer: 'Арена'},
  {stady: 7, question: 'Цвет, не входящий в радугу:', a1: 'Красный', a2: 'Жёлтый', a3: 'Фиолетовый', a4: 'Малиновый', answer: 'Малиновый'},
  {stady: 8, question: 'Самый крупный материк:', a1: 'Африка', a2: 'Евразия', a3: 'Австралия', a4: 'Северная Америка', answer: 'Евразия'},
  {stady: 9, question: 'Самое твёрдое море:', a1: 'Черное', a2: 'Мраморное', a3: 'Жёлтое', a4: 'Саргассово', answer: 'Мраморное'},
  {stady: 10, question: 'Назовите имя самого воинственного бога древних римлян:', a1: 'Марс', a2: 'Юпитер', a3: 'Нептун', a4: 'Бахус', answer: 'Марс'},
  {stady: 11, question: 'Имя русского поэта Некрасова:', a1: 'Иван', a2: 'Александр', a3: 'Николай', a4: 'Фёдор', answer: 'Николай'},
  {stady: 12, question: 'Что рисует художник-анималист?', a1: 'Животных', a2: 'Пейзажи', a3: 'Военные события', a4: 'Людей', answer: 'Животных'},
  {stady: 13, question: 'Максим Горький сказал: «Всему лучшему в себе я обязан…', a1: 'Маме', a2: 'Другу', a3: 'Книгам', a4: 'Школе', answer: 'Книгам'},
  {stady: 14, question: 'Назовите вид спорта, имеющий самый высокий титул «Королева спорта»:', a1: 'Бокс', a2: 'Футбол', a3: 'Баскетбол', a4: 'Легкая атлетика', answer: 'Легкая атлетика'},
  {stady: 15, question: 'Самая часто издаваемая книга в мире:', a1: 'Библия', a2: 'Азбука', a3: 'Конституция', a4: 'Книга рекордов Гиннеса', answer: 'Библия'},
  {stady: 16, question: '', a1: '', a2: '', a3: '', a4: '', answer: 'итог'},
]

let step = 0
let count = 15
let buttons = document.querySelectorAll('.column__block') 
let zero = document.querySelector('.zero')
let number, gameTimer, zeroInput
let gameBottom = document.querySelector('.game__bottom')
let start = document.querySelector('.start')
let page = document.querySelector('.page')
let startMenu = document.querySelector('.start__modul')
let nextQuest = document.querySelector('.nextQuest')
let tableNextStep = document.querySelector('.table__nextStep')
let tableLooseTime = document.querySelector('.table__looseTime')
let tableLoose = document.querySelector('.table__loose')
let checkQuestion = document.querySelector('.check__question')

start.addEventListener('click', startGame)
function startGame(){
  step = 1
  timeFnc()
  getElementsByArr()
  page.style.display = 'block'
  startMenu.style.display = 'none'
}

/*
Принять ответ...
  -- если верный ответ
    ,, вылезает надпись, типа - "Верно! Следующий вопрос...""
    ,, рамка в таблице поднимается на один уровень
    ,, таймер останавливается
    ,, игровое поле пустое
  -- если ответ неверный
    ,, вылезает надпись - "Ответ неверный. Игра проиграна!"
    ,, таймер останавливается
Следующий вопрос... 
  ,, игровое поле наполняется
  ,, таймер запускается
*/



        // стартовое меню
let gameStartMenu = document.querySelector('.game__start-menu')
let story = document.querySelector('.story')
let instruction = document.querySelector('.game__close')

story.addEventListener('click', function(){
  gameStartMenu.style.display = 'block'
})
instruction.addEventListener('click', function(){
  gameStartMenu.style.display = 'none'
})

        

      // заполнение игрового поля
let answer1, answer2, answer3, answer4, bottomQuest
function getElementsByArr(){
  let copyArr = arr.find(function(item){
    return item.stady === step    
  });
  bottomQuest = document.querySelector('.bottom__question')
  answer1 = document.querySelector('.a1')
  answer2 = document.querySelector('.a2')
  answer3 = document.querySelector('.a3')
  answer4 = document.querySelector('.a4')
  let bottomQ = copyArr.question;
  bottomQuest.innerHTML = bottomQ;
  let ans1 = copyArr.a1;
  answer1.innerHTML = ans1;
  let ans2 = copyArr.a2;
  answer2.innerHTML = ans2
  let ans3 = copyArr.a3;
  answer3.innerHTML = ans3
  let ans4 = copyArr.a4;
  answer4.innerHTML = ans4
}


        // следующий вопрос
nextQuest.addEventListener('click', nextQuestion)
function nextQuestion(){
  clearInterval(gameTimer)
  getElementsByArr()
  timeFnc()
  zeroInput = 0
}

      // Подсказки
president.addEventListener('click',function(){
  window.open('tel:74956063602');
  president.setAttribute('disabled','')
})
let help1, help2
help5050.addEventListener('click',function(){
  help5050.setAttribute('disabled','')      // делает кнопку неактивной после нажатия
  let helpArr5050 = []
  buttons.forEach(element => {
    help1 = arr.find(function(item){
      return item.stady === step;
    })
    help2 = help1.answer
    if(element.innerText !== help2){
      helpArr5050.push(element)
      if(helpArr5050.length >= 2){
        element.innerHTML = ''
      }
    }
  });
})
delOne.addEventListener('click',function(e){
  delOne.setAttribute('disabled','')
  let helpArrDelOne = []
  buttons.forEach(element => {
    help1 = arr.find(function(item){
      return item.stady === step;
    })
    help2 = help1.answer
    if(element.innerText !== help2){
      helpArrDelOne.push(element)
      if(helpArrDelOne.length >= 3){
        element.innerHTML = ''
      }
    }
  })
})
secondLife.addEventListener('click',function(){
  secondLife.setAttribute('disabled','')
  secondLife.setAttribute('boolean','true')
})
// let helpSecondLife = []
// кликаю по элементу если не содержит DISABLED он пустой
// отследить клик по ответам
// который позволяет выбрать до 2х ответов
// кликаю подсказку,(появляется клик), потом кликаю на элемент на игровом поле,
// запускается проверка, если ответ совпадает, то зеленое меню




      // сравнение ответов по клику - процесс                      // ведение счета в таблице
let check = document.querySelector('.btn.check')
check.addEventListener('click', process)
function process(){
  clearInterval(gameTimer)
  buttons.forEach(elem => {
            // получение и приведение верныж ответов к строке из таблицы
    number = arr.find(function(item){
      return item.stady === step    
    });
    let corectAnswerTable = number.answer 
              // сравниваю значение
    if(elem.classList.contains('active')){
      let correctValue = elem.innerHTML
              // проверяю, если вопрос угадан
      if(correctValue === corectAnswerTable){
        answer1.innerHTML = '';
        answer2.innerHTML = '';
        answer3.innerHTML = '';
        answer4.innerHTML = '';
        bottomQuest.innerHTML = '';

        step++
        count--
              // условие победы
        if(step == 15){
          let luck = document.createElement('p')
          luck.classList.add('table__winner')
          luck.innerText = 'Поздравляю, вы победитель!'
          gameBottom.insertBefore(luck, checkQuestion)
          // добавить звуковой эффект и анимацию
        }
              // результат в рейтинговой таблице
        let part
        let list = document.querySelectorAll('table tr');
        list.forEach(element => {
          element.classList.remove('table__active')
          part = document.querySelector(`table tr:nth-child(${count})`)
          part.classList.add('table__active')
        });
              // текст ведущего
        let listTr = part.querySelector(`table tr td:last-child`)
        let listTrTd = listTr.innerText
        tableNextStep.innerText = `Следующий вопрос на ${listTrTd} рублей`
      }
      else {        // иначе, если вопрос не угадан
        tableLoose.style.display = 'block'
        elem.style.backgroundImage = 'url(img/fail.png)'
        elem.style.color = '#ececec'

        buttons.forEach(element => {
          if (corectAnswerTable === element.textContent){
            element.style.backgroundImage = 'url(img/right.png)'
            element.style.color = '#ececec'
            checkQuestion.style.display = 'none'
// тут можно сделать мигание зелёного ответа
          }
        });
      }
      elem.classList.remove('active')     // обновляет таблицу результатов
    }
  })
  // getElementsByArr()
}

      // таймер
let timeFnc = function timer(){
  let zz = document.querySelector('.numbers .circle i')
  let sc = document.querySelector('#sec')
  zeroInput = Number(zero.innerText)
  gameTimer = setInterval(function(){
    let timer = zeroInput += 1
    zero.innerHTML = timer
    let ss = timer * 6;
    sc.style.transform = `rotateZ(${ss}deg)`;
    zz.style.backgroundColor = '#d47405'

    if(zeroInput == 60){
      isLoose()
      tableLooseTime.style.display = 'block'
      checkQuestion.style.display = 'none'
    }
  },1000)
  function isLoose(){
    console.log('Увы! Время окончено!')
    clearTimeout(gameTimer)
  }
}


        // анимация для ответов + право на ошибку
buttons.forEach(btn => {
  btn.addEventListener('mouseenter',function(e){
    let target = e.target
    target.classList.add('btnHover')
  })
  btn.addEventListener('mouseout',function(e){
    let target = e.target
    target.classList.remove('btnHover')
  })
})

      // анимация по клику + подсказка Право на ошибку
let counterSecondLife = 0
buttons.forEach(btn => {
  btn.addEventListener('click', function(e){
    e.preventDefault()
    counterSecondLife++

    buttons.forEach(elem=>{elem.classList.remove('active')})

    help1 = arr.find(function(item){
      return item.stady === step;
    })
    help2 = help1.answer

    let align = secondLife.getAttribute('boolean')
    if (align === 'true'){      // если нажата кнопка

      if(btn.innerText !== help2){
        
        if(counterSecondLife < 2){
          e.target.innerHTML = ''
        }
        else{
          btn.classList.add('active')
        }
      }
      // else {
      //   btn.style.backgroundImage = 'url(img/right.png)'    // при клике показывает верный вариант
      // }
    }
      btn.classList.add('active')
  })
});


