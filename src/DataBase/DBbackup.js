// 1 til 43 er þá lykillinn til að finna ár og gögninn þar inni

export const fjardarhornsa = {
    title: 'Fjarðarhornsá',
    area: 'vestfirdir',
    stangir: 2,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 18, 33, 18, 74, 115, 111, 228,
        227, 153, 89, 97, 236, 0, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'fjardarhornsa'
}

export const afall = {
    title: 'Affall',
    area: 'sudurland',
    stangir: 4,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1021, 476,
        471, 795, 386, 558, 690, 193],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'afall'
}

export const alfta = {
    title: 'Álftá',
    area: 'vesturland',
    stangir: 2,
    data: [154, 341, 204, 300, 386, 255, 265, 267, 396, 485, 268, 333, 399, 202, 443, 283, 245, 274,
        333, 242, 247, 263, 283, 266, 191, 275, 132, 187, 228, 278, 299, 343, 195, 210, 652, 468, 480,
        374, 149, 664, 109, 0, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'alfta'
}

export const andakilsa = {
    title: 'Andakílsá',
    area: 'vesturland',
    stangir: 2,
    data: [235, 331, 262, 187, 237, 138, 69, 104, 89, 108, 106, 101, 145, 136, 203, 122, 97, 134, 85, 109,
        125, 118, 154, 184, 63, 177, 79, 95, 94, 245, 129, 233, 268, 246, 839, 706, 332, 181, 83, 374, 111,
        268, 113, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'andakilsa'
}

export const blanda = {
    title: 'Blanda',
    area: 'Nvesturland',
    stangir: 14,
    data: [1173, 2363, 1485, 1367, 2147, 906, 778, 1412, 861, 511, 495, 766, 1814, 1243, 1217, 375,
        607, 568, 432, 404, 357, 519, 600, 877, 1984, 1191, 706, 1086, 833, 504, 1386, 1591, 1199, 1107,
        927, 2445, 2654, 2036, 843, 2612, 1933, 4829, 2386, 1433],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'blanda'
}

export const breiddalsa = {
    title: 'Breiðdalsá',
    area: 'austurland',
    stangir: 6,
    data: [126, 123, 76, 248, 412, 248, 153, 41, 20, 21, 4, 78, 158, 257, 185, 104, 91, 116, 226, 130, 72,
        180, 92, 63, 85, 128, 171, 233, 325, 202, 700, 815, 937, 873, 910, 782, 1178, 1430, 464, 305, 290,
        338, 375, 106],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'breiddalsa'
}

export const brynjudalsa = {
    title: 'Brynjudalsá',
    area: 'vesturland',
    stangir: 2,
    data: [0, 205, 271, 185, 173, 98, 100, 11, 24, 120, 177, 68, 29, 44, 59, 287, 118, 385, 235, 154, 118,
        88, 597, 186, 76, 102, 120, 136, 95, 109, 77, 171, 163, 152, 164, 325, 170, 246, 338, 168, 198, 118, 83, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'brynjudalsa'
}

export const budardalsa = {
    title: 'Búðardalsá',
    area: 'vesturland',
    stangir: 2,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 158, 245, 335, 341,
        300, 322, 674, 639, 442, 400, 276, 435, 247, 466, 211, 255],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'budardalsa'
}

export const deildara = {
    title: 'Deildará',
    area: 'nausturland',
    stangir: 3,
    data: [158, 189, 168, 224, 357, 164, 111, 93, 27, 55, 69, 234, 253, 178, 173, 145, 142, 88, 281,
        391, 173, 206, 82, 141, 192, 65, 144, 122, 194, 93, 273, 177, 135, 257, 214, 252, 176, 215, 95,
        135, 183, 303, 262, 238],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'deildara'
}

export const ellidar = {
    title: 'Elliðaárnar',
    area: 'vesturland',
    stangir: 4,
    data: [2033, 2071, 1692, 1328, 1383, 1336, 938, 1074, 1219, 1508, 1331, 1157, 1083, 1175, 2006, 1773,
        1384, 1127, 1393, 1390, 1132, 1088, 1211, 568, 492, 424, 592, 414, 478, 472, 645, 954, 900, 936, 1457,
        880, 1164, 1147, 830, 1122, 457, 870, 675, 890],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'ellidar'
}

export const eranga = {
    title: 'Eystri-Ranga',
    area: 'sudurland',
    stangir: 18,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2475,
        7473, 7013, 4229, 6280, 4387, 3004, 4797, 2529, 2749, 3219, 2143],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'eranga'
}

export const faskrud = {
    title: 'Fáskrúð',
    area: 'vesturland',
    stangir: 3,
    data: [202, 298, 136, 242, 226, 261, 140, 190, 154, 214, 165, 257, 449, 381, 464, 203, 226, 183, 330, 212, 96, 157, 187, 144, 265, 145, 143, 221, 170, 182, 194, 283, 178, 322, 432, 455, 523, 248, 157, 249, 81, 172, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'faskrud'
}

export const flekkudalsa = {
    title: 'Flekkudalsá',
    area: 'vesturland',
    stangir: 3,
    data: [300, 462, 343, 342, 467, 509, 293, 255, 237, 249, 189, 133, 244, 129, 360, 140, 145, 241, 262, 247, 100, 109, 192, 148, 226, 131, 108, 131, 229, 284, 227, 290, 217, 174, 274, 252, 301, 107, 132, 173, 78, 0, 205],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'flekkudalsa'
}

export const fljotaa = {
    title: 'Fljótaá',
    area: 'Nvesturland',
    stangir: 4,
    data: [204, 189, 173, 269, 316, 199, 165, 125, 71, 60, 68, 83, 150, 112, 93, 323, 388, 135, 282,
        203, 78, 102, 73, 119, 284, 51, 49, 114, 152, 49, 256, 259, 86, 90, 84, 465, 284, 192, 95,
        243, 138, 123, 135],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'fljotaa'
}

export const flokadalsa = {
    title: 'Flókadalsá',
    area: 'Nvesturland',
    stangir: 3,
    data: [411, 613, 432, 363, 547, 377, 266, 181, 234, 281, 303, 351, 384, 282, 293, 182, 241, 350,
        322, 387, 341, 288, 233, 319, 360, 347, 380, 362, 473, 334, 523, 410, 438, 418, 768, 744, 724,
        475, 300, 937, 343, 818, 369, 423],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'flokadalsa'
}

export const fnjoska = {
    title: 'Fnjóská',
    area: 'nausturland',
    stangir: 8,
    data: [386, 268, 250, 273, 554, 446, 527, 257, 323, 98, 107, 120, 144, 93, 124, 112, 121, 135, 554, 411,
        128, 60, 95, 156, 286, 157, 197, 146, 311, 166, 444, 460, 383, 346, 501, 417, 1054, 687, 266, 408,
        291, 631, 190, 107],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'fnjoska'
}

export const gljufuraiborgaf = {
    title: 'Gljúfurá í Borgarfirði',
    area: 'vesturland',
    stangir: 3,
    data: [150, 522, 356, 400, 461, 286, 130, 101, 184, 225, 110, 138, 280, 73, 181, 133, 97, 171, 286, 192, 150, 356, 209, 240, 152, 134, 104, 99, 167, 88, 166, 255, 185, 220, 315, 323, 281, 285, 135, 569, 167, 639, 197],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'gljufuraiborgaf'
}

export const grimsa = {
    title: 'Grímsá og Tunguá',
    area: 'vesturland',
    stangir: 8,
    data: [1419, 2116, 1439, 1103, 1952, 1527, 869, 845, 717, 1382, 1061, 1463, 1836, 825, 1963,
        1200, 756, 1294, 1864, 1228, 1485, 1123, 1484, 1613, 1705, 1872, 1048, 1005, 1116, 1156,
        1085, 1486, 1114, 1110, 2223, 1314, 1961, 1343, 452, 1625, 530, 1399, 608, 1290],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'grimsa'
}

export const haffjardara = {
    title: 'Haffjarðará',
    area: 'vesturland',
    stangir: 6,
    data: [613, 559, 595, 624, 950, 701, 494, 465, 562, 625, 549, 562, 1131, 521, 875, 661, 599, 711
        , 818, 617, 672, 735, 602, 560, 752, 793, 672, 532, 943, 1007, 1133, 1290, 1077, 1079, 2010,
        1622, 1973, 1527, 1164, 2156, 821, 1660, 1305, 1167],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'haffjardara'
}

export const hafralonsa = {
    title: 'Hafralónsá',
    area: 'nausturland',
    stangir: 6,
    data: [343, 302, 227, 312, 276, 264, 180, 36, 60, 52, 25, 132, 223, 296, 361, 313, 223, 123, 266, 402, 147, 234, 222, 221, 260, 254, 315, 303, 294, 237, 206, 365, 424, 481, 585, 501, 610, 403, 166, 354, 280, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'hafralonsa'
}

export const haukadalsa = {
    title: 'Haukadalsá',
    area: 'vesturland',
    stangir: 5,
    data: [810, 914, 904, 862, 926, 643, 408, 814, 598, 886, 633, 499, 817, 650, 1232, 511, 540, 703,
        776, 632, 407, 394, 626, 331, 916, 646, 348, 577, 426, 640, 455, 710, 522, 640, 1021, 1107,
        1173, 669, 500, 503, 194, 670, 1056, 473],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'haukadalsa'
}

export const hitara = {
    title: 'Hítará',
    area: 'vesturland',
    stangir: 6,
    data: [383, 525, 351, 346, 649, 314, 167, 252, 202, 201, 151, 203, 506, 273, 428, 225, 257, 393,
        255, 279, 206, 424, 355, 217, 311, 443, 404, 418, 493, 448, 611, 706, 543, 563, 1289, 820, 803,
        900, 516, 1107, 477, 1238, 779, 494],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'hitara'
}

export const hofsa = {
    title: 'Hofsá og Sunnudalsá.',
    area: 'austurland',
    stangir: 6,
    data: [1277, 1117, 1253, 1273, 1336, 599, 615, 145, 141, 258, 185, 1219, 1631, 1710, 1210,
        809, 552, 642, 2238, 2028, 1012, 1028, 826, 607, 1008, 1020, 804, 906, 1911, 1483, 1864,
        1965, 2058, 1423, 1119, 1141, 1161, 952, 1018, 1160, 654, 515, 492, 589],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'hofsa'
}

export const hrutafjardara = {
    title: 'Hrútafjarðará og Síká',
    area: 'Nvesturland',
    stangir: 3,
    data: [194, 291, 228, 262, 346, 312, 253, 288, 220, 287, 195, 345, 536, 259, 532, 252, 200, 359,
        459, 411, 176, 288, 205, 201, 243, 218, 141, 126, 168, 164, 631, 514, 339, 431, 402, 643,
        499, 318, 177, 701, 274, 860, 551, 384],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'hrutafjardara'
}

export const huseyjakvisudurland = {
    title: 'Húseyjarkvísudurland',
    area: 'Nvesturland',
    stangir: 2,
    data: [112, 118, 141, 158, 194, 84, 107, 52, 54, 90, 77, 105, 104, 101, 73, 113, 89, 103, 245, 160, 80, 73, 71, 70, 94, 39, 32, 47, 52, 63, 162, 110, 150, 161, 199, 281, 249, 175, 141, 371, 281, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'huseyjakvisudurland'
}

export const hvitaiarnes = {
    title: 'Hvítá í Árnessýsudurlandu',
    area: 'sudurland',
    stangir: 3,
    data: [1175, 1175, 1159, 1028, 1169, 1028, 299, 762, 634, 846, 941, 550, 990, 965, 788, 680, 486, 456, 687, 938, 723, 580, 596, 405, 418, 190, 204, 250, 262, 244, 228, 298, 361, 306, 618, 801, 372, 448, 409, 625, 294, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'hvitaiarnes'
}

export const jokla = {
    title: 'Jökulsá á Dal',
    area: 'austurland',
    stangir: 8,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        305, 507, 335, 385, 306, 815, 585, 355],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'jokla'
}

export const kerlingardalsa = {
    title: 'Kerlingardalsá',
    area: 'austurland',
    stangir: 2,
    data: [0, 0, 0, 0, 23, 33, 16, 57, 48, 90, 49, 0, 0, 144, 78, 107, 107, 169, 130, 95, 73, 75, 80, 98, 65,
        41, 32, 60, 38, 42, 42, 42, 44, 446, 992, 286, 1051, 208, 157, 228, 183, 188, 163, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'kerlingardalsa'
}

export const kjos = {
    title: 'Laxá í Kjós',
    area: 'vesturland',
    stangir: 8,
    data: [1270, 1901, 1973, 1677, 1648, 1508, 950, 1290, 927, 1545, 1273, 871, 1043, 933, 3422,
        1819, 1370, 1328, 1053, 1103, 683, 866, 629, 985, 1192, 1171, 940, 916, 1483, 1457, 1305,
        1312, 844, 623, 1098, 1087, 1064, 929, 413, 1036, 472, 1383, 601, 860],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'kjos'
}

export const krossaaskards = {
    title: 'Krossá á Skarðsströnd',
    area: 'vesturland',
    stangir: 2,
    data: [106, 120, 109, 81, 106, 156, 115, 157, 126, 203, 93, 27, 117, 51, 208, 99, 30, 100, 125,
        114, 44, 100, 72, 28, 50, 71, 33, 52, 134, 95, 208, 187, 196, 106, 346, 252, 325, 204, 165,
        226, 123, 85, 0, 116],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'krossaaskards'
}

export const langa = {
    title: 'Langá',
    area: 'vesturland',
    stangir: 10,
    data: [1379, 2131, 1568, 1720, 2405, 1893, 1049, 735, 1090, 960, 610, 1155, 1765, 1023, 1409, 748,
        1000, 951, 1290, 777, 978, 1400, 1517, 1366, 1560, 1641, 1011, 1407, 1605, 2263, 2232, 1912,
        1831, 1456, 2970, 2250, 2178, 1905, 1090, 2815, 595, 2616, 1433, 1701],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'langa'
}

export const langadalsa = {
    title: 'Langadalsá',
    area: 'vestfirdir',
    stangir: 4,
    data: [78, 172, 170, 189, 203, 277, 206, 111, 101, 98, 31, 54, 112, 67, 95, 130, 88, 217, 292, 241, 72,
        251, 192, 133, 186, 82, 76, 94, 106, 150, 341, 444, 329, 226, 415, 362, 251, 263, 152, 475, 158, 244,
        251, 125],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'langadalsa'
}

export const laskogarstr = {
    title: 'Laxá á Skógarströnd',
    area: 'vesturland',
    stangir: 2,
    data: [99, 167, 114, 190, 179, 177, 109, 183, 121, 201, 189, 277, 218, 117, 242, 103, 106, 101, 72,
        68, 33, 41, 94, 46, 121, 98, 75, 81, 63, 169, 84, 170, 92, 70, 157, 112, 102, 42, 41, 210, 95, 0, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'laskogarstr'
}

export const laugardalsa = {
    title: 'Laugardalsá',
    area: 'vestfirdir',
    stangir: 2,
    data: [309, 601, 245, 681, 703, 596, 276, 288, 250, 181, 125, 421, 386, 190, 501, 280, 161, 284, 220,
        265, 157, 223, 111, 135, 343, 149, 156, 257, 328, 324, 591, 390, 299, 246, 426, 506, 543, 184, 159,
        404, 138, 521, 251, 175],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'laugardalsa'
}

export const laxaaasum = {
    title: 'Laxá á Ásum',
    area: 'Nvesturland',
    stangir: 4,
    data: [1439, 1881, 1270, 1439, 1854, 1650, 956, 1413, 1036, 1050, 625, 1440, 1857, 1157,
        1617, 749, 651, 833, 861, 1458, 805, 1549, 627, 715, 1136, 430, 770, 562, 559, 308, 462,
        679, 365, 536, 503, 1123, 737, 438, 210, 1063, 1005, 1795, 620, 1108],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'laxaaasum'
}

export const laxaadolum = {
    title: 'Laxá í Dölum',
    area: 'vesturland',
    stangir: 6,
    data: [341, 547, 488, 419, 1032, 630, 324, 671, 650, 947, 903, 1600, 1907, 1408, 2385, 1006,
        1049, 1227, 1124, 929, 625, 764, 1032, 764, 1432, 938, 607, 877, 879, 1394, 1533, 1881, 1076,
        1145, 1899, 1440, 1762, 568, 369, 710, 216, 1578, 1711, 871],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'laxaadolum'
}

export const laxaarefasveit = {
    title: 'Laxá á Refasveit',
    area: 'Nvesturland',
    stangir: 3,
    data: [81, 79, 58, 41, 71, 94, 146, 153, 71, 39, 57, 70, 111, 144, 132, 140, 96, 156, 117, 297,
        227, 144, 143, 104, 139, 179, 105, 69, 88, 169, 82, 154, 254, 242, 208, 224, 340, 319, 274, 190,
        474, 502, 320, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'laxaarefasveit'
}

export const laxaiadaldal = {
    title: 'Laxá í Aðaldal',
    area: 'nausturland',
    stangir: 10,
    data: [1817, 2326, 1777, 2699, 3063, 2372, 2324, 1455, 1304, 1109, 1256, 1911, 2730, 2422, 2255,
        1619, 1543, 1439, 2295, 1983, 1226, 1116, 1047, 1227, 1928, 895, 916, 1042, 1189, 624, 947,
        1025, 825, 1055, 1168, 1078, 1493, 1089, 427, 1008, 829, 1201, 1207, 709],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'laxaiadaldal'
}

export const laxaileiru = {
    title: 'Laxá í Leirársveit ',
    area: 'vesturland',
    stangir: 6,
    data: [1116, 1654, 1288, 1154, 1252, 899, 707, 670, 545, 708, 742, 860, 1610, 914, 1887, 1186,
        1052, 850, 652, 747, 853, 1425, 1368, 697, 816, 1065, 925, 948, 1102, 1133, 972, 1294, 675,
        820, 1594, 1267, 1126, 907, 465, 1008, 405, 1121, 441, 624],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'laxaileiru'
}

export const leirvogsa = {
    title: 'Leirvogsá',
    area: 'vesturland',
    stangir: 2,
    data: [332, 739, 544, 474, 463, 386, 136, 213, 322, 514, 320, 438, 324, 291, 1057, 458, 489, 435, 556, 428, 490, 520, 552, 411, 540,
        467, 487, 434, 529, 558, 812, 744, 299, 379, 1173, 777, 559, 354, 200, 599, 313, 706, 312, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'leirvogsa'
}

export const mida = {
    title: 'Miðá í Dölum',
    area: 'vesturland',
    stangir: 3,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 80, 60, 159, 76, 258, 218,
        134, 387, 342, 477, 215, 358, 700, 225, 334, 476, 215],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'mida'
}

export const midfjardara = {
    title: 'Miðfjarðará',
    area: 'Nvesturland',
    stangir: 10,
    data: [837, 1414, 1601, 2581, 2337, 2132, 1714, 1213, 926, 882, 583, 1059, 1719, 1073, 2081,
        1175, 774, 1112, 1401, 1023, 668, 1032, 714, 602, 1772, 1203, 612, 433, 753, 577, 2228, 1561,
        1198, 1132, 1736, 3962, 4048, 2365, 1610, 3659, 1692, 6028, 4338, 3765],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'midfjardara'
}

export const midfjardaraibakkaf = {
    title: 'Miðfjarðará í Bakkafirði',
    area: 'austurland',
    stangir: 2,
    data: [147, 144, 183, 248, 242, 135, 80, 39, 15, 39, 32, 116, 168, 206, 186, 235, 136, 101, 192, 172, 60, 170, 96, 101, 145, 116, 108, 98,
        165, 152, 141, 195, 155, 198, 203, 236, 349, 392, 220, 252, 132, 0, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'midfjardaraibakkaf'
}

export const myrarkvisudurland = {
    title: 'Mýrarkvísudurland',
    area: 'nausturland',
    stangir: 3,
    data: [210, 201, 121, 181, 221, 197, 169, 242, 179, 248, 215, 388, 490, 252, 287, 239, 188, 243, 390, 266, 139, 234, 160, 270, 212, 122, 49, 83, 258, 103, 357, 385, 306, 49, 101, 69, 82, 112, 55, 48, 97, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'myrarkvisudurland'
}

export const nordlingafljot = {
    title: 'Norðlingafljót',
    area: 'vesturland',
    stangir: 5,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        590, 680, 304, 541, 258, 640, 634, 997],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'nordlingafljot'
}

export const nordura = {
    title: 'Norðurá',
    area: 'vesturland',
    stangir: 12,
    data: [1428, 2132, 1675, 1470, 2089, 1995, 1583, 1185, 1455, 1643, 856, 1121, 1523, 1034, 1359,
        867, 1070, 1267, 1965, 2117, 1625, 1697, 1964, 1899, 2001, 1676, 1650, 1337, 2217, 1444, 1382,
        3138, 2242, 1447, 3307, 2345, 2271, 2131, 953, 3505, 924, 2886, 1342, 1719],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'nordura'
}

export const olfusa = {
    title: 'Ölfusá',
    area: 'sudurland',
    stangir: 6,
    data: [298, 298, 549, 503, 825, 503, 368, 102, 368, 237, 381, 254, 405, 393, 535, 616, 315, 249, 293,
        515, 375, 366, 192, 185, 224, 155, 258, 172, 186, 118, 159, 204, 138, 324, 573, 494, 378, 360, 302,
        407, 145, 436, 255, 150],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'olfusa'
}

export const ormarsa = {
    title: 'Ormarsá',
    area: 'nausturland',
    stangir: 4,
    data: [123, 117, 147, 275, 286, 119, 124, 54, 45, 87, 73, 203, 350, 275, 278, 264, 187, 156, 335, 366, 169, 163, 181, 141, 134, 108, 163, 143, 199, 233, 295, 216, 187, 182, 251, 282, 319, 552, 372, 437, 500, 851, 401],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'ormarsa'
}

/* export const rangarnar ={
    title: 'Rangárnar',
    area: 'sudurland',
    stangir: 38,
    data: [29,57,95,46,82,98,65,80,65,22,10,17,78,32,53,80,1622,453,521,1041,1576,1523,1298,2960,3848,2536,3744,5466,1791,3443,6285,7413,6930,14550,21328,15229,13205,9951,8098,10632,6052,9132,0],
    fps() { return this.data.map(x => (Math.round(x/this.stangir))) },
     id: 'rangarnar'
    }
 */
export const reykogeyvind = {
    title: 'Reykjadalsá-Eyvindarlækur',
    area: 'nausturland',
    stangir: 6,
    data: [337, 264, 133, 593, 657, 492, 321, 271, 114, 210, 155, 344, 373, 241, 435, 241, 272, 191,
        280, 249, 110, 119, 132, 109, 65, 64, 39, 87, 25, 90, 89, 138, 102, 43, 32, 76, 104, 79, 32, 33, 41, 0, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'reykogeyvind'
}

export const sanda = {
    title: 'Sandá',
    area: 'nausturland',
    stangir: 4,
    data: [288, 238, 315, 474, 418, 411, 380, 138, 53, 47, 35, 257, 340, 403, 290, 182, 81, 100, 354,
        434, 204, 209, 152, 91, 177, 190, 143, 128, 212, 151, 197, 260, 268, 268, 338, 411, 334, 476, 281,
        322, 447, 525, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'sanda'
}

export const sela = {
    title: 'Selá í Vopnafirði',
    area: 'austurland',
    stangir: 6,
    data: [589, 711, 845, 1463, 1394, 767, 637, 192, 168, 229, 123, 627, 1258, 1523,
        1102, 895, 634, 772, 1318, 1092, 631, 1160, 737, 685, 1140, 991, 1360, 1108, 1653, 1558,
        1670, 2316, 2726, 2227, 2033, 1990, 2051, 2053, 1511, 1614, 994, 1172, 844, 937],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'sela'
}

export const skjalfandafljot = {
    title: 'Skjálfandafljót neðri hluti',
    area: 'nausturland',
    stangir: 6,
    data: [92, 67, 412, 288, 336, 317, 426, 108, 169, 100, 165, 679, 721, 503, 379, 431, 493, 318,
        862, 907, 379, 273, 353, 277, 263, 520, 379, 208, 472, 346, 932, 556, 675, 747, 681, 696, 535,
        727, 265, 499, 252, 670, 404, 378],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'skjalfandafljot'
}

export const sudurlandaxaihreppum = {
    title: 'Stóra-Laxá',
    area: 'sudurland',
    stangir: 10,
    data: [157, 340, 293, 266, 571, 272, 76, 242, 218, 481, 707, 183, 166, 113, 115, 188, 200, 286, 420, 384,
        278, 440, 456, 359, 336, 194, 183, 282, 229, 423, 299, 432, 709, 238, 425, 638, 761, 766, 673, 1789, 882,
        654, 620, 590],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'sudurlandaxaihreppum'
}

export const sog = {
    title: 'Sogið',
    area: 'sudurland',
    stangir: 3,
    data: [593, 593, 589, 537, 620, 439, 223, 329, 343, 248, 361, 424, 497, 490, 714, 325, 397, 396,
        341, 429, 283, 300, 254, 252, 413, 491, 249, 317, 289, 370, 257, 307, 345, 669, 576, 760, 1337,
        955, 305, 709, 188, 0, 0, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'sog'
}
export const straumarnir = {
    title: 'Straumarni í Hvítá',
    area: 'vesturland',
    stangir: 2,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 360, 260, 339, 260, 277],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'straumarnir'
}
export const straumfjardara = {
    title: 'Straumfjarðará',
    area: 'vesturland',
    stangir: 4,
    data: [451, 755, 433, 466, 648, 391, 320, 437, 350, 360, 215, 327, 378, 161, 334, 300, 267, 308,
        233, 260, 253, 315, 269, 226, 297, 260, 198, 191, 342, 379, 475, 671, 502, 451, 718, 348, 355,
        407, 244, 789, 310, 494, 348, 352],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'straumfjardara'
}

export const svalbardsa = {
    title: 'Svalbarðsá',
    area: 'nausturland',
    stangir: 3,
    data: [234, 172, 155, 240, 257, 158, 167, 51, 36, 41, 29, 161, 171, 176, 198, 238, 135, 136, 289,
        384, 145, 215, 177, 98, 159, 124, 92, 143, 236, 291, 231, 292, 283, 302, 320, 434, 504, 562,
        273, 306, 402, 768, 341, 338],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'svalbardsa'
}

export const svarta = {
    title: 'Svartá Húnavatnssýsudurlandu',
    area: 'Nvesturland',
    stangir: 4,
    data: [420, 232, 96, 46, 295, 469, 444, 125, 73, 147, 132, 330, 391, 462, 275, 118, 105,
        108, 363, 495, 400, 547, 244, 532, 619, 213, 170, 283, 260, 276, 398, 221, 303, 301,
        272, 420, 572, 300, 147, 366, 292, 619, 367, 128],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'svarta'
}

export const thvera = {
    title: 'Þverá + Kjarará',
    area: 'vesturland',
    stangir: 14,
    data: [1748, 2690, 2330, 2368, 3132, 3558, 1938, 1245, 1616, 1901, 1082,
        1550, 2127, 1703, 1567, 1327, 1485, 1979, 2314, 1554, 1605, 1638, 1381,
        1633, 2181, 2136, 1281, 1210, 1444, 1872, 1373, 4165, 2156, 2404, 2859, 2370,
        3782, 1818, 738, 3243, 1177, 2364, 1902, 2060],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'thvera'
}

export const thverafljots = {
    title: 'Þverá í Fljótshlíð',
    area: 'sudurland',
    stangir: 4,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        303, 119, 276, 307, 166, 281, 276, 448],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'thverafljots'
}

export const ulfarsa = {
    title: 'Úlfarsá',
    area: 'vesturland',
    stangir: 2,
    data: [
        357, 438, 406, 361, 327, 215, 110, 166, 158, 450, 225, 303, 376, 245, 709, 440,
        306, 238, 517, 457, 338, 316, 339, 217, 248, 162, 223, 185, 215, 273, 244, 207, 206,
        210, 183, 178, 221, 191, 136, 225, 163, 0, 118, 115],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'ulfarsa'
}

export const vatndalsa = {
    title: 'Vatnsdalsá í Húnaþingi',
    area: 'Nvesturland',
    stangir: 8,
    data: [706, 832, 571, 1203, 1466, 1413, 1033, 985, 721, 879, 699, 856, 1582, 1496,
        1243, 660, 604, 683, 998, 853, 516, 601, 723, 769, 1149, 629, 323, 584, 850, 547,
        964, 1256, 1020, 853, 1233, 1520, 1311, 812, 358, 1194, 833, 1297, 853, 714],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'vatndalsa'
}

export const vesturdalsa = {
    title: 'Vesturdalsá',
    area: 'austurland',
    stangir: 3,
    data: [391, 329, 326, 513, 498, 268, 141, 42, 34, 61, 47, 280, 197, 380, 231, 226, 163,
        116, 264, 321, 218, 329, 201, 216, 159, 71, 129, 124, 269, 175, 88, 102, 104, 158,
        136, 206, 258, 316, 169, 207, 139, 0, 338, 0],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'vesturdalsa'
}

export const vididalsa = {
    title: 'Víðidalsá',
    area: 'Nvesturland',
    stangir: 8,
    data: [1051, 1140, 1238, 1792, 1851, 1948, 1423, 1392, 1132, 1082, 625, 713, 1541,
        1563, 2023, 924, 604, 667, 1473, 1342, 580, 981, 783, 691, 1081, 1089, 644, 581,
        887, 588, 1745, 1732, 682, 728, 1440, 1999, 1256, 719, 328, 913, 696, 1626, 1137, 781],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'vididalsa'
}

export const yranga = {
    title: 'Ytri Rangá & Hólsá',
    area: 'sudurland',
    stangir: 18,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        4230, 6228, 14315, 10749, 6210, 4961, 4353, 5461, 3063, 8803, 8935, 7451],
    fps() { return this.data.map(x => (Math.round(x / this.stangir))) },
    id: 'yranga'
}