const wrapImage = document.querySelector(".wrap-image"),
imageWidth = document.querySelectorAll(".image")[0].clientWidth;
const toggle = document.querySelectorAll(".slider__toggle"),
images = document.querySelectorAll(".image");
var position = 0;
var currentDot = 0;
var  myIndex = 0;

showSlide(wrapImage, 0, 0);
run();
function showSlide(elem, pix, n) {
    position = position + pix;
    currentDot = currentDot + n;

    if (position > 0) { 
        position = elem.clientWidth + pix;
        currentDot = toggle.length - 1;
    } else if (position < elem.clientWidth - pix) {
        position = 0;
        currentDot = 0;
    }
    elem.style.transform = "translateX(" + position +"px)";
    toggle.forEach((item) => item.classList.remove("active"));
    toggle[currentDot].classList.add("active");
}
function run(){
    for(let i = 0; i < images.length; i++) {
         toggle[i].onclick = function() {
                position = (-images[i].clientWidth * i);
                currentDot = i;
                wrapImage.style.transform = "translateX(" + position + "px)";
                toggle.forEach((item) => item.classList.remove("active"));
                toggle[currentDot].classList.add("active");                   
            }
    }
    myIndex++;
    if(myIndex > images.length) {myIndex = 1} 
    toggle[myIndex - 1].click();
    setTimeout(run, 3000)
}       

