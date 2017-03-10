// code goes here :)

var sum = items.reduce(function(a,b){
	return (a + b.price)
}, 0)

var answer1 = document.querySelector("#answer1")
answer1.innerHTML = `The average price is $${(sum / items.length).toFixed(2)}`


/////////////////////////////////////////////////////////////////////////


var priceGap = items.filter(function(value){
	var price = value.price
	var currency = value.currency_code

	if ( price > 14 && price < 18 && currency == "USD"){
			return value
		}

})

for(var slot = 0; slot < priceGap.length; slot = slot + 1){
	priceGap[slot] = priceGap[slot].title
}

var answer2 = document.querySelector("#answer2")
answer2.innerHTML = priceGap.join('<br>')


/////////////////////////////////////////////////////////////////////////

var gbpItems = items.filter(function(value){
	var currency = value.currency_code

	if ( currency == "GBP"){
			return value
		}

})

var gbpLength = gbpItems.length

for(var i = 0; i < gbpLength; i = i + 1){
	gbpItems[i] = gbpItems[i].title + " costs \xA3" +gbpItems[i].price+ "\n"
}

var answer3 = document.querySelector("#answer3")
answer3.innerHTML =  `${gbpItems}`


/////////////////////////////////////////////////////////////////////////


var woodItems = items.filter(function(value){
	var materials = value.materials

	for(var i=0; i<materials.length; i += 1){
		if(materials[i] === "wood"){
			return value.title;
		}
	}
})

for(var i=0; i<woodItems.length; i += 1){
	woodItems[i] = woodItems[i].title + " is made of wood"
}

var answer4 = document.querySelector("#answer4")
answer4.innerHTML = `${woodItems.join('<br>')}`



/////////////////////////////////////////////////////////////////////////


var largeItems = items.filter(function(value){
	
	if ((value.materials.length) >= 8){
		return value
	}
})


for(var i=0; i<largeItems.length; i++){
	itemTitle = largeItems[i].title;
	materials = largeItems[i].materials

	largeItems[i] = `${itemTitle} has ${materials.length} materials.<br>${materials.join("\n")}<br><br><br>`
}

var answer5 = document.querySelector("#answer5")
answer5.innerHTML = largeItems.join("")


/////////////////////////////////////////////////////////////////////////



var sellerMade = items.filter(function(value){

	if(value.who_made === "i_did"){
		return value;
	}
})

var answer6 = document.querySelector("#answer6")
answer6.innerHTML =  `${sellerMade.length} were made by their sellers.`







