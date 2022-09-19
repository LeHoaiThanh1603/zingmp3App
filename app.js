// đọc doc
//khi lắng nghe sự kiện : Event
// khi set/get giá trị gì đó : Properties
// khi thực hiện hành động

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const cdThumb = $('.thumb') 
const bodyList = $('.body-list')
const audio = $('#audio')
const songThumb = $('.controls-song__media-thumb img');
const songCurrentName = $('.controls-song__name');
const songCurrentSinger = $('.controls-song__singer');
const playbtn = $('.play-btn')
const propress = $('.propress-main')
const propressBar = $('.propressBar')
const propressTrack = $('.propress-track')
const btnNext = $('.btn-next')
const btnPrev = $('.btn-prev')
const btnRandom = $('.btn-random')
const btnRepeat = $('.btn-repeat')
const itemSong = $('.body-list__item')
const propressVolum = $('.propress-volume')
const noteThumb = $('.icon-thumb')
const playingMedia = $('.controls-song__media')
const bodySongActive = $('.body-item__song.active')
const btnTheme = $('.option-level-theme')
const blockTheme = $('.block-modal__theme')
const modal = $('.theme-modal__container')
const btnClose = $('.btn-close')
const app = {
    isPlaying: false,
    isRandom : false,
    isRepeat: false,
    isAnimateSong : false,
    isHeart : false,
    currentIndex : 0,
    currentTheme : 0,
    Songs: [
        { 
          id: 1,
          name: 'Watinng for you', 
          singer: 'MOMO', 
          image: './image/Watinng for you.jpg', 
          path: './music/WaitingForYou-MONOOnionn-7733882.mp3',
          time: '04:25'
         },
         { 
          id: 2,
          name: 'Ngôi sao cô đơn', 
          singer: 'Jack', 
          image: './image/ngôi sao cô đơn.jpg', 
          path: './music/NgoiSaoCoDon-JackJ97-7611601.mp3',
          time: '04:35'

         },
         { 
          id: 3,
          name: 'Chuyện đôi ta' , 
          singer: 'Dalab', 
          image: './image/chuyện đôi ta.jpg', 
          path: './music/ChuyenDoiTa-EmceeLDaLAB-7120974.mp3',
          time: '03:28'

         },
         { 
          id: 4,
          name: 'lời tạm biệt chưa nói', 
          singer: 'GREY-D, Orange', 
          image: './image/lời tạm biệt chưa nói.jpg', 
          path: './music/LoiTamBietChuaNoi-GREYDDoanTheLanOrange-7613756.mp3',
          time: '04:19'

         },
         { 
          id: 5,
          name: 'vì mẹ anh bắt chia tay', 
          singer: 'MIU LÊ', 
          image: './image/vì mẹ anh bắt chia tay.jpg', 
          path: './music/ViMeAnhBatChiaTay-MiuLe-7503053.mp3',
          time: '04:22'

         }
      ],
      
    handleEvent() {
        const _this = this
        const header = $('.header')
        const heart = $('.icon-heart')
        const heartOption = $('.icon-heat-option')
        const noteSongActive = $('.NoteActive')
        const modalSongActive = $('modal-list__song')
        noteSongActive.style.display = 'none'
        // Cd thumb rotate
        const CdthumbRotate = cdThumb.animate([
            {
                transform : 'rotate(360deg)'
            }
        ], {
            duration : 10000, // quay trong 10s
            iterations : Infinity // không giới hạn
        })
        CdthumbRotate.pause()

        //heart

      
        heart.onclick = () => {
            heart.classList.toggle('active')
        }
        
        // document.onscroll = () => {
        //     const scrollTop =  document.documentElement.scrollTop  || window.screenY ;
            
        //     if(scrollTop > 0) {
        //         header.style.backgroundColor = '#1f172b'
        //     } else {
        //         header.style.backgroundColor = ''
        //     }
        // }
        // xử lý volunm
        propressVolum.oninput = (e) => {
            audio.volume = e.target.value / 100;
        }

        //play/pause
        playbtn.onclick = () => {
            if(_this.isPlaying) {
                audio.pause();
            } else{
                audio.play();
                
            }
        }
        //song được play 
        audio.onplay = () => {
            _this.isPlaying = true
            playbtn.classList.add('playing')
            CdthumbRotate.play()
            playingMedia.classList.add('playing')
            noteSongActive.style.display = 'block'

        }
        // song bị pause
        audio.onpause = () => {
            _this.isPlaying = false
            playbtn.classList.remove('playing')
            CdthumbRotate.pause()
            playingMedia.classList.remove('playing')
            noteSongActive.style.display = 'none'

        }

        // khi tiến độ bài hát thay đổi 
        audio.ontimeupdate = () => {
            // tính ra % và chạy thumb range
            if(audio.duration) { 
                // vì lần đầu tiên của duration là NaN nên nếu k phải NaN thì mới chạy
                const propressPecent = Math.floor( (audio.currentTime / audio.duration) * 100)
                propress.value = propressPecent;

                // propressBar.style.width = propressPecent + '%';
            }   
            const start_Time = $('.starttime')
            const end_Time = $('.endtime')
            // xử lý time Start Song
           const currentTimeStart = Math.floor(audio.currentTime) // làm tròn lấy ra thời gian hiện tại (s)
           const minisecondStart = currentTimeStart % 60 ; // lấy ra số dư cho minisecond
           const minuteStart = Math.floor(currentTimeStart / 60) ; // làm tròn lấy số phút

           if ( minisecondStart < 10){
               var timeMinisecondStart = 0
           } else {
                timeMinisecondStart = ""
           }
           start_Time.textContent = '0' + minuteStart + ':' + timeMinisecondStart + minisecondStart
                            ///      00:00

            //xử lý time End Song
            const currentTimeEnd = Math.floor(audio.duration); // lấy ra tổng thời gian
            const minisecondEnd = currentTimeEnd % 60 ; 
            const minuteEnd = Math.floor(currentTimeEnd / 60)

            if(minisecondEnd < 10) {
                var timeMinisecondEnd = 0
            } else {
                timeMinisecondEnd = ""
            }
            if (audio.duration){
                end_Time.textContent = '0' + minuteEnd + ':' + timeMinisecondEnd + minisecondEnd
            } else {
                audio.duration
            }
        }               

        // khi tua song
        propress.onchange = (e) => {
            const seekTime = audio.duration / 100 * e.target.value

            audio.currentTime = seekTime

        }
        // khi next song
        btnNext.onclick =() =>{
            if(_this.isRandom ) {
                this.randomSong()
            } else {
                this.nextSong()
                console.log(11)
            }
            audio.play()
            this.render()
            this.scrolltoSongActive()
           

        }
        // khi prev song 
        btnPrev.onclick = () => {
            if(_this.isRandom ) {
                this.randomSong()
            } else {
                this.prevSong()
            }
            audio.play()
            this.render()
            this.scrolltoSongActive()

        }

        // khi song end
        audio.onended = () => {
            console.log(_this.isRandom)
            if(_this.isRepeat ) {
                audio.play()
            }else {
            // phuoưng thức click tự động click
                btnNext.click() 
            }
        }

        // xử lý bật tắt random song 
        btnRandom.onclick = (e) => {
            _this.isRandom = !_this.isRandom
            btnRandom.classList.toggle('active')
        }

        //xử lý bật tắt repeat song
        btnRepeat.onclick = (e) => {
            _this.isRepeat = !_this.isRepeat
            btnRepeat.classList.toggle('active')

        }

       
        // khi click song list
        // lắng nghe sự kiện cha
        bodyList.onclick = (e) => {
            const songNode = e.target.closest('.body-list__item:not(.active)') 
            const song = e.target.closest('.body-list__item') 
            const optionSongNode = e.target.closest('.body-list__song-option')
            if(songNode || optionSongNode) {
                // xử lý khi click vào song không có active
                if(songNode && !optionSongNode) {
                    // console.log(songNode.getAttribute('data-index'))
                    // nếu đặt class data- thì nên dùng dataset
                    // songNode.dataset.index trả về chuỗi nên phải cho là number
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadSongCurrent()
                    audio.play()
                    _this.render()
                    console.log(2)
                }
                // xử lý khi nhấp vào option
                if(optionSongNode) {
                    const option = $$('.icon-heat-option')
                    if(option){
                        const currentHeart  = song.getAttribute('data-index')
                        option[currentHeart].classList.toggle('display')
                    } else {
                        console.log(2412)
                    }
                }
            }
        }

    },  
    defineProperties() { 
        Object.defineProperty(this, 'currentSong', {
            get() {
                return this.Songs[this.currentIndex]
            }
        })
    },
    scrolltoSongActive() {
       setTimeout(() => {
        console.log($('.body-list__item.active'))
        $('.body-list__item.active').scrollIntoView(
            {
                behavior : 'smooth', // mượt
                block : 'nearest' // vị trí kéo đến , nearest đến gần phạm vi nhìn thấy
            }
        )
       }, 100)
        
    },

    loadSongCurrent(){
        songThumb.src = this.currentSong.image
        audio.src = this.currentSong.path
        songCurrentName.textContent = this.currentSong.name 
        

        songCurrentSinger.textContent = this.currentSong.singer ;

    },
    nextSong(){
        this.currentIndex ++
        if(this.currentIndex >= this.Songs.length){
            this.currentIndex = 0
        }
        this.loadSongCurrent()
    },
    prevSong() {
        this.currentIndex --
        if(this.currentIndex < 0) {
            this.currentIndex = this.Songs.length - 1
            btnPrev.classList.add('disabled')
        }
        this.loadSongCurrent()
    },
    randomSong() {
        let newIndex;
       do {
        newIndex = Math.floor(Math.random() * this.Songs.length)
       } while (newIndex === this.currentIndex)
       this.currentIndex = newIndex
       this.loadSongCurrent() 
    },

    activeTheme() {

        btnTheme.onclick = () => {
            blockTheme.classList.add('modal')
        }
        btnClose.onclick = () => {
            blockTheme.classList.remove('modal')

        }
        blockTheme.onclick = () => {
            blockTheme.classList.remove('modal')

        }
        modal.onclick = (e) => {
            e.stopPropagation()
        }

         $('.btn-theme1').onclick = () => {
            $('.app-page').style.backgroundImage = 'url(https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme1/theme1.svg)'
            blockTheme.classList.remove('modal')
         }

         $('.btn-theme2').onclick = () => {
            $('.app-page').style.backgroundImage = 'url(https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme1/theme2.jpg)'
            blockTheme.classList.remove('modal')
         }

         $('.btn-artist1').onclick = () => {
            $('.app-page').style.backgroundImage = 'url(https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme2/theme1.jpg)'
            blockTheme.classList.remove('modal')
         }
         $('.btn-artist2').onclick = () => {
            $('.app-page').style.backgroundImage = 'url(https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme2/theme2.jpg)'
            blockTheme.classList.remove('modal')
         }
         $('.btn-artist3').onclick = () => {
            $('.app-page').style.backgroundImage = 'url(https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme2/theme3.jpg)'
            blockTheme.classList.remove('modal')
         }
         $('.btn-artist4').onclick = () => {
            $('.app-page').style.backgroundImage = 'url(https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme2/theme4.jpg)'
            blockTheme.classList.remove('modal')
         }
         $('.btn-artist5').onclick = () => {
            $('.app-page').style.backgroundImage = 'url(https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme2/theme5.jpg)'
            blockTheme.classList.remove('modal')
         }
         $('.btn-artist6').onclick = () => {
            $('.app-page').style.backgroundImage = 'url(https://vikdang.github.io/Code_web_music_player/assets/img/themeBgs/listTheme2/theme6.jpg)'
            blockTheme.classList.remove('modal')
         }

        
    },
    
    render() {
        const htmls = this.Songs.map((song,index) => {
          return `
          <li class="body-list__item ${index === this.currentIndex ? "active" : ''}" data-index="${index}">
            <div class="body-item__song  ">
                <div class="NoteActive">
                <span  style="background : 
                url('https://vikdang.github.io/Code_web_music_player/assets/img/SongActiveAnimation/icon-playing.gif')
                 no-repeat 50% / contain"></span>
                </div>
                <div class="body-item__song-img">
                    <span class="song-hover"><i class="bi bi-play-fill"></i></span>
                    <img src="${song.image}" alt="" >
                    <span class="modal-list__song"></span>
                </div>
                <div class="body-item__song-des">
                    <h4 class="body-item__song-name">${song.name}</h4>
                    <div class="body-item__song-singer">${song.singer}</div>
                </div>
            </div>
          
            <div class="body-list__song-time">${song.time}</div>
          
            <div class="body-list__song-option">
                <div class="body-icon body-icon__mic">
                    <i class="bi bi-mic"></i> 
                    <!-- <i class="bi bi-mic-fill"></i> -->
                </div>
                <div class="body-icon body-icon__heart icon-heat-option">
                    <i class=" icon-heart__option-empty  bi bi-heart"></i>
                     <i class=" icon-heart__option-color  bi bi-heart-fill"></i>
                </div>
                <div class="body-icon body-icon__more">
                    <i class="bi bi-three-dots"></i>
                </div>
            </div>
        </li>
          `
        })
        bodyList.innerHTML = htmls.join('')

    },


    //handle slider
     slider () {
        // Profile :xử lý animation chuyển động 
        const img_animate_first = $$('.container_profile--layout__sum--foot_img-item')[0];
        const img_animate_second = $$('.container_profile--layout__sum--foot_img-item')[1];
        const img_animate_third = $$('.container_profile--layout__sum--foot_img-item')[2];
        setTimeout(function(){
            setTimeout(function(){
                img_animate_first.classList.remove('second')
                img_animate_second.classList.remove('third')
                img_animate_third.classList.remove('first')

                img_animate_first.classList.add('first')
                img_animate_second.classList.add('second')
                img_animate_third.classList.add('third')
            },1000)
            setTimeout(function(){
                img_animate_first.classList.remove('first')
                img_animate_second.classList.remove('second')
                img_animate_third.classList.remove('third')

                img_animate_first.classList.add('third')
                img_animate_second.classList.add('first')
                img_animate_third.classList.add('second')
            },3000)
            setTimeout(function(){
                img_animate_first.classList.remove('third')
                img_animate_second.classList.remove('first')
                img_animate_third.classList.remove('second')
                
                img_animate_first.classList.add('second')
                img_animate_second.classList.add('third')
                img_animate_third.classList.add('first')
            },5000)
        },0)
        setInterval(function(){
            setTimeout(function(){
                img_animate_first.classList.remove('second')
                img_animate_second.classList.remove('third')
                img_animate_third.classList.remove('first')

                img_animate_first.classList.add('first')
                img_animate_second.classList.add('second')
                img_animate_third.classList.add('third')
            },1000)
            setTimeout(function(){
                img_animate_first.classList.remove('first')
                img_animate_second.classList.remove('second')
                img_animate_third.classList.remove('third')

                img_animate_first.classList.add('third')
                img_animate_second.classList.add('first')
                img_animate_third.classList.add('second')
            },3000)
            setTimeout(function(){
                img_animate_first.classList.remove('third')
                img_animate_second.classList.remove('first')
                img_animate_third.classList.remove('second')
                
                img_animate_first.classList.add('second')
                img_animate_second.classList.add('third')
                img_animate_third.classList.add('first')
            },5000)
        },6000)
     },

    start() {
    //định nghĩa thuộc tính cho object
    this.defineProperties()

    //render HTML
    this.render();

    //xử lý event
    this.handleEvent()

    this.loadSongCurrent()

    this.slider()

    this.activeTheme()

    
    }
}


app.start()