import axios from "axios";

const DOMAIN = "http://localhost:8111";
const HEADER = 'application/json';

const AccountApi = {

    // 회원 조회
    userLogin : async(loginId, loginPw) => {
        const loginObj = {
            userId: loginId,
            userPw: loginPw
        }
        return await axios.post(DOMAIN + "/auth/login", loginObj);
    }

    // 회원 가입
    
}

export default AccountApi;