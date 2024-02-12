const music = new Audio('audio/1.mp3');
// music.play();

const songs =[
    {
        id: '1',
        songName:`Baarish Ki Jaaye<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/1.jpg",
    },
    {
        id: '2',
        songName:`Dil Tod Ke<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/2.jpg",
    },
    {
        id: '3',
        songName:`Kya Loge Tum<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/3.jpg",
    },
    {
        id: '4',
        songName:`Mann Bharrya<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/4.jpg",
    },
    {
        id: '5',
        songName:`Saari Duniya Jalaa Denge<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/5.jpg",
    },
    {
        id: '6',
        songName:`Tujhe Yaad Na Meri Ayee<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/6.jpg",
    },
    {
        id: '7',
        songName:`Achha Sila Diya<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/7.jpg",
    },
    {
        id: '8',
        songName:`Yaar Ka Sataya Hua Hai<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/8.jpg",
    },
    {
        id: '9',
        songName:`Filhall<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/9.jpg",
    },
    {
        id: '10',
        songName:`Zohrajabeen<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/10.jpg",
    },
    {
        id: '11',
        songName:`Kuch Bhi Ho Jaye<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/11.jpg",
    },
    {
        id: '12',
        songName:`Dhoke Pyaar Ke<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/12.jpg",
    },
    {
        id: '13',
        songName:`Mazaa<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/13.jpg",
    },
    {
        id: '14',
        songName:`Kyon<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/14.jpg",
    },
    {
        id: '15',
        songName:`Koi Aaye Na Rabba<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/15.jpg",
    },
    {
        id: '16',
        songName:`Jhaanjar<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/16.jpg",
    },
    {
        id: '17',
        songName:`Ranjha<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/17.jpg",
    },
    {
        id: '18',
        songName:`Kaun Hoyega<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/18.jpg",
    },
    {
        id: '19',
        songName:`Kaun Hoyega<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/19.jpg",
    },
    {
        id: '20',
        songName:`Udd Gaya<br>
        <div class="subtitle">B Praak</div>`,
        poster:"img/bpraak/20.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName
});

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');

masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        
    }
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })

    }
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = `rgb(105, 105, 105, .0)`;
    })

    }

let index =0;
// index++;
// console.log(index);
let poster_master_play=document.getElementById('poster_master_play');
let download_music=document.getElementById('download_music');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(index);
        music.src = `audio/bpraak/${index}.mp3`;
        poster_master_play.src =`img/bpraak/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/bpraak/${index}.mp3`;

        let songTitles =songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss=>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download',songName);
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105,105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart =document.getElementById('currentStart');
let currentEnd =document.getElementById('currentEnd');
let seek =document.getElementById('seek');
let bar2 =document.getElementById('bar2');
let dot =document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr =music.currentTime;
    let music_dur =music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText =`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText =`${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) *100);
    seek.value =progressBar;
    // console.log(seek.value);
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

    
vol.addEventListener('change', () => {
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a =vol.value;
    vol_bar.style.width =`${vol_a}%`;
    vol_dot.style.left =`${vol_a}%`;
    music.volume =vol_a / 100;
});

let back =document.getElementById('back');
let next =document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/bpraak/${index}.mp3`;
        poster_master_play.src =`img/bpraak/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles =songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss=>{
            let {songName} = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105,105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index ++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/bpraak/${index}.mp3`;
        poster_master_play.src =`img/bpraak/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles =songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss=>{
            let {songName} = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105,105, .1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});










let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
});
pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -=330;
});
pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft +=330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
        shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');  
            shuffle.innerHTML = 'repeat';
            break;
        
        case "repeat":
        shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');  
            shuffle.innerHTML = 'random';
            break;

        case "random":
        shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');  
            shuffle.innerHTML = 'next';
            break;
    }
});



const next_music = () =>{
    if(index == songs.length){
        index = 1;
    } else{
        index++;
    }

    music.src = `audio/bpraak/${index}.mp3`;
    poster_master_play.src =`img/bpraak/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles =songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105,105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
};
const repeat_music = () =>{
    index;

    music.src = `audio/bpraak/${index}.mp3`;
    poster_master_play.src =`img/bpraak/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles =songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105,105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
};
const random_music = () =>{
    if(index == songs.length){
        index = 1;
    } else{
        index = Math.floor((Math.random() * songs.length) + 1)
    }

    music.src = `audio/bpraak/${index}.mp3`;
    poster_master_play.src =`img/bpraak/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;

    let songTitles =songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss=>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105,105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
};


music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;

    switch(b){
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
    
})









