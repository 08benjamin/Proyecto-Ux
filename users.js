module.exports = ()=>{
    const data = {
        users:[]
    }
    const totalUsers = 70;
    var auxIdAccounts = 1;
    var auxIdBanks = 1;
    var auxAddIdBanks = 0;
    
    for(let i = 1; i<totalUsers+1; i++){
        data.users.push({
            id: i,
            name: `Usuario ${i}`,
            bankId: auxIdBanks,
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
        });
        auxIdAccounts = auxIdAccounts + 2;

        auxAddIdBanks = auxAddIdBanks + 1;
        if(auxAddIdBanks%10 == 0){
          auxIdBanks = auxIdBanks + 1;
        }
    }
    return data;
}