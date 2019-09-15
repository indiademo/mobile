import { userObj } from './class';
// import passwordHash from 'password-hash';
import { dbConfig } from '../../config/env/development';
import request from 'request-promise';




let userCtrl = {};

userCtrl.test = async (req, res, next) => {
    res.send('done')

}

// userCtrl.creatingAddressFordash = async (req, res, next) => {
//     var payload = new userObj(req.body);
//       try {
//         var btcData = await createAddress('tdash', dbConfig.dash_wallet_id, res);
//         console.log(btcData);
//         connection.connect((err) => {
//             if (err) {
//                 console.log('Db connection error', err.message)
//             }
//         })
//         var query = `insert into user_addresses(member_id, address, coin, wallet_id, created_date) 
//         values ('${payload.user_data[0].member_id}', '${btcData.address}', '${btcData.coin}', '${btcData.id}','${currentUTCDateTime}') `;
//         connection.query(query, (error, result) => {
//             if (error) {
//                 res.json({
//                     code: '400',
//                     message: error
//                 })
//             } else {
//                 next();
//             }
//         })
//     } catch (err) {
//         res.json({
//             code: '400',
//             message: err.message
//         })
//     }
// }
// async function createAddress(coin, wallet_id, res) {
//     var finalData;
//     try {
//         var options = {
//             method: 'POST',
//             uri: `${dbConfig.bitGoUrl.url}${coin}/wallet/${wallet_id}/address`,
//             headers: {
//                 'Authorization': `Bearer ${dbConfig.bitGoAcessToken.token}`
//             },
//             json: true // Automatically parses the JSON string in the response
//         };
//         await request(options)
//             .then(function (repos) {
//                 console.log('User has repos', repos);
//                 finalData = repos;
//                 // console.log(finalData)

//             })
//             .catch(function (err) {
//                 // API call failed...
//                 // console.log(err);
//                 console.log(err.message)
//                 // res.json({
//                 //     code: '400',
//                 //     message: err
//                 // })
//             });
//     } catch (err) {
//         console.log(err.message)
//         res.json({
//             code: '400',
//             message: err.message
//         })
//     } finally {
//         //console.log(finalData)
//         return finalData;
//     }

// }


export default userCtrl;