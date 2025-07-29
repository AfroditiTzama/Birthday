function openGift() {

    document.querySelector('.stitch').style.display = "block";
    const gift = document.querySelector('.gift');
    const message = document.getElementById('message');
    const stitch = document.getElementById('stitch');
    const audio = document.getElementById('birthdayAudio');
  
    gift.classList.add('open');
    message.style.display = 'block';
    stitch.classList.add('show');
    audio.play();
  }
  