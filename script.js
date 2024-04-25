// import Scrollbar from 'smooth-scrollbar'


// Scrollbar.init(document.querySelector("#body"))

function select(elem){
    return   document.querySelector(elem)
}

function animateNav(){
    tl = gsap.timeline({
    })
    select("nav").addEventListener("mouseenter",function(){
        tl.to('.bottom-nav',{
         height:'120%',
         bottom:'-100%',
         duration:0
        })
        tl.to('.hidden h4',{
         y:0,
         opacity:1,
         stagger:{amount:0.2},
         duration:.2,
         ease:Power3
        })
 
 })
 
     select('nav').addEventListener("mouseleave",function(){
 
         tl.to('.hidden h4',{
             y:'20px',
             opacity:0,
             stagger:{amount:0.2},
             duration:0,
             ease:Circ
            })
            tl.to('.bottom-nav',{
             height:0,
             bottom:0,
             duration:0.1
            })
 
 })
}

function animateLetsTalk(){
    select('nav .talk').addEventListener('mouseenter',function(){
        gsap.to('.empty',{
            width:0,
            duration:0.5
          })
    })
    select('nav .talk').addEventListener('mouseleave',function(){
        gsap.to('.empty',{
            width:'100%',
            duration:0.5
          })
    })

}

function page3Right(){
    document.querySelectorAll('.read-div').forEach(function(elem){
        elem.addEventListener('mouseenter',function(){
            gsap.to(elem.childNodes[1],{
                ease:Circ,
                scale:1,
                opacity:1,
                duration:.6,
            })
        })
        elem.addEventListener('mouseleave',function(){
            gsap.to(elem.childNodes[1],{
                scale:0,
                opacity:0,
                duration:.3,
                eaes:Circ
            })
        })
        elem.addEventListener('mousemove',function(dets){
            
            gsap.to(elem.childNodes[1],{
                x:dets.x  - elem.getBoundingClientRect().x - 30,
                y:dets.y  - elem.getBoundingClientRect().y - 100,
            })
        })
        })
}

const page3VideoAnimation = ()=>{
    select('.page3 i').addEventListener('click', function(){

        select('.page3 video').play()
        gsap.to('.page3 video',{
            scale:1,
            opacity:1,
            ease:Circ,
            duration:0.8
        })
    
    })
    select('.page3 video').addEventListener('click', function(){
    
        select('.page3 video').pause()
        gsap.to('.page3 video',{
            scale:0,
            opacity:0,
            ease:Circ,
            duration:0.4
        })
    
    })
}

function page7Animation(){
    
document.querySelectorAll('.right').forEach(function(elem){
    console.log(elem.childNodes[1])
    elem.addEventListener('mouseenter',function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            ease:Circ,
            duration:.3
        })
        elem.childNodes[3].play()
    })
    elem.addEventListener('mouseleave',function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            ease:Circ,
            duration:.4
        })
        elem.childNodes[3].load()
    })
    elem.addEventListener('mousemove',function(details){
        gsap.to(elem.childNodes[5],{
            opacity:1,
            scale:1,
            x:details.x - elem.getBoundingClientRect().x -50,
            y:details.y - elem.getBoundingClientRect().y -50
        })
    })
    elem.addEventListener('mouseleave',function(details){
        gsap.to(elem.childNodes[5],{
            opacity:0,
            scale:0,
            x:details.x - elem.getBoundingClientRect().x -50 ,
            y:details.y - elem.getBoundingClientRect().y- 50
        })
    })
})
}

function page8Animation(){
    document.querySelectorAll('.meta-div').forEach(function(elem){

        elem.addEventListener('mouseenter',function(){
            elem.childNodes[1].play()
            gsap.to(elem.childNodes[5],{
                opacity:0,
                duration:.2
            })
            gsap.to(elem.childNodes[1],{
                height:'85%',
            })
        })
        elem.addEventListener('mouseleave',function(){
            gsap.to(elem.childNodes[5],{
                opacity:1,
                duration:.1   
            })
            gsap.to(elem.childNodes[1],{
                height:'60%',
            })
            elem.childNodes[1].pause()
            elem.childNodes[1].currentTime = 0;
        })
    })
}

function page9Animation(){
    document.querySelectorAll('.design').forEach(function(elem){
        console.log(elem.childNodes)
              let open = true;
              elem.addEventListener('click',function(){
                  if(open===true){
                      gsap.to(elem.childNodes[5],{
                          height:0,
                          opacity:0,
                          duration:.4
                      })
                      gsap.to(elem.childNodes[1].lastElementChild,{
                          rotate:'180deg'
                      })
                      open = false
                  } else{
                      gsap.to(elem.childNodes[5],{
                          height:'80vh',
                          opacity:1,
                          duration:.4
                      })
                      gsap.to(elem.childNodes[1].lastElementChild,{
                          rotate:'0deg'
                      })
                      open = true
                  }
          
              })
      
      
      
      })
}
function scroll(){
    gsap.from('.strategy h4',{
        x:0,
        duration:1,
        scrollTrigger:{
            trigger:'.strategy',
            scroller:'#body',
            start:'top 80%',
            end:'top 15%',
            scrub:true
        }
    })
}
    
scroll()
page9Animation()
page8Animation()
page7Animation()
page3VideoAnimation()
page3Right()
animateLetsTalk()
animateNav()



