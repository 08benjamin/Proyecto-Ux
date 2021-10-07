module.exports = ()=>{
    const data = {
        banks:[]
    }
    const totalBanks = 8;
    var aux = 1
    for(let i = 1; i<totalBanks; i++){
        data.banks.push({
            id: i,
            name: `Banco ${i}`,
            country: "Chile",
            "clients": [
                aux,aux+1,aux+2,aux+3,aux+4,aux+5,aux+6,aux+7,aux+8,aux+9]
        });
        aux = aux + 10;
    }
    return data;
}