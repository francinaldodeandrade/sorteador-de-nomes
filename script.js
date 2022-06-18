const words = [
    "1  Karieline de s Ramalho",
    "2  Maria do socorro Alves Silva",
    "3  Alzenira Lima saldanha",
    "4  Josiana Sousa Almeida Fernandes",
    "5  Dayane Pereira de Almeida",
    "6  Josiana Sousa Almeida Fernandes",
    "7 Edna Lorena",
    "8  Maria Aparecida",
    "9  Maria do socorro Alves Silva",
    "10 Jaiane Maria Dos Santos Lima",
    "11 Maria Do Rosario de Souza Dantas",
    "12 Karieline de s Ramalho",
    "13 Jamile Fernades de Souza",
    "14 Lorrane Sanara Andrade da Silva",
    "15 Flavia da Silva Santos",
    "16 Danila de Sousa Abreu",
    "17 Dalvanete Alves da Quilha",
    "18 Milena Maria Pontes",
    "19 Angela Mirele de Souza Dantas",
    "20 Maria Rita da Costa Moura",
    "21 Aline de Franca Pereira",
    "22 Daniele Pereira de Almeida",
    "23 Anair Silva de Araujo",
    "24 Edna Lorena",
    "25 Vanessa Lima Soares",
    "26 Raiane Monica Alves de Souza",
    "27 Luana Vitoria W Bandeira",
    "28 Alzenira Lima saldanha",
    "29 Maria de Jesus Severo Formiga",
    "30 Maria Lucia Pereira de Almeida",
    "31 Edna Lorena",
    "32 Vitoria G Gomes Ferreira",
    "33 Andreia Vieira Almeida",
    "34 Lorrane Sanara Andrade da Silva",
    "35 Anair Elaide Santos Sousa",
    "36 Fernanda de O L Martins",
    "37 Milena Maria Pontes",
    "38 Vilma Lucena da Silva",
    "39 Maria da Conceição L Souza",
    "40 Kamilla K Da Silva Galvão",
    "41 Leticia Alves Formiga",
    "42 Neneida lima",
    "43 Andreia Paula O Freitas",
    "44 Aiana Fernandes Alves Galdino",
    "45 Ajoane Vitoria Lima De Souza",
    "46 Maria de Jesus Severo Formiga",
    "47 Vilma Lucena da Silva",
    "48 Flavia Silva",
    "49 Nilda Forma com Amor",
    "50 Andreia Ferreira de A castro",
    "51 Talita Nobre de Oliveira",
    "52 numero não assinado",
    "53 Tatiane Neves Formiga",
    "54 numero não assinado",
    "55 Debora Samara O Lima e Silva",
    "56 Amanda F alves",
    "57 Aline  Galdino de Almeida",
    "58 Glauce Regina M de oliveira",
    "59 Maria Rita da Costa Moura",
    "60 Maria da Conceição L Souza",
    "61 BArbara Aves Martins",
    "62 Mirela Almeida Pereira",
    "63 Anair Elaide Santos Sousa",
    "64 Jessica Nunes da Silva",
    "65 Leticia Alves Formiga",
    "66 Avany F Alves",
    "67 Genilda Alves Da Costa",
    "68 Celia De Oliveira Barbosa",
    "69 Sintia Manicure",
    "70 Genitania go de Silva",
    "71 Anair F Alves",
    "72 Thais Michele de Souza Freire",
    "73 Kivia Sousa",
    "74 Regina da Costa Barbosa",
    "75 Mirna Larissa Barbosa Moitinho",
    "76 Simone da Siva Targino",
    "77 Andreia Paula O Freitas",
    "78 Rovenia Linhares F Araujo",
    "79 Vitoria Gabriela Ferreira",
    "80 Genilda Alves Da Costa",
    "81 Nilda do Forma com amor",
    "82 numero não assinado",
    "83 Mikaela Almeida Pereira",
    "84 Rachel Ribeiro da Silva",
    "85 numero não assinado",
    "86 Maria Beatriz de A Oliveira",
    "87 Simone da Silva Targino",
    "88 numero não assinado",
    "89 Luciana Marcia Andrade da Silva",
    "90 numero não assinado",
    "91 Estefania Matias de Oliveira",
    "92 numero não assinado",
    "93 Glicelia Orlando",
    "94 numero não assinado",
    "95 Ellen Vitoria",
    "96 Leticia Gadelha",
    "97 Debora Samara O Lima e Silva",
    "98 Maria Beatriz de A oliveira",
    "99 numero não assinado",
    "100 numero não assinado",
    ]

   
    
    
    const getRandomIntegerInclusive = (min, max)=>
    Math.floor(Math.random() * (max-min+1))+min;
    const getRandomWord = () => 
    words[getRandomIntegerInclusive(0, words.length-1)];
    
    const botaoSortear = document.querySelector("div.box button")
    
    var numeroSorteado = document.querySelector("div.box button")
     
    
    var nomeGanhador = document.querySelector("div.campo1 output")
    
    var numeroSorteado = document.querySelector("div.campo2 output")
    
    var naldo = 2; 
    var leila=3;
    var davi=4; 
    var bela=5

    botaoSortear.addEventListener("click",() => {
      
      nomeGanhador.innerHTML = (getRandomWord())
      
    })


    function index(){
        for( words.index=0; words.index <= words.length; words.index ++);
    }

   
    console.log(index())
   

  
