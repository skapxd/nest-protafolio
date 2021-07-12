import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Free use
export const userMail = 'automail.noresponder@gmail.com';
export const passMail = 'xnkgnbhpibdjxjlu';

export const firmaJWT = 'FirmaJWTTMCUnica132*';

export const dbConnection = () : TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> => {
    let extra

    if (process.env.DB_EXTRA !== 'undefine') {
        extra = {
            socketPath: process.env.DB_EXTRA
        }
    } else {
        extra = {}
    }

    return {

        type: 'mysql',
        // Blocked by ip, luckily
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306, 

        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,

        extra,

        autoLoadEntities: true,
        synchronize: true,
    }
}