module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('team', {
        name: DataTypes.STRING,
        mascot: DataTypes.STRING
    })

    Team.associate = models => { 
        console.log(models)
        Team.hasMany(models['player'])// player same exact name in player model
    }

    return Team 
}

