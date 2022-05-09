function verificar(){
    var alt = document.getElementById ('txtalt')
    var calç = document.getElementById ('txtcalç')
    var res = document.getElementById ('resultado')
    if(alt.value.length <= 0 || calç.value.length <= 0){
        window.alert('Verifique os dados e tente novamente')
    }else
        var fdes = document.getElementsByName ('radsex')
        var falt = Number(alt.value) /10
        var fcalç = Number(calç.value) /15
        var div = 2 + 0.10
        var des = '' 
        var num1 = parseFloat(des)   
        //var desn = parseFloat(des)
        //var desn = parseInt(des) + des
        //var res1 = Number(((falt - des.value) + (fcalç + 16))) /2.1
        

        if (fdes[0].checked){
            des = ((falt - 0 )+(fcalç + 16)) /div                         //0
       }else if (fdes[1].checked){
            des = ((falt - 2 )+(fcalç + 16)) /div                         //2
       }else if (fdes[2].checked){
            des = ((falt - 4 )+(fcalç + 16)) /div                         //4
       }else if (fdes[3].checked){
            des = ((falt - 1 )+(fcalç + 16)) /div                         //1
       }else if (fdes[4].checked){
            des = ((falt - 3 )+(fcalç + 16)) /div                         //3
       }else {  (fdes[5].checked)
            des = ((falt - 3 )+(fcalç + 16)) /div                         //3
       } 
    
            res.innerHTML = `Sua pistola mede aproximadamente ${des}, belo pau amigo`
    
}
