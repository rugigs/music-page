window.onload= function(){
    let x = document.querySelectorAll('.side2');
    for(let i=0 ; i<3 ; i++){
        x[i].style.display = 'none';
    }
};




let side1 = true;
function artists(){
        if(side1 == true){
            let x = document.querySelectorAll('.side1');
            for(let i=0 ; i<3 ; i++){
                 x[i].style.display = 'none';
            }
            x = document.querySelectorAll('.side2');
            for(let i=0 ; i<3 ; i++){
                 x[i].style.display = 'flex';
            }
            side1 = false;
            document.querySelector('#artist-button').innerHTML = 'Go hard';
        }
        else if(side1 == false){
            let x = document.querySelectorAll('.side2');
            for(let i=0 ; i<3 ; i++){
                 x[i].style.display = 'none';
            }
            x = document.querySelectorAll('.side1');
            for(let i=0 ; i<3 ; i++){
                 x[i].style.display = 'flex';
            }
            side1 = true;
            document.querySelector('#artist-button').innerHTML = 'Chill out';
        }
};





let active = false;
function stream(){
    if(active == false){
    let a = document.createElement('a');
    let att = document.createAttribute('href');
    att.value = 'https://www.spotify.com/lv/';
    a.setAttributeNode(att);
    let img = document.createElement('img');
    let src = document.createAttribute('src');
    let alt = document.createAttribute('alt');
    src.value = 'spotify.png';
    img.setAttributeNode(src);
    alt.value = 'spotify logo';
    img.setAttributeNode(alt);
    a.append(img);
    a.style.width = '50px';
    a.style.length = '50px';
    a.style.marginBottom = '50px';

    let a2 = document.createElement('a');
    let att2 = document.createAttribute('href');
    att2.value = 'https://soundcloud.com/discover';
    a2.setAttributeNode(att2);
    let img2 = document.createElement('img');
    let src2 = document.createAttribute('src');
    let alt2 = document.createAttribute('alt');
    src2.value = 'soundcloud.png';
    img2.setAttributeNode(src2);
    alt2.value = 'soundcloud logo';
    img2.setAttributeNode(alt2);
    a2.append(img2);
    a2.style.width = '50px';
    a2.style.length = '50px';
    a2.style.marginBottom = '50px';

    let div = document.createElement('div');
    div.append(a);
    div.append(a2);
    document.querySelector('#button2').after(div);
    div.style.display = 'flex';
    div.style.justifyContent = 'space-evenly';

    active = true;
};

}



function test(){
    let send1 = true;
    let send2 = true;
    let myform = document.forms.myform;
    let name = document.forms.myform.elements.fname.value;
    let month = document.forms.myform.elements.month.value;
    let char = /^[a-zA-Z]+$/;
    if(month >= 1 && month <= 12 || month == ''){
        document.querySelector('#warning-2').innerHTML = '';
    }


    else if (month <= 0 || month >= 13){
        document.querySelector('#warning-2').innerHTML = 'Enter a number between 1 and 12.';
        send1 = false;
    }

    if(name.match(char) || name == ''){
        document.querySelector('#warning-1').innerHTML = '';
    }
    else{
        document.querySelector('#warning-1').innerHTML = 'Enter only letters.';
        send2 = false;
    }

    if(name == '' || month == ''){
         document.querySelector('#warning-3').innerHTML = 'Both fields have to be filled.';
         return false;
    }
    else{
         document.querySelector('#warning-3').innerHTML = '';
    }

    if(send1 == true && send2 == true){
        return true;
    }
    else {
        return false;
    }
}
