"use strict"


animeMovies.addEventListener('click',(e)=>{
    getMovies()

})

async function getMovies(){
   const response= await fetch("https://gogoanime.consumet.stream/anime-movies")
    const res= await response.json()


    cards.innerHTML=''
    res.forEach((element,i) => {

        const html=`
                    <div class="card">
                            <img src="${element.animeImg}" alt="${i}">
                        <div class="card-info">
                            <div class="titles">
                                <h2>${element.animeTitle.length<25?element.animeTitle.toUpperCase() :(element.animeTitle).substring(0,20).toUpperCase()+'...'}</h2>
                                <p>Released on  ${element.releasedDate}</p>
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
