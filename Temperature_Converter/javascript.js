function tempcal(id){
    var cls,klvn,frn;
    switch(id){
        case 'cls':
            cls=parseFloat(document.getElementById('cls').value);
            klvn=cls+273.15;
            frn=cls * 9/5 + 32;
            document.getElementById('klvn').value=klvn;
            document.getElementById('frn').value=frn;
            break;
        case 'klvn':
            klvn=parseFloat(document.getElementById('klvn').value);
            cls=klvn - 273.15;
            frn=cls * 9/5 + 32;
            document.getElementById('cls').value=cls;
            document.getElementById('frn').value=frn;
            break;
        case 'frn':
            frn=parseFloat(document.getElementById('frn').value);
            cls=frn -32 * 5/9;
            klvn=cls+273.15;
            document.getElementById('cls').value=cls;
            document.getElementById('klvn').value=frn;
            break;
    }
}

function clearr(){
    document.getElementById('cls').value="";
    document.getElementById('klvn').value="";
    document.getElementById('frn').value="";
}