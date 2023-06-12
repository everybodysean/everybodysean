function formvalidation(){
    var name=document.myform.Sean.value;

    if(name==null || name==""){
        alert("Enter username first");
        return false
    }
    else if(name=="Sean12"){
        return false
    }
    var name=document.myform.Bergado.value;

    if(name==null || name==""){
        alert("incorrect username");
        return false
    }
    else if(name=="Bergado"){
        return true
    }
    else alert("Invalid Username and Password");{
        return false
    }
}