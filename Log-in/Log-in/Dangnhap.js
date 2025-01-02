const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault();
    if(eInput.value == ""){
        eField.classList.add("shake", "error");
    }
    if(pInput.value == ""){
        pField.classList.add("shake", "error");
    }
    setTimeout(()=>{
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = ()=>{
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!eInput.value.match(pattern)){
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            (eInput.value != "") ? errorTxt.innerText = "Vui lòng nhập địa chỉ email hợp lệ" : errorTxt.innerText = "Hãy nhập địa chỉ email của bạn" ;
        }else{
            eField.classList.remove("error");
        }
    }
    pInput.onkeyup = ()=>{
        if(pInput.value == ""){
            pField.classList.add("error");
        }else{
            pField.classList.remove("error");
        }
    }
    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href = "Index2.html";
    }
}

// Chuyển trang sau khi ấn đăng nhập
const loginBtn = document.querySelector('.input1');
loginBtn.onclick = () => {
    window.location.href = 'http://127.0.0.1:5500/6.html';
}