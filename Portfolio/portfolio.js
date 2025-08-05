 const staticPart = "A passionate ";
    const dynamicWords = [
      "web developer!",
      "graphic designer!",
    ];

    const typewriter = document.querySelector(".content p#demo");
    let wordIndex = 0;

    // Type letters one by one
    function typeText(text, delay, callback) {
      let i = 0;
      function type() {
        if (i < text.length) {
          typewriter.textContent += text.charAt(i);
          i++;
          setTimeout(type, delay);
        } else if (callback) {
          callback();
        }
      }
      type();
    }

    // Delete letters one by one
    function deleteText(count, delay, callback) {
      let i = 0;
      function del() {
        if (i < count) {
          typewriter.textContent = typewriter.textContent.slice(0, -1);
          i++;
          setTimeout(del, delay);
        } else if (callback) {
          callback();
        }
      }
      del();
    }

    // Main loop
    function loopTypewriter() {
      const currentWord = dynamicWords[wordIndex];
      typeText(currentWord, 100, () => {
        setTimeout(() => {
          deleteText(currentWord.length, 80, () => {
            wordIndex = (wordIndex + 1) % dynamicWords.length;
            loopTypewriter();
          });
        }, 1200); // Pause before deleting
      });
    }

    // Start
    typeText(staticPart, 100, () => {
      loopTypewriter();
    });
