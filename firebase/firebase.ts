

import admin from 'npm:firebase-admin'
import service from './appinsight-admin.json' with { type: "json" }
const app = admin.initializeApp({
    credential:admin.credential.cert((service as admin.ServiceAccount))
})

const auth =  app.auth()

export {auth}

