const testimonialsSection =document.getElementById("testimonials")

const testimonialList =[
    {
        "image":"https://i.pinimg.com/236x/d7/df/dc/d7dfdc836a8253dd88158fcf87d25759.jpg",
        "content":"I would recommend nevani ACME. because they took care of my dog and car so i dont have to beat anyone",
        "author":"Keanu Reeves"
    },
    {
        "image":"https://i.pinimg.com/236x/fc/f3/78/fcf378615f9e010f6e440045fbc8e34f.jpg",
        "content":"Nevani acme gave me the secret formula for great voices an a non-ageing cream that i have been applying since 09",
        "author":"Morgan freeman"
    },
    {
        "image":"https://i.pinimg.com/236x/e6/e6/3d/e6e63d1ab914f43e3b1afde69d0eeb44.jpg",
        "content":"Honestly, the way Nevani ACME handled my existential dread was nothing short of miraculous. They didn't just offer solutions; they offered solace. Plus, their artisanal sourdough starter is a game-changer. My therapist is now recommending *them* to *me*!",
        "author":"Scarlett Johansson"
    },
    {
        "image":"https://i.pinimg.com/236x/05/af/d1/05afd161b12df19569d93122993d386c.jpg",
        "content":"Before Nevani ACME, my garden was a desolate wasteland of despair. Now? It's a thriving ecosystem of genetically modified, self-watering, singing sunflowers. I swear I saw a unicorn grazing in there yesterday. Their fertilizer is clearly powered by magic.",
        "author":"Chris Pratt"
    },
    {
        "image":"https://i.pinimg.com/236x/b1/7d/01/b17d01dffe2587d9bc75497b1d90c5f8.jpg",
        "content":"Nevani ACME's personalized cloud-sculpting service is simply divine. I requested a fluffy white dragon breathing rainbows, and by lunchtime, there it was! My commute has never been more whimsical. Forget traffic; I'm cloud-gazing!",
        "author":"Jennifer Lawrence"
    },
    {
        "image":"https://i.pinimg.com/236x/57/86/6e/57866ef85b11a53220b3af44422166ca.jpg",
        "content":"I used to lose my socks in the dryer like everyone else. But thanks to Nevani ACME's quantum entanglement laundry bags, every sock now has its perfect partner. My mornings are significantly less stressful, and my sock drawer has achieved a state of perfect harmony.",
        "author":"Tom Holland"
    },
    {
        "image":"https://i.pinimg.com/236x/90/47/84/90478402fab6cacb2538238720650d1f.jpg",
        "content":"The customer service at Nevani ACME is so good, they anticipated my needs before I even knew them myself. I mentioned in passing that I liked the smell of freshly cut grass, and the next day, my entire house smelled like a perfectly manicured lawn. They even sent a tiny gnome to water my indoor plants.",
        "author":"Florence Pugh"
    },
    {
        "image":"https://i.pinimg.com/236x/52/e7/1a/52e71a97e3604f1c2b28b4f373fa65b2.jpg",
        "content":"Nevani ACME didn't just fix my leaky faucet; they installed a miniature indoor waterfall with mood lighting and a self-cleaning system. My bathroom now feels like a luxury spa, and my rubber ducky has never been happier.",
        "author":"Ryan Reynolds"
    }
    
]


let index =0
setInterval(()=>{
    
    testimonialsSection.innerHTML =`
    <div>
        <img src=${testimonialList[index].image} alt="">
        <p id="content">${testimonialList[index].content}</p>
        <p id="author">${testimonialList[index].author}</p>
                
    </div>
    `
    if(testimonialList.length-1 >index){
        index +=1
    }else{
        index =0
    }
},1000)
console.log(index)






