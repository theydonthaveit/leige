import { SecureClientSessionOptions } from 'http2';
import * as Sequelize from 'sequelize';

const SEQUELIZE = new Sequelize(
    'leige',
    'root',
    'blank', {
        host: 'localhost',
        dialect: 'mysql',
  
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }
)

const USER = SEQUELIZE.define(
    'User', {
        userName: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        postCode: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        ipAddress: {
            type: Sequelize.STRING
        },
        games: {
            type: Sequelize.STRING
        },
        profile_urls: {
            type: Sequelize.STRING
        }
    }
)

const GAMESCLASS = SEQUELIZE.define(
    'GameClass', {
        title: {
            type: Sequelize.STRING
        },
        nameVariant: {
            type: Sequelize.STRING
        },
        imageUri: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    }
)

const GAMESTATS = SEQUELIZE.define(
    'GameStats', {
        title: {
            type: Sequelize.STRING
        },
        playersOnline: {
            type: Sequelize.INTEGER
        },
        playersAssociated: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    }
)

const LIVEGAMES = SEQUELIZE.define(
    'LiveGames', {
        title: {
            type: Sequelize.STRING
        },
        matchName: {
            type: Sequelize.STRING
        }
    }
)

// USER.belongToMany(GAMESCLASS, { through: 'games' })
// GAMESCLASS.belongToMany(USER, { through: 'id' })

// const City = sequelize.define('city', { countryCode: Sequelize.STRING });
// const Country = sequelize.define('country', { isoCode: Sequelize.STRING });

// // Here we can connect countries and cities base on country code
// Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
// City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});


// GAMESTATS.hasMany(GAMESCLASS, {foreignKey: 'nameVariant', sourceKey: 'title'});
// GAMESCLASS.belongsTo(GAMESTATS, {foreignKey: 'nameVariant', targetKey: 'title'});

export default { USER, GAMESCLASS, GAMESTATS, LIVEGAMES }