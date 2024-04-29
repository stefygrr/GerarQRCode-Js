function gerarQR(){
    if(qrText.value.length > 0){
        qrImagem.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        }, 1000)
    }
}

let imgBox = document.getElementById("imgBox");
let qrImagem = document.getElementById("qrImagem");
let qrText = document.getElementById("qrText");