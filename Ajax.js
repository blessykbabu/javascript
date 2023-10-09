var xhr=new  XMLHttpRequest()
xhr.open("get","https://jsonplaceholder.typicode.com/users")  //url from fake api
// xhr.send()

xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
        console.log("success.Respons recieved")
        console.log("Response : ",xhr.response)
      //document.write(xhr.response);
      var result=JSON.parse(xhr.response)  //change the response into a object format
      //document.write(result);
      console.log("result : ",result)
      console.log("TYEPE: ",typeof result);
      let content='';
      for(let i=0;i<result.length;i++){
        console.log(`object-${i}  :`,result[i]);
        content=content+`<tr><td>${result[i].id}</td><td>${result[i].name}</td><td>${result[i].phone}</td><td>${result[i].username}</td></tr>`;
        console.log("content : ",content)
      }
      document.getElementById('datas').innerHTML=content   // here fetch the details in innerhtml.
    }else{
        console.log("failed")
    }
    }
    
}
document.getElementById('buttn').addEventListener('click',function(){
    xhr.send();
})