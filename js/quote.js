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



let res = []; 
const chooseRandom = (quotes,num) => { 
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

let i = 0;
const keys = document.querySelectorAll(".quote span:first-child"); 
keys.forEach( key => key.innerText = res[i++].keys );

let j = 0;
const describes = document.querySelectorAll(".quote span:last-child")
describes.forEach( describe => describe.innerText = res[j++].describe ); 


