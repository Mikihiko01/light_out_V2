class ControllerClass {
  constructor() {
  
  }

  jatekter() {
    const lampaTomb = [];
    const szuloElem = $("article");
    const sablonElem = $(".lampa");;


    const lampaM = new LampaModel(lampaTomb);
    const meret = 9;
    for (let index = 0; index < meret; index++) {
      const ujElem = sablonElem.clone().appendTo(szuloElem);
      const lampa = new Lampa(ujElem, index);
      lampaTomb.push(lampa);
    }
    sablonElem.remove();
    $(window).on("lampaFelkapcsol", (esemeny) => {
      lampaM.atallit(esemeny.detail);
    });
  }
}
