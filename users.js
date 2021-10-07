module.exports = ()=>{
    const data = {
        users:[]
    }
    const totalUsers = 70;
    var auxIdAccounts = 1;
    var auxIdBanks = 1;
    var auxAddIdBanks = 0;

    var auxIdTransfer = 1;
    
    for(let i = 1; i<totalUsers+1; i++){
        data.users.push({
            id: i,
            name: `Usuario ${i}`,
            bank: {
              "id": auxIdBanks,
              name: `Banco ${auxIdBanks}`,
            },
            "accounts": [
                {
                  "id": auxIdAccounts,
                  "type": "Corriente",
                  "balance": 1500000
                },
                {
                  "id": auxIdAccounts + 1,
                  "type": "Vista",
                  "balance": 200000
                }
              ],
              "tranfers":[
                {
                  "id": auxIdTransfer,
                  "amount": 2500,
                  "idDestino": 1
                },
                {
                  "id": auxIdTransfer + 1,
                  "amount": 200,
                  "idDestino": 1
                }
              ]
        });
        auxIdAccounts = auxIdAccounts + 2;
        auxIdTransfer = auxIdTransfer + 2;

        auxAddIdBanks = auxAddIdBanks + 1;
        if(auxAddIdBanks%10 == 0){
          auxIdBanks = auxIdBanks + 1;
        }
    }
    return data;
}