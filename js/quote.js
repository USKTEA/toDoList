const quotes = [ 
    {keys:"Ctrl+X",
     describe:"커서 위치 행 잘라내기",},
     {keys:"Ctrl+Shift+K",
     describe:"커서 위치 행 삭제",},
     {keys:"Ctrl+C",
     describe:"커서 위치 행 복사",},
     {keys:"Ctrl+Enter",
     describe:"커서 아래 행 빈줄 생성",},
     {keys:"Alt+(↑)화살표",
     describe:"행을 위로 이동",},
     {keys:"Alt + (↓)화살표",
     describe:"행을 아래로 이동",},
     {keys:"Ctrl + Alt + (↑)화살표",
     describe:"커서를 위에 추가(다중선택)",},
     {keys:"Ctrl + Alt + (↓)화살표",
     describe:"커서를 아래에 추가(다중선택)",},
     {keys:"Ctrl + /",
     describe:"한줄 주석처리",},
     {keys:"Ctrl + Shift + H",
     describe:"폴더 모든 페이지 문자열 수정하기",},
     {keys:"Ctrl + →",
     describe:"단어별 커서 이동",},
     {keys:"Ctrl + D",
     describe:"특정 문자열 여러개 찾기",},
     {keys:"Ctrl + Shift + L",
     describe:"특정 문자열 모두 선택",},
]

const keys1 = document.querySelector(".quote1 span:first-child");
const describe1 = document.querySelector(".quote1 span:last-child");

const keys2 = document.querySelector(".quote2 span:first-child");
const describe2 = document.querySelector(".quote2 span:last-child");

const keys3 = document.querySelector(".quote3 span:first-child");
const describe3 = document.querySelector(".quote3 span:last-child");

const keys4 = document.querySelector(".quote4 span:first-child");
const describe4 = document.querySelector(".quote4 span:last-child");

const keys5 = document.querySelector(".quote5 span:first-child");
const describe5 = document.querySelector(".quote5 span:last-child");




let res = []; 
const chooseRandom = (quotes,num =1) => { 
    res = [] ; 
    for(let i=0; i < num; ) {
        const random = Math.floor(Math.random()*quotes.length);
        if(res.indexOf(quotes[random]) !== -1) { 
            continue;
        };
        res.push(quotes[random]);
        i++;
    };
    return res;
};

chooseRandom(quotes,5);

const todaysHint1 = res.at(0);
keys1.innerText = todaysHint1.keys; 
describe1.innerText = todaysHint1.describe;

const todaysHint2 = res.at(1);
keys2.innerText = todaysHint2.keys; 
describe2.innerText = todaysHint2.describe;

const todaysHint3 = res.at(2);
keys3.innerText = todaysHint3.keys; 
describe3.innerText = todaysHint3.describe;

const todaysHint4 = res.at(3);
keys4.innerText = todaysHint4.keys; 
describe4.innerText = todaysHint4.describe;

const todaysHint5 = res.at(4);
keys5.innerText = todaysHint5.keys; 
describe5.innerText = todaysHint5.describe;


//forEach로 개선 가능하대 