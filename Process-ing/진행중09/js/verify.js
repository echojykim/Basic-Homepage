function checkPW() {
    var id = $("#id").val();
    var pw = $("#password").val();
    var cpw = $("#password_a").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var nickname = $("#nickname").val();
    var tel= $("#tel").val();

    if (id.length<4 || id.length>=12) 
    alert("ID가 양식에 적합하지 않습니다.");

    else if(pw.length<4 || pw.length>=16)
    alert("비밀번호는 4자리 이상 입력해주세요.");

    else if(pw !== cpw) 
    alert("비밀번호가 일치하지 않습니다.");

    else {
        
    }

}