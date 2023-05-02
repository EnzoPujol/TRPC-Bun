import { Sequelize } from 'sequelize'
import { DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER, DATABASE_HOST } from '../constants/env'
/* import {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_PASSWORD,
} from '../constants/environment' */

export const sequelize = new Sequelize(
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  {
    host: DATABASE_HOST,
    dialect: 'postgres',
    define: {
      underscored: true,
      timestamps: true,
    },
  }
)
