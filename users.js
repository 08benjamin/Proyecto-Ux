module.exports = ()=>{
    const data = {
        users:[]
    }
    const totalUsers = 70;
    var aux = 1
    for(let i = 1; i<totalUsers; i++){
        data.users.push({
            id: i,
            name: `Usuario ${i}`,
            bankId: 1,
            "accounts": [
                {
                  "id": aux,
                  "type": "Corriente",
                  "balance": 1500000
                },
                {
                  "id": aux + 1,
                  "type": "Vista",
                  "balance": 200000
                }
              ],
        });
        aux = aux + 2;
    }
    return data;
}