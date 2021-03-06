// array_basic3.js
let data = `[{"id":1,"first_name":"Gus","last_name":"Falck","email":"gfalck0@vk.com","gender":"Male","salary":2598},
{"id":2,"first_name":"Daisey","last_name":"Armstrong","email":"darmstrong1@imdb.com","gender":"Female","salary":2653},
{"id":3,"first_name":"Nathan","last_name":"Villa","email":"nvilla2@walmart.com","gender":"Agender","salary":4374},
{"id":4,"first_name":"Aleen","last_name":"Humfrey","email":"ahumfrey3@mapy.cz","gender":"Female","salary":1483},
{"id":5,"first_name":"Chadd","last_name":"Suggett","email":"csuggett4@nifty.com","gender":"Male","salary":2265},
{"id":6,"first_name":"Mollie","last_name":"Orsman","email":"morsman5@people.com.cn","gender":"Female","salary":1283},
{"id":7,"first_name":"My","last_name":"Danhel","email":"mdanhel6@edublogs.org","gender":"Male","salary":1573},
{"id":8,"first_name":"Nora","last_name":"O' Mahony","email":"nomahony7@goodreads.com","gender":"Female","salary":4440},
{"id":9,"first_name":"Dede","last_name":"Stoneman","email":"dstoneman8@weather.com","gender":"Agender","salary":4664},
{"id":10,"first_name":"Gloria","last_name":"Furphy","email":"gfurphy9@constantcontact.com","gender":"Female","salary":1602},
{"id":11,"first_name":"Lenci","last_name":"Dupre","email":"lduprea@ask.com","gender":"Male","salary":1813},
{"id":12,"first_name":"Cirstoforo","last_name":"Marquiss","email":"cmarquissb@princeton.edu","gender":"Male","salary":2518},
{"id":13,"first_name":"Mirabelle","last_name":"Rendle","email":"mrendlec@blogtalkradio.com","gender":"Female","salary":4175},
{"id":14,"first_name":"Rochelle","last_name":"Rhucroft","email":"rrhucroftd@sakura.ne.jp","gender":"Agender","salary":4134},
{"id":15,"first_name":"Amby","last_name":"Mushawe","email":"amushawee@altervista.org","gender":"Male","salary":4522}]`;

let gender = prompt('Male or Female 을 입력');
console.log(gender);

let objAry = JSON.parse(data); // 문자열 => 오브젝트
console.log(objAry);

// 표(table) 형태로 출력.
let result = objAry.reduce(function (accum, curr, currIdx) {
    if (currIdx == 0) {
        accum += '<table border=1>';
    }
    if (curr.gender == gender) { // 사용자 입력한 값과 동일한 성별.
        accum += '<tr>';
        for (let field in curr) { // 오브젝트의 속성의 갯수만큼 생성.
            accum += `<td>${curr[field]}</td>`;
        }
        accum += '</tr>';
    }
    if (currIdx == objAry.length - 1) {
        accum += '</table>';
    }
    return accum;
}, '');
document.write(result);