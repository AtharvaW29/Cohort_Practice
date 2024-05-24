function getTime (){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if (hours > 12){
        session = "PM"
    }

    let time = console.log(hours + ":" + minutes + ":" + seconds + ""  + session)
    return time
}

let transactions =[ {
    id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656076865234,
    price: 22,
    category: 'Mens Wear',
    itemName: 'T-Shirt',
  },
  {
    id: 3,
    timestamp: 1656076865789,
    price: 15,
    category: 'Food',
    itemName: 'Oyster Curry',
  }]

function calculateTotalSpentByCategory(transactions) {
  let categoryFound;
  let output =[];
  indexes = transactions.length;

  for(let i = 0; i < indexes; i++) {
      categoryFound = false;
      indexes2 = output.length;

      for(let j = 0; j < indexes2; j++){
        if(transactions[i]["category"] == output[j]["category"]){
          output[j]["totalSpent"] += transactions[i]["price"];
          categoryFound = true;
          break;
        }
      }

      if(categoryFound == false){
        output.push({
          category: transactions[i]["category"],
          totalSpent: transactions[i]["price"]
        })
      }
  }

  return console.log(output);
}

calculateTotalSpentByCategory(transactions);

const arr = [1,2,3]
arr.forEach(getTime)