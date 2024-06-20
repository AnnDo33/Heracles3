document.addEventListener("DOMContentLoaded", function () {
  const heracles = new Hero("👨 Heracles", 20, 6, "./images/heracles.svg");
  heracles.x = 5;
  heracles.y = 5;
  console.log("Heracles:", heracles);

  const weapon = new Weapon("sword", 10, "./images/sword.svg");
  heracles.weapon = weapon;
  console.log("Weapon:", weapon);

  const shield = new Shield("shield", 10, "./images/shield.svg");
  heracles.shield = shield;
  console.log("Shield:", shield);

  const bird1 = new Monster("Bird1", 25, 12, "./images/bird.svg");
  bird1.x = 2;
  bird1.y = 3;
  console.log("Bird1:", bird1);

  const bird2 = new Monster("Bird2", 25, 12, "./images/bird.svg");
  bird2.x = 7;
  bird2.y = 1;
  console.log("Bird2:", bird2);

  const bird3 = new Monster("Bird3", 25, 12, "./images/bird.svg");
  bird3.x = 4;
  bird3.y = 8;
  console.log("Bird3:", bird3);

  const arena = new Arena(heracles, [bird1, bird2, bird3]);
  console.log("Arena:", arena);

  const fighterHtml = new FightersTemplate("fighters");
  fighterHtml.createTemplate(heracles, bird1);
  console.log("FighterHtml created");

  const arenaHTML = new ArenaTemplate("arena");
  arenaHTML.createArena(arena);
  console.log("ArenaHTML created");

  let openingModal = true;
  window.openModal = () => {
    if (openingModal) {
      const heroInfo = new HeroInfoTemplate("heroInfo");
      heroInfo.createHeroInfoTemplate(heracles);
      document.getElementById("heroInfo").style.display = "flex";
      openingModal = false;
    }
  };

  window.closeModal = () => {
    const heroInfo = document.getElementById("heroInfo");
    heroInfo.style.display = "none";
    heroInfo.innerHTML = "";
    openingModal = true;
  };
});
