


export var hofsa = {
    title: "Hofsá",
    area: "Norð Austurland",
    areaCode: "NAL",
    stangir: 6,
    data: [235, 243, 157, 228, 451, 561, 1133, 885],
    fps() { return this.data.map(x => (Math.round(x/this.stangir)) ) }
}