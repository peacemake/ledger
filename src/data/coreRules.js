const coreRules = {
    "specialists": {
        "demolitions": {
            "name": "Breacher",
            "description": "You can add 1 to this model's wound rolls agains targets that are obscured."
        },
        "leader": {
            "name": "Resourceful",
            "description": "As long as this model is on the battlefield and not shaken, you gain an additional Command Point at the beginning of the battle round."
        }
    },
    "teams": {
        "Adeptus Astartes": {
            "availableUnits": [
                "Intercessor Sergeant",
                "Intercessor Gunner",
                "Scout Sergeant"
            ]
        },
        "Astra Militarum": {
            "availableUnits": [
                "Special Weapons Guardsman",
                "Scion"
            ]
        },
        "Adeptus Mechanicus": {

        }
    }
}

export default coreRules