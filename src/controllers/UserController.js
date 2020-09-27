const connection = require('../database/connection');

module.exports = {
    store:async (request,response)=>{
        const {name} = request.body;

        let date = new Date().toLocaleString();
        // return console.log(date);
        await connection('users').insert({
            name,
            created_at: date,
            updated_at: date,
        });

        return response.json({status:'ok'});
    
    },
    index:async(request,response)=>{
        const ongs = await connection('users').select('*');
        return response.json(ongs); 
    }
}