const playlist = document.querySelector('.playlist')
const heading = document.querySelector('header h4')
const cdThumb = document.querySelector('.cd-thumb')
const audio = document.querySelector('#audio')
const cd = document.querySelector('.cd')
const playBtn = document.querySelector('.btn-toggle-play')
const player = document.querySelector('.player')
const renge = document.querySelector('#process')
const nextBtn = document.querySelector('.btn-next')
const prevBtn = document.querySelector('.btn-prev')
const randomBtn = document.querySelector('.btn-random')
const repeatBtn = document.querySelector('.btn-repeat')
const processSong = document.querySelector('.process-song')
const openMusic = document.querySelector('.open-music')
const music = document.querySelector('.music')
const volumeMuteOrNot = document.querySelector('.fa-volume-up')
const volumeBtn = document.querySelector('.slider')
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMuted: false,
    songs : [
    {
        id: 1,     
        name: "NEVADA",
        singer: "Vicetone ft Cozi Zuehlsdorff",
        path: "./songs/nevada.mp4",
        image: "./songs/NEVADA.jfif"
    },
    {
        id: 2,  
        name: "Stay",
        singer: "The Kid LAROI, Justin Bieber",
        path: "./songs/stay.mp4",
        image:"./songs/STAY.jfif"
    },
    {
        id: 3,  
        name: "Mood",
        singer: "24kGoldn ft salem ilese",
        path: "./songs/mood.mp4",
        image: "./songs/MOOD.jfif"
    },
    {
        id: 4,  
        name: "Peaches",
        singer: "Justin Bieber ft. Daniel Caesar, Giveon",
        path: "./songs/peaches.mp4",
        image:"./songs/PEACHES.jfif"
    },
    {
        id: 5,  
        name: "Closer",
        singer: "The Chainsmokers ft. Halsey",
        path: "./songs/closer.mp4",
        image:"./songs/CLOSER.jfif"
    },
    {
        id: 6,  
        name: " Whenever",
        singer: "Kris Kross Amsterdam x The Boy Next Door feat. Conor Maynard ",
        path:"./songs/Whenever.mp4",
        image:"./songs/WHENEVER.jfif"
    },
    {
        id: 7,  
        name: "Way Back Home",
        singer: "SHAUN feat. Conor Maynard",
        path: "./songs/Way Back Home.mp4",
        image:"./songs/Way.jfif"
    },
    {
        id: 8,  
        name: "?????????",
        singer: "??????????????????",
        path: "./songs/n???i gi?? r???i.mkv",
        image:"./songs/gi??.jpg"
    },
    {
        id: 9,  
        name: "????????????",
        singer: "YOASOBI",
        path: "./songs/tabun.mkv",
        image:"./songs/tabun.jpg"
    },
    {
        id: 10,  
        name: "Mask Off",
        singer: "Future(Marshmello Remix)",
        path: "./songs/mask off.mkv",
        image:"./songs/maskOff.jpg"
    },
    {
        id: 11,  
        name: "C??? Chill Th??i",
        singer: "Chillies ft Suni H??? Linh & Rhymastic",
        path: "./songs/chill.mkv",
        image:"./songs/chill.jpg"
    },
    {
        id: 12,  
        name: "Bi???t t??m ????u(Lofi Ver)",
        singer: "Ti???n T???i x Freak D",
        path: "./songs/Bi???t t??m ????u.mkv",
        image:"./songs/t??m????u.jpg"
    }
    ],


    render: function(){
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb" style="background-image: url(${song.image})">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },
    defineProperty: function(){
        Object.defineProperty(this , 'currentSong' , {
            get: function(){
            return this.songs[this.currentIndex]
            }
        })
        },
    handleEvents: function(){
        const _this = this;
        const cdWidth = cd.offsetWidth
        // x??? l?? cd quay v?? d???ng
        const cdThumbAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)'}
        ], {
            duration: 10000, //// 10s
            iterations: Infinity, // v?? h???ng
        })
        cdThumbAnimate.pause()
        // x??? l?? khi click play
        playBtn.onclick = function(){
            if (_this.isPlaying){
            audio.pause()
            }else{
            audio.play()
            }
        }
        //khi b??i h??t ??c play
        audio.onplay = function(){
            _this.isPlaying = true
            playBtn.classList.add("playing")
            cdThumbAnimate.play()
        }
        // khi b??i h??t pause
        audio.onpause = function(){
            _this.isPlaying = false
            playBtn.classList.remove("playing")
            cdThumbAnimate.pause()
        }
        // khi ti???n ????? b??i h??t thay ?????i
        audio.ontimeupdate = function(){
            if(audio.duration){
          const progressPercent = (audio.currentTime / audio.duration) *100
          renge.value = progressPercent
          renge.style.width = `${progressPercent}%`
            }
        }
         // tua b??i h??t
        processSong.onclick = function(e) {
            // Element.cilentWidth Tr??? v??? width c???a ?????i t?????ng 
            const width = this.clientWidth;
            // e.offsetX tr??? v??? to??? ????? ngang c???a con chu???t so v???i th??? cha ??ang t????ng t??c
            const clickX = e.offsetX;
            const duration = audio.duration;
            audio.currentTime = (clickX / width) * duration;
    }
        //next song
        nextBtn.onclick = function(){
            if (_this.isRandom){
            _this.randomSong()
            audio.play()
            }else {
            _this.nextSong()
            audio.play()
            }
            _this.render()
        }
        //pre song
        prevBtn.onclick = function(){
            if (_this.isRandom){
            _this.randomSong()
            audio.play()
            }else {
            _this.prevSong()
            audio.play()
            }
            _this.render()
        }
        // random song
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle("active", _this.isRandom)
        }

        // x??? l?? ph??t l???i 1 b??i h??t 
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle("active", _this.isRepeat)
        }

        // x??? l?? next song khi ended
        audio.onended = function(){
            if (_this.isRepeat){
            audio.play()
            } else{

            nextBtn.click()
            }
        }
        // l???ng nghe h??nh vi click v??o playlist
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)')
            if (songNode || e.target.closest('.option')){
            // x??? l?? khi click v??o song
                if (songNode){
                _this.currentIndex = Number(songNode.getAttribute('data-index'))
                _this.loadcurrentSong()
                audio.play()
                _this.render()
                }

            }
        }
        volumeBtn.onchange = function(e){
            if(e.target.value === 1){
                audio.volume = 0
            }else{
                const volumeChange = e.target.value / 100
                audio.volume = volumeChange
            }
            audio.muted = false 
        }

        volumeMuteOrNot.onclick = function() {
            if(_this.isMuted){
                audio.muted = false
                _this.isMuted = false
                volumeBtn.value = 50
                audio.volume = 0.5
            }else{
                audio.muted = true
                _this.isMuted = true
                volumeBtn.value = 1
            }
        }
    },
    loadcurrentSong: function(){
        heading.textContent = this.currentSong.name 
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    nextSong: function(){
        this.currentIndex++
        if (this.currentIndex>= this.songs.length){
            this.currentIndex = 0
        }
        this.loadcurrentSong()
    },
    prevSong: function(){
        this.currentIndex--
        if (this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1
        }
        this.loadcurrentSong()
    },
    randomSong: function(){
        do {
            newIndex = Math.floor(Math.random()* this.songs.length)
        }
        while (newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadcurrentSong()
    },

    start: function(){
         // ?????nh ngh??a c??c thu???c t??nh c???a object
        this.defineProperty()
        // l???ng nghe c??c s??? ki???n (DOM Events)
        this.handleEvents()

        // load curentsongs khi ch???y ???ng d???ng
        this.loadcurrentSong()
        // tr??? ra m??n h??nh n???i dung playlist 
        this.render()
    },
}
app.start()
openMusics()
function openMusics() {
    const isOpen = false;
    openMusic.onclick= function(){
        if(this.isOpen){
            music.style.transform = "translateX(100%)";
            this.style.transform =  "translateY(50%)";
            this.isOpen = false;
        }else{
            music.style.transform = "translateX(0)";
            this.style.transform =  "translateX(-275px)";
            this.isOpen = true;
        }
       
    }
}
