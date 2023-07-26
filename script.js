// console.log("testing");

const fetch_Data = "../data/Transaction.json";

fetch(fetch_Data)
.then(res => res.json())
.then(data => {
    // console.table(data.recent_transaction);
        let dom = document.getElementById("recent_transaction");
        console.table(data.recent_transaction)
        dom.innerHTML = data.recent_transaction.map((item) => {
            return `
            <p> ${item.transaction_code}</p>
            <p> ${item.transaction_method}</p>
            <p> ${item.amount}</p>
            <p> ${item.transaction_date}</p>

            `
        }).join("");
        
}).catch(err => console.log(err))



fetch(fetch_Data)
.then(res => res.json())
.then(data => {
    // console.table(data.recent_transaction);
        let dom = document.getElementById("user");
        console.table(data.user_profile)
        dom.innerHTML = data.user_profile.map((item, i) => {
            return `
            
            <p key=${item.id}> ${item.user_id}</p>
            <p> ${item.user_name}</p>
            <p> ${item.user_email}</p>
            <p> ${item.phone_number}</p>

            `
        }).join("");
        
}).catch(err => console.log(err))