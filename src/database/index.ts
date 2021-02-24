import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            database: 
                process.env.NODE_ENV === "test" 
                ? "./src/database/database.test.sqlite"
                : defaultOptions.database,
        })
        //ATENÇÂO AO CONFIGURAR NO PACKAGE.JSON
        //Tive que instalar cross-env(yarn add cross-env -D ou npm instal cross-env -D) para lidar com as variáveis ambiente do WINDOWS, 
        //lembre que o NODE_ENV é uma variável ambiente 
        //fiz isso porque os dados do teste eram criados mas o BANCO DE DADOS DE TESTE acima não estava sendo criado
    );
}