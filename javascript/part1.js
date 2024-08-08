let person = {
    'name': 'Juri',
    'lastName' : 'Tuga',
    'balance' : 10000
}

function withdraw(person, amount){

    if(amount > person.balance){
        console.log("Insufficient funds!")
    }
    else{
        person.balance -= amount
        console.log("Withdrawal successful! Your new balance: " , person.balance)
    }
}

withdraw(person, 400)
withdraw(person, 10000)