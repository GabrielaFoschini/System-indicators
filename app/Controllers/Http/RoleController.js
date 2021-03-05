'use strict'

const Role = use ('App/Models/Role.js')


class RoleController {
    async adding ({request}) {
        const dataToCreate = request.only(['name']);

        return await Role.create(dataToCreate);
    }

    async list() {
        return await Role.all();
    }

    async show({params}) {
        return await Role.find(params.id);
    }

    async update({params,request}) {
        const roles = await Role.find(params.id);
        const dateToUpdate = request.only(['name']);

        roles.merge(dateToUpdate)

        await roles.save()
        return roles;
    }

    async remove({params}) {
        const roles = await roles.find(params.id)

        await roles.delete();

        return {
            message: "Perfil deletado"
        }
    }
}

module.exports = RoleController
