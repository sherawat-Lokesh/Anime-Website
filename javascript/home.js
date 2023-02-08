'use strict'
const cards= document.querySelector('.cards')
const logo =document.querySelectorAll('.logo')
const searchBar=document.querySelector('.search-bar')
const animeMovies=document.querySelector('.anime-movies')
const recentEpisodes=document.querySelector('.recent-episodes')
const popular= document.querySelector('.popular')

logo.forEach(val=>{
    val.addEventListener('click',(e)=>{
        run()
    })
})




async function run(){

  const response = await  fetch("https://gogoanime.consumet.stream/top-airing")
  const res= await response.json()

    cards.innerHTML=''
    res.forEach((element,i) => {

        const html=`
                    <div class="card">
                            <img src="${element.animeImg}" alt="${i}">
                        <div class="card-info">
                            <div class="titles">
                                <h2>${element.animeTitle.length<25?element.animeTitle.toUpperCase() :(element.animeTitle).substring(0,20).toUpperCase()+'...'}</h2>
                                <p>Type : ${element.genres[0]}, ${element.genres[1]}</p>
                                <p>Recent  ${element.latestEp}</p>
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
run()
