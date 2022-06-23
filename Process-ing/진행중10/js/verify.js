function checkJoin() {
    var id = document.getElementById("id");
    var pw = document.getElementById("password");
    var cpw = document.getElementById("password_a");
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var nickname = document.getElementById("nickname");
    var tel= document.getElementById("tel");

    if(id.value == "") {
        //해당 입력값이 없을 경우 아이디를 입력하세요
        alert("아이디를 입력하세요.");
        id.focus();
        console.log("확인용1");
        return false;
    };
      
    if(pw.value == "") {
        alert("비밀번호를 입력하세요.");
        pw.focus();
        console.log("확인용2");
        return false;
    }; 

    if(pw.length<4 || pw.length>=16) {
        alert("비밀번호는 4자리 이상 입력해주세요.");
        pw.false();
        console.log("확인용3");
        return false;
    };

    //비밀번호 영문자, 숫자, 특수조합(!@#$%^&*)등 총 8~12자리 입력 정규식
    var pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,12}$/;

    if (!pwCheck.test(pw.value)) {
        alert("비밀번호는 영문자, 숫자, 특수문자를 사용하여 8~12자리로 입력해주세요");
        pw.focus();
        return false;
    }; 
    
    if (cpw.value !== pw.value) { 
        alert("비밀번호가 일치하지 않습니다.");
        cpw.focus();
        return false;
    };

    if(username.value == "") {
        alert("이름을 입력하세요.");
        username.focus();
        return false;
    };

    //이름 정규식
    var nameCheck = /^[가-힝a-zA-Z]{2,}$/;
    //위의 정규식 선언. 특수문자+1글자 입력시
    if (!Check(nameCheck, username, "이름이 잘못입력되었습니다. 다시 입력해주세요.")){
        return false;
    };




    if(email.value == "") {
        alert("이메일 주소를 입력하세요.");
        email.focus();
        return false;
    };


    if(nickname.value == "") {
        alert("닉네임을 입력하세요.");
        nickname.focus();
        return false;
    };

    var reg = /^[0-9]+/g; //숫자만 입력하는 정규식

    if(!reg.test(tel.value)) {
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        tel.focus();
        return false;
    };

    //입력값 전송
    document.checkJoin.submit();
};