function createOptions(estados) {
    const select = document.getElementById('select-state');
    for (let i in estados) {
        const option = document.createElement('option');  
        option.innerHTML = estados[i];
        select.appendChild(option);          
        }
}

function treatDay(day) {
    const formatedDay = Number(day.join(''));
    if (formatedDay < 0 && formatedDay > 31) {
        alert('formato de dia incorreto');
    } else {
        return formatedDay
    }    
}

function treatMonth(month) {
    const formatedMonth = Number(month.join(''));
    if  (formatedMonth < 0 && formatedMonth > 12) {
        alert('formato de mes incorreto')
    } else {
        return formatedMonth
    }
}

function treatYear(year) {
    const formatedYear = Number(year.join(''));
    if (formatedYear < 0 ) {
        alert('formato de ano incorreto')
    } else {
        return formatedYear
    }
}

function formatDate() {
    const date = document.getElementById('initial-date').value;
    let day, month, year = [];
    for (let i in date) {
        if(i < 2) {
            day += date[i];
        } else if (i > 2 && i < 5) {
            month += date[i]
        } else if (i > 5) {
            year += date[i]
        }     
    }
    return `${treatDay(day)}/${treatMonth(mes)}/${treatYear(year)}`
}

function initButtons () {
    const sendForm = document.getElementById('send-form');
    sendForm.addEventListener('submit', function (e) {
        e.preventDefault();    
        formatDate();
        });
}

window.onload =  () => {
    const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
    createOptions(estados);
    initButtons();
}

