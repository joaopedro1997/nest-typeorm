import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "db",
    port: 3306,
    username: "root",
    password: "local_9p^1Sd.66+c!O",
    database: "local_db",
    entities: ["dist/**/entities/*{.js,.ts}"],
    migrations: ["dist/migration/**/*{.js,.ts}"],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default AppDataSource;
