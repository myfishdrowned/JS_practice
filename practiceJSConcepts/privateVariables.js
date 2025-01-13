function createUser(name) {
    const discordName = "@" + name;
  
    let reputation = 0; // Private variable
  
    const getReputation = () => reputation; // Accessor function
    const giveReputation = () => reputation++; // Mutator function
  
    return { name, discordName, getReputation, giveReputation };
  }
  
const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,       // Public property
  reputation: josh.getReputation(),   // Access via method
});
// Output: { discordName: "@josh", reputation: 2 }
console.log(josh.reputation); // Undefined
