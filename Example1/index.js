let fruta = "Manzana";

switch(fruta) {
    case "Manzana":
        console.log('La manzana vale X');
        break;
    case "Pera":
        console.log('La pera vale Y');
        breask;
    case "Sandía":
        console.log('La sandía vale Z');
        break;
    default:
        console.log(`No tenemos ${fruta}`);

}

// let array = ['HTML', 'CSS', 'JS'];

// array.forEach(elm => console.log(elm));

let codes = ["em1", "em2", "em3", "em4", "em5", "em6", "em7"];
let collections = ["curricula", "courses", "modules", "topics", "lessons", "TG", "TG Sections"];

    let body = [{
        code: codes[0],
        collection: collections[0]
    }];

    let request = JSON.stringify(body);

    if(codes.length > 1){
     for (let i = 1; i <= codes.length - 1 ; i++) {
         if(i == 1){ request = request.slice(0,-1); }
         request = request + ',' +  '{"code":' + `"${codes[i]}"` + ',"collection":' + `"${collections[i]}"` + '}';
         if(i == codes.length - 1){ request = request + ']'; }
        }
        body = JSON.parse(request); 
    }

console.log(body);

