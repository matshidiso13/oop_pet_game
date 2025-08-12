class Pet {
    constructor(name, soundText, image, soundUrl) {
      this.name = name;
      this.sound = soundText; // Assign the sound text to this.sound
      this.soundUrl = new Audio(soundUrl);
      this.image = image;
      this.playCount = 0;
    }
  
    speak() {
      alert(this.sound); // Display the pet's sound text
      this.soundUrl.currentTime = 0; // Restart the audio from the beginning
      this.soundUrl.play();
    
    }
  
    play() {
      this.playCount++;
      this.speak();
      updateCounter(this.playCount);
      showFunctions(this.name);
    }
  }
  
  function choosePet(type) {
    if (type === 'cat') {
      currentPet = new Pet('Cat', 'Meow! 🐱', 'img/image copy.png', 'Media/cat-meow-sound-383823.mp3');
    } else if (type === 'dog') {
      currentPet = new Pet('Dog', 'Woof! 🐶', 'img/image.png', 'Media/dog-bark-382732.mp3');
    } else if (type === 'bunny') {
      currentPet = new Pet('Bunny', 'Whee! 🐰', 'img/image copy 3.png', 'Media/rabbit-sounds-358172.mp3');
    } else if (type === 'bird') {
      currentPet = new Pet('Bird', 'Que! 🐦', 'img/image copy 2.png', 'Media/bird-sounds-241394.mp3');
    } else {
      alert('Unknown pet type');
      return;
    }
  
    console.log('Selected pet:', currentPet);
  
    // Show the pet image and game area
    const img = document.getElementById('petImage');
    img.src = currentPet.image;
    img.alt = currentPet.name;
  
    currentPet.playCount = 0;
    document.getElementById('counter').innerText = 'Times played: 0';
    document.getElementById('game').style.display = 'block';
  }
  
  function playWithPet() {
    if (currentPet) {
      currentPet.play();
    }
  }
  
  