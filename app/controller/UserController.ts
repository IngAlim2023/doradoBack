import UserServices from '#services/UserServices'
import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { DataUser } from '../interfaces/user.js'

const userSer = new UserServices()

export default class UserController {
  async createUser({ request, response }: HttpContext) {
    try {
      const { username, password } = request.body()

      const hash = await bcrypt.hash(password, 10)

      const user = await userSer.create({ username, password: hash })

      return response.status(201).json({ message: 'Exito', data: user })
    } catch (e) {
      return response.status(500).json({ message: 'Error', error: e.message })
    }
  }
  async login({ request, response }: HttpContext) {
    try {
      const { username, password } = request.body()

      const userExist = await userSer.readByUserName(username)

      if (!userExist) return response.status(401).json({ message: 'Fallo en la autenticación' })

      const verifyPassword = await bcrypt.compare(password, userExist.password)

      if (!verifyPassword)
        return response.status(401).json({ message: 'Fallo en la autenticación' })

      const token = createToken(userExist)

      response.header(
        'Set-Cookie',
        `${env.get('COOKIE_NAME')}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}`
      )

      return response.status(200).json({ message: 'Autenticado' })
    } catch (e) {
      return response.status(500).json({ message: 'Error', error: e.message })
    }
  }
  async logout({ response }: HttpContext) {
    try {
      response.clearCookie(String(env.get('COOKIE_NAME')))
      return response.status(200).json({ message: 'Cierre de sesión exitoso' })
    } catch (e) {
      return response.status(500).json({ message: 'Error', error: e.message })
    }
  }
  async validate({ request, response }: HttpContext) {
    try {
        const tokenDirty = request.headers().cookie;
        const token = tokenDirty?.split('auth=').join('');
        console.log(token)
        if(!token) return response.status(401).json({ authenticated: false });
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, env.get('APP_KEY'), (err, decoded) => {
                if (err) {
                    return reject(err);
                }
                resolve(decoded);
            });
        });
        
        const tokenDecoded = jwt.decode(token)
      return response.status(200).json({ message: 'Autorizado', data:tokenDecoded })
    } catch (e) {
      if(e.message === 'jwt malformed') return response.status(400).json({ message: 'Token invalido' })
      if(e.message === 'invalid signature') return response.status(400).json({ message: 'Token invalido error de signature' })
      return response.status(500).json({ message: 'Error', error: e.message })
    }
  }
}

const createToken = (data: DataUser) => {
  const token = jwt.sign({ username: data.username, id: data.id }, env.get('APP_KEY'), {
    expiresIn: '7h',
  })
  return token
}
