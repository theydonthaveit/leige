import * as Sequelize from 'sequelize'

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
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        }
    }
)

export default { USER }