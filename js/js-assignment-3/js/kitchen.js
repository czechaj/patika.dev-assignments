const menu = [
    {   id: 1,
        title: "Dan Dan Mian",
        price: "$5.99",
        presentation: "Dan dan noodle, serving with green onion",
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        country: "Chinese"
    } ,

    {   id: 2 ,
        title: "Yangzhou Fried Rice",
        price: "$12.99",
        presentation: "Yangzhou style fried rice, serving with bean and pickles",
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        country: "Chinese"
    } ,
    
    {   id: 3 ,
        title: "Ma Yi Shang Shu",
        price: "$12.99",
        presentation: "Hot pepper sauce noodle, serving with soy bean and onion",
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        country: "Chinese"
    } ,

    {   id: 4 ,
        title: "Tteokbokki",
        price: "$10.99",
        presentation: "Spicy rice cakes, serving with fish cake.",
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        country: "Korean"
    } ,
    
    {
        id: 5 ,
        title: "Jajangmyeon",
        price: "$15.99",
        presentation: "Black bean sauce noodle, serving with green onion",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAmedvHaYiDp_f81fcOcOIkf4kzWUkWWavw&usqp=CAU",
        country: "Korean"
    },

    {
        id: 6 ,
        title: "Onigiri",
        price: "$9.99",
        presentation: "Rice Sandwich, serving with soy sauce",
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        country: "Japanese"
    },

    {
        id: 7 ,
        title: "Chicken Ramen",
        price: "$7.99",
        presentation: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuDpYoruDDf6zgXy77eyXQTCwmVv6-gdiaA&usqp=CAU",
        country: "Japanese"
    } ,

    {
        id: 8 ,
        title: "Bibimbap",
        price: "$8.99",
        presentation: "Boiling vegetables, serving with special hot sauce",
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        country: "Korean"
    },

    {
        id: 9 ,
        title: "Doroyaki",
        price: "$3.99",
        presentation: "Red bean paste dessert, serving with honey",
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        country: "Japanese"
    },
    {
        id: 10 ,
        title: "Kao Ka Moo",
        price: "$8.99",
        presentation: "Delicious dish consisting of stewed pig's trotter in seasoning condensed hot pottage",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL_-QszjWe3gi_Ln6aGL5_ze5ucNPSwx3Ig&usqp=CAU",
        country: "Thai"
    },
    {
        id: 11 ,
        title: "Hor Mok Ma Prow Awn",
        price: "$12.99",
        presentation: "Thai style seafood curry in a coconut shell",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7l0n5YV7sfr6WP_aMoCccP3Z93cLPOO9JQ&usqp=CAU",
        country: "Thai"
    },
    {
        id: 12 ,
        title: "Aloo gobi",
        price: "$7.49",
        presentation: "Crisp golden potatoes and cauliflower",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAiDLnlRRNEJRau9QYO5SSSuyz80QXSOh4vw&usqp=CAU",
        country: "Indian"
    },
    {
        id: 13 ,
        title: "Palak paneer",
        price: "$5.99",
        presentation: "Spinach curry with fresh cheese",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtDAKuPYsWveR8moGPolXlNOSJ4-PhqeZNw&usqp=CAU",
        country: "Indian"
    },
    {
        id: 14 ,
        title: "Butter Chicken",
        price: "$11.99",
        presentation: "Prepared in a buttery gravy with the addition of cream gives the curry sauce a silky smooth rich texture",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKRizqfx5J6MoE5m3U68lplcbAR1FwAEGRQ&usqp=CAU",
        country: "Indian"
    }

]

let countriesOnly = [...new Set(menu.map(({country}) => country))]
countriesOnly.unshift('All')
// countriesOnly.push('')             // Sona yeni kategori ekleme//
// countriesOnly.unshift('')          // Başa yeni kategori ekleme//


let countryDOM = document.querySelector('#countryBtns')
let sectionCenter = document.querySelector('.section-center')


function showBtns(){
    let newBtn = ''
    countriesOnly.forEach( BtnId =>
        {newBtn += ` <button id="${BtnId}" onclick="filterMenu(${BtnId})" class="btn btn-outline-dark btn-filter mx-1">${BtnId}</button> `}) 
        countryDOM.innerHTML = newBtn

}

showBtns()


function showMenu(menu){
    let printMenu = ''
    
    menu.forEach( (item) =>
        { printMenu +=
                `
                 <div class="col-sm-6 my-3" style="max-width: 540px;">
                         <div class="row g-0">  
                             <div class="col-md-5">
                                 <img src="${item.img}" class="img w-100 border border-2 rounded-3" alt="...">
                             </div>
                             <div class="col-md-7">
                                 <div class="card-body ">
                                     <div class="name-price mb-3 d-flex justify-content-between">
                                         <h5 class="text-danger fw-bold">${item.title}</h5>
                                         <h4 class="text-danger">${item.price}</h4>
                                     </div>
                                         <p class="card-text"><i>${item.presentation}</i> </p>
                                 </div>
                             </div>
                         </div>
                     </div>
                `}
             )
             sectionCenter.innerHTML = printMenu
            } 


showMenu(menu)




function filterMenu(event){
    
    if(event.id == "All"){
        showMenu(menu)
        
    }
    else{
        let filtered = menu.filter(item => item.country === event.id)
        showMenu(filtered)
    }
    
}

