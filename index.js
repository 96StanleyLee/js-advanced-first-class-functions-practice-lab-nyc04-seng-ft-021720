// Code your solution in this file!
const logDriverNames = function(array){
    return array.forEach(function(driver){
        console.log(driver.name)
    })
}


const logDriversByHometown = function(array, hometown){
    return array.forEach(function(driver){
        if (driver.hometown === hometown){
            return console.log(driver.name)
        }
    })
}







const driversByRevenue = function(array){
    return array.slice(0).sort(function(driver1, driver2){
        return driver1.revenue - driver2.revenue
    })
}




const driversByName = function(array){
    return array.slice(0).sort(function(driver1,driver2){
        return driver1.name.localeCompare(driver2.name)
    })
}








// function totalRevenue(array){
//     const reduceTotalRevenue = function(total, drivers){
//         return total + drivers.revenue;
//     }
//     return array.reduce(reduceTotalRevenue, 0)
// }  

// Essentially reduce, you pass it a function and how you want it to reduce. 
// You give it a starting point as well!.

const totalRevenue = function(array){
    return array.reduce(function(total, drivers){
        return total + drivers.revenue
    },0)
}





function averageRevenue(array){
    return totalRevenue(array)/array.length
}