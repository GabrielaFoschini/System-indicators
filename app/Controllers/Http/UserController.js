'use strict'

const User = use ('App/Models/User.js')

class UserController {
    async adding ({request}) {
        console.log(request)
        const dataToCreate = request.only(['username', 'email', 'password', 'roles_id']);

        return await User.create(dataToCreate);
    }

    async list() {
        return await User.all();
    }

    async show({params}) {
        return await User.find(params.id);
    }

    async update({params,request}) {
        const user = await User.find(params.id);
        const dateToUpdate = request.only(['username', 'email', 'password', 'roles_id']);

        user.merge(dateToUpdate)

        await user.save()
        return user;
    }

    async remove({params}) {
        const user = await User.find(params.id);

        await user.delete();

        return {
            message: "Usuário deletado"
        }
    }
}

module.exports = UserController
