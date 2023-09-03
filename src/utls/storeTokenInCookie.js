// const storeTokenInCookie = async (payload) => {
//     try {
//         const res = await fetch('/api/auth', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload)
//         }, {caches: 'no-store'});
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export default storeTokenInCookie;