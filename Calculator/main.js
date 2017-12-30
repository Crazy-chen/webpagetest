//获取值get number；
// get btn
var btnText = document.getElementsByClassName("btn");
// get btn-operation
var btnOperation = document.getElementsByClassName("btn-operation");
// get screen
var text = document.getElementsByClassName("text")[0];
var wayResult = [];
//onclick to btnOperation
for (var i = 0; i < btnOperation.length; i++) {
    btnOperation[i].onclick = function () {
        if (this.value == "C") {
            wayResult = [];
            text.value = "";
        } else {
            text.value = text.value.substring(0, text.value.length - 1);
        }
    }
}
// onclick to btnText
for (var i = 0; i < btnText.length; i++) {
    btnText[i].onclick = function () {
        if (text.value == "" && this.value == ".") {
            text.value = "0.";
        } else {
            
            
            if (!isNaN(this.value) || this.value == ".") {
                //get num or .
                // had .
                if (text.value.includes(".")) {
                    if (this.value != ".") {
                        text.value += this.value;
                    }
                } else { //no .
                    if(text.value.includes("=")){
                        text.value=text.value.substring(text.value.indexOf("=")+1);
                        //console.log(text.value);
                        //console.log(wayResult);
                        //console.log(/[+|-|*|/]/.test(text.value));
                        !/[+|-|*|/]/.test(text.value)?text.value="":text.value=text.value;
                        //console.log(text.value);
                    }
                    text.value += this.value;
                }
            } else{
                if(text.value.includes("=")){
                    text.value=text.value.substring(text.value.indexOf("=")+1);}
                if (this.value != "=") {
                    
                    wayResult.push(text.value); 
                    if(this.value == "%"){
                        text.value = text.value / 100;
                        wayResult.pop();
                        //wayResult.push(text.value);
                         console.log(wayResult);
                         
                    } else {
                        wayResult.push(this.value);
                        text.value = "";
                    
                    }
                    //clear
                    
                } else {
                    wayResult.push(text.value);
                    console.log(wayResult);
                    text.value =wayResult.join("")+ "=" + eval(wayResult.join(""));
                    console.log(wayResult.join(""));
                    wayResult = [];
                    console.log(wayResult);
                }
            }
        }
    }
}
