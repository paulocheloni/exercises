function createOptions(estados) {
    const select = document.getElementById('select-state');
    for (let i in estados) {
        const option = document.createElement('option');  
        option.innerHTML = estados[i];
        select.appendChild(option);          
        }
}    

function initButtons () {
    const sendForm = document.getElementById('send-form');
    sendForm.addEventListener('submit', function (e) {
        e.preventDefault();    
        
        });
}

window.onload =  () => {
    const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO",
     "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
      "RO", "RS", "RR", "SC", "SE",
       "SP", "TO"];
    createOptions(estados);
    initButtons();
    new JustValidate('.js-form', {
        rules: {
            name: {                
                required: true,
                minLength: 4,
                maxLength:15
            },
            email: {
                required: true,
                email: true
            },
            adress: {
                required:true,    
            },            
            cpf: {
                required:true,
                remote:
            },
            casa: {
                required:true
            },
            city: {
                required:true
            },
        },            
        messages: {
                name: {                    
                    required: 'Nome inválido',
                    minLength: 'nome com tamanho minimo de 3 caractere',
                    maxLength: 'nome com tamanho maximo de 15 caractere'
                },
                email: 'email inválido'
        },
    
        submitHandler: function (form, values, ajax) {
        
            ajax({
                url: 'https://just-validate-api.herokuapp.com/submit',
                method: 'POST',
                data: values,
                async: true,
                callback: function(response)  {
                console.log(response)
                }
            });
        },
    });
}


