// TODO: Declare any global variables we need
let totalHeads = 0;
let totalTails = 0;
let totalFlipped = 0
let headsPercentage = 0
let tailsPercentage = 0

//let images = ["assets/images/penny-heads.jpg", "assets/images/penny-tails.jpg"]
let images = [
    {
        imagePath: "assets/images/penny-heads.jpg",
        message: "You flipped heads!",
        side: "heads"
    },
    {
        imagePath: "assets/images/penny-tails.jpg",
        message: "You flipped tails!",
        side: "tails"
    }
]
let defaultMessage = "Let's get rolling!"
document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById("flip").addEventListener("click", function(){
        
        
        let random = Math.floor(Math.random() * images.length)
        let randomImage = images[random]

        //document.querySelector('#image').setAttribute('src', randomImage)
        document.querySelector('#image').src = randomImage.imagePath

        if(randomImage.side === "heads")
        {
            console.log("heads flipped")
            totalHeads++
            totalFlipped++
            document.getElementById("heads").innerHTML = totalHeads
            document.querySelector('.message-container').textContent = randomImage.message


        }
        else 
        {
            console.log('tails flipped')
            totalTails++
            totalFlipped++
            document.getElementById("tails").innerHTML = totalTails
            document.querySelector('.message-container').textContent = randomImage.message


        }

        // calculate percent 

        headsPercentage = Math.round(totalHeads * 100 / totalFlipped)
        tailsPercentage = Math.round(totalTails * 100 / totalFlipped)
        
        console.log(headsPercentage)

        document.getElementById('heads-percent').textContent = headsPercentage + "%"
        document.getElementById('tails-percent').textContent = tailsPercentage + "%"





        console.log("heads",totalHeads)
        console.log("tails",totalTails)
        console.log("flipped",totalFlipped)





        //console.log(randomImage)


        
        
        
        console.log("I clicked the button")})


        document.getElementById("clear").addEventListener("click", function(){


            totalHeads = 0
            totalTails = 0
            headsPercentage = 0
            tailsPercentage = 0
            totalFlipped = 0

            document.getElementById('heads').textContent = totalHeads
            document.getElementById('tails').textContent = totalTails
            document.getElementById('heads-percent').textContent = headsPercentage
            document.getElementById('tails-percent').textContent = tailsPercentage
            document.querySelector('.message-container').textContent = defaultMessage
            

        })




          
    // Flip Button Click Handler
        // TODO: Determine flip outcome


        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})