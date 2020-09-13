/*Hooks.on("createCombatant", async (combat, addedCombatant) => {
    console.log("Update Combat!");
    //console.log(combat);
    //console.log(addedCombatant);

    try {
        var addedActor = await addedCombatant;
        console.log("Successfully resolved addedCombatant");
        console.log(addedActor.actor);

        var currentCombat = await combat;
        console.log("Successfully resolved combat");
        console.log(combat);

        for (let index = 0; index < currentCombat.combatants.length; index++) {
            var potentialCombatant = currentCombat[index].actor;

            if(potentialCombatant.data._id == addedActor.actor.data._id)
            {
                console.log("match!");
            }
        }   
    }
    catch (rejectedValue) {
        console.log("Failed: " + rejectedValue);
    }

    /*console.log(addedCombatant.actor.data._id);

    console.log("Added actor with ID " + addedActor);

    for (var i = 0; i < combat.data.combatants.length; i++) {
        var combatant = combat.data.combatants[i];
        if (combatant._id == addedActor) {
            console.log("id match!");

            console.log(combatant);
            console.log(addedCombatant);
            var hasActed = combatant.actor.data.data.hasacted;
            console.log(hasActed);

            if (game.combat != null && combatants != undefined) {
                if (hasActed) {
                    console.log("has acted");
                    game.combat.setInitiative(combatant._id, 0);
                } else {
                    console.log("has not acted");
                    game.combat.setInitiative(combatant._id, 1);
                }
            }
        }
    }
})*/