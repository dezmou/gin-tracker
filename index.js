// fitnesspark
// rpogjfpodgjfop

const cardsMap = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
].map(e => e.join())

let field;

const resetField = () => {
  field = Array.from({ length: 13 }).map((q, x) => Array.from({ length: 4 }).map((e, y) => {
    const names = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    const couleurs = ["h", "c", "d", 's']
    return {
      coord: [x, y],
      id: `${names[x]}${couleurs[y]}`,
      status: "UNKNOW"
    }
  }))
}

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

const sleep = async (millis) => {
  await new Promise(r => setTimeout(r, millis))
}

const X = 0
const Y = 1

const BLANK = [255, 255, 255, 255]
const HERO = 1
const VILAIN = 2
const CARD_PIOCHE = [27, 170];

; (async () => {
  const PXRATIO = window.devicePixelRatio
  const canvas = await (async () => {
    while (true) {
      await new Promise(r => setTimeout(r, 100))
      const canvas = document.querySelector("canvas")
      if (canvas) return canvas
    }
  })()
  const ctx = canvas.getContext("2d")
  document.body.appendChild(htmlToElement(`<div>X : <span id="x_"></span> <br/>Y : <span id="y_"></span> <br/>C : <span id="c_"></span>  <br/> <button id="startGame">start tracker</button></div>`))
  document.body.appendChild(htmlToElement(`<div>X : <span id="x_"></span> <br/>Y : <span id="y_"></span> <br/>C : <span id="c_"></span>  <br/> <button id="reset">reset</button></div>`))

  const container = document.querySelector("#precont > div.gview.sbfixed > div.bcont.noth.usno")
  // const canvas = document.querySelector("#precont > div.gview.sbfixed > div.bcont.noth.usno > canvas.noth");
  const hud = document.createElement("canvas");
  const hudCtx = hud.getContext("2d");

  hud.width = canvas.width * PXRATIO;
  hud.height = canvas.height * PXRATIO;
  hud.style.width = canvas.clientWidth;
  hud.style.height = canvas.clientHeight;

  // hud.style.width = canvas.clientWidth;
  // hud.style.height = canvas.clientHeight;
  hud.style.position = "absolute";
  hud.style['z-index'] = "9999";
  hud.style['pointerEvents'] = "none";
  hud.style['image-rendering'] = "crisp-edges";
  container.appendChild(hud);
  // hudCtx.fillStyle = "red";
  // // hudCtx.rect(136,309,300,300);
  // hudCtx.fill()

  let gameId = 0;


  const pixequal = (pix, pix2) => {
    return (pix[0] === pix2[0] && pix[1] === pix2[1] && pix[2] === pix2[2])
  }

  const putPixel = (pix, color) => {
    ctx.fillStyle = color
    ctx.fillRect(pix[X] * PXRATIO, pix[Y] * PXRATIO, 1, 1)
  }

  const getPixel = (x, y) => {
    return ctx.getImageData(x * PXRATIO, y * PXRATIO, 1, 1).data
  }


  const scanCard = (cardPos) => {
    const X_STEP = 2
    const Y_STEP = 3
    const info = ctx.getImageData(cardPos[X] * PXRATIO, cardPos[Y] * PXRATIO, X_STEP * 8 * PXRATIO, Y_STEP * 8 * PXRATIO).data
    const step = Math.floor(info.length / 64);
    let map = Array.from({ length: 64 })
    for (let i = 0; i < 64; i++) {
      map[i] = info[i * step + 1] === 255 ? 0 : 1
    }
    map = map.join()
    const x = cardsMap.findIndex(e => e === map)
    // console.log(i + 1);

    const y = (() => {
      if (getPixel(61, 215)[0] === 17) { //black
        return getPixel(55, 208)[0] === 17 ? 3 : 1;
      } else {
        return getPixel(49, 202)[0] === 209 ? 0 : 2
      }
    })()
    return field[x][y]
  }

  canvas.addEventListener("mousemove", (e) => {
    document.querySelector("#x_").innerHTML = e.offsetX
    document.querySelector("#y_").innerHTML = e.offsetY
    const data = ctx.getImageData(e.offsetX * PXRATIO, e.offsetY * PXRATIO, 1, 1).data;
    document.querySelector("#c_").innerHTML = data
  })
  const getPlayerTUrn = async () => {
    while (true) {
      if (pixequal(getPixel(376, 135), BLANK)) {
        return VILAIN
      }
      if (pixequal(getPixel(378, 291), BLANK)) {
        return HERO
      }

      await sleep(10)
    }
  }

  const waitPixel = async (pos, color1) => {
    while (true) {
      if (getPixel(pos[0], pos[1])[0] === color1) {
        return;
      }
      await sleep(10)
    }
  }

  const getCardCoord = (x, y) => {
    const newX = (138) + (x * 32);
    const newY = (315) + (y * 37.5);
    return [newX, newY];
  }

  const print = () => {
    hudCtx.clearRect(0, 0, hud.width, hud.height);
    for (let line of field) {
      for (let card of line) {
        if (card.status === "VILAIN") {
          const coords = getCardCoord(card.coord[0], card.coord[1]);
          hudCtx.fillStyle = `#ff0000BB`;
          hudCtx.fillRect(coords[0], coords[1], 32, 37.5)
        }
        if (card.status === "REFUSED_VILAIN") {
          const coords = getCardCoord(card.coord[0], card.coord[1]);
          hudCtx.fillStyle = `#8a8a8aBB`;
          hudCtx.fillRect(coords[0], coords[1], 32, 37.5)
        }
        if (card.status === "PROPOSE") {
          const coords = getCardCoord(card.coord[0], card.coord[1]);
          hudCtx.fillStyle = `#7765c4BB`;
          hudCtx.fillRect(coords[0], coords[1], 32, 37.5)
        }
      }
    }
  }

  const waitGameIdChange = async (cur) => {
    while (true) {
      if (cur !== gameId) {
        break;
      }
      await sleep(100)
    }
  }

  const start = async () => {
    try {
      await (async () => {
        const currentGameId = gameId;
        resetField();
        while (true) {
          let player = await getPlayerTUrn()
          if (currentGameId !== gameId) return;
          const piocheBase = scanCard(CARD_PIOCHE)
          if (player === VILAIN) {
            while (true) {
              if (getPixel(263, 69)[0] !== 40) {//vilain action
                const tmpPioche = scanCard(CARD_PIOCHE)
                if (tmpPioche === piocheBase) {
                  piocheBase.status = "REFUSED_VILAIN"
                } else {
                  console.log("VILAIN TAKE");
                  piocheBase.status = "VILAIN"
                }
                break
              }
              if (currentGameId !== gameId) return;
              await sleep(10)
            }
            console.log("VILAIN :", piocheBase);
            print();
            await sleep(10)
            await Promise.race([
              waitPixel([378, 291], 255),
              waitGameIdChange(currentGameId),
            ])
            if (currentGameId !== gameId) return;
          } else {
            const pioche = scanCard(CARD_PIOCHE)
            pioche.status = "PROPOSE"
            print();
            await Promise.race([
              new Promise(r => {
                const click = (e) => {
                  if (
                    (e.layerX > 21 && e.layerX < 98 && e.layerY > 165 && e.layerY < 257)
                    || (e.layerX > 643 && e.layerX < 734 && e.layerY > 149 && e.layerY < 275)
                  ) {
                    canvas.removeEventListener('click', click);
                    r([
                      e.layerX,
                      e.layerY,
                    ]);
                  }
                }
                canvas.addEventListener("click", click)
              }),
              waitGameIdChange(currentGameId)
            ])
            if (currentGameId !== gameId) return;
            pioche.status = "REFUSED_VILAIN"
            print()
            while (true) {
              const tmpPlayer = await Promise.race([
                getPlayerTUrn(),
                waitGameIdChange(currentGameId)
              ])
              if (currentGameId !== gameId) return;
              if (tmpPlayer === VILAIN) {
                break;
              }
              await sleep(10)
              if (currentGameId !== gameId) return;
            }
          }
        }
      })()
    } catch (e) {
      console.log(e);
      gameId += 1;
    }
    console.log("GAME ENDED");
    resetField();
    print();
  }

  await sleep(500)

  document.querySelector("#startGame").addEventListener("click", start)
  document.querySelector("#reset").addEventListener("click", () => {
    gameId += 1;
  })
})()