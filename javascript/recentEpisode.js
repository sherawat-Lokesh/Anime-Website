"use strict"

recentEpisodes.addEventListener("click",(e)=>{
    recentEpisode()
})

async function recentEpisode(){
   const response=await fetch("https://gogoanime.consumet.stream/recent-release")
    const res=await response.json()


    cards.innerHTML=''
    res.forEach((element,i) => {

        const html=`
                    <div class="card">
                            <img src="${element.animeImg}" alt="${i}">
                        <div class="card-info">
                            <div class="titles">
                                <h2>${element.animeTitle.length<25?element.animeTitle.toUpperCase() :(element.animeTitle).substring(0,20).toUpperCase()+'...'}</h2>
                                <p>Episode No :  ${element.episodeNum}</p>
                                <p>Type : ${element.subOrDub}</p>
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