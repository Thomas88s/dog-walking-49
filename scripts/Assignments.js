import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pets, walkers) => {
    let petWalker = null

    for (const walker of walkers) {
        if (walker.id === pets.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

const findCity = (walkers, cities) => {
    let cityLocation = null

    for (const city of cities) {
        if (city.id === walkers.cityId) {
            cityLocation = city
        }
    }
    return cityLocation
}

export const Assignments = () => {
    let assignmentHTML = ""
      assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentCityLocation = findCity(currentPetWalker, cities )
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentCityLocation.name}
                </li>
                `
                console.log(currentPet.name, currentPetWalker.name, currentCityLocation.name)
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

