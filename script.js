import { albums } from './data.js';

//console.log(albums[0].name)


// Write your code here

// Warm-up//
//console.log(albums.length)
//console.log(albums[346].name)

const getSongCountInFirst = function(albums){
    return albums[0].details.length
}

//console.log(getSongCountInFirst(albums))

const getAvailableAmount = function(albums){
    let counter = 0;

    albums.forEach(album => {
        if(album.status === "available"){
            counter++
        }
        
    });
    return counter
}

//console.log(getAvailableAmount(albums))

//PA1-Task1//

const searchAlbums = function(namepart){
    let result= []

    albums.forEach(album => {
        if(album.name.includes(namepart)){
            result.push(album)
        }
        
    });
    return result
}

//console.log(searchAlbums("World"))

//Task-2//

const averageTrackCount = function(albums){
    let numberOfTracks= 0;
    let numberOfAlbums = albums.length

    albums.forEach(album => {
        numberOfTracks += album.details.length
        
    });
    return Math.floor(numberOfTracks / numberOfAlbums)
}
//console.log(averageTrackCount(albums))

//Task-3//

const getAlbumsWithHigherPrice = function(minPrice){
    let result =[];

    albums.forEach(album => {
        if(album.price > minPrice){
            result.push(album.name)
        }
        
    });
    return result
}
//console.log(getAlbumsWithHigherPrice(1100))

//PA2-Task-1//

const getAlbumRuntime = function(product){
    let totalRuntime =0;

    product.details.forEach(track => {
        totalRuntime+= track.milliseconds
        
    });
    return totalRuntime /1000
}

//console.log(getAlbumRuntime(albums[346]))

//Task2//

const getMostValuableAlbumForRuntime =function(albums){
    let mostValuableAlbum= albums[0];
    albums.forEach(album => {
        let ratio= album.price / getAlbumRuntime(album)
        let currentRatio=  mostValuableAlbum.price / getAlbumRuntime(mostValuableAlbum)
        if(ratio > currentRatio){
            mostValuableAlbum = album
        }
    });
    return mostValuableAlbum
}

//console.log(getMostValuableAlbumForRuntime(albums));







//PA3- task-1//

const getGenreCount = function(album){
    let genreCount=[];

    album.details.forEach(track => {
        if(!genreCount.includes(track.genre_id)){
            genreCount.push(track.genre_id)
        }
        
    });
    return genreCount.length
}
//console.log(getGenreCount(albums[140]))

// Task-2//

const getAlbumsWithMultipleGenres= function(albums){
    let result=[]

    albums.forEach(album => {
        if(getGenreCount(album)>1){
            result.push(album)
        }
    });
    return result
}
//console.log(getAlbumsWithMultipleGenres(albums))


//Task 3

const getOneWordArtistNames = function(albums){
    let result =[]
    let addedNames =[]
    albums.forEach(album =>{
        let artistName= album.vendor.name.split(" ")
        if(artistName.length === 1 && !addedNames.includes(album.vendor.name)){
            result.push(album.vendor.name)
            addedNames.push(album.vendor.name);
        }
    })
    return result
}

//console.log(getOneWordArtistNames(albums))

//Extra 1

const getMostComplexSong = function(albums){
    let mostComplexSong= albums[0].details[0].bytes / albums[0].details[0].milliseconds
    albums.forEach(album => {
        let tracks = album.details
        tracks.forEach(track => {
            let songComplexity = track.bytes / track.milliseconds
            if(songComplexity > result){
                result= track.name
            }
        });
        
    });
    return mostComplexSong
}
//console.log(getMostComplexSong(albums))

//Extra 2

const displayAllVendors = function(albums){
    let allNames =[]
    let addedNames=[]
    albums.forEach(album => {
        let vendorName = album.vendor.name
        if(!allNames.includes(vendorName))
        allNames.push(vendorName)
        addedNames.push(vendorName)
        
    });
    return allNames
}
//console.log(displayAllVendors(albums))

const totalPrice = (albums) =>{ 
    let total=0;
    albums.forEach(album => {
        total += album.price
        
    });

    return total
}
//console.log(totalPrice(albums))

const displayByVendor = (albums) =>{
    let vendorsWithAlbums=[]
    albums.forEach(album => {
        let vendor = album.vendor.name
        let vendorFound = false;
        for(let i =0; i<vendorsWithAlbums.length;i++){
            if(vendorsWithAlbums[i].name === vendor && vendorsWithAlbums[i].title === album.name){
                vendorFound =true
                break
            }
        }
        if(!vendorFound){
            const vendorAlbum ={
                name : album.vendor.name,
                title: album.name
            }
            vendorsWithAlbums.push(vendorAlbum)
        }
    });
return vendorsWithAlbums
}

console.log(displayByVendor(albums))



const composerCount= function(albums){
    let result =[]
    albums.forEach(album => {
        album.details.forEach(track => {
            let composerFound=false
            for(let i = 0; i<result.length;i++){
            if(result[i].name === track.composer){
                composerFound=true
                break;
            }
    }
        if(!composerFound){
            const songObject={
                name : track.composer,
                song: track.name
            }
            result.push(songObject)
        }
    });
});
return result
}

//console.log(composerCount(albums))