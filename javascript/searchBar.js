"use strict"



searchBar.addEventListener('keypress',(e)=>{
    if(e.key ==='Enter' && searchBar.value.trim().replace(/[0-9]/g,'') !==''){
        search(searchBar.value)
    }
})

async function search(animeName = "naruto"){

   const response = await fetch(`https://gogoanime.consumet.stream/search?keyw=${animeName.toLowerCase()}`)
   const res= await response.json()
    cards.innerHTML=''

     res.forEach((element,i) => {

        const html=`
                    <div class="card">
                            <img src="${element.animeImg}" alt="${i}">
                        <div class="card-info">
                            <div class="titles">
                                <h2>${element.animeTitle.length<25?element.animeTitle.toUpperCase() :(element.animeTitle).substring(0,20).toUpperCase()+'...'}</h2>
                                <p>${element.status}</p>
                            </div>
                            <div>
                                <a class="watch-here" href="${element.animeUrl}" >Watch Here</a>
                            </div>
                        </div>
                    </div>
                    `
                        cards.insertAdjacentHTML('beforeend',html)
                    });

}