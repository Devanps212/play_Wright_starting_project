import {test as base} from '@playwright/test'
import LoginPage from '../poms/login'
import UserSignup from '../poms/signUp'

interface ExtendedFixtures {
    loginPage: LoginPage,
    RACLogin: UserSignup
}

export const test = base.extend<ExtendedFixtures>({
    loginPage : async({page}, use) =>{
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },
    RACLogin : async({page}, use)=>{
        const login = new UserSignup(page)
        await use(login)
    }
})