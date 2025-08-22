let qode = document.getElementById('image-box');
let qrImage = document.getElementById('qr-imge');
let text_input = document.getElementById('text-input');

function GenerateQR() {
    if (text_input.value.length>0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(text_input.value);

    qode.classList.add("show-img"); 
        
    }
    
    else
        {
        text_input.classList.add("error"); 
        setTimeout(() => {
            text_input.classList.remove("error");
        }, 2000); 

    }
    
    
}
