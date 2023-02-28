AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Torre Eiffel",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "Nueva York",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Elemento de borde
      const b=this.cb(position,item.id)
      // Elemento de miniatura
     const m=this.tn(item)
     b.appendChild(m)
      // Elemento del texto del título
      const tdt=this.tt(position,item)
      b.appendChild(tdt)
      this.placesContainer.appendChild(b);
    }
  },

  cb: function(position,id){
    const en=document.createElement("a-entity")
    en.setAttribute("id",id)
    en.setAttribute("visible",true)
    en.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
    en.setAttribute("position",position)
    en.setAttribute("material",{color:"#0077cc",opacity:1})
    return en
  },

  tn: function(item){
    const en=document.createElement("a-entity")
    en.setAttribute("visible",true)
    en.setAttribute("geometry",{primitive:"circle",radius:9})
    en.setAttribute("material",{src:item.url})
    return en
  },

  tt: function(position,item){
    const en=document.createElement("a-entity")
    en.setAttribute("text",{font:"exo2bold",align:"center",width:70,color:"#e65100",value:item.title})
    const pos=position
    pos.y=-20
    en.setAttribute("position",pos)
    en.setAttribute("visible",true)
    return en
  }
});
