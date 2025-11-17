import jwt from 'jsonwebtoken';

export default class AuthService {
    constructor() {
        this.secretKey = process.env.JWT_SECRET;
        console.log('JWT Secret Key:', this.secretKey);
    }

    login(login, password) {
        const payload = { username: login, role: null };
        if (login === 'foo' && password === 'foopassword') {
            payload.role = 'admin';

        } else if (login === 'bar' && password === 'barpassword') {
            payload.role = 'user';
        } else {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign(payload, this.secretKey, { expiresIn: '1h' });
        return { token };
    }
}