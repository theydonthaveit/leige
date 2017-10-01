import { SecureClientSessionOptions } from 'http2';
import * as Sequelize from 'sequelize';

// mysql://nnxe18q6mvntor4e:khzozefo4x7fql11@n7qmaptgs6baip9z.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/rq3hoz8ohqisvvyg

const SEQUELIZE = new Sequelize(
    'rq3hoz8ohqisvvyg',
    'nnxe18q6mvntor4e',
    'khzozefo4x7fql11', {
        host: 'n7qmaptgs6baip9z.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
        port: '3306',
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

const PROFILE_URLS = SEQUELIZE.define(
    'ProfileUrls', {
        user_id: {
            type: Sequelize.INTEGER
        },
        url: {
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

// const GAMESTATS = SEQUELIZE.define(
//     'GameStats', {
//         title: {
//             type: Sequelize.STRING
//         },
//         playersOnline: {
//             type: Sequelize.INTEGER
//         },
//         playersAssociated: {
//             type: Sequelize.INTEGER
//         }
//     }, {
//         timestamps: false
//     }
// )

const LIVEGAMES = SEQUELIZE.define(
    'LiveGames', {
        // ONLY TO KEEP TRACK OF WHO CREATED THE MATCH - NO RELEVANCE TO SCORE ETC.
        user_id: {
            type: Sequelize.INTEGER
        },
        match_name: {
            type: Sequelize.STRING
        },
        match_id: {
            type: Sequelize.STRING
        },
        players: {
            type: Sequelize.JSON
        },
        stream_url: {
            type: Sequelize.STRING
        },
        region: {
            type: Sequelize.STRING
        },
        location_of_match: {
            type: Sequelize.STRING
        }
    }
)


export default { USER, PROFILE_URLS, LIVEGAMES, GAMESCLASS }
