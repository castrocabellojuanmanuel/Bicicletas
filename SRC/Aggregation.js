 /* Muestra el precio de compra total de las bicis de marca megamo
 
 { "_id" : null, "PreciodeCompraTotal" : 3330 } */

db.bici.aggregate([
    { $match: { Marca: "Megamo" } },
    { $group: { _id: "$Megamo", PreciodeCompraTotal: { $sum: "$PreciodeCompra" } } }
 ]).pretty()

 /*
Muestra el precio de venta total de las bicicletas de color rojo agrupandolas por marca

{ "_id" : "Megamo", "PreciodeVentaTotal" : 210 }
{ "_id" : "Trek", "PreciodeVentaTotal" : 3900 }
{ "_id" : "Conor", "PreciodeVentaTotal" : 305 }
*/

 db.bici.aggregate([
    { $match: { Color: "Rojo" } },
    { $group: { _id: "$Marca", PreciodeVentaTotal: { $sum: "$PreciodeVenta" } } }
 ]).pretty()

/* Muestra la media de precio de las bicis de montaña agrupandolas por marca

 { "_id" : "Mondraker", "MediaPreciodeVenta" : 4500 }
{ "_id" : "Megamo", "MediaPreciodeVenta" : 319 }
{ "_id" : "Trek", "MediaPreciodeVenta" : 2500 }
{ "_id" : "Conor", "MediaPreciodeVenta" : 440 }
*/


db.bici.aggregate([
    { $match: { Tipo: "Montaña" } },
    { $group: { _id: "$Marca", MediaPreciodeVenta: { $avg: "$PreciodeVenta" } } }
 ]).pretty()
/* 
Muestra el precio de la bici de carretera más cara según la marca

 { "_id" : "Treck", "PrecioMasElevado" : 13000 }
{ "_id" : "WRC", "PrecioMasElevado" : 1285 }
{ "_id" : "Trek", "PrecioMasElevado" : 3400 }
{ "_id" : "Megamo", "PrecioMasElevado" : 2400 } */
 
db.bici.aggregate([
    { $match: { Tipo: "Carretera" } },
    { $group: { _id: "$Marca", PrecioMasElevado: { $max: "$PreciodeVenta" } } }
 ]).pretty()

 