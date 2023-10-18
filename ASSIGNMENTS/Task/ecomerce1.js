var xhr=new  XMLHttpRequest()
xhr.open("get","https://fakestoreapi.com/products")
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
        console.log("success.Respons recieved")
        console.log("Response : ",xhr.response)
        var result=JSON.parse(xhr.response)
        console.log("result : ",result)
        let content='';
        for(let i=0;i<result.length;i++){
          console.log(`object-${i}  :`,result[i]);
          content=content+`<div>${result[i].id}</div>`;
          console.log("content : ",content)
        }
        document.getElementById('container').innerHTML=content 
        }
        else{
            console.log("failed");
           }
    }
  
}
