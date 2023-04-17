const items = document.querySelectorAll('.item');
let draggingItem = null;
let spanItem = document.querySelector('.textImages');

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('dragstart', function() {
    console.log('dragstart', this);
    draggingItem = this;
    this.classList.add('dragging');
  });
  items[i].addEventListener('dragend', function() {
    console.log('dragend', this);
    draggingItem = null;
    this.classList.remove('dragging');
  });

  // add touch event listeners for mobile devices
  items[i].addEventListener('touchstart', function(e) {
    console.log('touchstart', this);
    draggingItem = this;
    this.classList.add('dragging');
  });
  items[i].addEventListener('touchend', function(e) {
    console.log('touchend', this);
    draggingItem = null;
    this.classList.remove('dragging');
  });
}


document.addEventListener('touchmove', function(e) {
  e.preventDefault();
});

document.addEventListener('dragover', function(e) {
  e.preventDefault();
});

//mobile device function
document.addEventListener('touchend', function(e) {
  e.preventDefault();
  console.log('drop', draggingItem);
  if (draggingItem) {
    if (draggingItem.id === 'item1') {
      setTimeout(() => {
        window.location.href = 'aboutMe.html';
      }, 1000);
    } else if (draggingItem.id === 'item2') {
      setTimeout(() => {
        window.location.href = 'skills.html';
      }, 1000);
    } else if (draggingItem.id === 'item3') {
      setTimeout(() => {
        window.location.href = 'projects.html';
      }, 1000);
    }
    items.forEach(item => {
      if (item !== draggingItem) {
        item.classList.add('fade-out');
        setTimeout(() => {
          item.style.display = 'none';
        }, 1000);

        spanItem.classList.add('fade-out');
        setTimeout(() => {
        spanItem.style.display = 'none';
      }, 1000);
      }
    });
    setTimeout(() => {
      draggingItem.style.display = 'none';
    }, 1000);
  }
});

//window function
document.addEventListener('drop', function(e) {
  e.preventDefault();
  console.log('drop', draggingItem);
  if (draggingItem) {
    if (draggingItem.id === 'item1') {
      setTimeout(() => {
        window.location.href = 'aboutMe.html';
      }, 1000);
    } else if (draggingItem.id === 'item2') {
      setTimeout(() => {
        window.location.href = 'skills.html';
      }, 1000);
    } else if (draggingItem.id === 'item3') {
      setTimeout(() => {
        window.location.href = 'projects.html';
      }, 1000);
    }
    items.forEach(item => {
      if (item !== draggingItem) {
        item.classList.add('fade-out');
        setTimeout(() => {
          item.style.display = 'none';
        }, 1000);

        spanItem.classList.add('fade-out');
        setTimeout(() => {
          spanItem.style.display = 'none';
        }, 1000);
      }
    });
    setTimeout(() => {
      draggingItem.style.display = 'none';
    }, 1000);
  }
});
