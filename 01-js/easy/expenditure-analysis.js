/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var categoryObject = {};
  for(var i =0; i<transactions.length; i++){
    if(transactions[i].category in categoryObject){
      categoryObject[transactions[i].category] = categoryObject[transactions[i].category] + transactions[i].price;
    }else{ 
      categoryObject[transactions[i].category] = transactions[i].price;
    }
  }

  var ans = [];

  for(const category in categoryObject){
    if(categoryObject.hasOwnProperty(category)){
      ans.push(
        {
          category,
          "totalSpent" : categoryObject[category]
        }
      )
    }
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
