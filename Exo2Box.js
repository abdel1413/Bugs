const box = {
  locked: true,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) {
      throw new Error("Locked");
    }
    return this._content;
  },
};

function withBoxUnlocked(body) {
  //check if the box is locked
  let locked = box.locked; // save locked box
  if (!locked) {
    return body();
  }

  box.unlock(); //unlock the box
  try {
    return body(); //calling the body inside the try
  } finally {
    box.lock();
  }
}

console.log(box.locked);

withBoxUnlocked(function () {
  box.content.push("piece of gold");
});

try {
  withBoxUnlocked(function () {
    throw new Error("Pirates are on the horizon. Abort!");
  });
} catch (error) {
  console.log("Error raised ", error);
}

//
const b = {
  locked: true,
  _content: [],
  get content() {
    return this._content;
  },
};

function withB(body) {
  if (b.locked) {
    !b.locked;
    return body();
  }
  b.locked = !b.locked;
  try {
    return body();
  } finally {
    b.locked = true;
  }
}

withB(function () {
  console.log("there is someting bad in here ");
});
