import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


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

export const Assignments = () => {
    let assignmentHTML = ""
      assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
      
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
                </li>
                `
                console.log(currentPet.name, currentPetWalker.name, currentPetWalker.city)
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

