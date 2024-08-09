import {auth} from '../firebase/firebase.ts'

const authVerify = async(token:string | null) =>{
    try {
        if(token == undefined || token == null){
            return null
        }
        const result = await auth.verifyIdToken(token)
        return result.uid;
    } catch (error) {
        return null
    }
}
export default authVerify
