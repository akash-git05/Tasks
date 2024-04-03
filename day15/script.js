
let callbacks=document.querySelector('.callbacks');
let callbacks1=document.querySelector('.callbacks1');
let callbacks2=document.querySelector('.callbacks2');
let callbacks3=document.querySelector('.callbacks3');
let callbacks4=document.querySelector('.callbacks4');
let callbacks5=document.querySelector('.callbacks5');
let callbacks6=document.querySelector('.callbacks6');
let callbacks7=document.querySelector('.callbacks7');
let callbacks8=document.querySelector( '.callbacks8' );
let callbacks9=document.querySelector(' .callbacks9');
let callbacks10=document.querySelector(' .callbacks10');

let fun1=(callback)=>{
    setTimeout(()=>{
       let textNode=document.createTextNode('10');
       callbacks.appendChild(textNode);
        callback();
    },1000)
}
let fun2=(callback)=>{
    setTimeout(()=>{
        let text=document.createTextNode('9');
        callbacks1.appendChild(text);
        callback();
    },1000)
}
let fun3=(callback)=>{
    setTimeout(()=>{
        let text1=document.createTextNode('8');
        callbacks2.appendChild(text1);
        callback();
    },1000)
}
let fun4=(callback)=>{
    setTimeout(()=>{
        let text2=document.createTextNode('7');
        callbacks3.appendChild(text2);
        callback();
    },1000)
}
let fun5=(callback)=>{
    setTimeout(()=>{
        let text3=document.createTextNode('6');
        callbacks4.appendChild(text3);
        callback();
    },1000)
}
let fun6=(callback)=>{
    setTimeout(()=>{
        let text4=document.createTextNode('5');
        callbacks5.appendChild(text4);
        callback();
    },1000)
}
let fun7=(callback)=>{
    setTimeout(()=>{
        let text5=document.createTextNode('4');
        callbacks6.appendChild(text5);
        callback();
    },1000)
}
let fun8=(callback)=>{
    setTimeout(()=>{
        let text6=document.createTextNode('3');
        callbacks7.appendChild(text6);
        callback();
    },1000)
}
let fun9=(callback)=>{
    setTimeout(()=>{
        let text7=document.createTextNode('2');
        callbacks8.appendChild(text7);
        callback();
    },1000)
}
let fun10=(callback)=>{
    setTimeout(()=>{
        let text8=document.createTextNode('1');
        callbacks9.appendChild(text8);
        callback();
    },1000)
}

fun1(function(){
    fun2(function(){
        fun3(function(){
            fun4(function(){
                fun5(function(){
                    fun6(function(){
                        fun7(function(){
                            fun8(function(){
                                fun9(function(){
                                    fun10(function(){
                                        let text9=document.createTextNode("Happy Independence Day!");
                                        callbacks10.appendChild(text9);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});

 
document.body.appendChild(callbacks);

document.body.appendChild(callbacks1);

document.body.appendChild(callbacks2);

document.body.appendChild(callbacks3);

document.body.appendChild(callbacks4);

document.body.appendChild(callbacks5);

document.body.appendChild(callbacks6);

document.body.appendChild(callbacks7);

document.body.appendChild(callbacks8);

document.body.appendChild(callbacks9);

document.body.appendChild(callbacks10);