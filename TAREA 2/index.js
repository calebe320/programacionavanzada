//usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js'
import ModelUsers from "./model.users.js";

const controllerDB=new AppDaoBetterSQLite('app.db')
const mc=new ModelUsers(controllerDB)

// const resp=mc.insert(["jose luis cuevas","jcuevas"])
// const resp=mc.getAll()
const resp= mc.get(3)
console.log(resp)
