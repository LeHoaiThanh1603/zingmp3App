// const SongsApi = 'http://localhost:3000/Songs';
// fetch(SongsApi)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(songs) {
//         app.start(songs)

//     })

// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)
// const bodyList = $('.body-list')

// const app = {
//     currentIndex : 0,
//     render(songs) {
//         const htmls = songs.map(song => {
//            return `
//            <li class="body-list__item">
//                 <div class="body-item__song">
//                     <img src="${song.image}" alt="" class="body-item__song-img">
//                     <div class="body-item__song-des">
//                         <h4 class="body-item__song-name">${song.name}</h4>
//                         <div class="body-item__song-singer">${song.singer}</div>
//                     </div>
//                 </div>

//                 <div class="body-list__song-time">3:30</div>

//                 <div class="body-list__song-option">
//                     <div class="body-icon body-icon__mic">
//                         <i class="bi bi-mic"></i> 
//                         <!-- <i class="bi bi-mic-fill"></i> -->
//                     </div>
//                     <div class="body-icon body-icon__heart">
//                         <i class="bi bi-heart"></i>
//                         <!-- <i class="bi bi-heart-fill"></i> -->
//                     </div>
//                     <div class="body-icon body-icon__more">
//                         <i class="bi bi-three-dots"></i>
//                     </div>
//                 </div>
//             </li>
//            `
//         })
//         bodyList.innerHTML = htmls.join('')
//     },

//     handleEvents() {
//         document.onscroll = () => {
//             const header = $('.header')
//             const scrollHeader = document.documentElement.scrollTop || window.screenY
//             if(scrollHeader > 0) {
//                 header.style.backgroundColor = 'hsl(266, 30%, 15%)'

//             } else{
//                 header.style.backgroundColor = '#170f23';

//             }
//         }
//     },
//     // getCurrentSong(songs){
//     //      songs[this.currentIndex]
        
//     // },

//     loadCurrentSong(songs) {
//         const songCD = $('.controls-song__media-thumb img');
//         const songName = $('.controls-song__name');
//         const songSinger = $('.controls-song__singer');
//         const audio = $('#audio');
//         console.log(songs)
//         songName.textContent = songs.name
//     },
//     start(songs) {
//         //get currentsong
//         // this.getCurrentSong(songs)
//         // console.log(this.getCurrentSong(songs.image))
//         //xử lý các sự kiện
//         this.handleEvents()

//         this.loadCurrentSong(songs)

//         //render playlist
//         this.render(songs);

        
//     }
// }
// app.start()
