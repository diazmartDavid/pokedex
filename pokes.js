
const fetchPokemon = () => {
    const  pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase(); 
    
    
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokeInput;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImagen("img/noFound.png")
        }
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNick = data.name;
        let pokeNum = data.order;
        let pokeType = data.types;
        let pokeStats = data.stats;
        
        const pokeNombre = document.getElementById("labelNombre").innerHTML=pokeNick;
        const pokeNumero = document.getElementById("labelNum").innerHTML="#"+pokeNum;
        const pokeMovWord = document.getElementById("movWord").innerHTML="Movs";
        const pokeMovis = document.getElementById("movimientos").innerHTML=data.moves.length;
        const hp = document.getElementById("hp").innerHTML="Hp: " +pokeStats[0].base_stat;
        const atack = document.getElementById("atack").innerHTML="Atack: " +pokeStats[1].base_stat;
        const defense = document.getElementById("defense").innerHTML="Defense: " +pokeStats[2].base_stat;
        const speed = document.getElementById("speed").innerHTML="Speed: " +pokeStats[3].base_stat;
        const sAtack = document.getElementById("sAtack").innerHTML="Special Atack: " +pokeStats[4].base_stat;
        const sDefense = document.getElementById("sDefense").innerHTML="Special Defense: " +pokeStats[5].base_stat;
    
        console.log("hp: "+ pokeStats[0].base_stat);
        console.log("atack: " + pokeStats[1].base_stat);
        
        if(pokeType.length > 1){
            document.getElementById("typePoke1").innerHTML="Type: "+ 
            pokeType[0].type.name + " y " +
            pokeType[1].type.name;
         
        }else{
            document.getElementById("typePoke1").innerHTML="Type: "+ pokeType[0].type.name;
          
        }
        
        pokeImagen(pokeImg);
    });
}

//fetchPokemon();

const pokeImagen = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
