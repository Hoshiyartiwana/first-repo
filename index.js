
// document.getElementById("btn").onclick=func 

// function func(){
 

//    //  document.getElementById("tag").style.color="red"  
//     fetch("https://fakestoreapi.com/users").then((value1)=>{
//       return value1.json()
//     }).then((value2)=>{
//       let data=""
//       value2.map((abc)=>{
// data+=`<tr>
// <td>${abc.id}</td>
// <td>${abc.username}</td>
// <td>${abc.email}</td>
// <td>${abc.password}</td>
// </tr>`

// document.getElementById("table").innerHTML=data
//       })
// console.log(value2[0].username)
// })

//  }


//  document.getElementById("tiger").addEventListener("click",function(e){
//   e.stopPropagation();
//   console.log("parent")
//  },true)
//  document.getElementById("tree").addEventListener("click",function(e){
//   console.log("child")
//   e.stopPropagation();
//  },true)

//  document.getElementById("but").addEventListener("click",function(){
//   let ab=document.getElementById("input").value
//   let abc=document.createElement("div")
// abc.innerHTML=`<img src="${ab}"/>`
//   document.body.appendChild(abc)
//   console.log(ab,"aaaaaa")
//   console.log(abc,"ssssssss")
// })

document.getElementById("main").addEventListener("click",function(){
  let abc=document.getElementsByTagName("input")
    let abs=document.createElement("div")
    abs.innerHTML="<input/>"
      document.body.appendChild(abs)
  

     // console.log(element)
    //
  // console.log(element)
// 
//   console.log(i)

//   console.log(abc)
// 
//  
// // console.log(abd)
// console.log(abd)
  // document.body.appendChild(abd)
})

//  function fetchdata(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       try {
//      let data= fetch("https://fakestoreapi.com/users")
//         resolve(data)
//       } catch (error) {
//         reject("erooe")
//       }
     
//     },2000)
    
//   })
// }

// fetchdata().then((data)=>{
//   return data.json();
// }).then((data)=>{
// console.log(data)
// })
// .catch((error)=>{
// console.log(error)
// })


//  function fetchdta1(){
//   return fetch("https://fakestoreapi.com/users")
// }

// async function fetchdtaa2(){
//   try {
//     const data= await fetchdta1()
//     const data1= await data.json()
//     console.log(data1)
//   } catch (error) {
//     console.log("koi erroor hai")
//   }
 
 
// }

// fetchdtaa2()

// function crouser(){
//   let a = 10;
//   return function sum(){
//     console.log(a)
//     return a
//   }
// }

// let x=crouser()
// x()
// console.log(x())
