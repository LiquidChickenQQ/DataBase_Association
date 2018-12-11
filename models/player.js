module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('player', { //player is used as association in teams model
        name: DataTypes.STRING,
        playerNumber: DataTypes.INTEGER 
    })

    Player.associate = models => {
        Player.belongsTo(models['team'])
    }


    return Player 
}