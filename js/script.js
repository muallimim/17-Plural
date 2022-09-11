document.getElementById("word_s").addEventListener("click", word_s);
document.getElementById("word_es").addEventListener("click", word_es);
document.getElementById("word_s2").addEventListener("click", word_s2);
document.getElementById("word3").addEventListener("blur", word3_changed);

function word_s(){
    event.preventDefault();

    var word;
    var result;


    word = document.getElementById("word").value;

    result=word + "s";
    document.getElementById("result").value = result;
}

////////////////////////////////////////////////////////

function word_es(){
    event.preventDefault();

    var word;
    var result;


    word = document.getElementById("word").value;

    result=word + "es";
    document.getElementById("result").value = result;
}

/////////////////////////////////////////////////////////

function word_s2(){
    event.preventDefault();

    var word;
    var result;
    var last_char;

    word = document.getElementById("word2").value;
    last_char = word.charAt(word.length-1);

    if(last_char=='s' || last_char=='z' || last_char=='x'|| last_char=='h')
        result = word + 'es';
    else
        result = word + 's';

    document.getElementById("result2").value = result;
}

/////////////////////////////////////////

function word3_changed(){
    event.preventDefault();

    var word;
    var result;
    var last_char;

    word = document.getElementById("word3").value;
    last_char = word.charAt(word.length-1);

    if(last_char=='s' || last_char=='z' || last_char=='x'|| last_char=='h')
        result = word + 'es';
    else
        result = word + 's';

    document.getElementById("result3").value = result;
}