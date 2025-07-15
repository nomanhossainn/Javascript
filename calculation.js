<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Number-1: <input type = "text" id="num1"><br><br>
    Number-2: <input type="text" id="num2"><br><br>
    <button id="add" onclick="calculation('+')">+</button>
    <button id="sub" onclick="calculation('-')">-</button>
    <button id="multi" onclick="calculation('*')">*</button>
    <button id="div" onclick="calculation('/')">/</button><br>
    Result: <label id="lbl1"></label>
</body>
<script>
    function calculation(op){
        let x = Number(document.getElementById('num1').value);
        let y = Number(document.getElementById('num2').value);
        let result;
        if(op == '+'){
            result = x + y;
        }
        else if(op=='-'){
            result = x - y;
        }
        else if(op=='*'){
            result = x * y;
        }
        else if(op=='/'){
            result = x/y;
        }
        document.getElementById('lbl1').innerText = result
    }
</script>
</html>